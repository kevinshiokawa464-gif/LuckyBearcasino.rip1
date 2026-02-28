import React from "react";

const bonuses = [
  {
    id: 1,
    label: "1-й депозит",
    value: "до 360%",
    fs: null,
    active: true,
    color: "#3B82F6",
  },
  {
    id: 2,
    label: "2-й депозит",
    value: "до 250%",
    fs: null,
    active: false,
    color: "#1E293B",
  },
  {
    id: 3,
    label: "3-й депозит",
    value: "до 200%",
    fs: "+ 50 FS",
    active: false,
    color: "#1E293B",
  },
  {
    id: 4,
    label: "4-й депозит",
    value: "до 180%",
    fs: "+ 200 FS",
    active: false,
    color: "#1E293B",
  },
];

export default function BonusesSection() {
  return (
    <section id="bonuses" className="bg-background py-20">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="mb-12 text-center text-[32px] font-bold uppercase tracking-wider">
          Бонусная программа <span className="text-[#3B82F6]">Lucky Bear</span>
        </h2>

        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bonuses.map((bonus) => (
            <div
              key={bonus.id}
              className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border p-8 text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] ${
                bonus.active
                  ? "border-[#3B82F6]/40 bg-[#3B82F6]/10"
                  : "border-white/5 bg-white/[0.03] opacity-65 hover:opacity-100"
              }`}
              style={{ minHeight: "220px" }}
            >
              {/* icon */}
              <div className="mb-5 text-4xl">{bonus.active ? "🎁" : "📦"}</div>

              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/50">
                  {bonus.label}
                </span>
                <span className="text-[30px] font-extrabold leading-none text-[#10B981]">
                  {bonus.value}
                </span>
                {bonus.fs && (
                  <span className="text-[22px] font-extrabold text-[#10B981]">{bonus.fs}</span>
                )}
              </div>

              {bonus.active && (
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent" />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="/reg.html"
            className="btn-glow rounded-xl bg-[#3B82F6] px-12 py-4 text-[15px] font-bold uppercase tracking-wide text-white"
          >
            Забрать бонус
          </a>
        </div>
      </div>
    </section>
  );
}
