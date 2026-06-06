// components/HorizonsSection.tsx
export default function HorizonsSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#1a1c1c] mb-2">Expanding our Horizons</h2>
          <p className="text-base text-[#5d5f5f] max-w-2xl mx-auto">Diverse initiatives addressing the systemic roots of poverty through dignity and self-reliance.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] flex items-end p-6">
            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Empowered artisan textile studio workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgtnOmsgMOB5MkvYflgYBJrWRNszYvgwg5_v3hiTYTPfq3xt7x-eiUDfIUM8g9gVcYHKaLwFE8G8Lw15eyLSoxyGVrFXRJFCxu72IrM-7ygVxI1R895CHEm-pbNNT6OZow0tkj5Vs3KE_XWU1nGaaIpi-NG6WIZ_RTiGaTo4-kntpTqgPCZYyDcnYFsMfnFRlNg9hVufH1kLRrT13W0sPhD0X6hOgTPsW4qWw3uIQg0Scc75i_hFFuACux4VnrKF1pI5AI4aRUUuY" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="relative z-10 glass p-6 rounded-xl w-full">
              <h3 className="text-xl font-bold font-serif text-[#1a1c1c] mb-2">Women Empowerment</h3>
              <p className="text-sm text-[#5d5f5f] mb-4">Skill development and micro-entrepreneurship for 500+ women leaders.</p>
              <a className="text-sm font-bold text-[#ae0011] flex items-center gap-1 group/btn hover:gap-2 transition-all" href="#">
                Explore Program <span>→</span>
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] flex items-end p-6">
            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Large scale regional community reforestation project grids" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV0HccABVk1HXA94N7sg7BhviA9wA5AQY18TSZ54alAghB3JlM4Oxtd-1EUm3sWXCaAIrYToV_vXnzOBLxdJvMvqQsyDsPY9JiB69mPHoRZQWRCud-3yOSOQNlnH1dgkR3aiJOSQWJvAucjuo1YuRbewhgXKpMUPFi9-DiQRg2WL4mortzBsurb0jpxF2ADBVupl40qhL_yAxgFYskFvzlMlIc5Fo_QHbj74sdgJsBQ1lbTa8WsGtvls_6ATOC3JRKYSsYqBaIrZo" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="relative z-10 glass p-6 rounded-xl w-full">
              <h3 className="text-xl font-bold font-serif text-[#1a1c1c] mb-2">Environmental Sustainability</h3>
              <p className="text-sm text-[#5d5f5f] mb-4">Protecting our planet through community-led reforestation and waste management systems.</p>
              <a className="text-sm font-bold text-[#ae0011] flex items-center gap-1 group/btn hover:gap-2 transition-all" href="#">
                Explore Program <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}