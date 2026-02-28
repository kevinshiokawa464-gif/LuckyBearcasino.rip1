import React from 'react';
import { LogIn, UserPlus, Zap, ShieldCheck, Gift } from 'lucide-react';

const AuthSection = () => {
  return (
    <section id="auth" className="bg-[#05080f] py-20 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[100px]"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-600/5 blur-[100px]"></div>

      <div className="container relative z-10 mx-auto max-w-[1200px] px-5">
        <div className="mb-14 text-center">
          <h2 className="text-[32px] md:text-[42px] font-black uppercase tracking-tight text-white mb-4">
            Вход в мир <span className="text-[#3B82F6]">Lucky Bear</span>
          </h2>
          <p className="text-white/50 text-[17px] max-w-[600px] mx-auto">
            Выбери удобный способ авторизации и начни свой путь к джекпоту за считанные секунды.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {/* Registration Card */}
          <div className="glass-panel group p-8 md:p-12 border-[#3B82F6]/30 bg-gradient-to-br from-[#3B82F6]/10 to-transparent relative overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]">
            <div className="absolute -top-6 -right-6 p-10 bg-[#3B82F6]/5 rounded-full blur-2xl group-hover:bg-[#3B82F6]/10 transition-all"></div>
            
            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3B82F6] text-white mb-8 shadow-[0_10px_20px_rgba(59,130,246,0.3)]">
                <UserPlus size={28} />
              </div>
              <h3 className="text-[24px] font-black uppercase tracking-tight text-white mb-4">Регистрация</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Создай аккаунт за 10 секунд и получи доступ к <span className="text-[#10B981] font-bold">360% бонусу</span> на первый депозит.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-[14px] text-white/80 font-bold uppercase tracking-tight">
                  <div className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]"></div>
                  Мгновенная верификация
                </li>
                <li className="flex items-center gap-3 text-[14px] text-white/80 font-bold uppercase tracking-tight">
                  <div className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]"></div>
                  100 фриспинов в подарок
                </li>
              </ul>

              <a 
                href="https://lbgame777.xyz/2xn84Y"
                className="btn-primary flex w-full items-center justify-center gap-2 py-5 text-[15px] font-black uppercase tracking-widest bg-gradient-to-r from-[#3B82F6] to-blue-700"
              >
                Создать аккаунт <Zap size={18} fill="currentColor" />
              </a>
            </div>
          </div>

          {/* Login Card */}
          <div className="glass-panel group p-8 md:p-12 border-white/10 bg-white/[0.02] relative overflow-hidden transition-all hover:scale-[1.02] hover:border-white/20">
            <div className="absolute -top-6 -right-6 p-10 bg-white/5 rounded-full blur-2xl transition-all"></div>
            
            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white mb-8">
                <LogIn size={28} />
              </div>
              <h3 className="text-[24px] font-black uppercase tracking-tight text-white mb-4">Вход в кабинет</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Уже есть аккаунт? Авторизуйся через почту или социальные сети, чтобы продолжить игру.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-[13px] text-white/40">
                  <ShieldCheck size={16} className="text-[#10B981]" />
                  Двухфакторная защита аккаунта
                </div>
                <div className="flex items-center gap-3 text-[13px] text-white/40">
                  <Gift size={16} className="text-[#fbbf24]" />
                  История бонусов сохранена
                </div>
              </div>

              <a 
                href="https://lbgame777.xyz/2xn84Y"
                className="flex w-full items-center justify-center gap-2 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[15px] hover:bg-white/10 transition-all"
              >
                Войти <LogIn size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;
