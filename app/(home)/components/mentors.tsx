"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

const team: TeamMember[] = [
  {
    name: "Aniket Anand",
    role: "Organiser",
    image: "/aniket.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Dhruv Mukherjee",
    role: "Organiser & Tech Lead",
    image: "https://codefest-9eq.pages.dev/DPM.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Roshni Yadav",
    role: "Organiser",
    image: "/Roshni.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Industry Mentor",
    role: "AI & ML Specialist",
    image: "/mentor-placeholder.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Startup Advisor",
    role: "Product & Strategy Mentor",
    image: "/mentor-placeholder.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Technical Reviewer",
    role: "Full Stack Architect",
    image: "/mentor-placeholder.jpg",
    linkedin: "https://linkedin.com",
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div
      className="
        group flex flex-col overflow-hidden rounded-xl
        border border-white/10 hover:border-yellow-500
        bg-white/5 backdrop-blur-xl
        transition-all duration-300
        max-w-[300px] w-full
      "
    >
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center p-4 gap-1">
        <h3 className="text-white text-base font-semibold">
          {member.name}
        </h3>

        <p className="text-white/60 text-xs">
          {member.role}
        </p>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer"
          className="
            mt-2 inline-flex items-center justify-center
            h-8 w-8 rounded-full
            border border-white/20
            text-white hover:text-yellow-500
            hover:border-yellow-500
            transition-colors
          "
        >
          <Linkedin size={16} />
        </a>
      </div>
    </div>
  );
}

export default function Mentors() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-white text-4xl font-bold">
            MENTORS
          </h2>
          <p className="mt-3 text-white/70">
            The people guiding CodeFest
          </p>
        </div>

        {/* Centered Grid */}
        {/* <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {team.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div> */}

      </div>
    </section>
  );
}
