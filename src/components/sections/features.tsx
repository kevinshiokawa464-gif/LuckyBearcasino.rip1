<<<<<<< HEAD
import React from 'react';
import { 
  Zap, 
  Headphones, 
  Gamepad2, 
  Gift, 
  ShieldCheck, 
  Smartphone 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="glass-panel p-8 transition-all duration-300 hover:scale-[1.02] hover:border-[#3B82F6]/30 group">
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3B82F6]/10 text-[#3B82F6] ring-1 ring-[#3B82F6]/20 transition-all duration-300 group-hover:bg-[#3B82F6] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
      {icon}
    </div>
    <h3 className="mb-3 text-[18px] font-bold text-white transition-colors group-hover:text-[#3B82F6]">
      {title}
    </h3>
    <p className="text-[14px] leading-relaxed text-white/55">
      {description}
    </p>
  </div>
);

const Features = () => {
  const featuresData = [
    {
      icon: <Zap size={24} />,
      title: "Молниеносные выплаты",
      description: "Запросы на вывод обрабатываются за считанные минуты. Поддерживаются карты, электронные кошельки и криптовалюты — без скрытых комиссий."
    },
    {
      icon: <Headphones size={24} />,
      title: "Поддержка в любое время",
      description: "Команда поддержки работает круглосуточно. Чат, e-mail, Telegram — выберите удобный канал и получите ответ без очереди."
    },
    {
      icon: <Gamepad2 size={24} />,
      title: "Широкий каталог игр",
      description: "Более 1 000 слотов, live-столы с реальными дилерами, настольные игры и многое другое — от ведущих международных провайдеров."
    },
    {
      icon: <Gift size={24} />,
      title: "Щедрые акции",
      description: "Приветственный пакет до 360%, еженедельный кэшбэк, фриспины и эксклюзивные турниры. Бонусы — не просто обещание, а реальная ценность."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Надёжная защита",
      description: "SSL-шифрование, двухфакторная авторизация и строгая политика конфиденциальности. Ваши данные и средства под надёжной защитой."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Удобный мобильный доступ",
      description: "Платформа адаптирована под все экраны. Играйте с телефона без установки приложений — добавьте ярлык на главный экран и запускайте мгновенно."
    }
  ];

  return (
    <section id="features" className="relative overflow-hidden bg-[#05080F] py-20 lg:py-32">
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/5 blur-[120px]"></div>
      
      <div className="container relative z-10">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#3B82F6]/50"></span>
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#3B82F6]">
              Преимущества
            </span>
            <span className="h-px w-8 bg-[#3B82F6]/50"></span>
          </div>
          <h2 className="text-[32px] font-black uppercase tracking-tight text-white sm:text-[40px]">
            Почему выбирают <span className="text-[#3B82F6]">Lucky Bear</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-[16px] text-white/45">
            Мы создали идеальные условия для комфортной и безопасной игры, ориентируясь на потребности наших пользователей.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Bottom CTA for Trust */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-30 grayscale transition-all duration-500 hover:opacity-60 hover:grayscale-0">
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} className="text-[#3B82F6]" />
            <span className="text-[14px] font-bold uppercase tracking-wider text-white">Certified RNG</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-[#3B82F6]" />
            <span className="text-[14px] font-bold uppercase tracking-wider text-white">Instant Payouts</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone size={20} className="text-[#3B82F6]" />
            <span className="text-[14px] font-bold uppercase tracking-wider text-white">Mobile Optimized</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full border-2 border-[#3B82F6] flex items-center justify-center text-[10px] font-black">18+</div>
            <span className="text-[14px] font-bold uppercase tracking-wider text-white">Responsible Gaming</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
=======
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
>>>>>>> 316b9c18e834a61e70fec81a83ff2ab9fd09be36
