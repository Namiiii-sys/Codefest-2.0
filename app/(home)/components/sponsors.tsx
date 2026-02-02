"use client";

import { div } from "framer-motion/client";
import React from "react";

type Sponsor = {
  src: string;
  alt: string;
};

const Card = ({ s }: { s: Sponsor }) => (
  <div className="relative w-fit">
      <span className="absolute -top-1 -right-1 h-[5px] w-1/2 bg-yellow-500 rounded-full" />
    <span className="absolute -top-1 -right-1 w-[5px] h-1/2 bg-yellow-500 rounded-full" />

    {/* BOTTOM-LEFT OUTSIDE */}
    <span className="absolute -bottom-1 -left-1 h-[5px] w-1/2 bg-yellow-500 rounded-full" />
    <span className="absolute -bottom-1 -left-1 w-[5px] h-1/2 bg-yellow-500 rounded-full" />
    <div
      className="
        bg-white rounded-sm
        shadow-[0_14px_40px_rgba(0,0,0,0.35)]
        p-6 flex items-center justify-center
        transition-transform duration-300 md:w-120 w-90 h-50
      "
    >
    {/* TOP-RIGHT CORNER */}
    {/* top half */}
  

    <img
      src={s.src}
      alt={s.alt}
      className="max-h-30 w-auto object-contain"
      draggable={false}
    />
  </div>
  </div>
);

const SmallCard = ({ s }: { s: Sponsor }) => (
  <div className="relative">
     {/* TOP-RIGHT */}
    <span className="absolute top-0 right-0 h-[4px] w-1/2 bg-yellow-500 rounded-full" />
    <span className="absolute top-0 right-0 w-[4px] h-1/2 bg-yellow-500 rounded-full" />

    {/* BOTTOM-LEFT */}
    <span className="absolute bottom-0 left-0 h-[4px] w-1/2 bg-yellow-500 rounded-full" />
    <span className="absolute bottom-0 left-0 w-[4px] h-1/2 bg-yellow-500 rounded-full" />
   <div
      className="
        bg-white rounded-md
        shadow-[0_10px_28px_rgba(0,0,0,0.30)]
        p-4 flex items-center justify-center
        transition-transform duration-300
        hover:-translate-y-0.5
      "
    >
   

    <img
      src={s.src}
      alt={s.alt}
      className="max-h-30 w-auto object-contain"
      draggable={false}
    />
  </div>
  </div>
);


const SectionTitle = ({ text }: { text: string }) => (
  <h3 className="text-white font-semibold tracking-widest uppercase text-sm md:text-base mb-4">
    {text}
  </h3>
);

export default function SponsorsSection() {
  // ✅ Replace these src paths with your real transparent logos
  // (PNG/SVG with transparent background recommended)
  const verticalSponsors: { heading: string; sponsor: Sponsor }[] = [
    {
      heading: "TITLE SPONSOR",
      sponsor: { src: "/base44.jpg", alt: "Title Sponsor" },
    },
    {
      heading: "TECHNOLOGY PARTNER",
      sponsor: { src: "/qyrus.jpg", alt: "Technology Partner" },
    },
    {
      heading: "PERFORMANCE PARTNER",
      sponsor: { src: "/gigabyte.jpg", alt: "Performance Partner" },
    },
    {
      heading: "PRIVACY PARTNER",
      sponsor: { src: "/brave.jpg", alt: "Privacy Partner" },
    },
    {
      heading: "HIRING PARTNER",
      sponsor: { src: "/intozi.jpg", alt: "Hiring Partner" },
    },
  ];

  const twoRowSponsors: { heading: string; sponsor: Sponsor }[] = [
    {
      heading: "EVENT PARTNER",
      sponsor: { src: "/mlh.png", alt: "Event Partner" },
    },
    {
      heading: "PLATFORM PARTNER",
      sponsor: { src: "/Devfolio.jpg", alt: "Platform Partner" },
    },
  ];

  const generalSponsors: Sponsor[] = Array.from({ length: 8 }).map((_, i) => ({
    src: `/general-${i + 1}.jpg`,
    alt: `General Sponsor ${i + 1}`,
  }));

  const communityPartners: Sponsor[] = Array.from({ length: 4 }).map((_, i) => ({
    src: `/sponsors/community-${i + 1}.png`,
    alt: `Community Partner ${i + 1}`,
  }));

  return (
    <section className="bg-black py-20 px-6">
      <div className="mx-auto  max-w-7xl">
        {/* Vertical (7) */}
        <div className="flex place-items-center flex-col gap-10">
          {verticalSponsors.map((item) => (
           <div key={item.heading} className="w-full flex flex-col items-center">

              <SectionTitle text={item.heading} />
              <Card s={item.sponsor} />
            </div>
          ))}
        </div>

        {/* Two in a row */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {twoRowSponsors.map((item) => (
<div key={item.heading} className="flex flex-col items-center">

                <SectionTitle text={item.heading} />
                <Card s={item.sponsor} />
              </div>
            ))}
          </div>
        </div>

        {/* General Sponsors (8) - 4 in a row small cards */}
        <div className="mt-16">
          <SectionTitle text="GENERAL SPONSORS" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">

            {generalSponsors.map((s, idx) => (
              <SmallCard key={idx} s={s} />
            ))}
          </div>
        </div>

    
      </div>
    </section>
  );
}
