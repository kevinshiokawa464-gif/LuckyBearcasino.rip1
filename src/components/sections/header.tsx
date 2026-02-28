import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-[rgba(5,8,15,0.6)] backdrop-blur-md border-b border-white/5">
      <nav className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5">
        {/* Desktop Left Navigation */}
        <ul className="hidden grow basis-0 items-center gap-1 lg:flex">
          <li className="list-none">
            <a 
              href="#games" 
              className="rounded-xl px-3 py-2 text-[13px] font-medium tracking-wide text-white/65 transition-colors hover:bg-white/5 hover:text-white"
            >
              Игры
            </a>
          </li>
          <li className="list-none">
            <a 
              href="#bonuses" 
              className="rounded-xl px-3 py-2 text-[13px] font-medium tracking-wide text-white/65 transition-colors hover:bg-white/5 hover:text-white"
            >
              Бонусы
            </a>
          </li>
          <li className="list-none">
            <a 
              href="#vhod" 
              className="rounded-xl px-3 py-2 text-[13px] font-medium tracking-wide text-white/65 transition-colors hover:bg-white/5 hover:text-white"
            >
              Вход
            </a>
          </li>
          <li className="list-none">
            <a 
              href="#registraciya" 
              className="rounded-xl px-3 py-2 text-[13px] font-medium tracking-wide text-white/65 transition-colors hover:bg-white/5 hover:text-white"
            >
              Регистрация
            </a>
          </li>
        </ul>

        {/* Logo - Centered on Desktop */}
        <div className="flex shrink-0 items-center justify-center px-3">
          <a href="#top" aria-label="Lucky Bear Casino" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3B82F6]/20 ring-1 ring-[#3B82F6]/30 text-xl shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              🐻
            </div>
            <span className="text-[18px] font-black uppercase tracking-tight text-white">
              Lucky<span className="text-[#3B82F6]">Bear</span>
            </span>
          </a>
        </div>

        {/* Desktop Right Navigation */}
        <ul className="hidden grow basis-0 items-center justify-end gap-1 lg:flex">
          <li className="list-none">
            <a 
              href="#features" 
              className="rounded-xl px-3 py-2 text-[13px] font-medium tracking-wide text-white/65 transition-colors hover:bg-white/5 hover:text-white"
            >
              Преимущества
            </a>
          </li>
          <li className="list-none">
            <a 
              href="#telegram" 
              className="rounded-xl px-3 py-2 text-[13px] font-medium tracking-wide text-white/65 transition-colors hover:bg-white/5 hover:text-white"
            >
              Telegram
            </a>
          </li>
          <li className="list-none">
            <a 
              href="#faq" 
              className="rounded-xl px-3 py-2 text-[13px] font-medium tracking-wide text-white/65 transition-colors hover:bg-white/5 hover:text-white"
            >
              FAQ
            </a>
          </li>
          <li className="list-none">
            <a 
              href="#otzyvy" 
              className="rounded-xl px-3 py-2 text-[13px] font-medium tracking-wide text-white/65 transition-colors hover:bg-white/5 hover:text-white"
            >
              Отзывы
            </a>
          </li>
        </ul>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <a 
            href="https://lbgame777.xyz/2xn84Y" 
            className="rounded-full bg-[#3B82F6] px-5 py-2 text-[13px] font-bold uppercase tracking-wide text-white shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] transition-transform active:scale-95"
          >
            Играть
          </a>
          <button 
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10" 
            aria-label="Меню"
          >
            <Menu size={22} strokeWidth={2.5} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;