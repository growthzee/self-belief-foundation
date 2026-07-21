// components/DonationSection.tsx
'use client';

import { useState, useCallback } from 'react';

type PaymentStatus = 'idle' | 'processing' | 'success' | 'error';

export default function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleTierSelect = (val: number) => {
    setSelectedAmount(val);
    setCustomAmount('');
  };

  const effectiveAmount = customAmount ? Number(customAmount) : selectedAmount;

  const handleDonate = useCallback(async () => {
    if (effectiveAmount < 1) {
      setPaymentStatus('error');
      setStatusMessage('Minimum donation is ₹1.');
      return;
    }

    setPaymentStatus('processing');
    setStatusMessage('');

    try {
      // Create order
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: effectiveAmount }),
      });

      if (!orderRes.ok) {
        const errData = await orderRes.json();
        throw new Error(errData.error || 'Failed to create order.');
      }

      const { orderId, amount, currency } = await orderRes.json();

      // Open Razorpay modal
      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount,
        currency,
        name: 'Self Belief Foundation',
        description: `Donation of ₹${effectiveAmount.toLocaleString()}`,
        order_id: orderId,
        handler: async (response: RazorpayPaymentResponse) => {
          try {
            const verifyRes = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyData.verified) {
              setPaymentStatus('success');
              setStatusMessage(
                `Thank you! Your donation of ₹${effectiveAmount.toLocaleString()} was successful. Payment ID: ${response.razorpay_payment_id}`
              );
            } else {
              setPaymentStatus('error');
              setStatusMessage('Payment verification failed. Please contact support.');
            }
          } catch {
            setPaymentStatus('error');
            setStatusMessage('Could not verify payment. Please contact support.');
          }
        },
        theme: {
          color: '#ae0011',
        },
        modal: {
          ondismiss: () => {
            setPaymentStatus('idle');
          },
          confirm_close: true,
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on('payment.failed', (response: RazorpayError) => {
        setPaymentStatus('error');
        setStatusMessage(response.description || 'Payment failed. Please try again.');
      });

      razorpay.open();
    } catch (error: unknown) {
      setPaymentStatus('error');
      setStatusMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
    }
  }, [effectiveAmount]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1c1c] mb-6 leading-tight font-serif">
              Your Support <span className="text-[#ae0011]">Changes Lives</span>
            </h2>
            <p className="text-lg text-[#5d5f5f] mb-8 leading-relaxed">
              Every contribution fuels our mission to provide education, healthcare, and dignity to those forgotten. Join us in making an impact today.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ae0011]/10 flex items-center justify-center text-[#ae0011] shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#1a1c1c]">100% Transparency</h4>
                  <p className="text-sm text-[#5d5f5f]">Every rupee is tracked and audited for maximal direct deployment.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ae0011]/10 flex items-center justify-center text-[#ae0011] shrink-0">
                  🔒
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#1a1c1c]">Secure Payments</h4>
                  <p className="text-sm text-[#5d5f5f]">Advanced encryption ensures your processing data is fully isolated.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f3f3f3] p-8 rounded-3xl shadow-xl border border-[#e6bdb8]/30">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#1a1c1c] mb-4 font-serif">Select Amount</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[500, 1000, 5000, 10000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => handleTierSelect(amt)}
                    className={`p-4 rounded-xl border-2 text-base font-bold transition-all ${
                      selectedAmount === amt && !customAmount
                        ? 'border-[#ae0011] bg-[#d71920] text-[#ffece9]'
                        : 'border-[#e6bdb8] bg-white text-[#1a1c1c] hover:border-[#ae0011]'
                    }`}
                  >
                    ₹{amt >= 10000 ? `${amt / 1000}k` : amt}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="text-xs font-semibold text-[#5d5f5f] block mb-2 uppercase tracking-wider">Or enter custom amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-[#5d5f5f]">₹</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 rounded-xl border-2 border-[#e6bdb8] bg-white focus:border-[#ae0011] text-xl font-semibold outline-none transition-all"
                  placeholder="Custom Amount"
                />
              </div>
            </div>

            <button
              onClick={handleDonate}
              disabled={paymentStatus === 'processing'}
              className="w-full bg-[#ae0011] text-white text-lg font-bold py-4 rounded-2xl shadow-lg hover:bg-[#d71920] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {paymentStatus === 'processing' ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Processing...
                </>
              ) : (
                `Donate Now ₹${effectiveAmount.toLocaleString()}`
              )}
            </button>

            {/* Status feedback */}
            {statusMessage && (
              <div className={`mt-4 rounded-xl p-4 text-sm ${
                paymentStatus === 'success'
                  ? 'bg-green-50 border border-green-200 text-green-700'
                  : 'bg-red-50 border border-red-200 text-red-700'
              }`}>
                {paymentStatus === 'success' && (
                  <span className="inline-block mr-2">✅</span>
                )}
                {statusMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}