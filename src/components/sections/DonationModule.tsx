// components/DonationModule.tsx
'use client';

import { useState, useCallback } from 'react';

type PaymentStatus = 'idle' | 'processing' | 'success' | 'error';

export default function DonationModule() {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState<number>(1000);
  const [customVal, setCustomVal] = useState<string>('1000');

  // Donor details (Step 2)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Payment state
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentId, setPaymentId] = useState('');

  const handleSelectAmount = (val: number) => {
    setAmount(val);
    setCustomVal(val.toString());
  };

  const isStep2Valid = name.trim().length > 0 && email.trim().length > 0 && phone.trim().length > 0;

  const handlePayment = useCallback(async () => {
    if (amount < 1) {
      setErrorMessage('Minimum donation is ₹1.');
      return;
    }

    setPaymentStatus('processing');
    setErrorMessage('');

    try {
      // Step 1: Create order on the backend
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      if (!orderRes.ok) {
        const errData = await orderRes.json();
        throw new Error(errData.error || 'Failed to create order.');
      }

      const { orderId, amount: orderAmount, currency } = await orderRes.json();

      // Step 2: Open Razorpay checkout modal
      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: orderAmount,
        currency,
        name: 'Self Belief Foundation',
        description: `Donation of ₹${amount.toLocaleString()}`,
        order_id: orderId,
        handler: async (response: RazorpayPaymentResponse) => {
          // Step 3: Verify payment signature on the backend
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
              setPaymentId(response.razorpay_payment_id);
              setPaymentStatus('success');
              setStep(4);
            } else {
              setPaymentStatus('error');
              setErrorMessage('Payment verification failed. Please contact support.');
            }
          } catch {
            setPaymentStatus('error');
            setErrorMessage('Could not verify payment. Please contact support.');
          }
        },
        prefill: {
          name: name,
          email: email,
          contact: phone,
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
        setErrorMessage(response.description || 'Payment failed. Please try again.');
      });

      razorpay.open();
    } catch (error: unknown) {
      setPaymentStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
    }
  }, [amount, name, email, phone]);

  const handleReset = () => {
    setStep(1);
    setAmount(1000);
    setCustomVal('1000');
    setName('');
    setEmail('');
    setPhone('');
    setPaymentStatus('idle');
    setErrorMessage('');
    setPaymentId('');
  };

  return (
    <section className="py-16 max-w-[1280px] mx-auto px-6 -mt-24 relative z-10" id="donate">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Multistep Form Block */}
        <div className="lg:col-span-7 glass-card rounded-2xl shadow-xl p-6 md:p-8">
          {step <= 3 && (
            <div className="flex border-b border-gray-200 mb-8 overflow-x-auto whitespace-nowrap">
              {[
                { id: 1, label: '01. Select Amount' },
                { id: 2, label: '02. Personal Details' },
                { id: 3, label: '03. Payment' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setStep(t.id)}
                  className={`px-4 py-3 text-sm font-semibold transition-all ${
                    step === t.id 
                      ? 'text-[#ae0011] border-b-3 border-[#ae0011]' 
                      : 'text-[#5d5f5f]'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          )}

          {/* Step 1 Content */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1a1c1c] font-serif">Choose an amount to donate</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { val: 1000, desc: 'Provides 1 month of nutrition for a child.' },
                  { val: 2500, desc: "Funds a student's vocational training kit." },
                  { val: 5000, desc: 'Supports clean water for a whole family.' }
                ].map((tier) => (
                  <button
                    key={tier.val}
                    onClick={() => handleSelectAmount(tier.val)}
                    className={`border-2 p-4 rounded-xl text-left transition-all group ${
                      amount === tier.val && customVal === tier.val.toString()
                        ? 'border-[#ae0011] bg-[#ae0011]/5'
                        : 'border-gray-200 hover:border-[#ae0011]'
                    }`}
                  >
                    <div className="text-2xl font-bold text-[#1a1c1c] mb-1 group-hover:text-[#ae0011] font-serif">
                      ₹{tier.val.toLocaleString()}
                    </div>
                    <p className="text-xs text-[#5d5f5f] font-medium">{tier.desc}</p>
                  </button>
                ))}
              </div>
              <div className="relative">
                <input
                  type="number"
                  className="w-full bg-[#f3f3f3] border border-gray-200 rounded-xl p-4 focus:border-[#ae0011] focus:ring-1 focus:ring-[#ae0011]/20 outline-none transition-all"
                  placeholder="Or enter custom amount"
                  value={customVal}
                  onChange={(e) => {
                    setCustomVal(e.target.value);
                    setAmount(Number(e.target.value) || 0);
                  }}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5d5f5f] font-semibold text-sm">INR</span>
              </div>
              <button 
                onClick={() => setStep(2)}
                className="w-full bg-[#d71920] text-white text-sm font-semibold py-4 rounded-xl shadow-lg hover:bg-[#ae0011] transition-all"
              >
                Continue to Details
              </button>
            </div>
          )}

          {/* Step 2 Content */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1a1c1c] font-serif">Tell us who you are</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative input-floating h-14 bg-[#f3f3f3] rounded-xl border border-gray-200 px-4 flex items-center">
                  <input
                    type="text"
                    placeholder=" "
                    className="w-full bg-transparent border-none outline-none pt-4 pb-1 text-sm"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label className="absolute left-4 top-4 text-sm text-[#5d5f5f] pointer-events-none origin-left">Full Name</label>
                </div>
                <div className="relative input-floating h-14 bg-[#f3f3f3] rounded-xl border border-gray-200 px-4 flex items-center">
                  <input
                    type="email"
                    placeholder=" "
                    className="w-full bg-transparent border-none outline-none pt-4 pb-1 text-sm"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="absolute left-4 top-4 text-sm text-[#5d5f5f] pointer-events-none origin-left">Email Address</label>
                </div>
              </div>
              <div className="relative input-floating h-14 bg-[#f3f3f3] rounded-xl border border-gray-200 px-4 flex items-center">
                <input
                  type="tel"
                  placeholder=" "
                  className="w-full bg-transparent border-none outline-none pt-4 pb-1 text-sm"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label className="absolute left-4 top-4 text-sm text-[#5d5f5f] pointer-events-none origin-left">Phone Number</label>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => setStep(1)} className="w-1/3 border border-gray-200 text-[#5d5f5f] font-semibold py-4 rounded-xl text-sm">Back</button>
                <button
                  onClick={() => {
                    if (isStep2Valid) setStep(3);
                  }}
                  disabled={!isStep2Valid}
                  className={`w-2/3 text-sm font-semibold py-4 rounded-xl shadow-lg transition-all ${
                    isStep2Valid
                      ? 'bg-[#d71920] text-white hover:bg-[#ae0011]'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          )}

          {/* Step 3 Content */}
          {step === 3 && (
            <div className="space-y-6 text-center py-4">
              <div className="text-5xl text-[#ae0011] mb-2">🛡️</div>
              <h3 className="text-2xl font-bold text-[#1a1c1c] font-serif">Secure Payment Processing</h3>
              <p className="text-sm text-[#5d5f5f] max-w-sm mx-auto leading-relaxed">
                You will be redirected to our secure payment gateway to complete your transaction via UPI, Cards, or Netbanking.
              </p>
              <div className="flex justify-center items-center gap-6 opacity-30 my-6 grayscale text-3xl">
                <span>💳</span><span>📱</span><span>🏦</span>
              </div>

              {/* Error message */}
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setStep(2)}
                  disabled={paymentStatus === 'processing'}
                  className="w-1/3 border border-gray-200 text-[#5d5f5f] font-semibold py-4 rounded-xl text-sm disabled:opacity-50"
                >
                  Back
                </button>
                <button
                  onClick={handlePayment}
                  disabled={paymentStatus === 'processing'}
                  className="w-2/3 bg-[#d71920] text-white text-sm font-semibold py-4 rounded-xl shadow-lg hover:bg-[#ae0011] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {paymentStatus === 'processing' ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </>
                  ) : (
                    `Complete ₹${(amount || 0).toLocaleString()} Donation`
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Step 4 — Success */}
          {step === 4 && (
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a1c1c] font-serif">Thank You, {name}!</h3>
              <p className="text-sm text-[#5d5f5f] max-w-md mx-auto leading-relaxed">
                Your generous donation of <span className="font-bold text-[#ae0011]">₹{(amount || 0).toLocaleString()}</span> has been received successfully. A confirmation receipt will be sent to <span className="font-semibold">{email}</span>.
              </p>
              <div className="bg-[#f3f3f3] rounded-xl p-4 max-w-sm mx-auto">
                <p className="text-xs text-[#5d5f5f] mb-1">Payment ID</p>
                <p className="text-sm font-mono font-semibold text-[#1a1c1c] break-all">{paymentId}</p>
              </div>
              <p className="text-xs text-[#5d5f5f]">
                Your donation is eligible for tax benefits under Section 80G.
              </p>
              <button
                onClick={handleReset}
                className="bg-[#d71920] text-white text-sm font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-[#ae0011] transition-all"
              >
                Make Another Donation
              </button>
            </div>
          )}
        </div>

        {/* Dynamic Context Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card p-6 rounded-2xl space-y-4">
            <h4 className="text-xs font-bold text-[#ae0011] uppercase tracking-wider">Our Transparency</h4>
            <div className="flex items-start gap-4">
              <span className="text-[#ae0011] text-xl">✓</span>
              <div>
                <p className="text-sm font-bold text-[#1a1c1c]">80G Tax Exempted</p>
                <p className="text-xs text-[#5d5f5f] mt-0.5">All donations are eligible for tax benefits under section 80G of the Income Tax Act.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#ae0011] text-xl">📊</span>
              <div>
                <p className="text-sm font-bold text-[#1a1c1c]">Impact Reports</p>
                <p className="text-xs text-[#5d5f5f] mt-0.5">Receive quarterly transparency reports detailing exactly how your funds were utilized.</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-64 shadow-md group">
            <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Dignified clean water relief outreach" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATfZP8jTIobIz9NROxdI-3SY7QSx4N2mP2gWWJbppJ2SBSXzr5CBbl9fZWDnVizQGt-r3B7oV5BpBxAeW2WW2jNPh0zC0L-FUTDZWiRyUX8QFs7j6gAdVjvgROxFwHNyat0I9kMaDc0eaMzprEY3EaJx0hBYG61njycLxf9wAJmmWi_-ghy7cQHBOAqX3KmGsJjsL3sAmNkBk-64GjSwahVFH-R-fdFKkK1UVGnWegSmusB9WhB3RCY87Npco2dUmKl7zsjUiRU08"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
              <p className="text-[#ffece9] text-xs font-bold uppercase tracking-wider mb-1">Latest Success Story</p>
              <h5 className="text-white font-bold text-xl leading-snug font-serif">Clean water reached 200 families in Odisha this month.</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}