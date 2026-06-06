// components/TransparencyAudits.tsx
export default function TransparencyAudits() {
  return (
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[#d71920] opacity-5 z-0" />
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="glass-card p-6 md:p-10 rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold font-serif text-[#1a1c1c] mb-4">Transparency & Accountability</h2>
              <p className="text-base text-[#5d5f5f] mb-8 leading-relaxed">
                We believe that trust is earned through radical transparency. Every dollar you donate is tracked and audited to ensure maximum impact for those who need it most.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#ae0011]/10 rounded-xl text-[#ae0011] text-lg">🛡️</div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1a1c1c]">80G Status & Tax Benefits</h4>
                    <p className="text-xs text-[#5d5f5f] mt-0.5">All donations are tax-exempt under Section 80G of the Income Tax Act.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#ae0011]/10 rounded-xl text-[#ae0011] text-lg">🏦</div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1a1c1c]">Independent Financial Audits</h4>
                    <p className="text-xs text-[#5d5f5f] mt-0.5">Annual audits conducted by Tier-1 global firms to guarantee fiscal responsibility.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/40 p-6 rounded-2xl border border-white/60 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold font-serif mb-4 text-[#1a1c1c]">Impact Reports</h3>
                <div className="space-y-3">
                  {['Annual Report 2023', 'Financial Audit 2023', 'Strategic Plan 2024-2026'].map((doc, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-sm transition-all cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <span className="text-[#ae0011] text-sm">📄</span>
                        <span className="text-sm font-semibold text-[#1a1c1c]">{doc}</span>
                      </div>
                      <span className="text-gray-400 group-hover:text-[#ae0011] text-sm font-bold transition-colors">↓</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 p-4 bg-[#d71920] text-[#ffece9] rounded-xl text-center">
                <p className="text-3xl font-bold font-serif mb-0.5">92%</p>
                <p className="text-xs font-medium opacity-90">of funds go directly to on-ground programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}