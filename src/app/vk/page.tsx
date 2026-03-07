import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Zap, Globe, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Lucky Bear — Вход в Личный Кабинет и Регистрация",
  description: "Официальный портал Lucky Bear. Мгновенная регистрация, доступ к актуальному зеркалу, мобильная версия и круглосуточная поддержка. Твой путь к большим победам начинается здесь.",
  keywords: "lucky bear, лаки бир, lucky bear вход, регистрация лаки бир, зеркало лаки бир, промокод lucky bear, бонусы лаки бир",
  robots: "index, follow",
};

export default function VkPage() {
  return (
    <div className="min-h-screen bg-[#05080f] text-white selection:bg-[#3B82F6]/30">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <header className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3B82F6]">Официальное Сообщество</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
            Lucky Bear
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Премиальная игровая платформа для ценителей качества и надежности. 
            Присоединяйся к нашему сообществу и получай эксклюзивные привилегии уже сегодня.
          </p>
        </header>

        <main className="grid gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-[#3B82F6]/30 transition-all group">
              <ShieldCheck className="w-10 h-10 text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Безопасный доступ</h3>
              <p className="text-white/40 leading-relaxed">
                Используем передовые протоколы шифрования и автоматическую синхронизацию данных для стабильной игры в любых условиях.
              </p>
            </div>
            <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-[#3B82F6]/30 transition-all group">
              <Zap className="w-10 h-10 text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Мгновенный старт</h3>
              <p className="text-white/40 leading-relaxed">
                Регистрация за 30 секунд. Доступ через Telegram, Google или почту. Начни играть без лишних подтверждений и ожидания.
              </p>
            </div>
          </div>

          <div className="p-12 rounded-[40px] bg-gradient-to-br from-[#3B82F6]/20 to-transparent border border-[#3B82F6]/20 text-center relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-6">Готов к большим иксам?</h2>
              <p className="text-white/60 mb-10 text-lg">
                Забирай приветственный пакет до 360% и 250 фриспинов прямо сейчас. 
                Акция ограничена по времени!
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link 
                  href="/" 
                  className="px-10 py-5 rounded-2xl bg-[#3B82F6] text-white font-black uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                >
                  Забрать бонус 🚀
                </Link>
                <Link 
                  href="/" 
                  className="px-10 py-5 rounded-2xl bg-white/10 text-white font-black uppercase tracking-wider hover:bg-white/20 transition-all"
                >
                  Вход в кабинет
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-white/5 grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start text-[#3B82F6]">
                <Globe size={18} />
                <span className="font-bold text-sm uppercase tracking-tighter">Зеркало 24/7</span>
              </div>
              <p className="text-xs text-white/30 leading-loose">
                Постоянный доступ к платформе через актуальные ссылки. Ваши достижения и баланс всегда под защитой.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start text-[#3B82F6]">
                <MessageCircle size={18} />
                <span className="font-bold text-sm uppercase tracking-tighter">Support Online</span>
              </div>
              <p className="text-xs text-white/30 leading-loose">
                Круглосуточная поддержка в Telegram. Поможем с любым вопросом за 5 минут. Мы ценим каждого игрока.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start text-[#3B82F6]">
                <ShieldCheck size={18} />
                <span className="font-bold text-sm uppercase tracking-tighter">Лицензия</span>
              </div>
              <p className="text-xs text-white/30 leading-loose">
                Сертифицированные слоты с высоким RTP до 98%. Честная игра на базе проверенного ГСЧ.
              </p>
            </div>
          </div>
        </main>

        <footer className="mt-32 text-center">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-4">
            Lucky Bear © 2026. Твой путь к победе.
          </p>
          <p className="text-[8px] text-white/10 uppercase tracking-widest max-w-md mx-auto leading-relaxed">
            Помните об ответственной игре. Доступно только для лиц старше 18 лет. 
            Играйте для удовольствия и знайте меру.
          </p>
        </footer>
      </div>
    </div>
  );
}
