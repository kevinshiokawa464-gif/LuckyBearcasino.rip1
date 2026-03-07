import React from "react";

export default function SecuritySection() {
  const items = [
    {
      icon: "🛡️",
      title: "Защита данных",
      text: "Платформа применяет SSL-шифрование для всех транзакций. Личная информация пользователей не передаётся третьим лицам. Для дополнительной безопасности доступна двухфакторная аутентификация.",
    },
    {
      icon: "🔞",
      title: "Возрастная проверка (18+)",
      text: "Доступ к казино Lucky Bear открыт только совершеннолетним. При необходимости администрация вправе запросить документ, удостоверяющий личность, в соответствии с действующим законодательством.",
    },
    {
      icon: "⏱️",
      title: "Ответственная игра",
      text: "В личном кабинете вы можете установить лимиты на депозиты, потери и длительность сессий. Также предусмотрена опция временного самоисключения — пауза в несколько дней или недель.",
    },
  ];

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="mb-8 text-[28px] font-bold uppercase tracking-wide text-white">
          Безопасность и ответственная игра
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/5 bg-[rgba(15,23,42,0.6)] p-6 backdrop-blur-[12px]"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xl">{item.icon}</span>
                <h3 className="text-[16px] font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-[14px] leading-[1.65] text-white/50">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href='https://t.me/+EIx-OPkXbOA1MDNi'
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-[14px] font-semibold text-white transition-all hover:bg-white/10"
          >
            Принципы ответственной игры
          </a>
        </div>
      </div>
    </section>
  );
}
