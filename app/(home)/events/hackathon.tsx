"use client";

import { Trophy, Code, Users, Rocket, ShieldCheck } from "lucide-react";

/* ================================
   DATA
================================ */

const tracks = [
  {
    icon: Code,
    title: "Web & App Development",
    desc: "Full-stack platforms, SaaS tools, mobile apps, and production-ready products.",
  },
  {
    icon: Rocket,
    title: "AI / ML",
    desc: "Machine learning models, automation, analytics, and intelligent systems.",
  },
  {
    icon: Users,
    title: "Open Innovation",
    desc: "Any impactful idea solving real-world problems creatively.",
  },
];

const highlights = [
  "12-Hour Offline Hackathon",
  "Mentoring Rounds",
  "Top 10 Shortlisting",
  "Live Final Pitches",
  "Awards & Recognition",
];

/* ================================
   COMPONENT
================================ */

export default function HackathonDetails() {
  return (
    <section className="bg-black py-24 px-6 text-white" id="hackathon-details">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 tracking-widest">
            Hackathon Details
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Build fast. Think deep. Ship real.  
            A focused 12-hour sprint designed to turn ideas into working products.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* ========= LEFT : OVERVIEW ========= */}
          <div className="space-y-8">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-yellow-400 mb-6">
                Format
              </h3>

              <ul className="space-y-4 text-white/80">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ShieldCheck size={18} className="text-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                Team Size
              </h3>
              <p className="text-white/80">
                2–4 members per team. Cross-skill teams encouraged for better execution.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                Judging Criteria
              </h3>
              <p className="text-white/80 leading-relaxed">
                Innovation • Technical Depth • Usability • Impact • Presentation
              </p>
            </div>

          </div>

          {/* ========= RIGHT : TRACKS ========= */}
          <div className="space-y-8">

            <h3 className="text-xl font-semibold text-yellow-400">
              Tracks
            </h3>

            {tracks.map((track, i) => {
              const Icon = track.icon;

              return (
                <div
                  key={i}
                  className="
                    group flex gap-5 items-start
                    bg-white/5 border border-white/10
                    rounded-2xl p-6
                    hover:border-yellow-400/60
                    transition-all
                  "
                >
                  <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-400">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">
                      {track.title}
                    </h4>
                    <p className="text-white/70 text-sm mt-1">
                      {track.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Prize */}
            <div className="mt-10 bg-gradient-to-r from-yellow-500/10 to-yellow-700/10 border border-yellow-500/40 rounded-2xl p-8 text-center">
              <Trophy className="mx-auto text-yellow-400 mb-4" size={32} />
              <p className="text-lg font-semibold text-yellow-400">
                Prizes • Certificates • Recognition
              </p>
              <p className="text-white/60 text-sm mt-2">
                Top teams receive awards and campus-wide recognition.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
