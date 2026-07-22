'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import jsPDF from 'jspdf';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

interface DonationDetails {
  id: string;
  name: string;
  email: string;
  phone: string;
  amount: number; // in paise
  currency: string;
  razorpayOrderId: string;
  razorpayPaymentId: string | null;
  status: string;
  createdAt: string;
}

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('payment_id');
  const orderId = searchParams.get('order_id');

  const [donation, setDonation] = useState<DonationDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      if (!paymentId && !orderId) {
        setLoading(false);
        return;
      }
      try {
        const query = paymentId
          ? `payment_id=${encodeURIComponent(paymentId)}`
          : `order_id=${encodeURIComponent(orderId!)}`;
        const res = await fetch(`/api/donation-details?${query}`);
        if (res.ok) {
          const data = await res.json();
          setDonation(data.donation);
        } else {
          const err = await res.json();
          setError(err.error || 'Unable to load donation details.');
        }
      } catch {
        setError('Failed to fetch donation details.');
      } finally {
        setLoading(false);
      }
    }
    fetchDetails();
  }, [paymentId, orderId]);

  const handleDownloadReceipt = () => {
    setIsGeneratingPdf(true);
    try {
      const doc = new jsPDF();
      const amountFormatted = donation
        ? (donation.amount / 100).toLocaleString('en-IN')
        : '0';
      const donorName = donation?.name || 'Valued Donor';
      const donorEmail = donation?.email || 'N/A';
      const donorPhone = donation?.phone || 'N/A';
      const pId = donation?.razorpayPaymentId || paymentId || 'N/A';
      const oId = donation?.razorpayOrderId || orderId || 'N/A';
      const dateStr = donation
        ? new Date(donation.createdAt).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })
        : new Date().toLocaleDateString('en-IN');

      // Header Banner
      doc.setFillColor(174, 0, 17); // #ae0011 primary brand color
      doc.rect(0, 0, 210, 40, 'F');

      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.text('SELF BELIEF FOUNDATION', 14, 22);

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text('OFFICIAL DONATION RECEIPT', 14, 30);
      doc.text('80G Tax Exempted | Reg No: SBF/80G/2024-25', 130, 30);

      // Receipt Meta Box
      doc.setDrawColor(230, 230, 230);
      doc.setFillColor(249, 249, 249);
      doc.roundedRect(14, 48, 182, 28, 3, 3, 'FD');

      doc.setTextColor(80, 80, 80);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.text('Receipt No:', 20, 58);
      doc.text('Date:', 20, 68);
      doc.text('Payment Status:', 110, 58);
      doc.text('Payment Gateway:', 110, 68);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(30, 30, 30);
      doc.text(`REC-${(pId.slice(-8) || '00000000').toUpperCase()}`, 45, 58);
      doc.text(dateStr, 45, 68);
      doc.setTextColor(16, 128, 64);
      doc.setFont('helvetica', 'bold');
      doc.text('SUCCESSFUL / VERIFIED', 145, 58);
      doc.setTextColor(30, 30, 30);
      doc.setFont('helvetica', 'normal');
      doc.text('Razorpay Secure Standard', 145, 68);

      // Donor Information
      doc.setFontSize(13);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(174, 0, 17);
      doc.text('Donor Details', 14, 90);

      doc.setLineWidth(0.5);
      doc.setDrawColor(174, 0, 17);
      doc.line(14, 93, 196, 93);

      doc.setFontSize(10);
      doc.setTextColor(80, 80, 80);
      doc.text('Full Name:', 14, 103);
      doc.text('Email Address:', 14, 113);
      doc.text('Phone Number:', 14, 123);

      doc.setTextColor(30, 30, 30);
      doc.setFont('helvetica', 'bold');
      doc.text(donorName, 50, 103);
      doc.setFont('helvetica', 'normal');
      doc.text(donorEmail, 50, 113);
      doc.text(donorPhone, 50, 123);

      // Payment Details Table
      doc.setFontSize(13);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(174, 0, 17);
      doc.text('Payment Summary', 14, 142);

      doc.setLineWidth(0.5);
      doc.setDrawColor(174, 0, 17);
      doc.line(14, 145, 196, 145);

      // Table Header
      doc.setFillColor(240, 240, 240);
      doc.rect(14, 150, 182, 10, 'F');
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(50, 50, 50);
      doc.text('Description', 20, 156.5);
      doc.text('Razorpay Payment ID', 95, 156.5);
      doc.text('Amount (INR)', 160, 156.5);

      // Table Row
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(30, 30, 30);
      doc.text('Voluntary Charitable Donation', 20, 168);
      doc.setFontSize(8);
      doc.text(pId, 95, 168);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(`INR ${amountFormatted}`, 160, 168);

      doc.setDrawColor(220, 220, 220);
      doc.line(14, 174, 196, 174);

      // Total Highlight Box
      doc.setFillColor(255, 245, 245);
      doc.setDrawColor(230, 180, 180);
      doc.roundedRect(120, 182, 76, 18, 2, 2, 'FD');
      doc.setTextColor(174, 0, 17);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text('Total Paid:', 125, 193.5);
      doc.setFontSize(14);
      doc.text(`INR ${amountFormatted}`, 155, 193.5);

      // Tax Exemption & Footer Note
      doc.setFillColor(245, 247, 250);
      doc.setDrawColor(220, 225, 235);
      doc.roundedRect(14, 212, 182, 28, 3, 3, 'FD');

      doc.setTextColor(40, 40, 40);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.text('Tax Exemption Certificate (Section 80G)', 20, 222);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(80, 80, 80);
      doc.text(
        'Donations to Self Belief Foundation are eligible for 50% tax deduction under Section 80G of the Income Tax Act.',
        20,
        229
      );
      doc.text(
        'This is a computer-generated receipt and does not require a physical signature.',
        20,
        234
      );

      // Authorized Signatory Placeholder
      doc.setTextColor(100, 100, 100);
      doc.setFontSize(8);
      doc.text('Authorized Signatory', 155, 260);
      doc.text('Self Belief Foundation', 155, 265);

      // Download Trigger
      doc.save(`Donation_Receipt_${pId.slice(-8)}.pdf`);
    } catch (err) {
      console.error('Error generating PDF:', err);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 text-center relative overflow-hidden">
        {/* Success Icon Badge */}
        <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-inner">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-emerald-200">
          Payment Verified & Successful
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-[#1a1c1c] font-serif mb-3">
          Thank You for Your Generosity!
        </h1>
        <p className="text-[#5d5f5f] text-base max-w-lg mx-auto leading-relaxed mb-8">
          Your contribution empowers us to continue our mission of providing education, clean water, and healthcare to marginalized communities.
        </p>

        {loading ? (
          <div className="py-8 flex justify-center items-center gap-3 text-[#5d5f5f]">
            <svg className="animate-spin h-5 w-5 text-[#ae0011]" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Loading receipt details...</span>
          </div>
        ) : (
          <div className="bg-[#f9f9f9] rounded-2xl p-6 mb-8 border border-gray-200/80 text-left max-w-xl mx-auto space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#ae0011] border-b border-gray-200 pb-2">
              Transaction Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-[#5d5f5f] text-xs block">Donor Name</span>
                <span className="font-semibold text-[#1a1c1c]">{donation?.name || 'Anonymous Donor'}</span>
              </div>
              <div>
                <span className="text-[#5d5f5f] text-xs block">Amount Paid</span>
                <span className="font-bold text-[#ae0011] text-lg">
                  ₹{donation ? (donation.amount / 100).toLocaleString('en-IN') : '—'}
                </span>
              </div>
              <div>
                <span className="text-[#5d5f5f] text-xs block">Payment ID</span>
                <span className="font-mono text-xs text-[#1a1c1c] break-all">
                  {donation?.razorpayPaymentId || paymentId || '—'}
                </span>
              </div>
              <div>
                <span className="text-[#5d5f5f] text-xs block">Order ID</span>
                <span className="font-mono text-xs text-[#1a1c1c] break-all">
                  {donation?.razorpayOrderId || orderId || '—'}
                </span>
              </div>
              {donation?.email && (
                <div className="sm:col-span-2">
                  <span className="text-[#5d5f5f] text-xs block">Receipt Sent To</span>
                  <span className="font-medium text-[#1a1c1c]">{donation.email}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleDownloadReceipt}
            disabled={isGeneratingPdf}
            className="w-full sm:w-auto bg-[#ae0011] text-white text-sm font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:bg-[#d71920] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isGeneratingPdf ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Generating PDF...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Official PDF Receipt
              </>
            )}
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto border border-gray-300 text-[#5d5f5f] hover:text-[#1a1c1c] hover:bg-gray-50 text-sm font-semibold px-6 py-3.5 rounded-xl transition-all"
          >
            Return to Home
          </Link>
        </div>

        <p className="text-xs text-[#5d5f5f] mt-8">
          Self Belief Foundation is a registered 80G Non-Profit Organization. All donations are tax-exempted.
        </p>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen font-sans selection:bg-[#ae0011]/20 flex flex-col justify-between">
      <Header />
      <main className="pt-24 flex-grow">
        <Suspense fallback={
          <div className="text-center py-24 text-gray-500">Loading payment success details...</div>
        }>
          <PaymentSuccessContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
