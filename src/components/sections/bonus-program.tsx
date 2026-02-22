import React from "react";

export default function BonusProgram() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="mb-8 text-[28px] font-bold uppercase tracking-wide text-white">
          Бонусная программа Lucky Bear Casino
        </h2>

        <div className="rounded-2xl border border-white/5 bg-[rgba(15,23,42,0.6)] p-6 backdrop-blur-[12px] md:p-8">
          <div className="space-y-5">
            <p className="text-[15px] leading-[1.65] text-white/55">
              <strong className="font-bold text-white">Стартовый бонус</strong> — до 100% на первый
              депозит плюс 50 фриспинов на популярных слотах. Начисляется автоматически после
              пополнения. Условия отыгрыша (вейджер х35–х40) подробно изложены в разделе «Акции».
            </p>

            <p className="text-[15px] leading-[1.65] text-white/55">
              <strong className="font-bold text-white">Еженедельный кэшбэк</strong> — частичный
              возврат проигранных средств каждые семь дней. Процент определяется вашим текущим
              уровнем в системе лояльности лаки бир.
            </p>

            <p className="text-[15px] leading-[1.65] text-white/55">
              <strong className="font-bold text-white">Турнирные события</strong> — регулярные
              соревнования с крупными призовыми фондами. Для участия не нужны дополнительные взносы —
              достаточно делать ставки на реальные деньги в отмеченных автоматах.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="/reg.html"
              className="btn-glow inline-flex items-center justify-center rounded-full bg-[#3B82F6] px-8 py-2.5 text-[13px] font-semibold text-white transition-all hover:brightness-110"
            >
              Смотреть все предложения
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
