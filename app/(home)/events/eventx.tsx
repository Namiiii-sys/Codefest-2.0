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
            title="Registration & Check-in"
            time="08:45 AM – 09:30 AM"
            short="Participant verification and kit distribution"
            long="Entry formalities, ID verification, and welcome kits handed out."
          />

          <EventBlock
            title="Opening Briefing"
            time="09:30 AM – 09:45 AM"
            short="Event overview & rules"
            long="Walkthrough of schedule, competition rules, judging criteria, and flow of the day."
          />

          <EventBlock
            title="Web Auction – Auction Phase"
            time="10:00 AM – 10:45 AM"
            short="Live bidding for tech resources"
            long="Teams strategically bid for tools, APIs, and constraints before development begins."
          />

          <EventBlock
            title="Web Auction – Build Phase"
            time="10:45 AM – 12:45 PM"
            short="Development sprint"
            long="Teams develop websites using the auctioned assets."
          />

          <EventBlock
            title="Design Apocalypse"
            time="01:00 PM – 02:30 PM"
            short="Time-bound UI/UX sprint"
            long="Rapid design challenge focused on usability, creativity, and execution."
          />

          <EventBlock
            title="Blind Code"
            time="02:45 PM – 04:15 PM"
            short="Logic-first coding challenge"
            long="Solve algorithmic problems without seeing test cases."
          />

          <EventBlock
            title="Code Phantom"
            time="04:30 PM – 06:00 PM"
            short="DSA competition"
            long="Efficiency-driven coding and deep problem-solving rounds."
          />

          <EventBlock
            title="Day 1 Closing"
            time="06:00 PM – 06:15 PM"
            short="Hackathon briefing"
            long="Instructions, reporting time, and preparation guidelines for Day 2 hackathon."
          />
        </div>
      ),
    },
    {
      title: "DAY - 2",
      content: (
        <div className="space-y-8">
          <EventBlock
            title="Breakfast & Check-in"
            time="08:30 AM – 09:30 AM"
            short="Arrival & refreshment"
            long="Participants settle in and prepare for the hackathon start."
          />

          <EventBlock
            title="Hackathon Kick-off"
            time="09:30 AM"
            short="Official start"
            long="Problem statements revealed and development begins."
          />

          <EventBlock
            title="Build Phase 1"
            time="10:00 AM – 12:00 PM"
            short="Core development window"
            long="Focused implementation of project fundamentals."
          />

          <EventBlock
            title="Mentoring Round 1"
            time="12:00 PM – 01:00 PM"
            short="Idea validation & feedback"
            long="Mentors guide feasibility, scope, and improvements."
          />

          <EventBlock
            title="Lunch Break"
            time="01:00 PM – 01:45 PM"
            short="Rest & recharge"
            long="Participants take a short break before the final sprint."
          />

          <EventBlock
            title="Build Phase 2"
            time="01:45 PM – 04:00 PM"
            short="Major development window"
            long="Feature completion and testing phase."
          />

          <EventBlock
            title="Final Mentoring Round"
            time="04:00 PM – 05:00 PM"
            short="Optimization & pitch guidance"
            long="Final polishing, debugging, and presentation strategy."
          />

          <EventBlock
            title="Tea Break & Shortlisting"
            time="05:00 PM – 05:30 PM"
            short="Top 10 teams announced"
            long="Refreshments served and finalists shortlisted."
          />

          <EventBlock
            title="Final Build & Submission"
            time="05:30 PM – 07:00 PM"
            short="Last refinement sprint"
            long="Shortlisted teams finalize and submit projects."
          />

          <EventBlock
            title="Final Submission Deadline"
            time="07:00 PM"
            short="Submissions close"
            long="All code and deliverables must be submitted."
          />

          <EventBlock
            title="Judging & Presentations"
            time="07:15 PM – 08:30 PM"
            short="Top teams demo"
            long="Live demonstrations and evaluation by judges."
          />

          <EventBlock
            title="Closing Ceremony"
            time="08:30 PM – 09:00 PM"
            short="Awards & results"
            long="Winners announced, prizes distributed, vote of thanks."
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
