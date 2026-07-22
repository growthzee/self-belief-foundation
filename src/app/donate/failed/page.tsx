'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

function PaymentFailedContent() {
  const searchParams = useSearchParams();
  const reason = searchParams.get('reason') || 'Transaction was cancelled or declined by your bank.';
  const orderId = searchParams.get('order_id');

  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 text-center relative overflow-hidden">
        {/* Error Icon Badge */}
        <div className="w-20 h-20 mx-auto rounded-full bg-red-100 text-[#ae0011] flex items-center justify-center mb-6 shadow-inner">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <span className="inline-block bg-red-50 text-red-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-red-200">
          Payment Incomplete
        </span>

        <h1 className="text-3xl font-bold text-[#1a1c1c] font-serif mb-3">
          Donation Unsuccessful
        </h1>
        <p className="text-[#5d5f5f] text-sm max-w-md mx-auto leading-relaxed mb-6">
          We were unable to complete your payment. No funds were debited, or if deducted, will be automatically refunded by your bank within 3-5 business days.
        </p>

        {/* Reason Box */}
        <div className="bg-red-50/60 rounded-2xl p-5 mb-8 border border-red-200/70 text-left space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ae0011] block">
            Reason / Error Details
          </span>
          <p className="text-sm font-medium text-red-950 leading-snug">
            {reason}
          </p>
          {orderId && (
            <div className="pt-2 border-t border-red-200/50 flex justify-between items-center text-xs text-[#5d5f5f]">
              <span>Order Reference:</span>
              <span className="font-mono text-gray-700">{orderId}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/donate"
            className="w-full sm:w-auto bg-[#ae0011] text-white text-sm font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:bg-[#d71920] transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try Donation Again
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto border border-gray-300 text-[#5d5f5f] hover:text-[#1a1c1c] hover:bg-gray-50 text-sm font-semibold px-6 py-3.5 rounded-xl transition-all text-center"
          >
            Return Home
          </Link>
        </div>

        <p className="text-xs text-[#5d5f5f] mt-8">
          Need help? Contact our donor support team at <a href="mailto:support@selfbelieffoundation.org" className="underline text-[#ae0011]">support@selfbelieffoundation.org</a>
        </p>
      </div>
    </div>
  );
}

export default function PaymentFailedPage() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen font-sans selection:bg-[#ae0011]/20 flex flex-col justify-between">
      <Header />
      <main className="pt-24 flex-grow">
        <Suspense fallback={
          <div className="text-center py-24 text-gray-500">Loading payment status...</div>
        }>
          <PaymentFailedContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
