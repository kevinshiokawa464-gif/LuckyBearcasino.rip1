"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const GAMES_ASSETS = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3be976a2-053f-4710-a39b-e57b1de0320e-luckybear-blog/assets/images/game1-2-1.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3be976a2-053f-4710-a39b-e57b1de0320e-luckybear-blog/assets/images/game2-3-2.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3be976a2-053f-4710-a39b-e57b1de0320e-luckybear-blog/assets/images/game3-4-3.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3be976a2-053f-4710-a39b-e57b1de0320e-luckybear-blog/assets/images/game4-5-4.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3be976a2-053f-4710-a39b-e57b1de0320e-luckybear-blog/assets/images/game5-6-5.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3be976a2-053f-4710-a39b-e57b1de0320e-luckybear-blog/assets/images/game6-7-6.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3be976a2-053f-4710-a39b-e57b1de0320e-luckybear-blog/assets/images/game7-8-7.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3be976a2-053f-4710-a39b-e57b1de0320e-luckybear-blog/assets/images/game8-9-8.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3be976a2-053f-4710-a39b-e57b1de0320e-luckybear-blog/assets/images/game9-10-9.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3be976a2-053f-4710-a39b-e57b1de0320e-luckybear-blog/assets/images/game10-11-10.png",
];

export default function GameCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % GAMES_ASSETS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + GAMES_ASSETS.length) % GAMES_ASSETS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const getSlideStyles = (index: number) => {
    const total = GAMES_ASSETS.length;
    let diff = index - activeIndex;

    // Handle circular wrap
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const absDiff = Math.abs(diff);
    
    // Logic for 3D stacking
    // index 0: center (scale 1.0, z-index 10, offset 0)
    // index 1/-1: sides (scale 0.8, z-index 5, offset +/- 200px)
    // others: hide (opacity 0)

    let opacity = 0;
    let scale = 0.5;
    let translateX = 0;
    let zIndex = 0;
    let pointerEvents: "auto" | "none" = "none";

    if (absDiff === 0) {
      opacity = 1;
      scale = 1;
      translateX = 0;
      zIndex = 30;
      pointerEvents = "auto";
    } else if (absDiff === 1) {
      opacity = 0.5;
      scale = 0.8;
      translateX = diff * 200; // Adjust offset for desktop/mobile
      zIndex = 20;
    } else if (absDiff === 2) {
      opacity = 0.2;
      scale = 0.6;
      translateX = diff * 320;
      zIndex = 10;
    }

    return {
      opacity,
      transform: `translateX(${translateX}px) scale(${scale})`,
      zIndex,
      pointerEvents,
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    };
  };

  return (
    <section id="games" className="overflow-hidden bg-[#05080f] py-20">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="mb-12 text-center text-[32px] font-bold uppercase tracking-[0.05em] text-white">
          Найди <span className="text-[#3B82F6]">свою</span> игру
        </h2>

        <div className="relative flex h-[300px] items-center justify-center md:h-[380px]">
          {/* Navigation Overlay Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-0 z-40 h-full w-1/3 cursor-pointer outline-none"
            aria-label="Предыдущая игра"
          />
          <button
            onClick={nextSlide}
            className="absolute right-0 top-0 z-40 h-full w-1/3 cursor-pointer outline-none"
            aria-label="Следующая игра"
          />

          {/* Carousel items */}
          <div className="relative flex h-full w-full items-center justify-center">
            {GAMES_ASSETS.map((src, index) => (
              <div
                key={index}
                className="absolute transition-all duration-500 ease-in-out"
                style={getSlideStyles(index)}
              >
                <div className="relative h-[220px] w-[220px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:h-[320px] md:w-[320px]">
                  <Image
                    src={src}
                    alt={`Игра ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 220px, 320px"
                    className="h-full w-full object-cover"
                    priority={index === activeIndex}
                  />
                  {/* Subtle inner overlay for 3D feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {GAMES_ASSETS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 outline-none ${
                activeIndex === index ? "w-6 bg-[#3B82F6]" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Игра ${index + 1}`}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://lbgame777.xyz/2xn84Y"
            className="group relative flex items-center gap-2 rounded-xl bg-[#3B82F6] px-8 py-3 text-[14px] font-bold uppercase text-white shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-95"
          >
            <span>🎰</span> Играть на сайте
          </a>
          <a
            href="https://lbgame777.xyz/2xn84Y"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3 text-[14px] font-bold uppercase text-white transition-all hover:bg-white/10 active:scale-95"
          >
            <span>✈️</span> Играть в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}