import EducationPillar from "@/components/sections/EducationPillar";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import HealthcarePillar from "@/components/sections/HealthcarePillar";
import HorizonsSection from "@/components/sections/HorizonsSection";
import ImpactGallery from "@/components/sections/ImpactGallery";
import ProgramsHero from "@/components/sections/ProgramsHero";
import VolunteerCTA from "@/components/sections/VolunteerCTA";


export default function ProgramsPage() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen selection:bg-[#ffdad6] selection:text-[#410002]">
      <Header />
      <main className="pt-24">
        <ProgramsHero />
        <EducationPillar />
        <HealthcarePillar />
        <HorizonsSection />
        <ImpactGallery />
        <VolunteerCTA />
      </main>
      <Footer />
    </div>
  );
}