"use client";

export default function PrizesSection() {
  const totalPrize = 120000; // 50k + 35k + 20k + 5k + 5k + 5k

  return (
    <section className="bg-black py-24 px-6 text-white text-center">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Heading */}
        <p className="text-yellow-500 font-semibold tracking-[0.25em] uppercase">
          Prize Pool
        </p>

        {/* Big number (hero focus) */}
        <h2 className="text-5xl md:text-7xl font-extrabold text-yellow-400 tracking-wide">
          ₹ {totalPrize.toLocaleString()}
        </h2>

        {/* Subtitle */}
        <p className="text-white/70 text-lg md:text-xl">
          Cash prizes • Goodies • Special awards • Recognition
        </p>

      </div>
    </section>
  );
}
