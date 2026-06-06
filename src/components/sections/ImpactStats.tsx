// components/ImpactStats.tsx
'use html'
'use client';

import { useEffect, useState, useRef } from 'react';

function Counter({ targetValue }: { targetValue: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * targetValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        window.requestAnimationFrame(step);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.2 });

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [targetValue]);

  return <div ref={countRef} className="text-4xl font-bold text-[#ae0011] mb-1 font-serif">{count.toLocaleString()}+</div>;
}

export default function ImpactStats() {
  return (
    <section className="py-16 bg-[#ffffff]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 glass-card rounded-2xl shadow-sm text-center">
            <Counter targetValue={50000} />
            <div className="text-sm font-semibold text-[#5d5f5f]">Lives Impacted</div>
          </div>
          <div className="p-6 glass-card rounded-2xl shadow-sm text-center">
            <Counter targetValue={10000} />
            <div className="text-sm font-semibold text-[#5d5f5f]">Children Educated</div>
          </div>
          <div className="p-6 glass-card rounded-2xl shadow-sm text-center">
            <Counter targetValue={500} />
            <div className="text-sm font-semibold text-[#5d5f5f]">Volunteers</div>
          </div>
          <div className="p-6 glass-card rounded-2xl shadow-sm text-center">
            <Counter targetValue={150} />
            <div className="text-sm font-semibold text-[#5d5f5f]">Communities Served</div>
          </div>
        </div>
      </div>
    </section>
  );
}