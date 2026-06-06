// components/DonationSection.tsx
'use html'
'use client';

import { useState } from 'react';

export default function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleTierSelect = (val: number) => {
    setSelectedAmount(val);
    setCustomAmount('');
  };

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

            <button className="w-full bg-[#ae0011] text-white text-lg font-bold py-4 rounded-2xl shadow-lg hover:bg-[#d71920] transition-all flex items-center justify-center gap-3">
              Donate Now ₹{customAmount || selectedAmount}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}