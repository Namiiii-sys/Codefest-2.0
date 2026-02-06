"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "800"],
});

gsap.registerPlugin(ScrollTrigger);

/* ---------------- DATA ---------------- */

type Item = {
  title: string;
  date: string;
  short: string;
  time: string;
  long: string;
};

const day1: Item[] = [
  {
    title: "Registration & Check-in",
    date: "DAY 1",
    time: "08:45 AM – 09:30 AM",
    short: "Participant verification and kit distribution",
    long: "Entry formalities, ID verification, and welcome kits handed out.",
  },
  {
    title: "Opening Briefing",
    date: "DAY 1",
    time: "09:30 AM – 09:45 AM",
    short: "Event overview & rules",
    long: "Walkthrough of schedule, competition rules, judging criteria, and flow of the day.",
  },
  {
    title: "Web Auction – Auction Phase",
    date: "DAY 1",
    time: "10:00 AM – 10:45 AM",
    short: "Live bidding for tech resources",
    long: "Teams strategically bid for tools, APIs, and constraints before development begins.",
  },
  {
    title: "Web Auction – Build Phase",
    date: "DAY 1",
    time: "10:45 AM – 12:45 PM",
    short: "Development sprint",
    long: "Teams develop websites using the auctioned assets.",
  },
  {
    title: "Design Apocalypse",
    date: "DAY 1",
    time: "01:00 PM – 02:30 PM",
    short: "Time-bound UI/UX sprint",
    long: "Rapid design challenge focused on usability, creativity, and execution.",
  },
  {
    title: "Blind Code",
    date: "DAY 1",
    time: "02:45 PM – 04:15 PM",
    short: "Logic-first coding challenge",
    long: "Solve algorithmic problems without seeing test cases.",
  },
  {
    title: "Code Phantom",
    date: "DAY 1",
    time: "04:30 PM – 06:00 PM",
    short: "DSA competition",
    long: "Efficiency-driven coding and deep problem-solving rounds.",
  },
  {
    title: "Day 1 Closing",
    date: "DAY 1",
    time: "06:00 PM – 06:15 PM",
    short: "Hackathon briefing",
    long: "Instructions, reporting time, and preparation guidelines for Day 2 hackathon.",
  },
];


