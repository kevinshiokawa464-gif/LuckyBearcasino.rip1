"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Как зарегистрироваться в Lucky Bear?",
    answer:
      "Регистрация в казино Lucky Bear занимает не более минуты. Вы можете создать аккаунт через электронную почту или воспользоваться мгновенным входом через Telegram. После регистрации вам сразу станет доступен приветственный бонусный пакет до 360%.",
  },
  {
    question: "Безопасно ли играть на вашем сайте?",
    answer:
      "Да, мы используем SSL-шифрование для всех транзакций, двухфакторную авторизацию и строгую политику конфиденциальности. Ваши данные и средства находятся под надежной защитой современных банковских систем безопасности.",
  },
  {
    question: "Как быстро выводятся выигрыши?",
    answer:
      "Запросы на вывод обрабатываются в приоритетном порядке и обычно занимают от 5 до 30 минут. Мы поддерживаем банковские карты, электронные кошельки и популярные криптовалюты без скрытых комиссий.",
  },
  {
    question: "Что делать, если основной сайт заблокирован?",
    answer:
      "Если основной домен временно недоступен, вы всегда можете использовать наше официальное зеркало или Telegram-бот Lucky Bear. Бот автоматически предоставит актуальную рабочую ссылку для бесперебойного доступа к играм.",
  },
  {
    question: "Какие бонусы доступны новым игрокам?",
    answer:
      "Новым игрокам доступен щедрый приветственный пакет до 360% на первые депозиты. Также действуют еженедельный кэшбэк, фриспины за активность и эксклюзивные промокоды в нашем Telegram-канале.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-[#05080F] py-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="pointer-events-none absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#3B82F6]/5 blur-[120px]"></div>
      
      <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-2 rounded-full bg-[#3B82F6]/10 px-4 py-1.5 border border-[#3B82F6]/20">
            <HelpCircle className="h-4 w-4 text-[#3B82F6]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#3B82F6]">
              Помощь и поддержка
            </span>
          </div>
          <h2 className="text-[32px] font-black uppercase tracking-tight text-white sm:text-[40px]">
            FAQ — <span className="text-[#3B82F6]">вопросы</span> и ответы
          </h2>
          <p className="mt-4 max-w-[600px] text-[16px] text-white/50">
            Мы собрали ответы на самые популярные вопросы наших игроков, чтобы ваш путь к победам был максимально комфортным.
          </p>
        </div>

        <div className="mx-auto max-w-[860px] space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass-panel overflow-hidden transition-all duration-300 ${
                openIndex === index 
                ? "border-[#3B82F6]/40 bg-[rgba(59,130,246,0.05)] shadow-[0_0_20px_rgba(59,130,246,0.1)]" 
                : "hover:border-white/20"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-[17px] font-semibold transition-colors duration-300 ${
                  openIndex === index ? "text-white" : "text-white/80"
                }`}>
                  {faq.question}
                </span>
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 bg-[#3B82F6]/20 text-[#3B82F6]" : "text-white/40"
                }`}>
                  <ChevronDown className="h-5 w-5" />
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? "max-h-[500px] opacity-100" 
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-white/5 p-6 pt-2 text-[15px] leading-relaxed text-white/55">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center sm:flex-row sm:text-left">
          <div>
            <h4 className="text-[18px] font-bold text-white uppercase tracking-tight">
              Остались вопросы?
            </h4>
            <p className="text-[14px] text-white/45">Наша поддержка на связи 24/7 в Telegram и чате</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://lbgame777.xyz/2xn84Y"
              className="inline-flex items-center gap-2 rounded-xl bg-[#3B82F6] px-6 py-3 text-[14px] font-bold uppercase text-white shadow-[#3B82F6]/20 shadow-lg transition-transform hover:scale-[1.05]"
            >
              💬 Написать в чат
            </a>
            <a
              href="https://lbgame777.xyz/2xn84Y"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-[14px] font-bold uppercase text-white transition-colors hover:bg-white/10"
            >
              ✈️ Telegram поддержка
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
