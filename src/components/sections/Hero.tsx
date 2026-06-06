// components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          alt="Children in rural classroom collaborating joyfully, humanitarian warmth aesthetic" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg01SS5Th9mJgqPYwt-3dn6ZhNm8peLNsVbKZznjsb8MOLjRiX0V6UBgue9IqL_cCvcRRDJW3M3n3G3QM4vXZ3uXVda4SEu2v8vXgM0n-Jy2r6eSu3P_YUJNxVikUeH7rDDfc5QYpkyWQR3I7X0-OESEHzXk_J68KzgjthoIB7zfCDvCnRV8zqOvAPPv5-_opec5xHp72NlbrRRhuK84KJ22_3RJUrLsAIs3aN1MRxmLTTvLfUozAq8mXH0joVbF-HhYhZnJk0pb8"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 px-6 max-w-[1280px] mx-auto w-full text-white">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight font-serif">
            Transforming Lives Through <span className="text-[#d71920]">Self Belief</span>
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-xl leading-relaxed">
            Together we create opportunities, empower communities, and build a brighter future for those who need it most through sustainable growth and education.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#d71920] text-white text-sm font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#ae0011] transition-all flex items-center gap-2 group">
              Donate Now 
              <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.5 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
            <button className="border-2 border-white/40 text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
              Become a Volunteer
            </button>
          </div>
        </div>

        {/* Floating Metrics */}
        <div className="absolute bottom-16 right-6 hidden lg:flex flex-col gap-4">
          <div className="glass-card p-4 rounded-2xl flex items-center gap-4 shadow-xl">
            <div className="w-12 h-12 bg-[#ae0011]/20 rounded-xl flex items-center justify-center text-[#ae0011]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold text-[#ae0011]">50k+</div>
              <div className="text-xs font-medium text-[#1a1c1c]/70">Lives Impacted</div>
            </div>
          </div>
          
          <div className="glass-card p-4 rounded-2xl flex items-center gap-4 shadow-xl ml-12">
            <div className="w-12 h-12 bg-[#ae0011]/20 rounded-xl flex items-center justify-center text-[#ae0011]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold text-[#ae0011]">10k+</div>
              <div className="text-xs font-medium text-[#1a1c1c]/70">Children Educated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}