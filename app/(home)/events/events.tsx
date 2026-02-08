"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "DAY - 1",
      content: (
        <div className="space-y-8">
          <EventBlock
            title="Web Auction"
            short="Strategy Driven Web Development Challenge"
            time="10:00 AM – 10:45 AM"
            long="Participants may register individually or in teams. Early registration is encouraged as slots are limited. Teams must ensure that all submitted information is accurate to avoid issues during verification."
          />
           <EventBlock
            title="Design Apocalypse"
            time="01:00 PM – 02:30 PM "
            short="Time Bound UI/UX Design Sprint"
            long="Curated problem statements focusing on real-world challenges will be released to all registered teams. These problems are designed to evaluate innovation, scalability, and technical depth."
          />
          <EventBlock
            title="Blind Code"
            time="02:45 PM – 04:15 PM "
            short="Logic Based Coding Without Test Case Visibility"
            long="All teams must complete their registrations before the deadline. Late entries will not be considered under any circumstances to maintain fairness and event discipline."
          />
         
          <EventBlock
          time = "04:30 PM – 06:00 PM"
            title="Code Phantom"
            short="Data Structures and Algorithmin Problem Solving"
            long="Teams begin working on their solutions. Participants are expected to follow all event rules, collaborate ethically, and maintain proper documentation throughout the development phase."
          />
        </div>
      ),
    },
    {
      title: "DAY - 2",
      content: (
        <div className="space-y-8">
          <EventBlock
          time="08:30 AM – 09:30 AM"
            title="National Hackathon"
            short="12 Hour Offline Hackathon"
            long={"Real World Problem Statements\nMentoring Rounds & Evaluation\nShortlisting & Final Presentation"}
          />
          <EventBlock
          time = "07:15 PM – 08:30 PM "
            title="Results & Awards"
            short="Winners announced and celebrated"
            long="Top-performing teams will be announced after evaluation by the judging panel. Awards, certificates, and recognitions will be distributed to celebrate innovation and excellence."
          />
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip bg-black">
      <Timeline
        data={data}
        heading="EVENTS"
        subheading="Explore the flow of CodeFest 2.0 across two days."
      />
    </div>
  );
}

function EventBlock({
  title,
  short,
  time,
  long,
}: {
  title: string;
  short: string;
  time:string;
  long: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6" id="mainevents">
      <h4 className="text-yellow-400 font-extrabold text-2xl">{title}</h4>
      <h4 className="text-yellow-400 font-semibold text-md">{time}</h4>
      <p className="mt-2 text-white font-semibold">{short}</p>
      <div className="w-16 h-[3px] bg-yellow-500 my-5" />
      <p className="text-white/80 leading-relaxed whitespace-pre-line">{long}</p>
    </div>
  );
}
