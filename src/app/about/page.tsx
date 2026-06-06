import AboutHero from "@/components/sections/AboutHero";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import HistoryTimeline from "@/components/sections/HistoryTimeline";
import LeadershipTeam from "@/components/sections/LeadershipTeam";
import MissionsCTA from "@/components/sections/MissionsCTA";
import TransparencyAudits from "@/components/sections/TransparencyAudits";
import VisionMissionSplit from "@/components/sections/VisionMissionSplit";


export default function AboutPage() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen selection:bg-[#ffdad6] selection:text-[#410002]">
      <Header />
      <main className="pt-20">
        <AboutHero />
        <VisionMissionSplit />
        <HistoryTimeline />
        <LeadershipTeam />
        <TransparencyAudits />
        <MissionsCTA />
      </main>
      <Footer />
    </div>
  );
}