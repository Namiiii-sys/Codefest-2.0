"use client";

import React from "react";
import Image from "next/image";

/* ------------------ Section Title ------------------ */
const SectionTitle = ({ text }: { text: string }) => (
  <h3 className="text-white font-semibold tracking-widest uppercase text-sm md:text-base mb-6 text-center">
    {text}
  </h3>
);

/* ------------------ Sponsor Card ------------------ */
const EmptyCard = ({
  src,
  alt,
  link,
  size = "normal",
}: {
  src?: string;
  alt?: string;
  link?: string;
  size?: "large" | "normal";
}) => {
  // ✅ FIX: fluid width instead of fixed width
  const dimensions =
    size === "large"
      ? "w-full max-w-[520px] h-[150px]"
      : "w-full max-w-[420px] h-[130px]";

  const CardContent = (
    <div className="relative w-full">
      {/* corner accents */}
      <span className="absolute -top-1 -right-1 h-[5px] w-1/2 bg-yellow-500 rounded-full z-10" />
      <span className="absolute -top-1 -right-1 w-[5px] h-1/2 bg-yellow-500 rounded-full z-10" />

      <span className="absolute -bottom-1 -left-1 h-[5px] w-1/2 bg-yellow-500 rounded-full z-10" />
      <span className="absolute -bottom-1 -left-1 w-[5px] h-1/2 bg-yellow-500 rounded-full z-10" />

      <div
        className={`
          relative
          bg-white/5 border border-white/10 rounded-md
          shadow-[0_14px_40px_rgba(0,0,0,0.35)]
          ${dimensions}
          flex items-center justify-center
          hover:border-yellow-500 transition-all duration-300
          hover:scale-[1.03]
        `}
      >
        {src && (
          <Image
            src={src}
            alt={alt || ""}
            width={300}
            height={120}
            className="object-contain max-h-[100%] w-auto"
          />
        )}
      </div>
    </div>
  );

  if (link && src) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex justify-center"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

/* ------------------ Main Component ------------------ */
export default function SponsorsSection() {
  const sponsorSections = [
    {
      title: "HACKATHON PLATFORM SPONSOR",
      size: "normal",
      sponsors: [
        {
          src: "/sponsors/devspot.png",
          alt: "DevSpot",
          link: "",
        },
      ],
    },
    {
      title: "Event SPONSOR",
      size: "normal",
      sponsors: [
        {
          src: "/sponsors/protocollabs.png",
          alt: "Protocol Labs",
          link: "",
        },
      ],
    },
    {
      title: "Silver Sponsors",
      size: "normal",
      sponsors: [
        { src: "/sponsors/rogernreckon.png", 
          alt: "Roger n Reckon", 
          link: "" },
      ],
    },
    {
      title: "Bronze Sponsors",
      size: "normal",
      sponsors: [
        { src: "/sponsors/osen.png", alt: "osen", link: "" },
      ],
    },
    {
      title: "Gifting Sponsors (inkind)",
      size: "normal",
      sponsors: [
        { src: "/sponsors/evepaper.png", alt: "EvePaper", link: "" },
        { src: "/sponsors/consolation.jpeg", alt: "Consolation", link: "" },
        { src: "/sponsors/qodeml.png", alt: "QodeMl", link: "" }
      ],
    },
    {
      title: "Community Sponsors",
      size: "normal",
      sponsors: [
        { src: "/sponsors/builderbase.png", alt: "Builder Base", link: "" },
        { src: "/sponsors/geekroom.png", alt: "Geek Room", link: "" },
        { src: "/sponsors/hackshastra.png", alt: "HackShastra", link: "" },
      ],
    },
    {
      title: "Event Platform Sponsors",
      size: "normal",
      sponsors: [
        { src: "/sponsors/unstop.png", alt: "Unstop", link: "" },
      ],
    },
  ];

  return (
    <section id="sponsors" className="bg-black py-20 px-6">
      <div className="mx-auto max-w-7xl flex flex-col gap-16">

        {/* Main Heading */}
        <SectionTitle text="SPONSORS" />

        {/* Sections */}
        {sponsorSections.map((section, index) => {
          const count = section.sponsors.length;

          const getGridClass = () => {
            if (section.size === "large")
              return "grid-cols-1 max-w-2xl";

            if (count === 1)
              return "grid-cols-1 max-w-md";

            if (count === 2)
              return "grid-cols-1 sm:grid-cols-2 max-w-2xl";

            if (count === 3)
              return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl";

            return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
          };

          return (
            <div key={index} className="flex flex-col items-center w-full">

              <SectionTitle text={section.title.toUpperCase()} />

              <div
                className={`
                  grid
                  gap-10
                  place-items-center
                  mx-auto
                  w-full
                  ${getGridClass()}
                `}
              >
                {section.sponsors.map((sponsor, i) => (
                  <div key={i} className="w-full flex justify-center">
                    <EmptyCard
                      src={sponsor.src}
                      alt={sponsor.alt}
                      link={sponsor.link}
                      size={section.size}
                    />
                  </div>
                ))}
              </div>

            </div>
          );
        })}

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-neutral-400 text-lg">
            Interested in sponsoring us?{" "}
            <a
              href="https://forms.gle/ZceF5uAoX8bjXrBt9"
              className="text-yellow-500 font-bold hover:underline transition-all"
            >
              Get in touch
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}