const day2: Item[] = [
  {
    title: "Breakfast & Check-in",
    date: "DAY 2",
    time: "08:30 AM – 09:30 AM",
    short: "Arrival & refreshment",
    long: "Participants settle in and prepare for the hackathon start.",
  },
  {
    title: "Hackathon Kick-off",
    date: "DAY 2",
    time: "09:30 AM",
    short: "Official start",
    long: "Problem statements revealed and development begins.",
  },
  {
    title: "Build Phase 1",
    date: "DAY 2",
    time: "10:00 AM – 12:00 PM",
    short: "Core development window",
    long: "Focused implementation of project fundamentals.",
  },
  {
    title: "Mentoring Round 1",
    date: "DAY 2",
    time: "12:00 PM – 01:00 PM",
    short: "Idea validation & feedback",
    long: "Mentors guide feasibility, scope, and improvements.",
  },
  {
    title: "Lunch Break",
    date: "DAY 2",
    time: "01:00 PM – 01:45 PM",
    short: "Rest & recharge",
    long: "Participants take a short break before the final sprint.",
  },
  {
    title: "Build Phase 2",
    date: "DAY 2",
    time: "01:45 PM – 04:00 PM",
    short: "Major development window",
    long: "Feature completion and testing phase.",
  },
  {
    title: "Final Mentoring Round",
    date: "DAY 2",
    time: "04:00 PM – 05:00 PM",
    short: "Optimization & pitch guidance",
    long: "Final polishing, debugging, and presentation strategy.",
  },
  {
    title: "Tea Break & Shortlisting",
    date: "DAY 2",
    time: "05:00 PM – 05:30 PM",
    short: "Top 10 teams announced",
    long: "Refreshments served and finalists shortlisted.",
  },
  {
    title: "Final Build & Submission",
    date: "DAY 2",
    time: "05:30 PM – 07:00 PM",
    short: "Last refinement sprint",
    long: "Shortlisted teams finalize and submit projects.",
  },
  {
    title: "Final Submission Deadline",
    date: "DAY 2",
    time: "07:00 PM",
    short: "Submissions close",
    long: "All code and deliverables must be submitted.",
  },
  {
    title: "Judging & Presentations",
    date: "DAY 2",
    time: "07:15 PM – 08:30 PM",
    short: "Top teams demo",
    long: "Live demonstrations and evaluation by judges.",
  },
  {
    title: "Closing Ceremony",
    date: "DAY 2",
    time: "08:30 PM – 09:00 PM",
    short: "Awards & results",
    long: "Winners announced, prizes distributed, vote of thanks.",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function TempleRopeTimeline() {
  const ropePath = useRef<SVGPathElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsWrapRef = useRef<HTMLDivElement>(null);

  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");

  const timelineData = activeDay === "day1" ? day1 : day2;

  // dynamic spacing based on content size
  const gap = useMemo(() => {
    // smaller content -> tighter spacing
    return activeDay === "day2" ? "clamp(60px, 8vw, 150px)" : "clamp(90px, 12vw, 190px)";
  }, [activeDay]);

  // dynamic min height so Day 2 doesn't feel overly tall
  const minHeightClass = activeDay === "day2" ? "min-h-[130vh]" : "min-h-[160vh]";

  useLayoutEffect(() => {
    if (!ropePath.current || !sectionRef.current || !cardsWrapRef.current) return;

    // kill old triggers on switch
    ScrollTrigger.getAll().forEach((t) => {
      if (t.trigger === sectionRef.current) t.kill();
    });

    const length = ropePath.current.getTotalLength();

    gsap.set(ropePath.current, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // start rope AFTER heading + day switcher
    const startEl = cardsWrapRef.current;

    gsap.to(ropePath.current, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: startEl,
        start: "top center",
        end: () => `+=${length}`,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === startEl) t.kill();
      });
    };
  }, [activeDay]);

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className={`relative ${minHeightClass} py-20 md:py-28 overflow-hidden bg-black `}
    >
      {/* 1) Heading */}
      <h1
        className={`text-[32px] md:text-[70px] text-center text-yellow-400 tracking-widest ${cinzel.className}`}
      >
        Timeline
      </h1>

      {/* 2) Day selector */}
      <div className="mt-6 flex justify-center gap-10">
        {(["day1", "day2"] as const).map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className="flex items-center gap-3 group"
          >
            <span
              className={`w-4 h-4 rounded-full border-2 transition-all
                ${activeDay === day
                  ? "bg-yellow-400 border-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.9)]"
                  : "border-neutral-500 group-hover:border-yellow-300"
                }`}
            />
            <span
              className={`uppercase tracking-widest text-sm md:text-base transition-colors
                ${activeDay === day
                  ? "text-yellow-400"
                  : "text-neutral-400 group-hover:text-yellow-300"
                }`}
            >
              {day === "day1" ? "Day 1" : "Day 2"}
            </span>
          </button>
        ))}
      </div>

      {/* 3) Rope + Cards start AFTER selector */}
      <div ref={cardsWrapRef} className="relative mt-14 md:mt-20">
        {/* Rope (center) */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <svg
            width="300"
            height="3250"
            viewBox="0 0 300 3400"
            fill="none"
            className="overflow-visible"
          >
            <defs>
              <linearGradient id="ropeGradient" x1="0" y1="0" x2="0" y2="2000">
                <stop offset="0%" stopColor="#a16207" />
                <stop offset="50%" stopColor="#facc15" />
                <stop offset="100%" stopColor="#fde047" />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              ref={ropePath}
              d="
                M150 0
                C50 150, 250 350, 150 550
                C50 750, 250 950, 150 1150
                C50 1350, 250 1550, 150 1750,
                C50 1950, 250 2000, 150 2250,
                C50 2550, 250 2500, 150 2750,
                C50 3150, 250 3000, 150 3250 
              "
              stroke="url(#ropeGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              filter="url(#glow)"
              fill="none"
            />
          </svg>
        </div>

        {/* Cards */}
        <div className="relative max-w-6xl mx-auto px-4">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } justify-center`}
              style={{
                marginTop: index === 0 ? "10px" : gap,
              }}
            >
              <div className="md:w-[42%] w-full max-w-xl bg-black border border-yellow-700/40 rounded-xl p-4 md:p-6 shadow-lg">
                <div className="flex items-center justify-between mb-2 gap-4">
                  <h3 className="text-lg md:text-xl font-semibold text-yellow-400">
                    {item.title}
                  </h3>
                  <span className="text-xs text-neutral-400 whitespace-nowrap">
                    {item.date}
                  </span>
                </div>
                <p className="text-sm text-neutral-300 mb-3">{item.time}</p>
                <p className="text-sm text-neutral-300 mb-3">{item.short}</p>


                <div className="w-12 h-[1px] bg-yellow-600 mb-3" />

                <p className="md:text-md text-sm text-neutral-200 leading-relaxed whitespace-pre-line">
                  {item.long}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
