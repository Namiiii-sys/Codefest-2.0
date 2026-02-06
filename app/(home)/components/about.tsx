"use client";
import Image from "next/image";
export default function AboutSection() {
  return (
    <section className="relative max-w-7xl  mx-auto place-items-end gap-16  md:py-2 md:mb-30 px-6 flex md:flex-row flex-col" id="about">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXT SIDE */}
        <div>
          <span className="text-sm uppercase tracking-widest text-yellow-500 font-semibold">
            About the Event
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-neutral-100 leading-tight">
            CODE FEST
          </h2>

          <div className="w-20 h-[5px] bg-yellow-600 mt-6 mb-8" />

          <p className="text-white font-bold leading-relaxed mb-6">
            The CBS CodeFest 2.0 Hackathon is a 12-hour national-level offline innovation challenge, conducted on Day 2 of the fest, where shortlisted teams ideate, build and present technology-driven solutions to real-world problem statements. Designed to simulate an industry-grade product development cycle, the hackathon emphasizes structured problem-solving, system design, and rapid prototyping under strict time constraints.
          </p>

          <p className="text-white font-bold leading-relaxed mb-6">
            The hackathon framework includes two focused mentoring rounds, enabling participants to validate ideas, refine scope, improve usability and strengthen feasibility. Following an intensive development phase, the top-performing teams are shortlisted for final presentations and live evaluation by a panel of judges, ensuring a rigorous and merit-based assessment process.
          </p>

          <p className="text-white font-bold leading-relaxed">
            By integrating mentoring, shortlisting and presentation stages within a single high-impact day, the CBS CodeFest 2.0 Hackathon offers participants a comprehensive experience in innovation, collaboration and practical technology development.
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


    </section>
  );
}
