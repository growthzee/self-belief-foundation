// components/HistoryTimeline.tsx
'use html'
'use client';

import { useEffect, useRef } from 'react';

const chronologicalEvents = [
  { year: '2010', title: 'The Genesis', descLeft: 'SelfBelief was founded in a small community center with a simple mission: clean water for all.', descRight: 'Successfully installed our first 50 sustainable water wells across rural districts.', icon: '⭐' },
  { year: '2015', title: 'Scaling Impact', descLeft: 'Extending our reach from water to education, impacting over 50,000 children annually.', descRight: "Launched the 'Education First' initiative, building 12 primary schools and training 150 local educators.", icon: '🎓' },
  { year: '2020', title: 'Crisis Response', descLeft: 'Pivoted to deliver critical medical supplies and food security programs during global lockdowns.', descRight: 'Distributed over 2 million PPE kits and supported 500,000 families with emergency food aid.', icon: '🏥' },
  { year: 'Present', title: 'Sustainable Future', descLeft: 'Currently operating in 14 countries with a network of over 5,000 volunteers and partners.', descRight: 'Expanding into sustainable agriculture and digital literacy to ensure long-term community independence.', icon: '🚀' }
];

export default function HistoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = containerRef.current?.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, { threshold: 0.1 });

    targets?.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-serif text-[#1a1c1c] mb-2">Our Journey Through Time</h2>
          <p className="text-sm text-[#5d5f5f]">From a small grassroots project to a global foundation, every step has been driven by the trust of our donors and the resilience of our partners.</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full timeline-line opacity-20" />
          <div className="space-y-16">
            {chronologicalEvents.map((evt, idx) => (
              <div key={idx} className="relative flex items-center justify-between group scroll-animate">
                <div className="w-full md:w-[45%] text-right pr-6 hidden md:block">
                  {idx % 2 === 0 ? (
                    <>
                      <h3 className="text-lg font-bold text-[#ae0011] font-serif">{evt.title}</h3>
                      <p className="text-sm text-[#5d5f5f] mt-1">{evt.descLeft}</p>
                    </>
                  ) : (
                    <div className="bg-[#eeeeee] p-6 rounded-xl border border-gray-100 shadow-sm text-right">
                      <span className="font-bold text-[#ae0011] text-sm">{evt.year}</span>
                      <p className="text-sm text-[#1a1c1c] mt-2">{evt.descRight}</p>
                    </div>
                  )}
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#ae0011] flex items-center justify-center text-white text-xs z-10 shadow-lg group-hover:scale-110 transition-transform">
                  {evt.icon}
                </div>

                <div className="w-full md:w-[45%] pl-6">
                  {idx % 2 === 0 ? (
                    <div className="bg-[#eeeeee] p-6 rounded-xl border border-gray-100 shadow-sm">
                      <span className="font-bold text-[#ae0011] text-sm">{evt.year}</span>
                      <h3 className="text-base font-bold text-[#1a1c1c] font-serif md:hidden mt-1">{evt.title}</h3>
                      <p className="text-sm text-[#5d5f5f] md:hidden mt-1">{evt.descLeft}</p>
                      <p className="hidden md:block text-sm text-[#1a1c1c]">{evt.descRight}</p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-lg font-bold text-[#ae0011] font-serif md:text-left">{evt.title}</h3>
                      <p className="text-sm text-[#5d5f5f] mt-1 md:hidden">{evt.descRight}</p>
                      <p className="hidden md:block text-sm text-[#5d5f5f] mt-1">{evt.descLeft}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}