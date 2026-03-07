import React from "react";

export default function LoginInfo() {
  return (
    <section id="vhod" className="bg-background py-20">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="mb-10 text-center text-[32px] font-bold uppercase tracking-[0.05em]">
          Официальный <span className="text-[#3B82F6] italic">вход</span>
        </h2>

        <div className="glass-panel p-6 md:p-10">
          <div className="max-w-[850px]">
            <p className="mb-8 text-[16px] leading-[1.65] text-white/55">
              Войдите в личный кабинет Lucky Bear Casino за несколько секунд — через официальный сайт
              или Telegram-бот лаки бир. Оба варианта обеспечивают полный доступ к играм, бонусам и
              кассе.
            </p>

            <div className="mb-10">
              <h3 className="mb-5 text-[15px] font-bold uppercase tracking-wider text-white">
                Не получается войти?
              </h3>
              <ul className="space-y-3">
                {[
                  "Проверьте интернет-соединение и отключите VPN или прокси.",
                  "Очистите кеш и куки браузера, после чего перезагрузите страницу.",
                  "Используйте Telegram-бот — это самый стабильный способ доступа к площадке.",
                  "Если вы забыли пароль, воспользуйтесь функцией восстановления по e-mail.",
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-white/55">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href='https://t.me/+EIx-OPkXbOA1MDNi'
                  className="btn-glow flex items-center justify-center gap-2 rounded-xl bg-[#3B82F6] px-8 py-3.5 text-[14px] font-bold uppercase tracking-wide text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                  🌐 Войти на сайт
                </a>
                <a
                  href='https://t.me/+EIx-OPkXbOA1MDNi'
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#1E293B] px-8 py-3.5 text-[14px] font-bold uppercase tracking-wide text-white transition-all hover:border-white/20"
                >
                  ✈️ Войти через Telegram
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
