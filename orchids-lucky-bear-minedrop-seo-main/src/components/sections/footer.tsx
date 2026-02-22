import React from "react";

const footerLinks = [
  { label: "Игры", href: "#games" },
  { label: "Бонусы", href: "#bonuses" },
  { label: "Вход", href: "#vhod" },
  { label: "Регистрация", href: "#registraciya" },
  { label: "Преимущества", href: "#features" },
  { label: "Telegram", href: "#telegram" },
  { label: "FAQ", href: "#faq" },
  { label: "Отзывы", href: "#otzyvy" },
];

const keywords = [
  "лаки бир", "lucky bear casino", "казино лаки бир", "лаки бир официальный сайт",
  "lucky bear официальный сайт", "лаки бир вход", "lucky bear вход", "лаки бир регистрация",
  "lucky bear регистрация", "лаки бир казино", "лаки бир бонус", "lucky bear бонус",
  "лаки бир играть онлайн", "lucky bear играть", "лаки бир зеркало", "lucky bear зеркало",
  "казино lucky bear", "luckybear casino", "лакибир", "лаки бир слоты",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#05080F] pt-16 pb-10">
      <div className="container mx-auto max-w-[1200px] px-4">

        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <a href="#top" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6]/20 ring-1 ring-[#3B82F6]/30 text-2xl">
              🐻
            </div>
            <span className="text-[20px] font-extrabold tracking-tight text-white">
              Lucky<span className="text-[#3B82F6]">Bear</span>
            </span>
          </a>
        </div>

        {/* Age warning */}
        <p className="mb-8 text-center text-[13px] text-white/35">
          Играйте ответственно. Платформа предназначена исключительно для лиц старше 18 лет.
        </p>

        {/* Nav links */}
        <nav className="mb-10 flex flex-wrap justify-center gap-x-5 gap-y-3">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] font-semibold uppercase tracking-wider text-white/40 transition-colors hover:text-[#3B82F6]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <hr className="mb-10 border-white/5" />

        {/* SEO keyword block */}
        <div className="mb-10 max-w-[1000px] mx-auto">
          <p className="text-center text-[12px] leading-[1.9] text-white/25">
            <strong className="text-white/40">Популярные запросы: </strong>
            {keywords.join(", ")}
          </p>
        </div>

        {/* Copyright */}
        <p className="text-center text-[11px] text-white/20">
          © 2026 LuckyBear Casino (Лаки Бир). Все права защищены. Информационный сайт. 18+
        </p>
      </div>
    </footer>
  );
}
