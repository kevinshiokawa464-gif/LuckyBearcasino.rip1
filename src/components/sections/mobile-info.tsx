import React from "react";

export default function MobileInfo() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="mb-8 text-[28px] font-bold uppercase tracking-wide text-white">
          Lucky Bear на смартфоне — игра без границ
        </h2>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/5 bg-[rgba(15,23,42,0.6)] p-6 backdrop-blur-[12px] transition-all hover:scale-[1.01]">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-xl">📱</span>
              <h3 className="text-[16px] font-semibold text-white">Адаптивная веб-версия</h3>
            </div>
            <p className="text-[14px] leading-[1.65] text-white/50">
              Казино Лаки Бир автоматически подстраивается под экран любого смартфона или планшета.
              Регистрация, пополнение, игра и вывод средств — всё в несколько нажатий, без
              дополнительных загрузок.
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[rgba(15,23,42,0.6)] p-6 backdrop-blur-[12px] transition-all hover:scale-[1.01]">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-xl">➕</span>
              <h3 className="text-[16px] font-semibold text-white">Ярлык на домашнем экране</h3>
            </div>
            <p className="text-[14px] leading-[1.65] text-white/50">
              Пользователи Android и iOS могут добавить ярлык Lucky Bear на главный экран. Запуск —
              как у нативного приложения, а памяти занимает минимум. Инструкция доступна в разделе
              «Мобильный доступ».
            </p>
          </div>
        </div>

        <a
          href='https://t.me/+EIx-OPkXbOA1MDNi'
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-[14px] font-semibold text-white transition-all hover:bg-white/10"
        >
          Подробнее о мобильной версии
        </a>
      </div>
    </section>
  );
}
