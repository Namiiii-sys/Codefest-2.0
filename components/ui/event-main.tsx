"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type EventItem = {
  title: string;
  short: string;
  long: string;
  time: string;
  date: string;
  prize_pool: string;
};

const mod = (n: number, len: number) => ((n % len) + len) % len;

export default function EventsCarousel({
  events,
  autoplay = false,
  frameImage = "/bg3.jpeg",
}: {
  events: EventItem[];
  autoplay?: boolean;
  frameImage?: string;
}) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<EventItem | null>(null);

  const next = () => setCurrent((c) => mod(c + 1, events.length));
  const prev = () => setCurrent((c) => mod(c - 1, events.length));

  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [autoplay]);

  return (
    <>
      {/* ================= CAROUSEL ================= */}
      <section className="min-h-screen md:px-0 px-10 w-full">
        <div className="container mx-auto px-4">

          <p className="text-center text-muted-foreground mb-16 font-cinzel">
            Navigate through our exciting lineup
          </p>

          <div className="relative mx-auto">

            {/* arrows */}
            <button
              onClick={next}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-40 w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:scale-110 transition golden-glow"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>

            <button
              onClick={prev}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-40 w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:scale-110 transition golden-glow"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>

            {/* cards */}
            <div className="relative h-[550px] md:h-[500px]">
              {events.map((event, i) => {
                const isMiddle = i === current;
                const isLeft = i === mod(current - 1, events.length);
                const isRight = i === mod(current + 1, events.length);

                let style;

                if (isMiddle)
                  style = { x: "50%", y: "0%", s: 1.1, z: 30, o: 1 };
                else if (isLeft)
                  style = { x: "10%", y: "55%", s: 0.9, z: 20, o: 0.9 };
                else if (isRight)
                  style = { x: "90%", y: "55%", s: 0.9, z: 20, o: 0.9 };
                else
                  style = { x: "85%", y: "55%", s: 0.85, z: 5, o: 0 };

                return (
                  <div
                    key={i}
                    onClick={() => setSelected(event)}   // 🔥 open modal
                    className="absolute w-64 md:w-72 cursor-pointer"
                    style={{
                      left: style.x,
                      top: style.y,
                      transform: `translate(-50%,0) scale(${style.s})`,
                      zIndex: style.z,
                      opacity: style.o,
                      transition: "all .6s cubic-bezier(.4,0,.2,1)",
                      pointerEvents: style.o === 0 ? "none" : "auto",
                    }}
                  >
                    <div
                      className="relative overflow-hidden rounded-lg hover:scale-[1.03] transition"
                      style={{
                        backgroundImage: `url(${frameImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        aspectRatio: "3/4",
                      }}
                    >
                      <div className="absolute inset-0 bg-black/40" />

                      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5 text-white z-10">

                        <span className="text-xs bg-black/60 px-3 py-1 rounded-full text-[#ffe9a3]">
                          {event.date}
                        </span>

                        <h3 className="text-xl font-bold mt-3">
                          {event.title}
                        </h3>

                        <p className="text-sm text-[#ffd86b] mt-2">
                          {event.time}
                        </p>

                        {event.prize_pool && (
                          <div className="mt-3 text-sm font-bold bg-black/60 px-3 py-1 rounded-full">
                            {event.prize_pool}
                          </div>
                        )}

                        <p className="mt-4 text-xs opacity-70">
                          Click for details
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-neutral-900 max-w-lg w-[90%] rounded-xl p-8 text-white relative animate-fadeIn"
          >
            <button
              className="absolute right-4 top-4"
              onClick={() => setSelected(null)}
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold mb-3">{selected.title}</h2>

            <p className="text-yellow-400 font-semibold">
              {selected.date} • {selected.time}
            </p>

            {selected.prize_pool && (
              <p className="mt-2 font-bold">{selected.prize_pool}</p>
            )}

            <p className="mt-5 text-white/90 leading-relaxed">
              {selected.long}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
