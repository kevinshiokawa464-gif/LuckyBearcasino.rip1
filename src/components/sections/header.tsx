"use client";

import React, { useState, useEffect } from 'react';
import { Menu, LogIn, UserPlus } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-[60] w-full transition-all duration-300 border-b ${
      isScrolled ? "bg-[#05080f]/90 shadow-lg border-white/10" : "bg-[#05080f]/70 border-white/5"
    } backdrop-blur-xl`}>
      <nav className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5">
        {/* Desktop Left Navigation */}
        <ul className="hidden grow basis-0 items-center gap-2 lg:flex">
          <li className="list-none">
            <a 
              href="#games" 
              className="rounded-xl px-4 py-2 text-[12px] font-black uppercase tracking-widest text-white/50 transition-all hover:bg-white/5 hover:text-[#3B82F6]"
            >
              Игры
            </a>
          </li>
          <li className="list-none">
            <a 
              href="#bonuses" 
              className="rounded-xl px-4 py-2 text-[12px] font-black uppercase tracking-widest text-white/50 transition-all hover:bg-white/5 hover:text-[#3B82F6]"
            >
              Бонусы
            </a>
          </li>
          <li className="list-none">
            <a 
              href="#telegram" 
              className="rounded-xl px-4 py-2 text-[12px] font-black uppercase tracking-widest text-white/50 transition-all hover:bg-white/5 hover:text-[#3B82F6]"
            >
              Telegram
            </a>
          </li>
        </ul>

        {/* Logo - Centered on Desktop */}
        <div className="flex shrink-0 items-center justify-center px-4">
          <a href="#top" aria-label="Lucky Bear Casino" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#3B82F6]/10 ring-1 ring-[#3B82F6]/30 text-2xl shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              🐻
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] font-black uppercase tracking-tighter text-white leading-none">
                Lucky<span className="text-[#3B82F6]">Bear</span>
              </span>
              <span className="text-[8px] font-bold text-[#3B82F6] uppercase tracking-[0.3em] leading-none mt-1">Premium Gaming</span>
            </div>
          </a>
        </div>

        {/* Desktop Right Navigation */}
        <div className="hidden grow basis-0 items-center justify-end gap-3 lg:flex">
          <a 
            href="https://lbgame777.xyz/2xn84Y" 
            className="flex items-center gap-2 rounded-xl px-4 py-2 text-[12px] font-black uppercase tracking-widest text-white/70 transition-all hover:text-white"
          >
            <LogIn size={14} />
            Вход
          </a>
          <a 
            href="https://lbgame777.xyz/2xn84Y" 
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-blue-700 px-6 py-2.5 text-[12px] font-black uppercase tracking-widest text-white shadow-[0_4px_15px_rgba(59,130,246,0.3)] transition-all hover:scale-105 hover:shadow-[0_6px_20px_rgba(59,130,246,0.4)] active:scale-95"
          >
            <UserPlus size={14} />
            Регистрация
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <a 
            href="https://lbgame777.xyz/2xn84Y" 
            className="rounded-xl bg-[#3B82F6] px-5 py-2 text-[12px] font-black uppercase tracking-widest text-white shadow-[0_4px_14px_0_rgba(59,130,246,0.3)] transition-transform active:scale-95"
          >
            Играть
          </a>
          <button 
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white hover:bg-white/10" 
            aria-label="Меню"
          >
            <Menu size={20} strokeWidth={3} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
