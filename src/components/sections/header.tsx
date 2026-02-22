"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNavItems = [
    { label: "Игры", href: "#games" },
    { label: "Бонусы", href: "#bonuses" },
    { label: "Вход", href: "#vhod" },
    { label: "Регистрация", href: "#registraciya" },
  ];

  const rightNavItems = [
    { label: "Преимущества", href: "#features" },
    { label: "Telegram", href: "#telegram" },
    { label: "FAQ", href: "#faq" },
    { label: "Отзывы", href: "#otzyvy" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-[rgba(5,8,15,0.97)] shadow-lg shadow-black/40" : "bg-[rgba(5,8,15,0.6)]"
      }`}
      style={{ backdropFilter: "blur(16px)", height: "68px" }}
    >
      <nav className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-5">
        {/* Left nav */}
        <ul className="hidden grow basis-0 items-center gap-1 lg:flex">
          {leftNavItems.map((item) => (
            <li key={item.label} className="list-none">
              <a
                href={item.href}
                className="rounded-xl px-3 py-2 text-[13px] font-medium tracking-wide text-white/65 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Logo center */}
        <div className="flex shrink-0 items-center justify-center px-3">
          <a href="#top" aria-label="Lucky Bear Casino" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3B82F6]/20 ring-1 ring-[#3B82F6]/30 text-xl">
              🐻
            </div>
            <span className="text-[18px] font-extrabold tracking-tight text-white">
              Lucky<span className="text-[#3B82F6]">Bear</span>
            </span>
          </a>
        </div>

        {/* Right nav */}
        <ul className="hidden grow basis-0 items-center justify-end gap-1 lg:flex">
          {rightNavItems.map((item) => (
            <li key={item.label} className="list-none">
              <a
                href={item.href}
                className="rounded-xl px-3 py-2 text-[13px] font-medium tracking-wide text-white/65 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile: logo + burger */}
        <div className="flex items-center gap-3 lg:hidden">
            <a
              href="https://lbgame777.xyz/2xn84Y"
              className="rounded-full bg-[#3B82F6] px-4 py-2 text-[13px] font-semibold text-white"
            >
              Играть
            </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-white hover:bg-white/10"
            aria-label="Меню"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#05080F] px-4 py-3 lg:hidden">
          <div className="grid grid-cols-2 gap-1">
            {[...leftNavItems, ...rightNavItems].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-[14px] font-medium text-white/70 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="absolute bottom-0 h-px w-full bg-white/5" />
    </header>
  );
};

export default Header;
