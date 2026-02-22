"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";


export function TimelineDemo() {
  const data = [
    {
      title: "DAY - 1",
      content: (
        <div className="space-y-8">

          <EventBlock
            title="Web Auction"
            time="10:00 AM – 10:45 AM"
            short="Live bidding for tech resources"
            long={
              <>
                Teams strategically bid for tools, APIs, and constraints before development begins.
                {" "}The event will take place in two parts{" "}
                <span className="font-bold text-yellow-400">
                  Auction Phase
                </span>{" "}
                and{" "}
                <span className="font-bold text-yellow-400">
                  Build Phase
                </span>.
                Team size: 2-4.
              </>
            }
            prize="1st 3000, 2nd 1500, 3rd 500 per team"
            link="https://unstop.com/hackathons/web-auction-cbs-codefest-20-shaheed-sukhdev-college-of-business-studies-sscbs-du-delhi-1645678"
          />



          <EventBlock
            title="Design Apocalypse"
            time="01:00 PM – 02:30 PM"
            short="Time-bound UI/UX sprint"
            long="Rapid design challenge focused on usability, creativity, and execution. Team size: 2-4."
            prize="1st 3000, 2nd 1500, 3rd 500 per team"
            link="https://unstop.com/hackathons/design-apocalypse-cbs-codefest-20-shaheed-sukhdev-college-of-business-studies-sscbs-du-delhi-1645680"
          />

          <EventBlock
            title="Blind Code"
            time="02:45 PM – 04:15 PM"
            short="Logic-first coding challenge"
            long="Solve algorithmic problems without seeing test cases. Team size: Individual."
            prize="1st 3000, 2nd 1500, 3rd 500 per team"
            link="https://unstop.com/hackathons/blind-code-cbs-codefest-20-shaheed-sukhdev-college-of-business-studies-sscbs-du-delhi-1645679"
          />

          <EventBlock
            title="Code Phantom"
            time="04:30 PM – 06:00 PM"
            short="DSA competition"
            long="Efficiency-driven coding and deep problem-solving rounds.Team size: Individual."
            prize="1st 3000, 2nd 1500, 3rd 500 per team"
            link="https://unstop.com/hackathons/code-phantom-cbs-codefest-20-shaheed-sukhdev-college-of-business-studies-sscbs-du-delhi-1645675"
          />
        </div>
      ),
    },
    {
      title: "DAY - 2",
      content: (
        <div className="space-y-8">

          {/* HACKATHON CORE */}
          <div className="relative rounded-3xl border border-yellow-400/30 bg-gradient-to-br from-yellow-500/15 via-black to-black backdrop-blur-xl p-8 md:p-12 overflow-hidden">

            {/* subtle glow accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-400/10 blur-3xl rounded-full" />

            {/* HEADER */}
            <div className="relative z-10">

              <h4 className="text-yellow-400 font-extrabold text-3xl md:text-5xl tracking-wide">
                12-Hour Offline Hackathon:  <span className="text-white"> ACE(M) HACK</span>
              </h4>

              <p className="text-yellow-400/80 font-semibold mt-3 text-lg">
                09:30 AM — 09:00 PM
              </p>

              <p className="mt-6 text-white font-medium text-lg max-w-2xl leading-relaxed">
                This is where ideas stop being ideas.
                Build under pressure. Adapt in real time. Deliver something that works.
              </p>

              <div className="w-24 h-[3px] bg-yellow-500 mt-6 mb-10" />

            </div>


            {/* MAIN GRID */}
            <div className="relative z-10 grid md:grid-cols-2 gap-12">

              {/* LEFT COLUMN */}
              <div className="space-y-8">

                {/* Overview */}
                <div>
                  <h5 className="text-yellow-400 font-semibold text-lg mb-3">
                    Structure
                  </h5>

                  <ul className="space-y-2 text-white/80">
                    <li>• Continuous 12-hour build window</li>
                    <li>• Mentoring and evaluation checkpoints</li>
                    <li>• Top teams shortlisted for final review</li>
                    <li>• Live demonstrations before judges</li>
                  </ul>
                </div>


                {/* Team */}
                <div>
                  <h5 className="text-yellow-400 font-semibold text-lg mb-3">
                    Team Composition
                  </h5>

                  <p className="text-white/80 leading-relaxed">
                    Teams must consist of 2–4 members.
                    Diverse skillsets are encouraged to enable complete product execution.
                  </p>
                </div>


                {/* Criteria */}
                <div>
                  <h5 className="text-yellow-400 font-semibold text-lg mb-3">
                    Evaluation Focus
                  </h5>

                  <p className="text-white/80 leading-relaxed">
                    Innovation. Technical depth. Execution quality.
                    Real-world relevance. Clarity of presentation.
                  </p>
                </div>

                <a
                  href="https://unstop.com/college-fests/cbs-codefest-20-acm-sscbs-442766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
    inline-block
    mt-6
    bg-yellow-500
    hover:bg-yellow-400
    text-black
    font-bold
    px-6 py-3
    rounded-md
    transition-all
    hover:shadow-[0_0_18px_rgba(250,204,21,0.8)]
  "
                >
                  Apply Now
                </a>

              </div>



              {/* RIGHT COLUMN */}
              <div className="space-y-6">

                <div>
                  <h5 className="text-yellow-400 font-semibold text-lg mb-4">
                    Tracks
                  </h5>
                </div>


                {/* Track */}
                <div className="group border border-yellow-400/20 bg-yellow-500/5 hover:bg-yellow-500/10 hover:border-yellow-400/40 transition-all rounded-xl p-5">

                  <h6 className="text-yellow-400 font-semibold text-lg">
                    Web & Application Development
                  </h6>

                  <p className="text-white/70 text-sm mt-2 leading-relaxed">
                    Create scalable platforms, production-ready applications,
                    and fully functional digital systems.
                  </p>

                </div>


                {/* Track */}
                <div className="group border border-yellow-400/20 bg-yellow-500/5 hover:bg-yellow-500/10 hover:border-yellow-400/40 transition-all rounded-xl p-5">

                  <h6 className="text-yellow-400 font-semibold text-lg">
                    Artificial Intelligence
                  </h6>

                  <p className="text-white/70 text-sm mt-2 leading-relaxed">
                    Develop intelligent systems capable of learning,
                    predicting, and automating complex tasks.
                  </p>

                </div>


                {/* Track */}
                <div className="group border border-yellow-400/20 bg-yellow-500/5 hover:bg-yellow-500/10 hover:border-yellow-400/40 transition-all rounded-xl p-5">

                  <h6 className="text-yellow-400 font-semibold text-lg">
                    Open Innovation
                  </h6>

                  <p className="text-white/70 text-sm mt-2 leading-relaxed">
                    Pursue original ideas that challenge convention
                    and solve meaningful real-world problems.
                  </p>

                </div>


              </div>

            </div>

          </div>

        </div>





      ),
    }

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
  prize,
  link,
}: {
  title: string;
  short: string;
  time: string;
  long: React.ReactNode;
  prize: string;
  link?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

      <h4 className="text-yellow-400 font-extrabold text-2xl">
        {title}
      </h4>

      <h4 className="text-yellow-400 font-semibold text-md mt-1">
        {time}
      </h4>

      <p className="mt-3 text-white font-semibold">
        {short}
      </p>

      <div className="w-16 h-[3px] bg-yellow-500 my-5" />

      <p className="text-white/80 leading-relaxed whitespace-pre-line">
        {long}
      </p>

      {prize && (
        <p className="text-yellow-400 font-semibold text-md mt-4">
          {prize}
        </p>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
      inline-block
      mt-5
      bg-yellow-500
      hover:bg-yellow-400
      text-black
      font-semibold
      px-5 py-2
      rounded-md
      transition-all
      hover:shadow-[0_0_16px_rgba(250,204,21,0.7)]
    "
        >
          Apply Now
        </a>
      )}

    </div>
  );
}
