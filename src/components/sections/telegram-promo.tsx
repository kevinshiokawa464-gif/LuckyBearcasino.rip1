import React from "react";

const telegramPoints = [
  "Мгновенный доступ к игровому счёту без ввода логина и пароля каждый раз.",
  "Уведомления об актуальных акциях, фриспинах и персональных предложениях.",
  "Прямые ссылки для входа — всегда рабочие и актуальные.",
  "Быстрые ответы на часто задаваемые вопросы.",
];

const internalLinks = [
  { name: "Вход", href: "#vhod" },
  { name: "Регистрация", href: "#registraciya" },
  { name: "Бонусы", href: "#bonuses" },
  { name: "FAQ", href: "#faq" },
  { name: "Отзывы", href: "#otzyvy" },
  { name: "Игры", href: "#games" },
];

export default function TelegramPromo() {
  return (
    <section id="telegram" className="bg-background py-20">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="mb-10 text-center text-[32px] font-bold uppercase tracking-[0.05em]">
          Telegram-бот <span className="text-[#3B82F6]">Lucky Bear</span>
        </h2>

        <div className="glass-panel mx-auto max-w-[900px] p-6 md:p-10">
          <p className="mb-8 text-[16px] leading-[1.65] text-white/55">
            Telegram-бот казино Лаки Бир — самый быстрый способ попасть в игру. Если основной домен
            временно недоступен, бот всегда под рукой и работает без сбоев. Подпишитесь, чтобы
            получать актуальные ссылки и персональные предложения первыми.
          </p>

          <div className="mb-8">
            <h3 className="mb-5 text-[15px] font-bold uppercase tracking-wider text-white">
              Что даёт подписка
            </h3>
            <ul className="space-y-3">
              {telegramPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-white/55">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <a
              href="https://lbgame777.xyz/2xn84Y"
              className="btn-glow inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[rgba(30,41,59,0.8)] px-6 py-3.5 text-[14px] font-bold uppercase tracking-wider text-white transition-all hover:border-[#3B82F6]/40 hover:bg-[#3B82F6]/10"
            >
              ✈️ Открыть бота в Telegram
            </a>
          </div>

          <div className="border-t border-white/5 pt-7">
            <h3 className="mb-5 text-[13px] font-bold uppercase tracking-widest text-white/40">
              Быстрая навигация
            </h3>
            <div className="flex flex-wrap gap-2">
              {internalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-[10px] border border-white/5 bg-[rgba(15,23,42,0.8)] px-4 py-2 text-[12px] font-bold uppercase tracking-tight text-white/55 transition-colors hover:border-[#3B82F6] hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
