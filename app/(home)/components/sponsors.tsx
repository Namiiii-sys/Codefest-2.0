"use client";

import React from "react";
import Image from "next/image";

const SectionTitle = ({ text }: { text: string }) => (
  <h3 className="text-white font-semibold tracking-widest uppercase text-sm md:text-base mb-3">
    {text}
  </h3>
);

const EmptyCard = ({ src, alt }: { src?: string; alt?: string }) => (
  <div className="relative w-fit">

    {/* corner accents */}
    <span className="absolute -top-1 -right-1 h-[5px] w-1/2 bg-yellow-500 rounded-full z-10" />
    <span className="absolute -top-1 -right-1 w-[5px] h-1/2 bg-yellow-500 rounded-full z-10" />

    <span className="absolute -bottom-1 -left-1 h-[5px] w-1/2 bg-yellow-500 rounded-full z-10" />
    <span className="absolute -bottom-1 -left-1 w-[5px] h-1/2 bg-yellow-500 rounded-full z-10" />

    <div
      className="
        relative
        bg-white/5 border border-white/10 rounded-md
        shadow-[0_14px_40px_rgba(0,0,0,0.35)]
        md:w-[420px] w-[320px] h-[130px]
        flex items-center justify-center
        overflow-hidden
      "
    >
      {src && (
        <Image
          src={src}
          alt={alt || ""}
          width={260}
          height={100}
          className="object-contain max-h-[80%] w-auto"
        />
      )}
    </div>

  </div>
);


const EmptySmallCard = ({ src, alt }: { src?: string; alt?: string }) => (
  <div className="relative">

    <span className="absolute top-0 right-0 h-[5px] w-1/2 bg-yellow-500 rounded-full z-10" />
    <span className="absolute top-0 right-0 w-[5px] h-1/2 bg-yellow-500 rounded-full z-10" />

    <span className="absolute bottom-0 left-0 h-[5px] w-1/2 bg-yellow-500 rounded-full z-10" />
    <span className="absolute bottom-0 left-0 w-[5px] h-1/2 bg-yellow-500 rounded-full z-10" />

    <div
      className="
        bg-white/5 border border-white/10 rounded-lg
        w-[200px] h-[130px]
        flex items-center justify-center
      "
    >
      {src && (
        <Image
          src={src}
          alt={alt || ""}
          width={140}
          height={80}
          className="object-contain max-h-[80%] w-auto"
        />
      )}
    </div>

  </div>
);


export default function SponsorsSection() {

  /* Vertical sponsors */
  const verticalSponsors = [
    { title: "TITLE SPONSOR", src: "", alt: "" },
    { title: "TECHNOLOGY PARTNER", src: "", alt: "" },
    { title: "PERFORMANCE PARTNER", src: "", alt: "" },
    { title: "PRIVACY PARTNER", src: "", alt: "" },
    { title: "HIRING PARTNER", src: "", alt: "" },
  ];

  /* Two-row sponsors */
  const twoRowSponsors = [
    { title: "EVENT PARTNER", src: "", alt: "" },
    { title: "PLATFORM PARTNER", src: "", alt: "" },
  ];

  /* General sponsors */
  const generalSponsors = [
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Vertical */}
        <div className="flex flex-col items-center gap-8">
          {verticalSponsors.map((sponsor) => (
            <div key={sponsor.title} className="flex flex-col items-center">
              <SectionTitle text={sponsor.title} />
              <EmptyCard src={sponsor.src} alt={sponsor.alt} />
            </div>
          ))}
        </div>

        {/* Two row */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
          {twoRowSponsors.map((sponsor) => (
            <div key={sponsor.title} className="flex flex-col items-center">
              <SectionTitle text={sponsor.title} />
              <EmptyCard src={sponsor.src} alt={sponsor.alt} />
            </div>
          ))}
        </div>

        {/* General sponsors */}
        <div className="mt-14">
          <SectionTitle text="GENERAL SPONSORS" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center mt-4">
            {generalSponsors.map((sponsor, i) => (
              <EmptySmallCard key={i} src={sponsor.src} alt={sponsor.alt} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
