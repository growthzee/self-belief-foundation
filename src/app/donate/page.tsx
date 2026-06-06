// app/get-involved/page.tsx


import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import GetInvolvedHero from '@/components/sections/GetInvolvedHero';
import DonationModule from '@/components/sections/DonationModule';
import CampaignsCalendar from '@/components/sections/CampaignsCalendar';
import JoinMovementForm from '@/components/sections/JoinMovementForm';


export default function GetInvolvedPage() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen font-sans selection:bg-[#ae0011]/20">
      <Header />
      <main className="pt-24">
        <GetInvolvedHero />
        <DonationModule />
        <CampaignsCalendar />
        <JoinMovementForm />
      </main>
      <Footer />
    </div>
  );
}