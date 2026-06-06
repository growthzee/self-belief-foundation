// components/PastGatheringsImpact.tsx
export default function PastGatheringsImpact() {
  return (
    <section className="py-16 px-6 max-w-[1280px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold font-serif mb-12 text-center text-[#1a1c1c]">
        Impact of Past Gatherings
      </h2>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {/* Gallery Box 1 */}
        <div className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm">
          <img className="w-full h-auto" alt="Strategic seminar execution output" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT_1aJMS_KtZiKtBigSZa62pRCddPbO8GBINpEREzkKhr3art0aZXSmfjbQv3O025U4f-rUzt_hYYJabnak8NtMQTBAIAY-e24-C4lyjrRSJyks2Y4fFn3h24jsVvcYsFqP41NQyuVtsJYyym9Z4CLE6ZaSnOgU2YkLxPQavgVVu8G-yaceTkwSW14C3fhvpoJILfhO5Y_JasB8fSdSzg-kIU0VCBPdpCRKspfxeVQwUy1lp14aNbV-lFHsTm2DefvlJoK7O-uP-Q" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
            <p className="text-white font-bold font-serif text-lg">Impact Summit 2023</p>
            <p className="text-white/80 text-xs font-semibold mt-0.5">Raised $500k for Education</p>
          </div>
        </div>

        {/* Highlight Card Metric */}
        <div className="break-inside-avoid relative rounded-2xl bg-[#d71920] p-6 text-[#ffece9]">
          <div className="text-3xl mb-2">🤝</div>
          <p className="text-4xl font-bold font-serif mb-1">4.2k+</p>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Volunteers Engaged Yearly</p>
        </div>

        {/* Gallery Box 2 */}
        <div className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm">
          <img className="w-full h-auto" alt="Eco conservation planting project" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhr1lQZNpYFe188OFjjPGr0bISL-blJlXUuyWNrD3qKg1CV1Wdfy0u6eYASpokaU_g4Br__hjU9T73IOJ_dQR1krH97TnqFPhrBpsDvMUZg37l0w9E4XIpzP9S6GrDG8yLBzprgY7XEhFcI0zm30EDLaAvq05puI1FA3YqzqrZKHltcREVy9_JFrvhkLVCiuOk0hGNoEkeuuo8JuiRt6tyAFYh8mz0aauJ4Shc5fHjUiZjcFhK8_nWdysKiUxfNXqmHYj_-j1yngQ" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
            <p className="text-white font-bold font-serif text-lg">Green City Drive</p>
            <p className="text-white/80 text-xs font-semibold mt-0.5">Planted 10,000 Saplings</p>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="break-inside-avoid relative rounded-2xl bg-[#e2e2e2] p-6 text-[#1a1c1c]">
          <p className="text-sm italic leading-relaxed mb-4">
            `&quot;The energy at the last meetup was transformative. It&apos;s rare to see such professionalism paired with pure heart.`&quot;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#c6c6c7]" />
            <div>
              <p className="text-xs font-bold">Sarah Jenkins</p>
              <p className="text-[10px] text-[#5d5f5f] font-medium">Corporate Partner</p>
            </div>
          </div>
        </div>

        {/* Gallery Box 3 */}
        <div className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm">
          <img className="w-full h-auto" alt="Triumphant local charity run event track focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX2KIc8T_GwKyK5em2DWVpTwUZl7D2KPoAwpV9aQlFC66TC7dv70OEclLtXh7yYta24l9PJKvgi5dqVVtnNcQ6SUDFcOGwealqKGoGbfXWpi6yedR4cYUIEXiyMAfGa7C3ahd8_9EPLb3JoT623hJknM5OtaCMfv3HfXXAhzz8PK3FZb8vKrZgo_dKnXqrVTeCn7sDm7QGdH8WT8MhVtCquEfGhMD3cBaOjPuh1MLX-k8Mazi4GhtBwc8cVPadgEWm23TIxxppEPg" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
            <p className="text-white font-bold font-serif text-lg">Marathon for Hope</p>
            <p className="text-white/80 text-xs font-semibold mt-0.5">2,500 Participants</p>
          </div>
        </div>
      </div>
    </section>
  );
}