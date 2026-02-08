
import Hero from "./components/hero";
import TempleRopeTimeline from "./components/timeline";
import AboutSection from "./components/about";
import SponsorsSection from "./components/sponsors";
import PrizesSection from "./components/prizes";
import MeetTheTeam from "./components/team";
import Mentors from "./components/mentors";
import FAQ from "./components/faq";
import MoreSponsors from "./events/moresponsors";

export default function Home() {
  return (
      <main className="relative w-full bg-black">
        <Hero />
        <TempleRopeTimeline />
        <AboutSection />
        <PrizesSection />
        <SponsorsSection />
        <MoreSponsors />
        <MeetTheTeam />
        <Mentors />
        <FAQ />
      </main>
  );
}
