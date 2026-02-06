"use client";

import { Mail, Trophy, Users, Rocket } from "lucide-react";

export default function MoreSponsors() {
  return (
    <section
      id="sponsor-us"
      className="bg-black text-white py-14 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto px-6 text-center space-y-8">

        <h2 className="text-3xl font-bold text-yellow-400 tracking-widest">
          Sponsor CodeFest
        </h2>

        <div className="flex flex-wrap justify-center gap-10 text-white/80 text-sm">

          <div className="flex items-center gap-2">
            <Users className="text-yellow-400" size={20} />
            Talent Access
          </div>

          <div className="flex items-center gap-2">
            <Rocket className="text-yellow-400" size={20} />
            Brand Exposure
          </div>

          <div className="flex items-center gap-2">
            <Trophy className="text-yellow-400" size={20} />
            Awards & Booths
          </div>

        </div>

        <a
          href="mailto:info@acmsscbs"
          className="inline-flex items-center gap-2 bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:brightness-95 transition"
        >
          <Mail size={16} />
          Sponsor Us
        </a>

      </div>
    </section>
  );
}
