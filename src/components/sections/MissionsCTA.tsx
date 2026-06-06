// components/MissionsCTA.tsx
export default function MissionsCTA() {
  return (
    <section className="py-16 bg-[#ae0011] text-white text-center">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Be a Part of the Story</h2>
        <p className="text-base mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
          Whether through donating, volunteering, or spreading the word, your belief in human potential is what drives us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[#ae0011] text-sm font-bold px-8 py-4 rounded-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95">
            Support Our Mission
          </button>
          <button className="border-2 border-white text-white text-sm font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
}