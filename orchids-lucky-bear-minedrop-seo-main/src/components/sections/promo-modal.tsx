"use client";

import React, { useState, useEffect } from "react";

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="glass-panel relative w-full max-w-[400px] overflow-hidden p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-[#3B82F6]/20 blur-[60px]" />

        {/* Close */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white/30 transition-colors hover:text-white"
          aria-label="Закрыть"
        >
          ✕
        </button>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-4 text-5xl">🐻</div>
          <p className="mb-2 text-[13px] font-bold uppercase tracking-widest text-white/40">
            Lucky Bear Casino
          </p>
          <h2 className="mb-6 text-[34px] font-extrabold uppercase leading-tight text-white">
            Вам доступно<br />
            <span className="text-[#3B82F6] drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              80 фриспинов
            </span>
          </h2>

          <a
            href="/reg.html"
            className="btn-glow w-full rounded-xl bg-[#3B82F6] py-4 px-8 text-[16px] font-bold text-white"
          >
            Забрать подарок →
          </a>
          <p className="mt-4 text-[11px] uppercase tracking-widest text-white/25">
            Предложение ограничено
          </p>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent" />
      </div>
    </div>
  );
}
