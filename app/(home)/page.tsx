import Image from "next/image";
import Hero from "./components/hero";
import TempleRopeTimeline from "./components/timeline";
import AboutSection from "./components/about";
import SponsorsSection from "./components/sponsors";
import PrizesSection from "./components/prizes";
import MeetTheTeam from "./components/team";
import Mentors from "./components/mentors";
import FAQ from "./components/faq";
import Glimpses from "./components/glimpses"

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-black">
      
      {/* Background Image */}
      {/* <div className="fixed inset-0 h-screen -z-10">
        <video
          src="/temp.mp4"
          autoPlay
          muted
          className="object-cover h-screen w-full"
        />
                <div className="absolute inset-0 bg-black/80" />
      </div> */}

      <Hero />
      <TempleRopeTimeline />
      <AboutSection />
      <Glimpses/>
      <PrizesSection/>
      <SponsorsSection />
      <MeetTheTeam/>
      <Mentors/>
      <FAQ/>
    </main>
  );
}
