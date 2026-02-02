import EventsCarousel from "@/components/ui/event-main";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "800"],
});

export default function Events() {
  const testimonials = [
    {
      title: "Web Auction",
      date: "DAY 1",
      time: "10:00 AM – 10:45 AM",
      short: "Strategy Driven Web Development Challenge",
      long:
        "Teams participate in a live auction where frameworks, APIs, and special advantages are bid upon using limited credits. Every decision impacts capability. After the auction, teams immediately enter a build phase, crafting functional web solutions with the assets they secured. Strategy determines leverage. Execution determines survival.",
      prize_pool: "Prize Pool: ₹10,000",
    },
    {
      title: "Design Apocalypse",
      date: "DAY 1",
      time: "01:00 PM – 02:30 PM",
      short: "Time Bound UI/UX Design Sprint",
      long:
        "A fast-paced UI/UX design sprint where teams conceptualize, prototype, and present complete user experiences within strict time limits. Participants are evaluated on usability, visual clarity, creativity, and practical feasibility. Speed matters — but thoughtful design wins.",
      prize_pool: "Prize Pool: ₹10,000",
    },
    {
      title: "Blind Code",
      date: "DAY 1",
      time: "02:45 PM – 04:15 PM",
      short: "Logic Based Coding Without Test Case Visibility",
      long:
        "Contestants solve algorithmic problems without access to visible test cases or instant feedback. With no trial-and-error safety net, participants must rely entirely on reasoning, edge-case analysis, and pure logic. Precision thinking replaces guesswork.",
      prize_pool: "Prize Pool: ₹10,000",
    },
    {
      title: "Code Phantom",
      date: "DAY 1",
      time: "04:30 PM – 06:00 PM",
      short: "Data Structures & Algorithmic Problem Solving",
      long:
        "An intensive DSA challenge focused on complexity optimization and deep problem solving. Participants tackle layered questions that demand efficient algorithms, strong fundamentals, and clean implementation. It’s not about writing code fast — it’s about writing it right.",
      prize_pool: "Prize Pool: ₹10,000",
    },
    {
      title: "National Hackathon",
      date: "DAY 2",
      time: "09:30 AM",
      short: "12 Hour Offline Hackathon",
      long:
        "The flagship 12-hour offline hackathon where teams transform ideas into working products. Participants brainstorm, architect, develop, and refine real-world solutions under continuous mentoring and checkpoints. Innovation, technical depth, and impact drive evaluation. This is where concepts become reality.",
      prize_pool: "Prize Pool: ₹70,000 (Combined Winner Pool)",
    },
    {
      title: "Final Presentation",
      date: "DAY 2",
      time: "07:15 PM – 08:30 PM",
      short: "Top teams pitch live",
      long:
        "Shortlisted teams present their solutions before judges and peers through live demonstrations and structured pitches. Teams must communicate their problem statement, technical approach, and measurable impact clearly. Storytelling and clarity become as critical as the build itself.",
      prize_pool: "",
    },
    {
      title: "Results & Awards",
      date: "DAY 2",
      time: "",
      short: "Winners announced",
      long:
        "The closing ceremony celebrates excellence across all tracks. Final rankings are revealed, prizes distributed, and standout performances recognized. Beyond awards, it marks the culmination of two days of learning, collaboration, and relentless creation.",
      prize_pool: "Prize Pool: ₹1,20,000 + Goodies",
    },
  ];




  return (
    <div
      className="flex flex-col items-center justify-center
                 py-5 space-y-16"
      id="events"
    >
      {/* ================= HEADING ================= */}
      <h2
        className={`${cinzel.className}
          text-yellow-500
          text-5xl md:text-6xl
          font-extrabold
          tracking-[0.25em]
          text-center`}
      >
        EVENTS
      </h2>

      {/* ================= LIST BOX ================= */}
      <div
        className="
          w-full max-w-4xl
          bg-white/5 border border-white/10
          rounded-2xl
          divide-y divide-white/10
          backdrop-blur-sm
        "
      >
        {testimonials.map((e, i) => (
          <div
            key={i}
            className="
              flex flex-col md:flex-row
              md:items-center
              justify-between
              px-6 py-4
              text-white/80
              hover:bg-white/5
              transition-colors
            "
          >
            {/* title */}
            <span className="font-medium text-white">
              {e.title}
            </span>

            {/* date/time */}
            <span className="text-sm text-yellow-400 mt-1 md:mt-0 whitespace-nowrap">
              {e.short}
            </span>
          </div>
        ))}
      </div>

      {/* ================= CAROUSEL ================= */}
      <EventsCarousel events={testimonials} />
    </div>
  );
}
