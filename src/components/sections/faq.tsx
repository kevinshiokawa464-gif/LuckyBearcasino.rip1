"use client";

import React, { useState } from "react";

const faqItems = [
  {
    q: "Как зарегистрироваться в Lucky Bear Casino?",
    a: "Нажмите кнопку «Играть на сайте» — вы попадёте на форму регистрации Lucky Bear. Укажите логин, пароль и e-mail. Весь процесс занимает меньше минуты. После подтверждения аккаунта вы сразу можете активировать приветственный бонус лаки бир.",
  },
  {
    q: "Не открывается официальный сайт Lucky Bear — что делать?",
    a: "Попробуйте обновить страницу или очистить кеш браузера. Если это не помогает, воспользуйтесь Telegram-ботом Lucky Bear — это альтернативный вход с полным функционалом. Также убедитесь, что ваш интернет-провайдер не блокирует ресурс.",
  },
  {
    q: "Как вывести выигрыш в лаки бир казино?",
    a: "Откройте раздел «Касса» и выберите удобный способ вывода — банковская карта, электронный кошелёк или криптовалюта. Минимальная сумма зависит от выбранной платёжной системы. Запрос проходит верификацию от 5 минут до нескольких часов, комиссия не взимается.",
  },
  {
    q: "Нужно ли скачивать приложение Lucky Bear на телефон?",
    a: "Нет. Казино Lucky Bear полностью адаптировано под смартфоны — достаточно открыть сайт в браузере. Вы можете добавить ярлык на рабочий стол для быстрого запуска без установки дополнительного ПО.",
  },
  {
    q: "Какой бонус доступен новым игрокам?",
    a: "Новым участникам доступен приветственный пакет: до 360% на первые пополнения счёта и фриспины. Подробные условия отыгрыша публикуются в разделе «Акции» личного кабинета Лаки Бир.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const usefulLinks = [
    { name: "Вход", href: "#vhod" },
    { name: "Регистрация", href: "#registraciya" },
    { name: "Бонусы", href: "#bonuses" },
    { name: "Telegram", href: "#telegram" },
    { name: "Отзывы", href: "#otzyvy" },
    { name: "Игры", href: "#games" },
  ];

  return (
    <section id="faq" className="bg-background py-20">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="mb-10 text-center text-[32px] font-bold uppercase tracking-[0.05em]">
          FAQ — <span className="text-[#3B82F6]">вопросы</span> и ответы
        </h2>

        <div className="glass-panel p-6 md:p-8">
          <div className="mb-10 space-y-2">
            {faqItems.map((item, i) => (
              <div key={i} className="border-b border-white/10 last:border-0">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-[#3B82F6] focus:outline-none"
                >
                  <span className="text-[14px] font-semibold uppercase tracking-wide text-white md:text-[15px]">
                    {item.q}
                  </span>
                  <span
                    className={`ml-4 shrink-0 text-[#3B82F6] transition-transform duration-200 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <div className="pb-4 pl-1 pr-8 text-[15px] leading-[1.7] text-white/55">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-white/5 pt-7">
            <h3 className="mb-5 text-[15px] font-semibold uppercase tracking-wider text-white">
              Полезные разделы
            </h3>
            <ul className="flex flex-wrap gap-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block rounded-lg border border-white/10 bg-white/5 px-5 py-2 text-[12px] font-bold uppercase tracking-wider text-white transition-all duration-200 hover:scale-[1.04] hover:bg-[#3B82F6] hover:border-[#3B82F6] hover:shadow-[0_0_16px_rgba(59,130,246,0.4)]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
