import React from "react";

const methods = [
  {
    icon: "🧾",
    title: "Создать аккаунт",
    body: "Зарегистрируйтесь за минуту — укажите логин, e-mail и пароль. Сразу после этого вам станет доступен приветственный бонусный пакет казино Лаки Бир.",
    cta: "Зарегистрироваться",
    href: "/reg.html",
    primary: true,
  },
  {
    icon: "🔐",
    title: "Войти в кабинет",
    body: "Уже зарегистрированы? Введите свои данные и попадите прямо в игру. При утере пароля воспользуйтесь восстановлением по e-mail.",
    cta: "Войти",
    href: "/reg.html",
    primary: false,
  },
  {
    icon: "🧭",
    title: "Доступ через Telegram",
    body: "Если основной сайт временно недоступен, Telegram-бот — ваш надёжный резервный путь с полным игровым функционалом.",
    cta: "Открыть бота",
    href: "/tg.html",
    primary: false,
  },
];

export default function AuthMethods() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="mb-8 text-[28px] font-bold uppercase tracking-wide text-white">
          Регистрация и вход — быстро
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {methods.map((m) => (
            <div
              key={m.title}
              className="flex flex-col rounded-2xl border border-white/5 bg-[rgba(15,23,42,0.6)] p-6 backdrop-blur-[12px]"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xl">{m.icon}</span>
                <h3 className="text-[16px] font-semibold text-white">{m.title}</h3>
              </div>
              <p className="mb-7 flex-grow text-[14px] leading-[1.65] text-white/50">{m.body}</p>
              <a
                href={m.href}
                className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all ${
                  m.primary
                    ? "bg-[#3B82F6] text-white hover:brightness-110"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {m.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
