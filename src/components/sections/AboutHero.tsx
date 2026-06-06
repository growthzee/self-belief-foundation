// components/AboutHero.tsx
export default function AboutHero() {
  return (
    <section className="relative h-[716px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <img 
          className="w-full h-full object-cover" 
          alt="Diverse community members holding hands together beneath golden morning horizon sunrise" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7vE3GZEqvcfIYQCnVplf6gcpLMe8uQ-DjbQ5X6Npm1IsBV602m1Gc9FPEpMzOJvkgDn6luUhyRsdLwpP9VxwgrjZzBwSdQd2nPZR3Eh-m8xUZHZrAH01tEnp3RweVo3m__I8TsZTZiWzlzTNhigQMUxDUMugD74K5fT7HxT6s5BzOMc8fR14B5ujVYzYYjrGLhvz7zgBk6XRZJw0HKlwjHM_i3sloi3Ux50s_ORSm_7DjhDbEVPdcVzgvvqVhlBoMNQfk6PzztPI" 
        />
      </div>
      <div className="relative z-20 max-w-[1280px] mx-auto px-6 w-full">
        <div className="max-w-2xl text-white">
          <span className="inline-block bg-[#ae0011] px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">Our Journey</span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 leading-tight">Our Story & Mission</h1>
          <p className="text-lg opacity-90 leading-relaxed">
            Founded on the belief that human dignity is a right, not a privilege. We empower marginalized communities through sustainable infrastructure, education, and direct health interventions.
          </p>
        </div>
      </div>
    </section>
  );
}