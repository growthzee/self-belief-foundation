import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount } = body;

    // Validate amount (minimum ₹1 = 100 paise)
    if (!amount || typeof amount !== 'number' || amount < 1) {
      return NextResponse.json(
        { error: 'Invalid amount. Minimum donation is ₹1.' },
        { status: 400 }
      );
    }

    const amountInPaise = Math.round(amount * 100);

    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: {
        source: 'self-belief-foundation',
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error: unknown) {
    console.error('Razorpay create order error:', error);

    // Handle Razorpay authentication errors
    if (error instanceof Error && error.message?.includes('unauthorized')) {
      return NextResponse.json(
        { error: 'Payment gateway authentication failed.' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create payment order. Please try again.' },
      { status: 500 }
    );
  }
}
