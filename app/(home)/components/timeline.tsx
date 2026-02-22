"use client";

import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
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
  link?: string;
};

const day1: Item[] = [
  {
    title: "Online Registration Starts",
    date: "",
    time: "on 20th Feb",
    short: "Register now",
    long: "",
    link: "https://unstop.com/college-fests/cbs-codefest-20-acm-sscbs-442766",
  },
  {
    title: "Online Registration Ends",
    date: "",
    time: "on 15th March",
    short: "Last chance to register for CodeFest 2.0",
    long: "",
  },
  {
    title: "Web Auction",
    date: "DAY 1: 27th March",
    time: "10:00 AM – 12:45 PM",
    short: "Live bidding and development sprint",
    long: "Teams strategically bid for tools, APIs, and constraints before development begins. Teams develop websites using the auctioned assets.",
    link: "https://unstop.com/hackathons/web-auction-cbs-codefest-20-shaheed-sukhdev-college-of-business-studies-sscbs-du-delhi-1645678",
  },
  {
    title: "Design Apocalypse",
    date: "DAY 1: 27th March",
    time: "01:00 PM – 02:30 PM",
    short: "Time-bound UI/UX sprint",
    long: "Rapid design challenge focused on usability, creativity, and execution.",
    link: "https://unstop.com/hackathons/design-apocalypse-cbs-codefest-20-shaheed-sukhdev-college-of-business-studies-sscbs-du-delhi-1645680",
  },
  {
    title: "Blind Code",
    date: "DAY 1: 27th March",
    time: "02:45 PM – 04:15 PM",
    short: "Logic-first coding challenge",
    long: "Solve algorithmic problems without seeing test cases.",
    link: "https://unstop.com/hackathons/blind-code-cbs-codefest-20-shaheed-sukhdev-college-of-business-studies-sscbs-du-delhi-1645679",
  },
  {
    title: "Code Phantom",
    date: "DAY 1: 27th March",
    time: "04:30 PM – 06:00 PM",
    short: "DSA competition",
    long: "Efficiency-driven coding and deep problem-solving rounds.",
    link: "https://unstop.com/hackathons/code-phantom-cbs-codefest-20-shaheed-sukhdev-college-of-business-studies-sscbs-du-delhi-1645675",
  },
];


const day2: Item[] = [
  {
    title: "Hackathon Kick-off",
    date: "DAY 2: 28th March",
    time: "09:30 AM – 07:00 PM ",
    short: "Official start",
    long: "Problem statements revealed and development begins.",
    link: "https://unstop.com/college-fests/cbs-codefest-20-acm-sscbs-442766",
  },
];

/* merged timeline */
const timelineData: Item[] = [...day1, ...day2];

/* ---------------- COMPONENT ---------------- */

export default function TempleRopeTimeline() {
  const ropePath = useRef<SVGPathElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsWrapRef = useRef<HTMLDivElement>(null);

  const gap = "clamp(70px, 10vw, 170px)";
  const minHeightClass = "min-h-[200vh]";

  useLayoutEffect(() => {
    if (!ropePath.current || !sectionRef.current || !cardsWrapRef.current) return;

    ScrollTrigger.getAll().forEach((t) => {
      if (t.trigger === sectionRef.current) t.kill();
    });

    const length = ropePath.current.getTotalLength();

    gsap.set(ropePath.current, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

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
  }, []);

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className={`relative ${minHeightClass} py-20 md:py-28 overflow-hidden bg-black`}
    >
      <h1
        className={`text-[32px] md:text-[70px] text-center text-yellow-400 tracking-widest ${cinzel.className}`}
      >
        Timeline
      </h1>

      <div ref={cardsWrapRef} className="relative mt-14 md:mt-20">

        {/* Rope */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <svg width="300" height="4500" viewBox="0 0 300 4500" fill="none">
            <defs>
              <linearGradient id="ropeGradient" x1="0" y1="0" x2="0" y2="3000">
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
                C50 1350, 250 1550, 150 1750
                C50 1950, 250 2050, 150 2200

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
              className={`relative flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"} justify-center`}
              style={{ marginTop: index === 0 ? "10px" : gap }}
            >
              <div className="md:w-[42%] w-full max-w-xl bg-black border border-yellow-700/40 rounded-xl p-4 md:p-6 shadow-lg">
                <div className="flex items-center justify-between mb-2 gap-4">
                  {item.link ? (
                    item.title.toLowerCase().includes("registration") ? (
                      <h3 className="text-lg md:text-xl font-semibold text-yellow-400">
                        {item.title}
                      </h3>
                    ) : (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
        text-lg md:text-xl font-semibold text-yellow-400
        hover:text-yellow-300 hover:underline
        transition cursor-pointer
      "
                      >
                        {item.title}
                      </a>
                    )
                  ) : (
                    <h3 className="text-lg md:text-xl font-semibold text-yellow-400">
                      {item.title}
                    </h3>
                  )}
                  <span className="text-s font-bold text-white-900 whitespace-nowrap">
                    {item.date}
                  </span>
                </div>

                <p className="text-sm text-neutral-300 mb-3">{item.time}</p>
                {item.link ? (
                  !item.title.toLowerCase().includes("registration") ? (
                    <p className="text-sm text-neutral-300 mb-3">
                    {item.short}
                  </p>

                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
      inline-block
      mb-3
      border border-yellow-500/40
      bg-yellow-500/10
      hover:bg-yellow-500/20
      hover:border-yellow-400

      text-yellow-400
      hover:text-yellow-300

      font-semibold text-sm
      px-4 py-1

      rounded-lg

      transition-all duration-200
    "
                    >
                      {item.short}
                    </a>
                  )
                ) : (
                  <p className="text-sm text-neutral-300 mb-3">
                    {item.short}
                  </p>
                )}
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
