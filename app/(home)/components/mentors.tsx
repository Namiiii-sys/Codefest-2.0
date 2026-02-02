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
  },{
    name: "Dhruv Mukherjee",
    role: "Organiser and Tech Lead",
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
    name: "Yajjat",
    role: "Organiser",
    image: "/Yajjat.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Namita Mehra",
    role: "Lead Organiser",
    image: "https://codefest-9eq.pages.dev/namita.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Namita Mehra",
    role: "Lead Organiser",
    image: "https://codefest-9eq.pages.dev/namita.jpg",
    linkedin: "https://linkedin.com",
  },
  
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
     <div
      className="
        group flex flex-col overflow-hidden rounded-2xl
        border border-white/10 hover:border-yellow-500 border-t-white border-r-gray-400 border-l-gray-400
        bg-white/5 backdrop-blur-xl
        transition-all duration-300
      "
      id="mentors"
    >
      {/* Image */}
      <div className="relative h-80 w-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center p-6 gap-2">
        <h3 className="text-white text-lg font-semibold">
          {member.name}
        </h3>
        <p className="text-white/70 text-sm">
          {member.role}
        </p>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer"
          className="
            mt-3 inline-flex items-center justify-center
            h-10 w-10 rounded-full
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

export default function Mentors() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-white text-4xl font-bold">
            MENTORS
          </h2>
          <p className="mt-3 text-white/70">
            The people building CodeFest
          </p>
        </div>

        {/* Row 1 - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.slice(0, 3).map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        {/* Row 2 - 2 cards centered */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8  mx-auto">
          {team.slice(3).map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
