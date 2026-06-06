// components/HostFundraiserCTA.tsx
export default function HostFundraiserCTA() {
  return (
    <section className="relative py-16 px-6" id="host">
      <div className="absolute inset-0 bg-[#d71920]/5 z-0" />
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 md:p-10 shadow-xl border border-white/50 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#1a1c1c] mb-4">Ignite Your Own Movement</h2>
          <p className="text-sm md:text-base text-[#5d5f5f] mb-8 max-w-2xl mx-auto leading-relaxed">
            Are you a corporate leader or a passionate individual? We provide the tools, the platform, and the support for you to host a fundraiser that changes lives.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="text-left p-5 border border-gray-100 rounded-xl bg-white hover:border-[#ae0011]/30 transition-all cursor-default group">
              <div className="text-[#ae0011] text-xl mb-2">🏢</div>
              <h4 className="text-base font-bold font-serif text-[#ae0011] mb-1">Corporate Partnerships</h4>
              <p className="text-xs text-[#5d5f5f] leading-relaxed">Customized CSR events and employee matching programs.</p>
            </div>
            <div className="text-left p-5 border border-gray-100 rounded-xl bg-white hover:border-[#ae0011]/30 transition-all cursor-default group">
              <div className="text-[#ae0011] text-xl mb-2">👤</div>
              <h4 className="text-base font-bold font-serif text-[#ae0011] mb-1">Individual Champions</h4>
              <p className="text-xs text-[#5d5f5f] leading-relaxed">Start a birthday drive or local marathon for a cause.</p>
            </div>
          </div>
          
          <button className="bg-[#ae0011] text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg hover:scale-105 active:scale-95 transition-all">
            Download Toolkit
          </button>
        </div>
      </div>
    </section>
  );
}