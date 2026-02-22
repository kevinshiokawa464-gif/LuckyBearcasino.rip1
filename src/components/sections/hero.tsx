import React from "react";

const Hero = () => {
  return (
    <section id="top" className="relative pt-10 pb-20 bg-background overflow-hidden">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute top-[8%] left-[-12%] h-[560px] w-[560px] rounded-full bg-[#3B82F6]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[15%] right-[-10%] h-[480px] w-[480px] rounded-full bg-[#60A5FA]/5 blur-[110px]" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_340px]">

          {/* ── Main card ── */}
          <div className="glass-panel p-6 md:p-10">
            {/* Badge */}
            <div className="mb-5 flex items-center gap-2">
              <span className="rounded-sm bg-[#3B82F6]/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#3B82F6]">
                LUCKY BEAR
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
                casino
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-white">
              ЛОВИ УДАЧУ —<br />
              <span className="text-[#3B82F6]">КАЖДЫЙ</span> ДЕНЬ
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[600px] text-[17px] leading-relaxed text-white/55">
              Lucky Bear Casino — площадка, где азарт встречается с комфортом.
              Стартовый пакет <b className="text-white">до 360%</b>, мгновенные выплаты и тысячи
              развлечений. Войти за секунды — через сайт или Telegram.
            </p>

            {/* Feature pills */}
            <ul className="mt-6 flex flex-wrap gap-3">
              {["Выплаты без задержек", "Поддержка 24 / 7", "Тысячи игр", "Лицензированные слоты"].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium transition-colors hover:bg-white/10"
                >
                  <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://lbgame777.xyz/2xn84Y"
                  className="btn-glow inline-flex items-center justify-center gap-2 rounded-xl bg-[#3B82F6] px-8 py-4 text-[15px] font-bold text-white transition-all"
                >
                  🎰 ИГРАТЬ НА САЙТЕ
                </a>
                <a
                  href="https://lbgame777.xyz/2xn84Y"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-[15px] font-bold text-white transition-all hover:bg-white/10"
                >
                  ✈️ ВОЙТИ ЧЕРЕЗ TG
                </a>
            </div>

            {/* Trust row */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/5 pt-5">
              <span className="flex items-center gap-2 text-[12px] text-white/45">
                🔒 SSL-шифрование
              </span>
              <span className="flex items-center gap-2 text-[12px] text-white/45">
                ⚡ Мгновенная регистрация
              </span>
              <span className="flex items-center gap-2 text-[12px] text-white/45">
                🎁 Бонус с первого депозита
              </span>
            </div>
          </div>

          {/* ── Sidebar stats card ── */}
          <aside className="glass-panel p-6 h-full">
            <h3 className="mb-1 text-[16px] font-bold uppercase tracking-wider text-white">
              Быстрый старт
            </h3>
            <p className="mb-6 text-[13px] text-white/45">3 шага — и ты в игре.</p>

            <div className="space-y-4">
              {[
                ["1) Нажми", "«ИГРАТЬ»"],
                ["2) Пройди", "РЕГИСТРАЦИЮ"],
                ["3) Получи", "БОНУС"],
              ].map(([left, right]) => (
                <div
                  key={left}
                  className="flex items-center justify-between border-b border-white/5 pb-3 text-[13px]"
                >
                  <span className="text-white/45">{left}</span>
                  <b className="font-bold uppercase tracking-tight text-white">{right}</b>
                </div>
              ))}

              <div className="pt-3 space-y-3">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-white/45">Сейчас онлайн</span>
                  <b className="text-[17px] font-bold text-white">1 347</b>
                </div>
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-white/45">Выплачено сегодня</span>
                  <b className="text-[17px] font-bold text-white">18 240 000 ₽</b>
                </div>
              </div>
            </div>

            <a
              href="/reg.html"
              className="btn-glow mt-8 flex w-full items-center justify-center rounded-xl bg-[#3B82F6] py-3 text-[14px] font-bold text-white"
            >
              Начать игру
            </a>
          </aside>

        </div>
      </div>
    </section>
  );
};

export default Hero;
