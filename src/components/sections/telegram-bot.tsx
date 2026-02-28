import React from 'react';
import { Send, CheckCircle2, Navigation, ShieldCheck, Zap, BellRing } from 'lucide-react';

const TelegramBot = () => {
  return (
    <section id="telegram" className="relative bg-[#05080f] py-24 overflow-hidden">
      {/* Background Glow Decorations */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#3B82F6]/5 blur-[120px]"></div>
      <div className="pointer-events-none absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]"></div>
      
      <div className="container relative z-10 mx-auto max-w-[1200px] px-4">
        <div className="glass-panel overflow-hidden border border-[#3B82F6]/20 bg-gradient-to-br from-[#0f172a]/60 to-[#05080f]/80 backdrop-blur-xl p-6 md:p-14 relative">
          {/* Decorative Corner Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#3B82F6]/20 to-transparent blur-2xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col space-y-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#3B82F6] block">
                    Exclusive Ecosystem
                  </span>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">v2.0 Beta Access</span>
                </div>
              </div>
              
              <h2 className="text-[36px] md:text-[52px] leading-[1.05] font-black uppercase text-white">
                Твой личный <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-purple-400 to-[#3B82F6] animate-gradient-x bg-[length:200%_auto]">Лаки Бир</span> в Telegram
              </h2>
              
              <p className="text-[18px] leading-relaxed text-white/60 font-medium">
                Забудь про блокировки и вечный поиск зеркал! Наш бот — это твой персональный VIP-вход, самые свежие бонусы прямо в кармане и мгновенный доступ к топовым слотам 24/7.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                <div className="flex items-start gap-4 rounded-[24px] border border-white/5 bg-white/[0.03] p-6 transition-all hover:bg-white/[0.06] hover:border-[#3B82F6]/30 group/card">
                  <div className="p-2.5 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] group-hover/card:bg-[#3B82F6] group-hover/card:text-white transition-all">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-black text-white uppercase tracking-tight">VIP Навигация</h4>
                    <p className="mt-1 text-[13px] text-white/40 leading-tight">Доступ ко всем играм в один клик без авторизации</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-[24px] border border-white/5 bg-white/[0.03] p-6 transition-all hover:bg-white/[0.06] hover:border-[#10B981]/30 group/card">
                  <div className="p-2.5 rounded-xl bg-[#10B981]/10 text-[#10B981] group-hover/card:bg-[#10B981] group-hover/card:text-white transition-all">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-black text-white uppercase tracking-tight">Smart Mirror</h4>
                    <p className="mt-1 text-[13px] text-white/40 leading-tight">Автоматический поиск рабочих ссылок за 0.5 сек</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-center gap-6">
                <a 
                  href="https://lbgame777.xyz/2xn84Y"
                  className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 text-[16px] font-black bg-gradient-to-r from-[#0088cc] to-[#00a2ed] shadow-[0_10px_30px_rgba(0,136,204,0.3)]"
                >
                  <Send className="h-5 w-5 fill-white" />
                  ЗАПУСТИТЬ БОТА
                </a>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5">
                  <BellRing size={16} className="text-[#fbbf24] animate-bounce" />
                  <span className="text-[12px] font-bold text-white/50 uppercase tracking-widest">8.4k уже подписались</span>
                </div>
              </div>
            </div>

            {/* Right Visual Representation */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px]">
                {/* Glow Background for Phone */}
                <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full"></div>

                {/* Mockup Case */}
                <div className="relative rounded-[48px] border-[10px] border-[#1e293b] bg-[#0f172a] p-4 shadow-2xl overflow-hidden">
                  {/* Internal Screen */}
                  <div className="overflow-hidden rounded-[36px] bg-[#05080f] border border-white/5">
                    {/* Bot Interface Mockup */}
                    <div className="bg-[#1a1a1a]/95 p-5 border-b border-white/5 flex items-center justify-between backdrop-blur-md">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-purple-600 flex items-center justify-center text-lg shadow-lg">🐻</div>
                        <div>
                          <span className="text-[14px] font-black block leading-none">Lucky Bear Bot</span>
                          <span className="text-[10px] text-[#10B981] font-bold flex items-center gap-1 mt-1">
                            <span className="h-1.5 w-1.5 bg-[#10B981] rounded-full animate-pulse"></span>
                            БОТ ОНЛАЙН
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5 space-y-5 h-[360px] overflow-y-auto scrollbar-hide">
                      <div className="bg-[#3B82F6]/15 border border-[#3B82F6]/30 rounded-2xl rounded-tl-none p-4 text-[13px] max-w-[85%] text-white leading-relaxed shadow-sm">
                        👋 Привет, Чемпион! Я — твой персональный гид в мире <span className="font-bold text-[#3B82F6]">Lucky Bear</span>. Твой бонус в 360% уже готов к активации! 🐻🚀
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tr-none p-3.5 text-[13px] max-w-[85%] ml-auto text-right text-white/80">
                        Хочу войти в игру! 🎰
                      </div>
                      <div className="bg-[#3B82F6]/15 border border-[#3B82F6]/30 rounded-2xl rounded-tl-none p-4 text-[13px] max-w-[85%] text-white leading-relaxed">
                        Держи свежее зеркало: <span className="text-[#3B82F6] font-black underline decoration-2 underline-offset-4">lucky-bear.win</span>. Нажми кнопку ниже! 👇
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 pt-4">
                        <div className="rounded-xl bg-gradient-to-br from-[#3B82F6] to-blue-700 py-3.5 text-center text-[11px] font-black shadow-lg">🎰 ИГРАТЬ</div>
                        <div className="rounded-xl bg-white/10 border border-white/5 py-3.5 text-center text-[11px] font-black hover:bg-white/20 transition-all">🎁 БОНУСЫ</div>
                        <div className="rounded-xl bg-white/10 border border-white/5 py-3.5 text-center text-[11px] font-black hover:bg-white/20 transition-all">💬 САППОРТ</div>
                        <div className="rounded-xl bg-white/10 border border-white/5 py-3.5 text-center text-[11px] font-black hover:bg-white/20 transition-all">🔗 ЗЕРКАЛО</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements with Animation */}
                <div className="absolute -right-8 top-1/4 rounded-[20px] bg-gradient-to-r from-[#10B981] to-[#059669] px-5 py-4 shadow-xl flex items-center gap-3 animate-bounce-slow border border-white/20 z-20">
                  <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-white/70 uppercase leading-none">Статус</span>
                    <span className="text-[13px] font-black text-white uppercase tracking-tight">БОНУС ПОЛУЧЕН</span>
                  </div>
                </div>
                
                <div className="absolute -left-12 bottom-1/4 rounded-[24px] glass-panel border-[#3B82F6]/30 px-6 py-5 shadow-2xl flex flex-col gap-1.5 backdrop-blur-2xl animate-float z-20">
                  <span className="text-[10px] uppercase font-black text-[#3B82F6] tracking-[0.2em] leading-none mb-1">Live Online</span>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-black text-white leading-none tracking-tighter">4,812</span>
                    <span className="text-[10px] font-bold text-[#10B981] mb-1 uppercase tracking-widest">+12 сегодня</span>
                  </div>
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
