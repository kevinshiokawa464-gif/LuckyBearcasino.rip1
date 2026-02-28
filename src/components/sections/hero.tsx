import React from 'react';
import { Trophy, UserPlus, Gift, Rocket, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="top" className="relative pt-10 pb-20 bg-background overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="pointer-events-none absolute top-[8%] left-[-12%] h-[560px] w-[560px] rounded-full bg-[#3B82F6]/10 blur-[130px]"></div>
      <div className="pointer-events-none absolute bottom-[15%] right-[-10%] h-[480px] w-[480px] rounded-full bg-[#60A5FA]/5 blur-[110px]"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_340px]">
          {/* Main Hero Card */}
          <div className="glass-panel p-6 md:p-10 border-[#3B82F6]/20 bg-gradient-to-br from-white/[0.03] to-transparent">
            <div className="mb-5 flex items-center gap-2">
              <span className="rounded-sm bg-[#3B82F6]/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#3B82F6] flex items-center gap-1.5">
                <Sparkles size={12} />
                LUCKY BEAR
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
                premium
              </span>
            </div>

            <h1 className="text-white text-hero">
              ЛОВИ <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] animate-pulse">УДАЧУ</span> —<br />
              <span className="text-[#3B82F6]">КАЖДЫЙ</span> ДЕНЬ
            </h1>

            <p className="mt-5 max-w-[600px] text-[17px] leading-relaxed text-white/55">
              Lucky Bear Casino — твоя территория больших выигрышей. Стартовый пакет{' '}
              <b className="text-white text-lg">до 360%</b>, мгновенный вывод и эксклюзивный сервис. Присоединяйся к элите прямо сейчас!
            </p>

            <ul className="mt-6 flex flex-wrap gap-3">
              <li className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium transition-all hover:bg-white/10 hover:border-[#3B82F6]/30">
                <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]"></span>
                Выплаты за 5 минут
              </li>
              <li className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium transition-all hover:bg-white/10 hover:border-[#3B82F6]/30">
                <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]"></span>
                VIP-поддержка 24/7
              </li>
              <li className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium transition-all hover:bg-white/10 hover:border-[#3B82F6]/30">
                <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]"></span>
                Безопасность SSL+
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a 
                href="https://lbgame777.xyz/2xn84Y" 
                className="btn-primary inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] px-10 py-5 text-[15px] font-bold text-white shadow-btn-glow uppercase"
              >
                🎰 ИГРАТЬ СЕЙЧАС
              </a>
              <a 
                href="https://lbgame777.xyz/2xn84Y" 
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-10 py-5 text-[15px] font-bold text-white transition-all hover:bg-white/10 hover:border-[#3B82F6]/20"
              >
                ✈️ ВОЙТИ ЧЕРЕЗ TG
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/5 pt-5">
              <span className="flex items-center gap-2 text-[12px] text-white/45">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock text-[#10B981]">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Защита данных SSL
              </span>
              <span className="flex items-center gap-2 text-[12px] text-white/45">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap text-[#fbbf24]">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                Автоматический вход
              </span>
              <span className="flex items-center gap-2 text-[12px] text-white/45">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gift text-[#3B82F6]">
                  <rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>
                </svg>
                Бонус за активность
              </span>
            </div>
          </div>

          {/* Quick Start Sidebar */}
          <aside className="glass-panel p-6 h-full flex flex-col border-[#3B82F6]/40 bg-gradient-to-b from-[#0f172a]/80 to-[#05080f]/90 relative overflow-hidden group">
            {/* Pulsing Glow Effect */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#3B82F6]/10 blur-3xl group-hover:bg-[#3B82F6]/20 transition-all"></div>
            
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-[18px] font-black uppercase tracking-tight text-white leading-none">
                  Твой путь<br /><span className="text-[#3B82F6]">к победе</span>
                </h3>
              </div>
              <div className="p-2 rounded-lg bg-[#3B82F6]/10 text-[#3B82F6]">
                <Rocket size={20} />
              </div>
            </div>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-4 group/item">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all group-hover/item:border-[#3B82F6]/50 group-hover/item:bg-[#3B82F6]/10">
                  <Trophy size={18} className="text-[#3B82F6]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-none mb-1">Шаг 1</p>
                  <p className="text-[13px] font-bold text-white uppercase group-hover/item:text-[#3B82F6] transition-colors">Залетай в игру</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group/item">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all group-hover/item:border-[#3B82F6]/50 group-hover/item:bg-[#3B82F6]/10">
                  <UserPlus size={18} className="text-[#3B82F6]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-none mb-1">Шаг 2</p>
                  <p className="text-[13px] font-bold text-white uppercase group-hover/item:text-[#3B82F6] transition-colors">Забирай статус</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group/item">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all group-hover/item:border-[#3B82F6]/50 group-hover/item:bg-[#3B82F6]/10">
                  <Gift size={18} className="text-[#3B82F6]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-none mb-1">Шаг 3</p>
                  <p className="text-[13px] font-bold text-white uppercase group-hover/item:text-[#3B82F6] transition-colors">Удваивай баланс</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                <div className="flex flex-col gap-1">
                   <div className="flex items-center justify-between">
                     <span className="text-[11px] font-bold uppercase tracking-widest text-white/30">Сейчас онлайн</span>
                     <span className="flex items-center gap-1.5">
                       <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                       <span className="text-[15px] font-black text-white">4 892</span>
                     </span>
                   </div>
                   <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-[#3B82F6] w-[85%] animate-pulse"></div>
                   </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white/30">Выплаты сегодня</span>
                  <b className="text-[15px] font-black text-[#10B981]">24 850 000 ₽</b>
                </div>
              </div>
            </div>

            <a 
              href="https://lbgame777.xyz/2xn84Y" 
              className="mt-auto btn-primary relative overflow-hidden flex w-full items-center justify-center py-4 text-[14px] font-black text-white uppercase text-center group/btn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 transition-transform group-hover/btn:scale-110"></div>
              <span className="relative z-10 flex items-center gap-2">
                ВОРВАТЬСЯ В ТОП <Rocket size={16} />
              </span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
