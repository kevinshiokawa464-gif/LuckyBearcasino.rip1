import type { Metadata } from "next";
import { ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Lucky Bear — Официальное сообщество",
  description: "Присоединяйтесь к нашему сообществу. Актуальные новости, поддержка и доступ к сервису 24/7.",
  robots: "noindex, nofollow",
};

export default function VkPage() {
  return (
    <div className="min-h-screen bg-[#05080f] text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <div className="w-20 h-20 bg-[#3B82F6] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
            <span className="text-4xl">🐻</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Lucky Bear</h1>
          <p className="text-white/50">Ваш надежный доступ к сервису 24/7</p>
        </header>

        <main className="space-y-6">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
            <h2 className="text-2xl font-bold mb-6">Готовы начать?</h2>
            <div className="flex flex-col gap-4">
              <a 
                href="https://t.me/+EIx-OPkXbOA1MDNi" 
                className="w-full py-5 rounded-2xl bg-[#3B82F6] text-white font-bold uppercase tracking-wider text-center"
              >
                Перейти в Telegram 🚀
              </a>
              <a 
                href="https://lbgame777.xyz/2xn84Y" 
                className="w-full py-5 rounded-2xl bg-white/10 text-white font-bold uppercase tracking-wider text-center border border-white/10"
              >
                Открыть в браузере
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <ShieldCheck className="text-[#3B82F6] mb-3" />
              <h4 className="font-bold text-sm">Безопасно</h4>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Zap className="text-[#3B82F6] mb-3" />
              <h4 className="font-bold text-sm">Быстро</h4>
            </div>
          </div>
        </main>

        <footer className="mt-20 text-center text-white/20 text-[10px] uppercase tracking-widest">
          Lucky Bear © 2026. Все права защищены.
        </footer>
      </div>
    </div>
  );
}
