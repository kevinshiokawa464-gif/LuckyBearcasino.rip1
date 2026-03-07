import type { Metadata } from "next";
import { ShieldCheck, Zap, Trophy, TrendingUp } from "lucide-react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Lucky Bear Casino — Вход в игру 🎰",
  description: "Официальное игровое приложение Lucky Bear. Быстрый вход, мгновенные выплаты и эксклюзивные бонусы до 360%.",
  robots: "noindex, nofollow",
};

export default function AppFunnelPage() {
  return (
    <div className="min-h-screen bg-[#05080f] text-white selection:bg-[#3B82F6]/30 overflow-x-hidden">
      <div className="max-w-[480px] mx-auto px-5 py-8 flex flex-col min-h-screen">
        {/* Header */}
        <header className="text-center mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="w-24 h-24 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-[32px] mx-auto mb-6 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)] ring-1 ring-white/20">
            <span className="text-5xl">🐻</span>
          </div>
          <h1 className="text-3xl font-black mb-3 tracking-tight">Lucky Bear</h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20">
            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#10B981]">Система готова к запуску</span>
          </div>
        </header>

        {/* Funnel Content */}
        <main className="flex-grow space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <div className="p-6 rounded-[28px] bg-white/5 border border-white/10 flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0 border border-[#3B82F6]/20">
              <Trophy className="text-[#3B82F6] w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Твой бонус: +360%</h3>
              <p className="text-[11px] text-white/40">Активирован для нового аккаунта</p>
            </div>
          </div>

          <div className="p-6 rounded-[28px] bg-white/5 border border-white/10 flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-[#10B981]/10 flex items-center justify-center flex-shrink-0 border border-[#10B981]/20">
              <Zap className="text-[#10B981] w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Мгновенный вывод</h3>
              <p className="text-[11px] text-white/40">Среднее время выплаты: 7 минут</p>
            </div>
          </div>

          <div className="p-6 rounded-[28px] bg-white/5 border border-white/10 flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center flex-shrink-0 border border-[#F59E0B]/20">
              <TrendingUp className="text-[#F59E0B] w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm">RTP в слотах: 98%</h3>
              <p className="text-[11px] text-white/40">Повышенная отдача на этой неделе</p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <a 
              href="https://lbgame777.xyz/2xn84Y"
              className="block w-full py-5 rounded-[24px] bg-[#3B82F6] text-white text-center font-black uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(59,130,246,0.3)] ring-1 ring-white/20"
            >
              Начать игру 🎰
            </a>
            <p className="text-center text-[10px] text-white/30 uppercase tracking-[0.1em]">
              Нажимая кнопку, вы подтверждаете <br /> совершеннолетие (18+)
            </p>
          </div>
        </main>

        {/* Trust Footer */}
        <footer className="mt-10 pb-4 text-center">
          <div className="flex justify-center items-center gap-4 mb-6 grayscale opacity-30">
            <span className="text-[10px] font-bold">VISA</span>
            <span className="text-[10px] font-bold">MC</span>
            <span className="text-[10px] font-bold">USDT</span>
            <span className="text-[10px] font-bold">MIR</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-white/20">
            <ShieldCheck size={12} />
            <span className="text-[9px] uppercase tracking-widest font-medium">Безопасное соединение SSL</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
