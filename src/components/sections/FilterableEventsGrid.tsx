// components/FilterableEventsGrid.tsx
'use html'
'use client';

import { useState } from 'react';

const totalEvents = [
  { id: 1, type: 'Workshops', title: 'Skills Empowerment Workshop', info: 'Oct 12, 2024', desc: 'Learn the basics of community organizing and mentorship to help local youth find their path.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUoJ2R_MGAeUmBoPAxUElZrbcKxnHzPT1wwrCDruyoxeOOPq8CZ9YG2oiNndO9JgI32Zm6r8Hvw0tvMHS3wQJO8Zf_OkX0KUNWs2n9rS7w7-tP89FE0OOlReE7yH-SzOHH8Fxv7q9kC_7UEeWSvK3fZTNEbyaaEmQ0qTQl-ko0M5F-iqfxP7Nc8NQebT2Zaq1aB5tHGMy_INJjTlCC9e81JIITS4lozx3rn0loVvyLNCXY5Cn6dyoZKWPp-Y8B2am5C1m2dnycPRc' },
  { id: 2, type: 'Meetups', title: 'Quarterly Volunteer Mixer', info: 'San Francisco, CA', desc: 'Connect with fellow change-makers and hear first-hand impact stories from our field teams.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2684arsq4R7pcPVzzNlDX8uq1IMcCG00bKxiBLacKhGt6GVsRaJuq1TnSyNHXOwr-mGjtvRGksn_HXuppc0hfGurj60YIUgWWcnQLeyi21LzhbGnwXZufPXC_spkKVr6hcqs01fuGBQ0U1hxvypgnYxEw5n5y6HUj3ePk2hb5v6HYKapiFieaQOVVuTBhU1_JC_fEnJdHS1L0IeulTbglhap917OBndF1wN98l635rjDpuM8Q_yfh9rSQlu9ksK8q6095JCTO610' },
  { id: 3, type: 'Fundraisers', title: 'Neighborhood Health Pop-up', info: 'Health & Wellness Drive', desc: 'Providing essential health screenings and resource kits to underserved families.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWuDyd_VEJIH8VSP-dz3RquXu0nxMmubSRxFvlB-yuk9oO6d9SwZNuFnM2lGYQogdykppQ2kqxcNKz1hnmIl9uyBrq3N1R-Qa73KZolXwu5Z6xpwkOZ1vUznHjVluQVIfNYoP0PNXkoZzfrgxoyBEvSMk_eJp0hW4TXTYBE9lH4pvmPksTQ2zGEg3slcJQyMBdNsbA-xfNmDaiYukjJ02l4-V-J1g3CF9y1pWgdsqKl3V2Lz73-Tlyh5cNGSR6FYYEmNbzZBQXmhI' }
];

export default function FilterableEventsGrid() {
  const [activeTab, setActiveTab] = useState('All');

  const renderedEvents = activeTab === 'All' 
    ? totalEvents 
    : totalEvents.filter(e => e.type === activeTab);

  return (
    <section className="bg-[#f3f3f3] py-16 px-6" id="grid">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#ae0011] mb-1">Find Your Event</h2>
            <p className="text-sm text-[#5d5f5f]">Browse upcoming opportunities to engage with our community.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', 'Fundraisers', 'Workshops', 'Meetups'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-bold shadow-sm transition-all ${
                  activeTab === tab
                    ? 'bg-[#ae0011] text-white'
                    : 'bg-white text-[#5d5f5f] hover:bg-[#e8e8e8]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderedEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-sm impact-card-hover group border border-gray-100">
              <div className="h-48 overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={event.title} src={event.img} />
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#ae0011]">
                    {event.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-[#ae0011] text-xs font-semibold mb-2 flex items-center gap-1">
                  <span>📅</span> {event.info}
                </div>
                <h3 className="text-lg font-bold font-serif text-[#1a1c1c] mb-2">{event.title}</h3>
                <p className="text-sm text-[#5d5f5f] mb-6 line-clamp-2 leading-relaxed">{event.desc}</p>
                <button className="w-full py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-[#1a1c1c] group-hover:bg-[#ae0011] group-hover:text-white transition-all">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}