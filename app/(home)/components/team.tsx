"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Linkedin } from "lucide-react";



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
  { name: "Namita Mehra", role: "Lead Organiser", image: "/namita.jpg", linkedin: "#" },
];



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

      <p className="text-white font-semibold mt-3 text-center">{member.name}</p>
      <p className="text-white/60 text-xs">{member.role}</p>

      <a
        href={member.linkedin}
        target="_blank"
        className="text-yellow-400 mt-2 hover:scale-110 transition"
      >
        <Linkedin size={18} />
      </a>
    </div>
  );
}



export default function TeamFloatingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // reactive mobile (instead of reading window inside render/loop)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  // state only for render, ref for ultra-fast updates
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressRef = useRef(0);

  // RAF throttle (single render per frame max)
  const rafRef = useRef<number | null>(null);

  // Attach wheel listener ONCE (no dependency on scrollProgress)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateProgress = (delta: number) => {
      const next = Math.max(0, Math.min(100, progressRef.current + delta));
      progressRef.current = next;

      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        setScrollProgress(progressRef.current);
      });
    };

    const handleWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();

      const inView =
        rect.top <= window.innerHeight * 0.25 &&
        rect.bottom >= window.innerHeight * 0.75;

      if (!inView) return;

      const delta = e.deltaY * 0.12;

      // if at ends, let normal scroll happen
      if ((delta > 0 && progressRef.current >= 100) || (delta < 0 && progressRef.current <= 0)) {
        return;
      }

      e.preventDefault();
      updateProgress(delta);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const ropePath = useMemo(() => {
    const points = 80;
    let d = "";

    const bubbleRadius = 90;
    const ropeWidth = isMobile ? 1200 : 1000;
    const ropepathoffset = isMobile ? 22 : 13;
    const ropeYOffset = isMobile ? 100 : 0;

    for (let i = 0; i <= points; i++) {
      const xPercent = (i / points) * 100;
      const yPercent = 50 + Math.sin((xPercent / 100) * Math.PI) * ropepathoffset;

      const x = (xPercent / 100) * ropeWidth;
      const r = 2;
      const y = (yPercent / 100) * 450 - bubbleRadius * r - ropeYOffset;

      d += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
    }

    return d;
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="min-h-screen bg-black py-24 relative overflow-hidden">
      <h2 className="text-center text-4xl font-bold text-white mb-20">Meet the Team</h2>

      <div className="relative h-[520px] overflow-hidden">
        {/* Rope */}
        <svg
          style={{ transform: `rotate(${isMobile ? 8 : 7}deg)` }}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-95 origin-center"
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="rope3d" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1b1107" />
              <stop offset="35%" stopColor="#5b3a12" />
              <stop offset="50%" stopColor="#e7c58d" />
              <stop offset="65%" stopColor="#5b3a12" />
              <stop offset="100%" stopColor="#1b1107" />
            </linearGradient>

            <filter id="ropeShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.45" />
            </filter>
          </defs>

          <path d={ropePath} fill="none" stroke="#0f0904" strokeWidth="20" strokeLinecap="round" opacity="0.7" />
          <path
            d={ropePath}
            fill="none"
            stroke="url(#rope3d)"
            strokeWidth="14"
            strokeLinecap="round"
            filter="url(#ropeShadow)"
          />
          <path d={ropePath} fill="none" stroke="#f3d9ac" strokeWidth="1.3" strokeDasharray="1.2 7" opacity="0.18" />
        </svg>

        {/* Mobile Prev/Next */}
        <div className="md:hidden flex justify-center gap-6 mt-8">
          <button
            disabled={scrollProgress <= 2}
            onClick={() => {
              const next = Math.max(0, progressRef.current - 18);
              progressRef.current = next;
              setScrollProgress(next);
            }}
            className="
              px-6 py-3 rounded-lg font-semibold transition-all duration-200
              bg-yellow-500 text-black hover:bg-yellow-400
              disabled:bg-neutral-700 disabled:text-neutral-400 disabled:cursor-not-allowed disabled:shadow-none
            "
          >
            ← Prev
          </button>

          <button
            disabled={scrollProgress >= 98}
            onClick={() => {
              const next = Math.min(100, progressRef.current + 18);
              progressRef.current = next;
              setScrollProgress(next);
            }}
            className="
              px-6 py-3 rounded-lg font-semibold transition-all duration-200
              bg-yellow-500 text-black hover:bg-yellow-400
              disabled:bg-neutral-700 disabled:text-neutral-400 disabled:cursor-not-allowed disabled:shadow-none
            "
          >
            Next →
          </button>
        </div>

        {/* Bubbles */}
        {team.map((member, index) => {
          const xPercent = 50 - scrollProgress * 1.5 + index * 32;
          const yPercent = 45 + Math.sin((xPercent / 100) * Math.PI) * 12;

          const growth = isMobile ? 0.6 : 1.0;
          const scale = 0.6 + ((100 - xPercent) / 100) * growth;

          const visible = xPercent > -20 && xPercent < 120;

          return (
            <div
              key={member.name}
              className="absolute ease-out"
              style={{
                left: `${xPercent}%`,
                top: `${yPercent}%`,
                transform: `translate3d(-50%, -50%, 0) scale(${scale})`,
                opacity: visible ? 1 : 0,
                transition: "opacity 180ms ease-out", // avoid transition-all for scroll-driven transforms
                willChange: "transform, opacity",
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
          <div className="h-full bg-yellow-500 transition-all duration-200" style={{ width: `${scrollProgress}%` }} />
        </div>
      </div>
    </section>
  );
}
