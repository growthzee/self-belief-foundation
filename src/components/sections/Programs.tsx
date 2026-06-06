// components/Programs.tsx
const programItems = [
  { id: 1, title: 'Education Support', desc: 'Providing scholarships, school supplies, and literacy training for children.', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { id: 2, title: 'Healthcare Initiatives', desc: 'Mobile health clinics and immunization drives bringing essential medical care.', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  { id: 3, title: 'Women Empowerment', desc: 'Vocational training and micro-finance opportunities for financial stability.', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
  { id: 4, title: 'Child Welfare', desc: 'Nutrition programs and safe-house facilities for children in vulnerable setups.', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 5, title: 'Environmental Resilience', desc: 'Community reforestation and clean up frameworks to conserve native ecosystems.', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 0A9 9 0 115.636 5.636m12.728 12.728A9 9 0 015.636 5.636' },
  { id: 6, title: 'Community Infrastructure', desc: 'Developing pipelines, clean water access hubs, and architectural growth.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' }
];

export default function Programs() {
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1c1c] mb-3 font-serif">Our Core Programs</h2>
          <p className="text-base text-[#5d5f5f] max-w-2xl mx-auto">
            Focused on long-term sustainability and immediate relief, our programs address the root causes of poverty and inequality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programItems.map((program) => (
            <div key={program.id} className="group glass-card p-8 rounded-2xl hover:bg-white transition-all cursor-pointer border border-[#e6bdb8]/30 hover:shadow-xl">
              <div className="w-14 h-14 bg-[#ae0011]/10 rounded-xl flex items-center justify-center text-[#ae0011] mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={program.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1c1c] mb-2 font-serif">{program.title}</h3>
              <p className="text-sm text-[#5d5f5f] mb-6 leading-relaxed">{program.desc}</p>
              <a className="flex items-center text-[#ae0011] font-semibold text-sm gap-2 group-hover:translate-x-2 transition-transform" href="#">
                Learn More 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}