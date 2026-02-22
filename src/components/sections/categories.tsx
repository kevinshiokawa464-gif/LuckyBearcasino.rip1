import React from "react";

const cards = [
  {
    icon: "🃏",
    tag: "Live",
    name: "Live-столы",
    desc: "Настоящие дилеры, прямой эфир",
  },
  {
    icon: "🎰",
    tag: "Классика",
    name: "Классические слоты",
    desc: "Популярные автоматы всех времён",
  },
  {
    icon: "⚡",
    tag: "Турбо",
    name: "Турбо-игры",
    desc: "Быстрые раунды, мгновенные результаты",
  },
  {
    icon: "✨",
    tag: "Бонусные",
    name: "Бонус-раунды",
    desc: "Слоты с расширенными фичами",
  },
];

export default function Categories() {
  return (
    <section className="bg-background py-14">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="mb-8 text-[28px] font-bold uppercase tracking-wide text-white">
          Популярные категории игр
        </h2>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {cards.map((c) => (
            <a
              key={c.name}
              href="/reg.html"
              className="group relative flex min-h-[140px] flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[rgba(15,23,42,0.6)] p-5 backdrop-blur-[8px] transition-all duration-300 hover:scale-[1.02] hover:border-[#3B82F6]/30"
            >
              <div className="flex items-center justify-between">
                <span className="text-[22px]">{c.icon}</span>
                <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase text-white/40 transition-colors group-hover:bg-[#3B82F6]/20 group-hover:text-[#3B82F6]">
                  {c.tag}
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-[15px] font-semibold text-white transition-colors group-hover:text-[#3B82F6]">
                  {c.name}
                </h3>
                <p className="mt-1 text-[12px] text-white/35">{c.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#3B82F6] transition-all duration-500 group-hover:w-full opacity-60" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
