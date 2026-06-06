'use client';

export default function JoinMovementForm() {
  return (
    <section className="py-16 max-w-[1280px] mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#1a1c1c] mb-3">Join the Movement</h2>
        <p className="text-base text-[#5d5f5f] leading-relaxed">
          Whether you are a student looking for an internship, a professional wanting to volunteer, or a business seeking a partner—we have a place for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: '👥', label: 'Volunteers', desc: 'Dedicate your time and skills to community projects across the nation.', btn: 'Apply to Volunteer' },
          { icon: '🎓', label: 'Internships', desc: 'Gain real-world experience in non-profit management and social work.', btn: 'View Openings' },
          { icon: '🤝', label: 'Partnerships', desc: 'Collaborate on large-scale CSR initiatives that drive long-term change.', btn: 'Partner with Us' }
        ].map((card, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-[#ae0011]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-[#1a1c1c] font-serif mb-2">{card.label}</h3>
            <p className="text-sm text-[#5d5f5f] mb-6 leading-relaxed">{card.desc}</p>
            <button className="text-[#ae0011] text-sm font-semibold border-b-2 border-[#ae0011] pb-0.5 hover:opacity-70 transition-all">
              {card.btn}
            </button>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto glass-card p-6 md:p-8 rounded-2xl shadow-lg">
        <h4 className="text-xl font-bold font-serif mb-6 text-center text-[#1a1c1c]">Quick Application Form</h4>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative input-floating h-14 bg-white/50 rounded-xl border border-gray-200 px-4 flex items-center">
              <input type="text" placeholder=" " className="w-full bg-transparent border-none outline-none pt-4 pb-1 text-sm" required />
              <label className="absolute left-4 top-4 text-sm text-[#5d5f5f] pointer-events-none origin-left">Name</label>
            </div>
            <div className="relative h-14 bg-white/50 rounded-xl border border-gray-200 px-4 flex items-center">
              <select className="w-full bg-transparent border-none outline-none pt-4 pb-1 text-sm text-[#1a1c1c]">
                <option>Volunteer</option>
                <option>Internship</option>
                <option>Corporate Partner</option>
              </select>
              <label className="absolute left-4 top-1.5 text-[10px] font-semibold text-[#ae0011] uppercase tracking-wider">Interest Area</label>
            </div>
          </div>
          <div className="relative input-floating h-14 bg-white/50 rounded-xl border border-gray-200 px-4 flex items-center">
            <input type="email" placeholder=" " className="w-full bg-transparent border-none outline-none pt-4 pb-1 text-sm" required />
            <label className="absolute left-4 top-4 text-sm text-[#5d5f5f] pointer-events-none origin-left">Email Address</label>
          </div>
          <div className="bg-white/50 rounded-xl border border-gray-200 p-4">
            <textarea className="w-full h-24 bg-transparent border-none outline-none text-sm resize-none" placeholder="Tell us why you want to join..." required />
          </div>
          <button type="submit" className="w-full bg-[#ae0011] text-white text-sm font-semibold py-4 rounded-xl shadow-md hover:bg-[#d71920] transition-all">
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}