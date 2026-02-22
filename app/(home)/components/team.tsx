"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  objectPosition?: string;
  scale?: number;
};

const team: TeamMember[] = [
  { name: "Namita Mehra", role: "Lead Organiser", image: "/namita.jpg", linkedin: "https://www.linkedin.com/in/namita-mh/", objectPosition: "0% 70%", scale: 1.1 },
  { name: "Shubhangi Maurya", role: "Lead Organiser", image: "/shubhangi.jpg", linkedin: "#" },
  { name: "Shambhavi Sharma", role: "Organiser", image: "/shambhavi.jpg", linkedin: "https://www.linkedin.com/in/shambhavi-sharma-822567328/" },
  { name: "Yajjat Ailawadi", role: "Organiser", image: "/Yajjat.jpg", linkedin: "#" },
  { name: "Ronak Choudhary", role: "Organiser", image: "/ronak.jpg", linkedin: "https://www.linkedin.com/in/ronak-choudhary-bb855b327/" },
  { name: "Disha Verma", role: "Organiser", image: "/disha.jpg", linkedin: "https://www.linkedin.com/in/disha-v-7696002a0/" },
  { name: "Aniket Anand", role: "Organiser", image: "/aniket.png", linkedin: "https://www.linkedin.com/in/anand-aniket11/" },
  { name: "Organising Committee Member", role: "Organiser", image: "/ocs.jpg", linkedin: "#" },
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
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          style={{
            objectPosition: member.objectPosition || 'center',
            transform: `scale(${member.scale || 1})`
          }}
        />
      </div>

      <p className="text-md text-white font-semibold mt-3 text-center">{member.name}</p>
      <p className="text-white/60 text-xs text-center">{member.role}</p>

      {member.linkedin !== "#" && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 mt-2 hover:scale-110 transition p-1"
          aria-label={`${member.name}'s LinkedIn Profile`}
        >
          <Linkedin size={18} />
        </a>
      )}
    </div>
  );
}

function TeamCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false }, [Autoplay({ delay: 3500, stopOnInteraction: true })]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="md:hidden relative group">
      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all active:scale-90"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all active:scale-90"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="overflow-hidden px-4" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {team.map((member, index) => (
            <div key={index} className="flex-[0_0_82%] min-w-0 px-3">
              <div className="bg-gradient-to-b from-neutral-900/80 to-black/80 border border-white/10 rounded-3xl p-8 flex flex-col items-center shadow-2xl">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)] mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={{
                      objectPosition: member.objectPosition || 'center',
                      transform: `scale(${member.scale || 1})`
                    }}
                  />
                </div>
                <p className="text-white font-bold text-xl text-center mb-1">{member.name}</p>
                <p className="text-yellow-500/90 text-sm font-medium tracking-wide mb-5 uppercase">{member.role}</p>

                {member.linkedin !== "#" && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-yellow-500 hover:text-black hover:scale-110 transition-all border border-white/5"
                    aria-label={`${member.name}'s LinkedIn Profile`}
                  >
                    <Linkedin size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TeamFloatingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  const [scrollProgress, setScrollProgress] = useState(0);
  const progressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

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

      const delta = e.deltaY * 0.02;

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
    const ropeWidth = 1000;
    const ropepathoffset = 13;

    for (let i = 0; i <= points; i++) {
      const xPercent = (i / points) * 100;
      const yPercent = 50 + Math.sin((xPercent / 100) * Math.PI) * ropepathoffset;

      const x = (xPercent / 100) * ropeWidth;
      const r = 2;
      const y = (yPercent / 100) * 450 - bubbleRadius * r;

      d += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
    }

    return d;
  }, []);

  return (
    <section ref={sectionRef} className="min-h-[60vh] md:min-h-screen bg-black py-20 relative overflow-hidden" id="team">
      <h2 className="text-center text-4xl font-bold text-white mb-12 md:mb-20 uppercase tracking-widest">
        Meet the Team
      </h2>

      {/* Mobile Swipe Section */}
      <TeamCarousel />

      {/* Desktop Rope Section */}
      <div className="hidden md:block relative h-[520px] overflow-hidden">
        {/* Rope */}
        <svg
          style={{ transform: `rotate(7deg)` }}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-95 origin-center"
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="rope3d" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="35%" stopColor="#facc15" />
              <stop offset="50%" stopColor="#eab308" />
              <stop offset="65%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#fde68a" />
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

        {/* Bubbles */}
        {team.map((member, index) => {
          const spacing = 32;
          const totalWidth = (team.length - 1) * spacing;
          const scrollRange = totalWidth;

          const xPercent =
            50 + index * spacing - (scrollProgress / 100) * scrollRange;
          const yPercent = 45 + Math.sin((xPercent / 100) * Math.PI) * 12;

          const scale = 0.6 + ((100 - xPercent) / 100) * 1.0;
          const visible = xPercent > -20 && xPercent < 120;

          return (
            <div
              key={index}
              className="absolute ease-out"
              style={{
                left: `${xPercent}%`,
                top: `${yPercent}%`,
                transform: `translate3d(-50%, -50%, 0) scale(${scale})`,
                opacity: visible ? 1 : 0,
                transition: "opacity 180ms ease-out",
                willChange: "transform, opacity",
                zIndex: Math.round(scale * 10),
              }}
            >
              <TeamBubble member={member} />
            </div>
          );
        })}
      </div>

      {/* Progress - Desktop only */}
      <div className="hidden md:flex justify-center mt-12">
        <div className="w-44 h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-yellow-500 transition-all duration-200" style={{ width: `${scrollProgress}%` }} />
        </div>
      </div>
    </section>
  );
}