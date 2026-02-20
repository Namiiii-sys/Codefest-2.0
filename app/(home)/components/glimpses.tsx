"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Glimpse = {
  title: string;
  images: string[];
};

const glimpses: Glimpse[] = [
  {
    title: "Web Auction",
    images: ["/glimpses/auction2.jpg", "/glimpses/auction.jpg"],
  },
  {
    title: "Code Phantom",
    images: ["/glimpses/phantom.jpg", "/glimpses/phantom2.jpg"],
  },
  {
    title: "Design Apocalypse",
    images: ["/glimpses/apocalypse.jpg", "/glimpses/apocalypse2.jpg"],
  },
  {
    title: "Tech Quiz",
    images: ["/glimpses/quiz.jpg", "/glimpses/quiz2.jpg"],
  },
  {
    title: "General",
    images: ["/glimpses/festgeneral.jpeg", "/glimpses/festgeneral2.jpg"],
  },
  {
    title: "Everyone",
    images: ["/glimpses/festgeneral3.jpeg"],
  },
];

// infinite loop buffer
const buffered = [
  glimpses[glimpses.length - 1],
  ...glimpses,
  glimpses[0],
];

export default function Glimpses() {

  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  // auto rotate
  useEffect(() => {
    intervalRef.current = setInterval(next, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // seamless reset
  const handleTransitionEnd = () => {

    if (index === buffered.length - 1) {
      setAnimate(false);
      setIndex(1);
    }

    if (index === 0) {
      setAnimate(false);
      setIndex(buffered.length - 2);
    }
  };

  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() =>
        requestAnimationFrame(() =>
          setAnimate(true)
        )
      );
    }
  }, [animate]);

  return (
    <section className="bg-black py-24 px-6">

      <div className="text-center mb-14">
        <h2 className="text-white text-4xl font-bold">
          Glimpses of CodeFest 1.0
        </h2>
      </div>

      <div className="max-w-5xl mx-auto relative">

        <div className="overflow-hidden bg-white/5 border border-white/10 rounded-xl p-4">

          <div
            onTransitionEnd={handleTransitionEnd}
            className={`flex ${animate ? "transition-transform duration-700 ease-out" : ""}`}
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >

            {buffered.map((glimpse, gIndex) => (

              <div key={gIndex} className="w-full flex-shrink-0 px-1">

                <div className={`grid gap-4 ${glimpse.images.length > 1
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1"
                  }`}>

                  {glimpse.images.map((src, i) => (

                    <div key={i} className="relative w-full h-[320px]">

                      <Image
                        src={src}
                        alt={glimpse.title}
                        fill
                        sizes="(max-width:768px) 100vw, 50vw"
                        className="object-cover rounded-lg"
                      />

                    </div>

                  ))}

                </div>

                <div className="text-center mt-4">
                  <p className="text-yellow-400 font-semibold text-lg">
                    {glimpse.title}
                  </p>
                </div>

              </div>

            ))}

          </div>

        </div>

        <button
          onClick={prev}
          className="absolute left-[-60px] top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={next}
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full"
        >
          <ChevronRight size={24} />
        </button>

      </div>

    </section>
  );
}
