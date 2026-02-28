<<<<<<< HEAD
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "Через Telegram заходить — одно удовольствие, не надо каждый раз вводить данные. Вывод был быстрым, претензий нет.",
    author: "Игрок #4812",
    date: "Вчера",
    rating: 5
  },
  {
    text: "Поддержка ответила ночью, помогли разобраться с регистрацией Lucky Bear. Приятно, что живые люди, а не боты.",
    author: "Александр К.",
    date: "2 дня назад",
    rating: 5
  },
  {
    text: "Выиграл приличную сумму с бонуса лаки бир — без проблем вывели. Казино держит слово.",
    author: "MaxBet_99",
    date: "3 дня назад",
    rating: 5
  },
  {
    text: "Слоты разнообразные, интерфейс удобный даже с телефона. Хорошее казино Lucky Bear.",
    author: "Елена С.",
    date: "Неделю назад",
    rating: 5
  }
];

const ReviewCard = ({ text, author, date, rating }: { text: string; author: string; date: string; rating: number }) => (
  <div className="glass-panel group p-6 transition-all duration-300 hover:scale-[1.02] hover:border-[#3B82F6]/30">
    <div className="mb-4 flex items-center justify-between">
      <div className="flex gap-0.5">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={14} className="fill-[#fbbf24] text-[#fbbf24]" />
        ))}
      </div>
      <span className="text-[12px] font-medium text-white/30">{date}</span>
    </div>
    <p className="mb-6 text-[15px] leading-relaxed text-white/70 italic">
      &quot;{text}&quot;
    </p>
    <div className="flex items-center gap-3 border-t border-white/5 pt-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3B82F6]/10 text-[14px] font-bold text-[#3B82F6] ring-1 ring-[#3B82F6]/20">
        {author[0].toUpperCase()}
      </div>
      <div>
        <h4 className="text-[14px] font-semibold text-white">{author}</h4>
        <span className="text-[11px] uppercase tracking-wider text-white/40">Верифицирован</span>
      </div>
    </div>
  </div>
);

const ReviewsSection = () => {
  return (
    <section id="otzyvy" className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/5 blur-[120px]"></div>
      
      <div className="container relative z-10">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">Отзывы сообщества</span>
          </div>
          <h2 className="text-[32px] font-bold uppercase tracking-wider lg:text-[40px]">
            Отзывы <span className="text-[#3B82F6]">игроков</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-[16px] text-white/50">
            Мы ценим мнение каждого участника Lucky Bear. Узнайте, что говорят о нас реальные пользователи нашей платформы.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-white/[0.02] p-8 text-center backdrop-blur-sm">
          <h3 className="mb-2 text-[20px] font-bold text-white">Хотите оставить свой отзыв?</h3>
          <p className="mb-6 text-[14px] text-white/40">
            Расскажите о своем опыте игры в Lucky Bear Casino в нашем официальном чате Telegram.
          </p>
          <a 
            href="https://lbgame777.xyz/2xn84Y" 
            className="inline-flex items-center gap-2 rounded-xl bg-[#3B82F6] px-8 py-3.5 text-[14px] font-bold uppercase tracking-wide text-white transition-all hover:scale-105 active:scale-95 shadow-[0_4px_14px_0_rgba(59,130,246,0.39)]"
          >
            ✈️ Написать в Telegram
          </a>
=======
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
>>>>>>> 316b9c18e834a61e70fec81a83ff2ab9fd09be36
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
};

export default ReviewsSection;
=======
}
>>>>>>> 316b9c18e834a61e70fec81a83ff2ab9fd09be36
