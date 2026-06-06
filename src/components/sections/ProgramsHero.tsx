// components/ProgramsHero.tsx
export default function ProgramsHero() {
  return (
    <header className="relative h-[409px] flex items-center justify-center overflow-hidden bg-[#e2e2e2]">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000" 
          alt="Serene community center architecture, rural golden hour landscape" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7-dugI8f5Js5LPQr0_LrUtrZqOfjw2ZOtd8TayqTT-OBvojWOebca4S0wpbT4tyNVYyM2AOvYJER43nFrcFIebRteFfOXXZaSYKt_DQT5QuBLgj5bOGTKisQmhjEFkbrS1r-uXPe3eHuICqYHTSk8QgdMXN1GOayb86uPymF373V9oMO_zLdRJAB0aWu4HZZW6gCzYOtN-l_bOlzxhPHqS2-JCUO2lcQISPbQRunVXfTPLiHrf6LkWX1D8dvcQEIOd6XLjMUYYMc"
        />
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <nav className="flex justify-center gap-2 mb-4 text-xs font-semibold uppercase tracking-widest text-[#5d5f5f]">
          <a className="hover:text-[#ae0011] transition-colors" href="#">Home</a>
          <span>/</span>
          <span className="text-[#1a1c1c] font-bold">Impact & Programs</span>
        </nav>
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-[#1a1c1c] leading-tight mb-4">
          Our Impact & Programs
        </h1>
        <div className="h-1.5 w-24 bg-[#ae0011] mx-auto rounded-full"></div>
      </div>
    </header>
  );
}