// components/EducationPillar.tsx
export default function EducationPillar() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-3 py-1 rounded-full bg-[#f3f3f3] text-[#ae0011] text-xs font-semibold mb-4">
              Education Pillar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#1a1c1c] mb-6">
              Empowering Minds, Building Futures
            </h2>
            <p className="text-lg text-[#5d5f5f] mb-8 leading-relaxed">
              We believe education is the ultimate catalyst for dignity. Our programs are designed to remove financial barriers and provide quality infrastructure for underprivileged youth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#f3f3f3] rounded-2xl border border-[#e6bdb8]/30">
                <div className="text-[#ae0011] text-2xl mb-2">🎓</div>
                <h4 className="text-lg font-bold font-serif text-[#1a1c1c] mb-2">Scholarships</h4>
                <p className="text-sm text-[#5d5f5f] leading-relaxed">
                  Providing full tuition support for 1,200+ students annually across technical and vocational fields.
                </p>
              </div>
              <div className="p-6 bg-[#f3f3f3] rounded-2xl border border-[#e6bdb8]/30">
                <div className="text-[#ae0011] text-2xl mb-2">📖</div>
                <h4 className="text-lg font-bold font-serif text-[#1a1c1c] mb-2">Learning Centers</h4>
                <p className="text-sm text-[#5d5f5f] leading-relaxed">
                  State-of-the-art digital hubs established in 15 rural districts to bridge the digital divide.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <img className="w-full h-full object-cover" alt="Children focused and smiling using tablets in modern classroom layout" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANPYKA_ZEO5KJK-aFUnKEpOHc7aYDXzFQ8oMGb9x9qhxBY_ChpW7EUNmArcrHBx2eeDWbK3SlFPG7xUiFRj0j9KXyR8HBk7yxRVR34nIfkzH9zMISUV2LsLICJbiSy3_KvfQxxWp_4S6hGyeYKyx1jQsh06b3SPKCkV-hMIxZlTDzEIUOdSRchIptd2CCkoMbTkNoY0XHCwcAiQuaKcesaoY08f8PzWYoWfOVqWSG8-knncRgGFrPNrusOn8pRUvxDEG3D3arpU7k" />
          </div>
        </div>
      </div>
    </section>
  );
}