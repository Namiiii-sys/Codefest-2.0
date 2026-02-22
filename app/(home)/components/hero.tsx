"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "800"],
});

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-03-27T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="w-full relative h-screen overflow-hidden bg-black">
      {/*  Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/temp2.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Overlay content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 text-center">
        <Image src={"/LOGO.png"} alt="logo" height={80} width={800} priority />

        <div className={`${cinzel.className} text-xl md:text-2xl text-yellow-300 tracking-[0.1em] font-bold uppercase`}>
          27-28th March
        </div>

        {/* Countdown */}
        <div className="flex gap-4 text-yellow-300 font-bold text-sm md:text-xl">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div
              key={key}
              className="md:px-4 md:py-3 py-1.5 px-1 rounded-lg min-w-[80px] bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="text-sm md:text-2xl">{value}</div>
              <div className="uppercase text-xs tracking-widest">{key}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:gap-6">
          <Link
            href="https://unstop.com/college-fests/cbs-codefest-20-acm-sscbs-442766" target="_blank"
            className="mt-6 py-3 px-8 text-lg font-semibold bg-yellow-500 text-black rounded-md shadow-lg transition-all hover:bg-yellow-500"
          >
            Register Now
          </Link>
          <Link
            href="/events"
            className="mt-6 py-3 px-8 text-lg font-semibold border border-white/30 text-white rounded-md shadow-lg transition-all hover:border-yellow-500"
          >
            Begin Your Quest
          </Link>
        </div>
      </div>
    </main>
  );
}
