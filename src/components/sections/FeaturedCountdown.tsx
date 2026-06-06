// components/FeaturedCountdown.tsx
'use html'
'use client';

import { useState, useEffect } from 'react';

export default function FeaturedCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 14, hours: 8, minutes: 42 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes } = prev;
        minutes--;
        if (minutes < 0) {
          minutes = 59;
          hours--;
          if (hours < 0) {
            hours = 23;
            days--;
          }
        }
        if (days < 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0 };
        }
        return { days, hours, minutes };
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-6 py-16 max-w-[1280px] mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-[#2f3131] text-white shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-64 lg:h-auto">
            <img 
              className="w-full h-full object-cover" 
              alt="Sophisticated evening corporate philanthropy charity gala environment" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV435NwZVEZj6ssnVf-ud541I2nnA8Ted6EckNQS_sUHZV3Qv4GjISDfrKpMHw5MB5eDm62rEsuW7kUBwRWfNPku2c_4OcJd0ZITpcKcnEjqzMgmOIoaSCRT1vuKW1Q3pzhXarsjnFGanwMMnivMrhnXcT3JDUJp2QnWYxv1bc8MHtmEXlsY35WqsZcUHb7BvFWo6aHrK9nASzHV4_3cqRJQpTKqe-bxL4Q1DPts0dp3W4-B1TCpmg_CfTbCXo7nKPdfJcC8N2xEw" 
            />
            <div className="absolute top-4 left-4 bg-[#ae0011] px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider">
              FEATURED CAMPAIGN
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">Annual Dignity Drive 2024</h2>
            <p className="text-sm md:text-base text-[#f1f1f1]/80 mb-6 leading-relaxed">
              Our biggest event of the year aims to raise $1.5M for vocational training centers across South Asia. Be part of the change.
            </p>
            
            <div className="flex gap-4 mb-8">
              <div className="flex flex-col items-center glass-panel !bg-white/10 p-4 rounded-xl w-20 md:w-24">
                <span className="text-xl md:text-2xl font-bold font-serif">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-[10px] font-bold tracking-widest opacity-70 mt-1">DAYS</span>
              </div>
              <div className="flex flex-col items-center glass-panel !bg-white/10 p-4 rounded-xl w-20 md:w-24">
                <span className="text-xl md:text-2xl font-bold font-serif">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[10px] font-bold tracking-widest opacity-70 mt-1">HRS</span>
              </div>
              <div className="flex flex-col items-center glass-panel !bg-white/10 p-4 rounded-xl w-20 md:w-24">
                <span className="text-xl md:text-2xl font-bold font-serif">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[10px] font-bold tracking-widest opacity-70 mt-1">MIN</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#ae0011] px-6 py-3.5 rounded-xl text-sm font-bold flex-1 md:flex-none hover:bg-[#d71920] transition-all">
                Secure My Ticket
              </button>
              <button className="border border-white/30 px-6 py-3.5 rounded-xl text-sm font-bold flex-1 md:flex-none hover:bg-white/10 transition-all">
                Sponsorship Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}