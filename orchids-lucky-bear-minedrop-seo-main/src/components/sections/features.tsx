import React from "react";

const features = [
  {
    icon: "⚡",
    title: "Молниеносные выплаты",
    description:
      "Запросы на вывод обрабатываются за считанные минуты. Поддерживаются карты, электронные кошельки и криптовалюты — без скрытых комиссий.",
  },
  {
    icon: "🎧",
    title: "Поддержка в любое время",
    description:
      "Команда поддержки работает круглосуточно. Чат, e-mail, Telegram — выберите удобный канал и получите ответ без очереди.",
  },
  {
    icon: "🎰",
    title: "Широкий каталог игр",
    description:
      "Более 1 000 слотов, live-столы с реальными дилерами, настольные игры и многое другое — от ведущих международных провайдеров.",
  },
  {
    icon: "🎁",
    title: "Щедрые акции",
    description:
      "Приветственный пакет до 360%, еженедельный кэшбэк, фриспины и эксклюзивные турниры. Бонусы — не просто обещание, а реальная ценность.",
  },
  {
    icon: "🛡️",
    title: "Надёжная защита",
    description:
      "SSL-шифрование, двухфакторная авторизация и строгая политика конфиденциальности. Ваши данные и средства под надёжной защитой.",
  },
  {
    icon: "📱",
    title: "Удобный мобильный доступ",
    description:
      "Платформа адаптирована под все экраны. Играйте с телефона без установки приложений — добавьте ярлык на главный экран и запускайте мгновенно.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-background py-20">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="mb-12 text-center text-[32px] font-bold uppercase tracking-[0.05em]">
          Почему выбирают <span className="text-[#3B82F6]">Lucky Bear</span>
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[rgba(15,23,42,0.6)] p-6 backdrop-blur-[12px] transition-all duration-300 hover:scale-[1.02] hover:border-[#3B82F6]/30"
            >
              {/* Ambient glow behind icon */}
              <div className="absolute top-4 left-4 h-10 w-10 rounded-xl bg-[#3B82F6]/10 blur-xl transition-colors group-hover:bg-[#3B82F6]/20" />

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-[#0F172A] text-2xl transition-all group-hover:border-[#3B82F6]/30">
                  {f.icon}
                </div>
                <h3 className="text-[17px] font-semibold text-white transition-colors group-hover:text-[#3B82F6]">
                  {f.title}
                </h3>
                <p className="text-[14px] leading-[1.65] text-white/50">{f.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#3B82F6] opacity-50 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
