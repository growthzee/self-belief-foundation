// components/VolunteerCTA.tsx
'use html'
'use client';

export default function VolunteerCTA() {
  return (
    <section className="py-16 bg-[#ae0011] text-white">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
            Ready to make a difference?
          </h2>
          <p className="text-lg text-[#ffece9] opacity-90 mb-8 leading-relaxed">
            Your time and skills are the most valuable donation you can offer. Join our global network of change-makers today.
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span>✓</span> <span>Global Network</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span>✓</span> <span>Verified Impact</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span>✓</span> <span>Flexible Hours</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl text-[#1a1c1c]">
          <h3 className="text-xl font-bold font-serif text-center mb-6">Become a Volunteer</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#5d5f5f] uppercase tracking-wider">Full Name</label>
                <input type="text" className="w-full p-4 rounded-xl bg-[#f9f9f9] border-none focus:ring-2 focus:ring-[#ae0011]/20 outline-none text-sm" placeholder="John Doe" required />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#5d5f5f] uppercase tracking-wider">Email Address</label>
                <input type="email" className="w-full p-4 rounded-xl bg-[#f9f9f9] border-none focus:ring-2 focus:ring-[#ae0011]/20 outline-none text-sm" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#5d5f5f] uppercase tracking-wider">Area of Interest</label>
              <select className="w-full p-4 rounded-xl bg-[#f9f9f9] border-none focus:ring-2 focus:ring-[#ae0011]/20 outline-none text-sm text-[#1a1c1c]">
                <option>Education & Tutoring</option>
                <option>Health & Medical Support</option>
                <option>Event Planning & Logistics</option>
                <option>Digital & Tech Support</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#5d5f5f] uppercase tracking-wider">Brief Inquiry</label>
              <textarea className="w-full p-4 rounded-xl bg-[#f9f9f9] border-none focus:ring-2 focus:ring-[#ae0011]/20 outline-none text-sm resize-none" placeholder="Tell us how you'd like to help..." rows={3} required></textarea>
            </div>
            <button type="submit" className="w-full bg-[#ae0011] text-white py-4 rounded-xl text-sm font-bold hover:bg-[#d71920] transition-all shadow-md active:scale-[0.98]">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}