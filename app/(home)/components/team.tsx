"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Linkedin } from "lucide-react";

/* =========================================
   TEAM DATA
========================================= */

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

const team: TeamMember[] = [
  { name: "Aniket Anand", role: "Organiser", image: "/aniket.png", linkedin: "#" },
  { name: "Dhruv Mukherjee", role: "Tech Lead", image: "/DPM.jpg", linkedin: "#" },
  { name: "Roshni Yadav", role: "Organiser", image: "/Roshni.jpg", linkedin: "#" },
  { name: "Yajjat", role: "Organiser", image: "/Yajjat.jpg", linkedin: "#" },
  { name: "Namita Mehra", role: "Lead Organiser", image: "/namita.jpg", linkedin: "#" },
];

/* =========================================
   FLOATING TEAM BUBBLE
========================================= */

function TeamBubble({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center select-none">

      <div
        className="
          relative
          w-36 h-36 md:w-48 md:h-48
          rounded-full
          overflow-hidden
          border-4 border-yellow-500
          shadow-2xl
        "
      >
        <Image src={member.image} alt={member.name} fill className="object-cover" />
      </div>

      <p className="text-white font-semibold mt-3 text-center">
        {member.name}
      </p>

      <p className="text-white/60 text-xs">{member.role}</p>

      <a href={member.linkedin} target="_blank" className="text-yellow-400 mt-2 hover:scale-110 transition">
        <Linkedin size={18} />
      </a>
    </div>
  );
}

/* =========================================
   MAIN SECTION
========================================= */

export default function TeamFloatingSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;
  /* =========================================
     SMART SCROLL CONTROL
  ========================================= */

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let raf = 0;

    const updateProgress = (delta: number) => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        setScrollProgress((prev) =>
          Math.max(0, Math.min(100, prev + delta))
        );
      });
    };

    /* ---------------- DESKTOP (wheel) ---------------- */
    const handleWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();

      const inView =
        rect.top <= window.innerHeight * 0.25 &&
        rect.bottom >= window.innerHeight * 0.75;

      if (!inView) return;

      const delta = e.deltaY * 0.12;

      if (
        (delta > 0 && scrollProgress >= 100) ||
        (delta < 0 && scrollProgress <= 0)
      )
        return;

      e.preventDefault();
      updateProgress(delta);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [scrollProgress]);


  const generateRopePath = () => {
    const points = 80;
    let d = "";

    const bubbleRadius = 90;

    const isMobile =
      typeof window !== "undefined" && window.innerWidth < 768;

    const ropeWidth = isMobile ? 1200 : 1300;

    for (let i = 0; i <= points; i++) {
      const xPercent = (i / points) * 100;
      const ropepathoffset = isMobile ? 22 : 13;
      const yPercent =
        50 + Math.sin((xPercent / 100) * Math.PI) * ropepathoffset;

      const x = (xPercent / 100) * ropeWidth;
      const ropeYOffset = isMobile ? 100 : 0;
      const r = 2
      const y =
        (yPercent / 100) * 450 - bubbleRadius * r - ropeYOffset;

      d += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
    }

    return d;
  };
  const ropePath = generateRopePath();

  /* =========================================
     RENDER
  ========================================= */

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black py-24 relative overflow-hidden"
    >
      {/* Title */}
      <h2 className="text-center text-4xl font-bold text-white mb-20">
        Meet the Team
      </h2>

      <div className="relative h-[520px] overflow-hidden">

        {/* =============================
            BACKGROUND ROPE (subtle)
           ============================= */}
        <svg
          style={{ transform: `rotate(${isMobile ? 8 : 7}deg)` }}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-95 origin-center"
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* true cylindrical lighting */}
            <linearGradient id="rope3d" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1b1107" />
              <stop offset="35%" stopColor="#5b3a12" />
              <stop offset="50%" stopColor="#e7c58d" />
              <stop offset="65%" stopColor="#5b3a12" />
              <stop offset="100%" stopColor="#1b1107" />
            </linearGradient>

            {/* soft depth shadow */}
            <filter id="ropeShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* mass shadow (gives weight) */}
          <path
            d={ropePath}
            fill="none"
            stroke="#0f0904"
            strokeWidth="20"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* main rope body (ONLY main stroke now) */}
          <path
            d={ropePath}
            fill="none"
            stroke="url(#rope3d)"
            strokeWidth="14"
            strokeLinecap="round"
            filter="url(#ropeShadow)"
          />

          {/* ultra subtle fiber texture */}
          <path
            d={ropePath}
            fill="none"
            stroke="#f3d9ac"
            strokeWidth="1.3"
            strokeDasharray="1.2 7"
            opacity="0.18"
          />
        </svg>
        <div className="md:hidden flex justify-center gap-6 mt-8">

          {/* PREV */}
          <button
            disabled={scrollProgress <= 2}
            onClick={() =>
              setScrollProgress((p) => Math.max(0, p - 18))
            }
            className="
      px-6 py-3 rounded-lg font-semibold transition-all duration-200

      bg-yellow-500 text-black hover:bg-yellow-400

      disabled:bg-neutral-700
      disabled:text-neutral-400
      disabled:cursor-not-allowed
      disabled:shadow-none
    "
          >
            ← Prev
          </button>

          {/* NEXT */}
          <button
            disabled={scrollProgress >= 98}
            onClick={() =>
              setScrollProgress((p) => Math.min(100, p + 18))
            }
            className="
      px-6 py-3 rounded-lg font-semibold transition-all duration-200

      bg-yellow-500 text-black hover:bg-yellow-400

      disabled:bg-neutral-700
      disabled:text-neutral-400
      disabled:cursor-not-allowed
      disabled:shadow-none
    "
          >
            Next →
          </button>

        </div>





        {/* =============================
            FLOATING BUBBLES
           ============================= */}

        {team.map((member, index) => {
          const xPercent = 50 - scrollProgress * 1.5 + index * 32;

          const yPercent =
            45 + Math.sin((xPercent / 100) * Math.PI) * 12;

          /* detect mobile once */
          const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

          /* reduce only mobile growth */
          const growth = isMobile ? 0.6 : 1.0;
          const scale =
            0.6 + ((100 - xPercent) / 100) * growth;


          const opacity =
            xPercent > -20 && xPercent < 120 ? 1 : 0;

          return (
            <div
              key={member.name}
              className="absolute transition-all duration-300 ease-out"
              style={{
                left: `${xPercent}%`,
                top: `${yPercent}%`,
                transform: `translate(-50%, -50%) scale(${scale})`,
                opacity,
                zIndex: Math.round(scale * 10),
              }}
            >
              <TeamBubble member={member} />
            </div>
          );
        })}
      </div>

      {/* Progress */}
      <div className="flex justify-center mt-12">
        <div className="w-44 h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-yellow-500 transition-all duration-200"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </section>
  );
}
