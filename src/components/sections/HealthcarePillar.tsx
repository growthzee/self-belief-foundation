// components/HealthcarePillar.tsx
export default function HealthcarePillar() {
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500 bg-white p-2">
            <img className="w-full h-full object-cover rounded-2xl" alt="Mobile outreach health clinic in remote village location" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcQrCEUNeL-IRUs2WyEp40gAhRBUAqepNna_v6tI1wMTQ-eXGOzEQ6dEWYYBNZv8qiGHbaMZ-9xd2cDHCZEOtlntk1aHeWl78yxlxeGxeAYLNeK1ZLckuSwiaSSyTSHm045gQJPV8hqPtJ5bm1XC_mCb69E6dbIWXYiivpAVnOu0gdl3Vw8KXUooPb5s6jQaFnF-bsYfCOgmbh1-5XREP7YNLwvZEYSr2uWSjN4Oa1QQgi8VnwYFC7FJywte1G87BEFQS1U-GkhIo" />
          </div>
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white text-[#ae0011] text-xs font-semibold mb-4">
              Healthcare Pillar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#1a1c1c] mb-6">
              Healthcare Within Reach
            </h2>
            <p className="text-lg text-[#5d5f5f] mb-8 leading-relaxed">
              Urgency meets compassion. We deploy mobile medical units and establish permanent rural clinics to ensure no community is left behind in a health crisis.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 hover:bg-white rounded-2xl transition-all duration-300">
                <div className="bg-[#ae0011]/10 p-3 rounded-xl text-xl">🚨</div>
                <div>
                  <h4 className="text-lg font-bold font-serif text-[#1a1c1c] mb-1">Medical Camps</h4>
                  <p className="text-sm text-[#5d5f5f] leading-relaxed">Bi-monthly specialty camps providing eye care, pediatric checks, and maternal services.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 hover:bg-white rounded-2xl transition-all duration-300">
                <div className="bg-[#ae0011]/10 p-3 rounded-xl text-xl">🏥</div>
                <div>
                  <h4 className="text-lg font-bold font-serif text-[#1a1c1c] mb-1">Rural Clinics</h4>
                  <p className="text-sm text-[#5d5f5f] leading-relaxed">Fixed health centers staffed 24/7 by trained paramedics and visiting physicians.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}