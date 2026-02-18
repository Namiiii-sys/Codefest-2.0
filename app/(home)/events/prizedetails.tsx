"use client";

type PrizeItem = {
  title: string;
  prize: string;
  note?: string;
};

/* =========================================
   DATA (easy to maintain / scalable)
========================================= */

const prizes: PrizeItem[] = [
  { title: "First Place", prize: "₹50,000" },
  { title: "Second Place", prize: "₹30,000" },
  { title: "Third Place", prize: "₹20,000" },

];

/* =========================================
   CALCULATE TOTAL (automatic)
========================================= */

const totalPrize = prizes.reduce((sum, p) => {
  const value = Number(p.prize.replace(/[₹,]/g, ""));
  return sum + value;
}, 0);

/* =========================================
   COMPONENT
========================================= */

export default function PrizeDetails() {
  return (
    <section className="bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <p className="text-yellow-500 tracking-widest uppercase font-semibold">
            Prize Pool of Hackathon
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-extrabold text-yellow-400">
            ₹ {totalPrize.toLocaleString()}
          </h2>

          <p className="mt-3 text-white/60">
            Cash rewards across winners and special categories
          </p>
        </div>

        {/* ================= BREAKDOWN ================= */}
        <div className="grid md:grid-cols-2 gap-6">

          {prizes.map((p, i) => (
            <div
              key={i}
              className="
                flex justify-between items-center
                bg-white/5 border border-white/10
                rounded-xl px-6 py-5
                hover:border-yellow-400/40
                transition-colors
              "
            >
              <div>
                <p className="font-semibold text-white">{p.title}</p>

                {p.note && (
                  <p className="text-sm text-white/60">{p.note}</p>
                )}
              </div>

              <span className="font-bold text-yellow-400 text-lg">
                {p.prize}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
