import DonationSection from "@/components/sections/DonationSection";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ImpactStats from "@/components/sections/ImpactStats";
import Programs from "@/components/sections/Programs";
import SuccessStories from "@/components/sections/SuccessStories";


export default function Home() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen font-sans selection:bg-[#ffdad6] selection:text-[#410002]">
      <Header />
      <main>
        <Hero />
        <ImpactStats />
        <Programs />
        <SuccessStories />
        <DonationSection />
      </main>
      <Footer />
    </div>
  );
}