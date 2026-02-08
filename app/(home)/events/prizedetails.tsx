"use client";

import React from "react";

type Prize = {
  title: string;
  amount: string;
  subtitle: string;
  desc: string;
  iconSrc: string;
  iconAlt: string;
};

const mainPrizes: Prize[] = [
  {
    title: "FIRST PLACE",
    amount: "₹50,000",
    subtitle: "National Hackathon Winner",
    desc: "",
    iconSrc: "/first.png",
    iconAlt: "First place",
  },
  {
    title: "SECOND PLACE",
    amount: "₹30,000",
    subtitle: "First Runner-up",
    desc: "",
    iconSrc: "/second.png",
    iconAlt: "Second place",
  },
  {
    title: "THIRD PLACE",
    amount: "₹15,000",
    subtitle: "Second Runner-up",
    desc: "",
    iconSrc: "/third.png",
    iconAlt: "Third place",
  },
];

const eventPrizes: Prize[] = [
  {
    title: "1st Prize",
    amount: "₹3,000",
    subtitle: "Per event",
    desc: "Web Auction • Design Apocalypse • Blind Code • Code Phantom",
    iconSrc: "/first.png",
    iconAlt: "Event first",
  },
  {
    title: "2nd Prize",
    amount: "₹1,500",
    subtitle: "Per event",
    desc: "Web Auction • Design Apocalypse • Blind Code • Code Phantom",
    iconSrc: "/second.png",
    iconAlt: "Event second",
  },
  {
    title: "3rd Prize",
    amount: "₹500",
    subtitle: "Per event",
    desc: "Web Auction • Design Apocalypse • Blind Code • Code Phantom",
    iconSrc: "/third.png",
    iconAlt: "Event third",
  },
];

const specialPrizes: Prize[] = [
  {
    title: "Best Beginner Team",
    amount: "₹2,000",
    subtitle: "Special Recognition Award",
    desc: "+ Swags & Goodies",
    iconSrc: "/beginner.png",
    iconAlt: "Best beginner",
  },
  {
    title: "Best Girls Team",
    amount: "₹2,000",
    subtitle: "Special Recognition Award",
    desc: "+ Swags & Goodies",
    iconSrc: "/girl.png",
    iconAlt: "Best girls team",
  },  {
    title: "Best Use of GenAI",
    amount: "",
    subtitle: "Cash Prize of INR 5,000",
    desc: "+ Swags and Goodies",
    iconSrc: "/genai.png",
    iconAlt: "Best use of GenAI",
  },
];


function PrizeCard({ p }: { p: Prize }) {
  return (
    <div
      className="
        group relative
        w-80 h-[22rem]
        bg-black/70 backdrop-blur
        border-t border-gray-700 border-t-gray-500 border-l  border-r
        rounded-xl place-content-center
        px-8 pt-16 pb-10
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        transition-all duration-300
        hover:-translate-y-2
      "
    >
      {/* Icon */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <div
          className="
            h-24 w-24 rounded-full
            bg-black
            border-2 border-yellow-400
            flex items-center justify-center
            shadow-[0_12px_30px_rgba(0,0,0,0.6)]
          "
        >
          <img
            src={p.iconSrc}
            alt={p.iconAlt}
            className="
              h-12 w-12 select-none
              transition-transform
              group-hover:animate-bounce
              [animation-duration:0.6s]
            "
            draggable={false}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center">
        {p.amount ? (
          <div className="text-yellow-400 font-extrabold text-3xl md:text-4xl tracking-wide">
            {p.amount}
          </div>
        ) : (
          <div className="text-white font-extrabold text-2xl leading-tight">
            {p.title}
          </div>
        )}

        {p.amount ? (
          <>
            <div className="mt-6 text-white/80 font-semibold tracking-wide">
              {p.title}
            </div>
            <div className="mt-1 text-white/60 text-sm">
              {p.subtitle}
            </div>
          </>
        ) : (
          <>
            <div className="mt-6 text-white/70 text-sm">
              {p.subtitle}
            </div>
            <div className="mt-2 text-white/60 text-sm">
              {p.desc}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function PrizeSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-24">
      <div className="text-center mb-14">
        <h3 className="text-2xl md:text-3xl font-extrabold text-yellow-400">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-2 text-white/60 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-14">
        {children}
      </div>
    </div>
  );
}

export default function PrizesSection() {
  return (
    <section className="bg-black py-28 px-6" id="prizes">
      <div className="mx-auto max-w-6xl">

        {/* PAGE HEADER */}
        <div className="text-center mb-24">
          <p className="text-yellow-500 font-semibold tracking-widest uppercase">
            Prizes
          </p>
          <h2 className="mt-3 text-white text-3xl md:text-5xl font-extrabold">
            Win Big. Build Bigger.
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Compete across national-level challenges, individual events,
            and special recognition categories.
          </p>
        </div>

        {/* MAIN HACKATHON PRIZES */}
        <PrizeSection
          title="National Hackathon Winners"
          subtitle="Top 3 teams across the entire hackathon"
        >
          {mainPrizes.map((p) => (
            <PrizeCard key={p.title} p={p} />
          ))}
        </PrizeSection>

        {/* EVENT PRIZES */}
        <PrizeSection
          title="Day 1 Competitions"
          subtitle="Each event has its own winners"
        >
          {eventPrizes.map((p) => (
            <PrizeCard key={p.title} p={p} />
          ))}
        </PrizeSection>

        {/* SPECIAL PRIZES */}
        <PrizeSection
          title="Special Awards"
          subtitle="Celebrating diversity, beginners, and excellence"
        >
          {specialPrizes.map((p) => (
            <PrizeCard key={p.title} p={p} />
          ))}
        </PrizeSection>

      </div>
    </section>
  );
}
