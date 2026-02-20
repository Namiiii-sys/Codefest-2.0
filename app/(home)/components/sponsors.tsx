"use client";

import React from "react";
import Image from "next/image";

const SectionTitle = ({ text }: { text: string }) => (
  <h3 className="text-white font-semibold tracking-widest uppercase text-sm md:text-base mb-6">
    {text}
  </h3>
);

const EmptyCard = ({
  src,
  alt,
  link,
}: {
  src?: string;
  alt?: string;
  link?: string;
}) => {

  const CardContent = (
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
          hover:border-yellow-500 transition-all duration-300
          hover:scale-[1.03]
        "
      >
        {src && (
          <Image
            src={src}
            alt={alt || ""}
            width={260}
            height={100}
            className="object-contain max-h-[100%] w-auto"
          />
        )}
      </div>

    </div>
  );

  // if link exists → make clickable
  if (link && src) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

export default function SponsorsSection() {

  /*
  const verticalSponsors = [...]
  const twoRowSponsors = [...]
  const generalSponsors = [...]
  */

  // unified empty sponsor boxes
  const sponsors = [
    {
      src: "",
      alt: "",
      link: "",
    },
    {
      src: "/sponsors/qodeml.png",   // sponsor image
      alt: "QodeML Labs",
      link: "https://www.instagram.com/qodeml.labs?igsh=MzBqdXF5d3lidmY3",     // sponsor website
    },
    {
      src: "",
      alt: "",
      link: "",
    },
  ];


  return (
    <section className="bg-black py-20 px-6">

      <div className="mx-auto max-w-7xl">

        {/* Title */}
        <div className="flex flex-col items-center">

          <SectionTitle text="SPONSORS" />

          {/* Empty sponsor boxes */}
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-10
            place-items-center
          ">
            {sponsors.map((sponsor, i) => (
              <EmptyCard key={i} src={sponsor.src} alt={sponsor.alt} />
            ))}
          </div>


        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-400 text-lg">
            Interested in sponsoring us?{" "}
            <a
              href="mailto:acm-chapter@sscbs.du.ac.in"
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
