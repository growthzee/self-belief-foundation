// components/EventsHero.tsx
export default function EventsHero() {
  return (
    <section className="relative h-[614px] min-h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          alt="Cinematic wide-angle community gathering during golden hour humanitarian setting" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFpPo2vdQtiVlozIHPeJG-0iNOSAVCm7DXrUYWRLufYVUNzZdcl6Est0pSmS0o1EsWg02bQZIbz5ZqYQnVHF47dwMD_N3V2eANceGOnT-8M7bDDBbWYjtvRVTT_PqT5Qd38L2zO2gF1K8SP5_gn4KSF5xnS5Igiyup4fnclFefmx55T-PoVuczhpOQC93oW4jkm6se2-qfSqiiFk63pXct5xGRjJN9ds9Ev2iuJRoOQ8kdsJYvliXuWPDQL8Yf8pBUpYb_dM8Xlds" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>
      <div className="relative z-10 px-6 max-w-[1280px] mx-auto w-full">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 leading-tight drop-shadow-sm">
            Upcoming Campaigns & Events
          </h1>
          <p className="text-base md:text-lg mb-8 opacity-90 leading-relaxed">
            Join a movement of radical empathy. From local workshops to global fundraisers, discover how you can contribute to a future defined by dignity and self-belief.
          </p>
          <div className="flex gap-4">
            <a href="#grid" className="bg-[#ae0011] px-6 py-3.5 rounded-xl font-semibold text-sm shadow-lg hover:bg-[#ae0011]/90 transition-all flex items-center gap-2">
              Explore Events <span>↓</span>
            </a>
            <a href="#host" className="glass-panel px-6 py-3.5 rounded-xl font-semibold text-sm border border-white/30 hover:bg-white/20 transition-all">
              Host a Campaign
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}