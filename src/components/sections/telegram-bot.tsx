import React from 'react';
import { Send, CheckCircle2, Navigation, ShieldCheck } from 'lucide-react';

const TelegramBot = () => {
  return (
    <section id="telegram" className="relative bg-[#05080f] py-20 overflow-hidden">
      {/* Background Glow Decorations */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#3B82F6]/5 blur-[120px]"></div>
      
      <div className="container relative z-10 mx-auto max-w-[1200px] px-4">
        <div className="glass-panel overflow-hidden border border-white/10 bg-[#0f172a]/60 backdrop-blur-md p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col space-y-6">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6]/20 ring-1 ring-[#3B82F6]/30">
                  <Send className="h-5 w-5 text-[#3B82F6]" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3B82F6]">
                  Telegram Ecosystem
                </span>
              </div>
              
              <h2 className="text-[32px] md:text-[42px] leading-tight font-black uppercase text-white">
                Telegram-бот <span className="text-[#3B82F6]">Lucky Bear</span>
              </h2>
              
              <p className="text-[17px] leading-relaxed text-white/55">
                Telegram-бот казино Лаки Бир — самый быстрый способ попасть в игру. Если основной домен временно недоступен, бот всегда под рукой и работает без сбоев. Подпишитесь, чтобы получать актуальные ссылки и персональные предложения первыми.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 p-5 transition-colors hover:bg-white/10">
                  <Navigation className="mt-1 h-5 w-5 shrink-0 text-[#3B82F6]" />
                  <div>
                    <h4 className="text-[15px] font-bold text-white uppercase tracking-tight">Быстрая навигация</h4>
                    <p className="mt-1 text-[13px] text-white/45">Прямой доступ к разделам казино в один клик</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 p-5 transition-colors hover:bg-white/10">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#10B981]" />
                  <div>
                    <h4 className="text-[15px] font-bold text-white uppercase tracking-tight">Всегда онлайн</h4>
                    <p className="mt-1 text-[13px] text-white/45">Автоматический поиск рабочих зеркал 24/7</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="https://lbgame777.xyz/2xn84Y"
                  className="btn-primary inline-flex items-center gap-3 px-10 py-5 text-[15px]"
                >
                  <Send className="h-5 w-5" />
                  ПОДПИСАТЬСЯ НА БОТА
                </a>
              </div>
            </div>

            {/* Right Visual Representation */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px]">
                {/* Mockup Case */}
                <div className="rounded-[40px] border-[8px] border-white/5 bg-slate-900 p-3 shadow-2xl">
                  <div className="overflow-hidden rounded-[32px] bg-[#05080f]">
                    {/* Bot Interface Mockup */}
                    <div className="bg-[#1a1a1a]/80 p-4 border-b border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-[#3B82F6] flex items-center justify-center text-xs">🐻</div>
                        <span className="text-sm font-bold">Lucky Bear Bot</span>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></div>
                    </div>
                    
                    <div className="p-4 space-y-4 h-[320px]">
                      <div className="bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-2xl p-3 text-[13px] max-w-[85%]">
                        👋 Привет! Я — твой персональный гид в мире Lucky Bear. Чем могу помочь?
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-3 text-[13px] max-w-[85%] ml-auto text-right">
                        Где сейчас вход?
                      </div>
                      <div className="bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-2xl p-3 text-[13px] max-w-[85%]">
                        Актуальное зеркало на сегодня: <span className="text-[#3B82F6] font-bold">bear-top.win</span>. Нажмите кнопку ниже для перехода!
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 pt-4">
                        <div className="rounded-lg bg-[#3B82F6] py-2.5 text-center text-[11px] font-bold">🎰 ИГРАТЬ</div>
                        <div className="rounded-lg bg-white/10 py-2.5 text-center text-[11px] font-bold">🎁 БОНУСЫ</div>
                        <div className="rounded-lg bg-white/10 py-2.5 text-center text-[11px] font-bold">💬 ПОДДЕРЖКА</div>
                        <div className="rounded-lg bg-white/10 py-2.5 text-center text-[11px] font-bold">🔗 ЗЕРКАЛО</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -right-6 top-1/4 rounded-2xl bg-[#10B981] px-4 py-3 shadow-lg flex items-center gap-2 animate-bounce duration-2000">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                  <span className="text-[12px] font-bold text-white uppercase">БОНУС ПОЛУЧЕН</span>
                </div>
                
                <div className="absolute -left-10 bottom-1/4 rounded-2xl glass-panel border-[#3B82F6]/30 px-5 py-4 shadow-xl flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Онлайн</span>
                  <span className="text-xl font-black text-white">4,812</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramBot;