import React from "react";

const reviews = [
  {
    author: "Артём К.",
    date: "15.01.2026",
    rating: 5,
    text: "Через Telegram заходить — одно удовольствие, не надо каждый раз вводить данные. Вывод был быстрым, претензий нет.",
  },
  {
    author: "Марина В.",
    date: "20.02.2026",
    rating: 4,
    text: "Поддержка ответила ночью, помогли разобраться с регистрацией Lucky Bear. Приятно, что живые люди, а не боты.",
  },
  {
    author: "Игорь С.",
    date: "21.02.2026",
    rating: 5,
    text: "Выиграл приличную сумму с бонуса лаки бир — без проблем вывели. Казино держит слово.",
  },
  {
    author: "Ольга Р.",
    date: "18.02.2026",
    rating: 5,
    text: "Слоты разнообразные, интерфейс удобный даже с телефона. Хорошее казино Lucky Bear.",
  },
];

const usefulLinks = [
  { label: "Вход", href: "#vhod" },
  { label: "Регистрация", href: "#registraciya" },
  { label: "Бонусы", href: "#bonuses" },
  { label: "Telegram", href: "#telegram" },
  { label: "FAQ", href: "#faq" },
  { label: "Игры", href: "#games" },
];

export default function ReviewsSection() {
  return (
    <section id="otzyvy" className="bg-background py-20">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="mb-12 text-center text-[32px] font-bold uppercase tracking-[0.05em]">
          Отзывы <span className="text-[#3B82F6]">игроков</span>
        </h2>

        <div className="glass-panel p-6 md:p-8">
          <ul className="mb-10 space-y-4">
            {reviews.map((r, i) => (
              <li
                key={i}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:bg-white/[0.04]"
              >
                <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-[14px]">
                    <span className="font-bold uppercase tracking-wide text-white">{r.author}</span>
                    <span className="mx-2 text-white/20">·</span>
                    <span className="text-[13px] text-white/40">{r.date}</span>
                  </div>
                  <div className="text-[#F1C40F] tracking-widest">
                    {"★".repeat(r.rating)}
                    <span className="text-white/15">{"★".repeat(5 - r.rating)}</span>
                  </div>
                </div>
                <p className="text-[14px] leading-[1.65] text-white/55">{r.text}</p>
              </li>
            ))}
          </ul>

          <div className="border-t border-white/5 pt-7">
            <h3 className="mb-5 text-[13px] font-bold uppercase tracking-widest text-white/40">
              Быстрая навигация
            </h3>
            <ul className="flex flex-wrap gap-2">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[12px] font-semibold uppercase tracking-wider text-white/65 transition-all hover:border-[#3B82F6] hover:bg-[#3B82F6] hover:text-white hover:shadow-[0_0_14px_rgba(59,130,246,0.4)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
