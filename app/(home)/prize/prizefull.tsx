"use client";

import { useEffect, useState } from "react";

export default function PrizesFull() {
  const totalPrize = "120000";
  const duration = 1500; // animation duration in ms

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(percentage * totalPrize));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="bg-black py-24 px-6 text-white text-center mt-10">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Heading */}
        <p className="text-yellow-500 font-semibold tracking-[0.25em] uppercase">
          Prize Pool
        </p>

        {/* Big number (hero focus) */}
        <h2 className="text-5xl md:text-7xl font-extrabold text-yellow-400 tracking-wide">
          ₹ {count.toLocaleString()}
        </h2>

        {/* Subtitle */}
        <p className="text-white/70 text-lg md:text-xl">
          Cash prizes • Goodies • Special awards • Recognition
        </p>

      </div>
    </section>
  );
}
