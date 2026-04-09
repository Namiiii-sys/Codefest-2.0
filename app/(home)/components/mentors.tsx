"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";

/* ------------------ Types ------------------ */
type TeamMember = {
  name: string;
  image: string;
  linkedin: string;
};

type Section = {
  title: string;
  members: TeamMember[];
  size?: "large" | "normal";
};

/* ------------------ Data ------------------ */
const teamSections: Section[] = [
  {
    title: "Judges",
    size: "normal",
    members: [
      {
        name: "Vinit Vijal",
        image: "/vinit.jpg",
        linkedin: "https://www.linkedin.com/in/vinitvijal/",
      },
      {
        name: "Muskan Goyal",
        image: "/muskan.jpg",
        linkedin: "https://www.linkedin.com/in/its-muskan-goyal/",
      },
    ],
  },
  {
    title: "Mentors",
    size: "large",
    members: [
      {
        name: "Adarsh Chauhan",
        image: "/adarsh.jpg",
        linkedin: "https://www.linkedin.com/in/adarsh-chauhan-b87609225/",
      },
      {
        name: "Rajan Jha",
        image: "/Rajan.jpg",
        linkedin: "https://www.linkedin.com/in/rajan-jha-4a921828a/",
      },
    ],
  },
];

/* ------------------ Section Title ------------------ */
const SectionTitle = ({ text }: { text: string }) => (
  <h3 className="text-white font-semibold tracking-widest uppercase text-sm md:text-base mb-6 text-center">
    {text}
  </h3>
);

/* ------------------ Card ------------------ */
function TeamCard({
  member,
  size = "normal",
}: {
  member: TeamMember;
  size?: "large" | "normal";
}) {
  return (
    <div
      className={`
        group flex flex-col overflow-hidden rounded-xl
        border border-white/10 hover:border-yellow-500
        bg-white/5 backdrop-blur-xl
        transition-all duration-300
        w-full
        ${size === "large" ? "max-w-[420px]" : "max-w-[340px]"}
      `}
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/5]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center p-4 gap-2">
        <h3 className="text-white text-lg font-semibold">
          {member.name}
        </h3>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex items-center justify-center
            h-9 w-9 rounded-full
            border border-white/20
            text-white hover:text-yellow-500
            hover:border-yellow-500
            transition-colors
          "
        >
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  );
}

/* ------------------ Main ------------------ */
export default function Mentors() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Main Heading */}
        <div className="text-center">
          <h2 className="text-white text-4xl font-bold">
            TEAM
          </h2>
          <p className="mt-3 text-white/70">
            The people behind CodeFest
          </p>
        </div>

        {/* Sections */}
        {teamSections.map((section, index) => {
          const count = section.members.length;

          const getGridClass = () => {
            if (count === 1) return "grid-cols-1 max-w-sm";
            if (count === 2) return "grid-cols-2 max-w-xl";
            if (count === 3) return "grid-cols-3 max-w-4xl";

            return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
          };

          return (
            <div key={index} className="flex flex-col items-center">

              <SectionTitle text={section.title} />

              <div
                className={`
                  grid
                  gap-10
                  place-items-center
                  mx-auto
                  ${getGridClass()}
                `}
              >
                {section.members.map((member, i) => (
                  <TeamCard
                    key={i}
                    member={member}
                    size={section.size}
                  />
                ))}
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}