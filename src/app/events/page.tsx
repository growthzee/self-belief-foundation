// app/events/page.tsx

import EventsHero from "@/components/sections/EventsHero";
import FeaturedCountdown from "@/components/sections/FeaturedCountdown";
import FilterableEventsGrid from "@/components/sections/FilterableEventsGrid";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import HostFundraiserCTA from "@/components/sections/HostFundraiserCTA";
import PastGatheringsImpact from "@/components/sections/PastGatheringsImpact";


export default function EventsPage() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen selection:bg-[#ffdad6] selection:text-[#410002]">
      <Header />
      <main className="pt-20">
        <EventsHero />
        <FeaturedCountdown />
        <FilterableEventsGrid />
        <PastGatheringsImpact />
        <HostFundraiserCTA />
      </main>
      <Footer />
    </div>
  );
}