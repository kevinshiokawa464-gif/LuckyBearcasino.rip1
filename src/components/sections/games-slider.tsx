"use client";

import React, { useState } from "react";

const games = [
  { id: 1, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3773ea27-62d6-4826-bde0-d566304c32a2-luckybear-minedrop-ru/assets/images/game1-2.png", alt: "Игра 1" },
  { id: 2, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3773ea27-62d6-4826-bde0-d566304c32a2-luckybear-minedrop-ru/assets/images/game2-3.png", alt: "Игра 2" },
  { id: 3, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3773ea27-62d6-4826-bde0-d566304c32a2-luckybear-minedrop-ru/assets/images/game3-4.png", alt: "Игра 3" },
  { id: 4, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3773ea27-62d6-4826-bde0-d566304c32a2-luckybear-minedrop-ru/assets/images/game4-5.png", alt: "Игра 4" },
  { id: 5, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3773ea27-62d6-4826-bde0-d566304c32a2-luckybear-minedrop-ru/assets/images/game5-6.png", alt: "Игра 5" },
  { id: 6, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3773ea27-62d6-4826-bde0-d566304c32a2-luckybear-minedrop-ru/assets/images/game6-7.png", alt: "Игра 6" },
  { id: 7, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3773ea27-62d6-4826-bde0-d566304c32a2-luckybear-minedrop-ru/assets/images/game7-8.png", alt: "Игра 7" },
  { id: 8, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3773ea27-62d6-4826-bde0-d566304c32a2-luckybear-minedrop-ru/assets/images/game8-9.png", alt: "Игра 8" },
  { id: 9, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3773ea27-62d6-4826-bde0-d566304c32a2-luckybear-minedrop-ru/assets/images/game9-10.png", alt: "Игра 9" },
  { id: 10, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3773ea27-62d6-4826-bde0-d566304c32a2-luckybear-minedrop-ru/assets/images/game10-11.png", alt: "Игра 10" },
];

export default function GamesSlider() {
  const [current, setCurrent] = useState(0);
  const total = games.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const getStyle = (index: number) => {
    const diff = (index - current + total) % total;
    if (diff === 0) return { zIndex: 30, transform: "scale(1) translateX(0px)", opacity: 1 };
    if (diff === 1 || diff === total - 1) {
      const x = diff === 1 ? 220 : -220;
      return { zIndex: 20, transform: `scale(0.76) translateX(${x}px)`, opacity: 0.75 };
    }
    if (diff === 2 || diff === total - 2) {
      const x = diff === 2 ? 360 : -360;
      return { zIndex: 10, transform: `scale(0.55) translateX(${x}px)`, opacity: 0.35 };
    }
    return { zIndex: 0, transform: "scale(0) translateX(0px)", opacity: 0, pointerEvents: "none" as const };
  };

  return (
    <section id="games" className="overflow-hidden bg-background py-20">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="mb-12 text-center text-[32px] font-bold uppercase tracking-[0.05em]">
          Найди <span className="text-[#3B82F6]">свою</span> игру
        </h2>

        {/* Slider */}
        <div className="relative flex h-[300px] items-center justify-center md:h-[380px]">
          {/* Click zones */}
          <button
            onClick={prev}
            className="absolute left-0 top-0 h-full w-1/3 z-40 cursor-pointer"
            aria-label="Предыдущая игра"
          />
          <button
            onClick={next}
            className="absolute right-0 top-0 h-full w-1/3 z-40 cursor-pointer"
            aria-label="Следующая игра"
          />

          {games.map((game, index) => (
            <div
              key={game.id}
              className="absolute transition-all duration-500 ease-in-out"
              style={getStyle(index)}
            >
              <div className="relative h-[260px] w-[260px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:h-[320px] md:w-[320px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={game.src}
                  alt={game.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {games.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-[#3B82F6]" : "w-2 bg-white/20"
              }`}
              aria-label={`Игра ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href='https://t.me/+EIx-OPkXbOA1MDNi'
            className="btn-glow flex items-center gap-2 rounded-xl bg-[#3B82F6] px-8 py-3 text-[14px] font-bold uppercase text-white"
          >
            🎰 Играть на сайте
          </a>
          <a
            href='https://t.me/+EIx-OPkXbOA1MDNi'
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3 text-[14px] font-bold uppercase text-white transition-colors hover:bg-white/10"
          >
            ✈️ Играть в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
