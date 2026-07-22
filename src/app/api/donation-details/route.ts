import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const paymentId = searchParams.get('payment_id');
    const orderId = searchParams.get('order_id');

    if (!paymentId && !orderId) {
      return NextResponse.json(
        { error: 'Payment ID or Order ID is required.' },
        { status: 400 }
      );
    }

    const donation = await prisma.donation.findFirst({
      where: {
        OR: [
          ...(paymentId ? [{ razorpayPaymentId: paymentId }] : []),
          ...(orderId ? [{ razorpayOrderId: orderId }] : []),
        ],
      },
    });

    if (!donation) {
      return NextResponse.json(
        { error: 'Donation record not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ donation });
  } catch (error: unknown) {
    console.error('Error fetching donation details:', error);
    return NextResponse.json(
      { error: 'Failed to fetch donation details.' },
      { status: 500 }
    );
  }
}
