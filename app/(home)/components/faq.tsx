"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "800"],
});

const faqs = [
  {
    q: "What is CodeFest 2.0?",
    a: "CodeFest 2.0 is a multi-event technical fest featuring competitive coding challenges, design sprints, and a national-level hackathon aimed at fostering innovation, collaboration, and real-world problem solving.",
  },
  {
    q: "Who can participate in CodeFest 2.0?",
    a: "CodeFest 2.0 is open to students from all colleges and universities. Participants from any year or technical background are welcome to join.",
  },
  {
    q: "Is CodeFest 2.0 an online or offline event?",
    a: "Most events will be conducted offline at the venue. Specific details for each event will be shared with registered participants in advance.",
  },
  {
    q: "Can I participate in multiple events?",
    a: "Yes, participants are allowed to take part in multiple events, provided the event schedules do not clash.",
  },
  {
    q: "Is team participation allowed?",
    a: "Yes, some events allow team participation while others are individual. Team size requirements will be specified for each event.",
  },
  {
    q: "Are there any registration fees?",
    a: "No, there is no registration fee.",
  },
  {
    q: "What kind of prizes can participants expect?",
    a: "CodeFest 2.0 offers exciting prizes, certificates, and recognition for top-performing teams and individuals across all events.",
  },
  {
    q: "Will participants receive certificates?",
    a: "Yes, all participants will receive participation certificates, and winners will receive special merit certificates.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-14 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className={`${cinzel.className} text-3xl md:text-4xl font-extrabold text-yellow-500 tracking-widest`}>
            FAQ
          </h2>
          <p className="mt-2 text-white/60 text-sm">
            Everything you need to know about CodeFest 2.0
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  border border-white/10 rounded-md
                  hover:border-yellow-500/40
                  transition-all
                "
              >

                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    w-full flex items-center justify-between
                    gap-4 px-4 py-3 text-left
                  "
                >
                  <span className="text-yellow-500 font-semibold text-sm md:text-base">
                    {item.q}
                  </span>

                  <ChevronDown
                    className={`
                      w-4 h-4 text-yellow-500
                      transition-transform duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${isOpen ? "max-h-32 pb-4 px-4" : "max-h-0 px-4"}
                  `}
                >
                  <p className="text-white/80 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>

              </div>
            );

          })}
        </div>

      </div>
    </section>
  );
}
