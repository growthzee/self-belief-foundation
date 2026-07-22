import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Verify admin token
    const token = request.cookies.get(COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }

    // Parse query params
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '20')));
    const status = searchParams.get('status') || undefined;
    const search = searchParams.get('search') || undefined;

    // Build where clause
    const where: Record<string, unknown> = {};

    if (status && status !== 'all') {
      where.status = status;
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { razorpayPaymentId: { contains: search, mode: 'insensitive' } },
        { razorpayOrderId: { contains: search, mode: 'insensitive' } },
      ];
    }

    // Fetch donations with pagination
    const [donations, totalCount] = await Promise.all([
      prisma.donation.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.donation.count({ where }),
    ]);

    // Compute summary stats (always across all donations, not filtered)
    const stats = await prisma.donation.aggregate({
      _sum: { amount: true },
      _count: true,
      _avg: { amount: true },
      where: { status: 'paid' },
    });

    const totalDonations = await prisma.donation.count();

    return NextResponse.json({
      donations,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
      },
      stats: {
        totalRaised: stats._sum.amount || 0,
        paidCount: stats._count || 0,
        averageDonation: Math.round(stats._avg.amount || 0),
        totalDonations,
        successRate: totalDonations > 0
          ? Math.round((stats._count / totalDonations) * 100)
          : 0,
      },
    });
  } catch (error: unknown) {
    console.error('Fetch donations error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch donations.' },
      { status: 500 }
    );
  }
}
