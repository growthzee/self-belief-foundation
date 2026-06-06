
'use html'
'use client';

import { useEffect, useState } from 'react';

export default function GetInvolvedHero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[614px] flex items-center overflow-hidden">
      <img 
        className="absolute inset-0 w-full h-full object-cover will-change-transform" 
        alt="Community leaders and children smiling warm together, hopeful humanitarian values" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBATdshgomrsTBb9pJnSOi6wSe3HPWv9bwrBvFG6VkcE_h_9E1IO4utFecNmB953U2ku2jz4BSE-b7lMrpz41diYSJSJ4ANq4aj8wZKxMYyl0RWwO0aOvWWVH7cTEqq-t3wiJvv8ojh_gO2b9TD-O3ueqpTfxpOEm1T2G618AFVkdZGVvTuop2uhrBQde9W07MH52kVhXedJEoxWE188V1l4oqFxap8RIwjfW7xGtHXkxbuWI3M_1_ZY5nCbTZbuIgUg4XmOboWLx0"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      <div className="relative max-w-[1280px] mx-auto px-6 w-full">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 leading-tight">
            Every act of kindness creates a ripple of hope.
          </h1>
          <p className="text-lg opacity-90 leading-relaxed">
            Your support directly empowers marginalized communities with dignity, urgency, and the tools for self-belief.
          </p>
        </div>
      </div>
    </section>
  );
}