import React from "react";

export default function RegistrationGuide() {
  return (
    <section id="registraciya" className="bg-background py-20">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="mb-10 text-center text-[32px] font-bold uppercase tracking-[0.05em]">
          Быстрая <span className="text-[#3B82F6] italic">регистрация</span>
        </h2>

        <div className="glass-panel relative overflow-hidden p-6 md:p-10">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#3B82F6]/10 blur-[100px]" />

          <div className="relative z-10 max-w-[800px] mx-auto">
            <p className="mb-8 text-[16px] leading-[1.65] text-white/55">
              Создать аккаунт в казино Lucky Bear занимает не более минуты. Никаких сложных форм —
              только базовые данные. Сразу после регистрации лаки бир вам становится доступен
              приветственный бонусный пакет.
            </p>

            <div className="mb-8">
              <h3 className="mb-5 text-[15px] font-bold uppercase tracking-wider text-white">
                Как зарегистрироваться
              </h3>
              <ol className="space-y-4">
                {[
                  "Нажмите кнопку «Зарегистрироваться» — вы попадёте на страницу создания аккаунта Lucky Bear Casino.",
                  "Заполните форму: выберите имя пользователя, придумайте пароль, укажите e-mail.",
                  "Активируйте приветственный бонус и приступайте к игре.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4 text-[15px] text-white/80">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3B82F6]/20 text-[13px] font-bold text-[#3B82F6]">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <a
              href='https://t.me/+EIx-OPkXbOA1MDNi'
              className="btn-glow inline-flex items-center justify-center gap-2 rounded-xl bg-[#3B82F6] px-8 py-4 text-[15px] font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              🎰 Зарегистрироваться
            </a>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-6 text-[13px] text-white/40">
          <div className="flex items-center gap-2">
            <span className="text-[#3B82F6]">🔒</span> Безопасное соединение
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#3B82F6]">⚡</span> Мгновенная активация
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#3B82F6]">🎁</span> Бонус 360% ждёт вас
          </div>
        </div>
      </div>
    </section>
  );
}
