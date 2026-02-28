import React from 'react';

/**
 * Bonuses Section Component
 * 
 * Clones the "Бонусная программа Lucky Bear" section with four promotional cards.
 * Adheres to the "iGaming Noir" aesthetic: glassmorphism, blue accents, 
 * high contrast, and polished hover effects.
 */
const Bonuses = () => {
  const bonusCards = [
    {
      icon: "🎁",
      label: "1-й депозит",
      amount: "до 360%",
      description: "Максимальный буст для твоего старта в игре.",
      highlight: true, // Specific highlight styling for the first card
    },
    {
      icon: "🐻",
      label: "За регистрацию",
      amount: "100 FS",
      description: "Фриспины в топовых слотах сразу после создания аккаунта.",
      highlight: false,
    },
    {
      icon: "💸",
      label: "Кэшбэк",
      amount: "до 20%",
      description: "Возвращаем часть средств каждую неделю без условий.",
      highlight: false,
    },
    {
      icon: "⭐",
      label: "VIP-статус",
      amount: "Эксклюзив",
      description: "Персональные лимиты, бонусы и выделенный менеджер.",
      highlight: false,
    }
  ];

  return (
    <section id="bonuses" className="bg-background py-20 relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[#3B82F6]/5 blur-[120px]"></div>

      <div className="container relative z-10 mx-auto max-w-[1200px] px-4">
        {/* Section Heading */}
        <h2 className="mb-12 text-center text-[32px] font-bold uppercase tracking-wider text-white">
          Бонусная программа <span className="text-[#3B82F6]">Lucky Bear</span>
        </h2>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bonusCards.map((card, index) => (
            <div
              key={index}
              className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border p-8 text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] ${
                card.highlight 
                  ? "border-[#3B82F6]/40 bg-[#3B82F6]/10" 
                  : "border-white/5 bg-[rgba(15,23,42,0.6)] backdrop-blur-md"
              }`}
            >
              {/* Card Icon */}
              <div className="mb-5 text-4xl">{card.icon}</div>
              
              {/* Content Wrapper */}
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/50">
                  {card.label}
                </span>
                <span className={`text-[30px] font-extrabold leading-none ${card.highlight ? "text-[#10B981]" : "text-white"}`}>
                  {card.amount}
                </span>
              </div>
              
              {/* Description */}
              <p className="mt-4 text-[13px] leading-relaxed text-white/45">
                {card.description}
              </p>

              {/* Bottom Decorative Line (only on non-highlight cards to match design intent) */}
              {!card.highlight && (
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#3B82F6] transition-all duration-500 group-hover:w-full opacity-60"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons below the cards */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://lbgame777.xyz/2xn84Y"
            className="btn-glow inline-flex h-12 items-center justify-center rounded-xl bg-[#3B82F6] px-10 text-[14px] font-bold uppercase tracking-wide text-white transition-transform hover:scale-[1.02]"
          >
            Забрать бонусы
          </a>
          <a
            href="https://lbgame777.xyz/2xn84Y"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-10 text-[14px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
          >
            Правила акций
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;