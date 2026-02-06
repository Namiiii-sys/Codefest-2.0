"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  heading = "EVENTS",
  subheading = "A quick overview of the journey.",
}: {
  data: TimelineEntry[];
  heading?: string;
  subheading?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setHeight(rect.height);
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl place-items-center mx-auto py-20 px-4 md:px-8 lg:px-10 pt-50">
        <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 tracking-widest">
          {heading}
        </h2>
        <p className="mt-3 text-center text-white/70 text-sm md:text-base max-w-xl">
          {subheading}
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10  md:gap-10"
          >
            {/* Left sticky title + bullet */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-yellow-400 border border-yellow-600 shadow-[0_0_18px_rgba(234,179,8,0.55)]" />
              </div>

              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-white/30">
                {item.title}
              </h3>
            </div>

            {/* Right content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white/40">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Vertical Track */}
        <div
          style={{ height: height + "px" }}
          className="
            absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]
            bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
            from-transparent from-[0%] via-white/15 to-transparent to-[99%]
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]
          "
        >
          {/* ✅ Scroll Progress Line (Yellow Theme) */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="
              absolute inset-x-0 top-0 w-[2px] rounded-full
              bg-gradient-to-t
              from-yellow-600 via-yellow-400 to-transparent
              from-[0%] via-[14%]
              shadow-[0_0_22px_rgba(234,179,8,0.55)]
            "
          />
        </div>
      </div>
    </div>
  );
};
