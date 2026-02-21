"use client";
import Image from "next/image";
export default function AboutSection() {
  return (
    <section className="relative max-w-7xl mx-auto py-10 px-6 flex flex-col gap-10" id="about">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXT SIDE */}
        <div>
          <span className="text-sm uppercase tracking-widest text-yellow-500 font-semibold">
            About the Event
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-neutral-100 leading-tight">
            CODE FEST
          </h2>

          <div className="w-20 h-[5px] bg-yellow-600 mt-4 mb-6" />

          <p className="text-white font-bold leading-relaxed mb-4">
            CBS CodeFest 2.0 is the annual flagship technical festival of ACM SSCBS, the official ACM student chapter of Shaheed Sukhdev College of Business Studies, University of Delhi. The event is designed to cultivate a strong culture of problem-solving, innovation, and technical excellence by bringing together students from leading institutions across the country.
          </p>

          <p className="text-white font-bold leading-relaxed mb-4">
            The festival features a curated mix of competitive coding challenges, design-based events, and product-driven competitions that test both technical depth and creative thinking. With a focus on structured evaluation and industry relevance, CodeFest aims to create an ecosystem where participants engage with real-world scenarios rather than purely theoretical challenges.
          </p>

          <p className="text-white font-bold leading-relaxed">
            Expanding into a two-day format this year, CodeFest 2.0 culminates in a 12-hour hackathon that emphasizes prototype development, scalability, and presentation. Through mentorship, expert judging, and a competitive yet collaborative environment, the event strives to bridge the gap between academic learning and real-world innovation.
          </p>

          <p className="text-yellow-400 text-center text-lg md:text-2xl font-extrabold tracking-wide py-4">
            "The 12-Hour Sprint to Innovation"
          </p>
        </div>


        {/* IMAGE SIDE */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-xl">
            <Image
              src="/CLG.jpeg"
              alt="Code Fest Venue"
              width={1200}
              height={800}
              className="rounded-xl object-contain"
              priority
            />
          </div>
        </div>

      </div>


      {/* STATS SECTION */}
      <div className="mt-8 w-full max-w-5xl mx-auto space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 justify-center items-center max-w-4xl mx-auto">

          {/* Card 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <div className="relative bg-neutral-900/50 border border-white/10 rounded-xl p-6 md:p-8 text-center backdrop-blur-sm hover:border-yellow-500/30 transition-all">
              <span className="block text-3xl md:text-5xl font-black text-yellow-500 mb-2">500+</span>
              <span className="block text-xs md:text-sm text-neutral-400 font-bold uppercase tracking-widest">Participants</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <div className="relative bg-neutral-900/50 border border-white/10 rounded-xl p-6 md:p-8 text-center backdrop-blur-sm hover:border-yellow-500/30 transition-all">
              <span className="block text-3xl md:text-5xl font-black text-yellow-500 mb-2">5</span>
              <span className="block text-xs md:text-sm text-neutral-400 font-bold uppercase tracking-widest">Competitions</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <div className="relative bg-neutral-900/50 border border-white/10 rounded-xl p-6 md:p-8 text-center backdrop-blur-sm hover:border-yellow-500/30 transition-all">
              <span className="block text-3xl md:text-5xl font-black text-yellow-500 mb-2">₹120K+</span>
              <span className="block text-xs md:text-sm text-neutral-400 font-bold uppercase tracking-widest">Prize Pool</span>
            </div>
          </div>

          {/* Card 4
          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <div className="relative bg-neutral-900/50 border border-white/10 rounded-xl p-6 md:p-8 text-center backdrop-blur-sm hover:border-yellow-500/30 transition-all">
              <span className="block text-3xl md:text-5xl font-black text-yellow-500 mb-2">5</span>
              <span className="block text-xs md:text-sm text-neutral-400 font-bold uppercase tracking-widest">Sponsors</span>
            </div>
          </div> */}

        </div>
      </div>

    </section>
  );
}
