// components/CampaignsCalendar.tsx
const localEvents = [
  { id: 1, date: 'Oct 12, 2024', title: 'Urban Greenery Awareness Drive', location: 'Lodi Gardens, New Delhi', desc: 'Helping plant 500 saplings and educating local communities on sustainable waste management practices.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUcSCBgylP5iTvAf4c4ZCCJ7qmZmvKDOCMmkcK3C4rLT4E1Vn-ch_DGf8tRiFmIfmdQ8xRWJGqimvS2xftNXtoVkDKVUadRDct5rcx23IkmYjj3wprSjDM75MypaQTP05dF0jqbE-6bURHo0Odh6WBBVDWy0zL-YAtSkNxk2pRrHDZ-5lRwU4oZz2VunSlNtVKwABXHoCtcgqejgNtv3krSO6OKkaeoVBgsa81jfbgQn8rw93LowcwWo4Yh3ymm3sstjpDJ24aUMo' },
  { id: 2, date: 'Oct 28, 2024', title: 'Child Health & Wellness Camp', location: 'Slum Cluster Sector 16, Gurgaon', desc: 'Free medical checkups, immunizations, and nutrition workshops for children aged 5-12.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJkhp8ClZ6W3bP5UySqJM7xvA6gZhBuUnmHiFDcU0ztiYkIAp8LhHReXcF7mKvJv80uoP3VstXNaieovPsjQor2bhodY2wJ1wus6gxpu4RWvVM7LJSW2_XAwYt8qM0sEQ3L6NifFumyVlLLIX4jCnVIEVF32YRv0YF0H3AsPzdZXAINVdCmHWfx3pYegLLqTN_2ZNZZSwkosPhqfj3ADWMzlY90ZBt0uZVFSkzQHobJKF0eANJbKvm7Rnx4RcsYEli0RlE99G9Xqg' },
  { id: 3, date: 'Nov 05, 2024', title: 'Corporate Impact Summit 2024', location: 'Virtual Event (Zoom)', desc: 'A strategy session for CSR leaders to discuss scalable models for rural empowerment and sustainability.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbibBmSlrhUZ9HD6fJOg78Z3Aufuc9vTg7lQ3hnZqtZZaflEKt3x50Y-jz6AD1LBIU9HcUoLffuAIVYxCvYiER9xrL8av2wASXNExxsQv2_GxIud1PU-7XlLbUe288WvaLNo69EdHUa7QimkIibtfcHAnJSef8kpOgcfUNaSCdS8sYoS10B72ssswwjhE5nfwJTk30Xs1Ro9-f5yAZsreU9foqxMJc0zAJay-90Hy_NQdUf9_9EsRX02V7mVqarZ0fIagqv5e36sM' }
];

export default function CampaignsCalendar() {
  return (
    <section className="bg-[#f3f3f3] py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1c1c] font-serif mb-2">Upcoming Campaigns & Drives</h2>
            <p className="text-sm text-[#5d5f5f]">Be the boots on the ground. Join our upcoming initiatives to make a tangible difference in real-time.</p>
          </div>
          <a className="text-[#ae0011] text-sm font-semibold flex items-center gap-1 group" href="#">
            <span>View All Events</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {localEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={event.title} src={event.img} />
                <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-xs font-bold text-[#ae0011] shadow-md">
                  {event.date}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#1a1c1c] font-serif leading-snug">{event.title}</h3>
                <div className="flex items-center text-[#5d5f5f] text-xs gap-1">
                  <span>📍</span>
                  <span>{event.location}</span>
                </div>
                <p className="text-sm text-[#5d5f5f] line-clamp-2 leading-relaxed">{event.desc}</p>
                <button className="w-full py-3 border-2 border-[#ae0011] text-[#ae0011] text-sm font-bold rounded-xl hover:bg-[#ae0011] hover:text-white transition-all">
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