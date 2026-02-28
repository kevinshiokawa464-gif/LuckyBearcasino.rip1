export default function CategoriesSection() {
  const categories = [
    {
      emoji: "🃏",
      tag: "Live",
      title: "Live-столы",
      description: "Настоящие дилеры, прямой эфир",
      href: "https://lbgame777.xyz/2xn84Y",
    },
    {
      emoji: "🎰",
      tag: "Классика",
      title: "Классические слоты",
      description: "Популярные автоматы всех времён",
      href: "https://lbgame777.xyz/2xn84Y",
    },
    {
      emoji: "⚡",
      tag: "Турбо",
      title: "Турбо-игры",
      description: "Быстрые раунды, мгновенные результаты",
      href: "https://lbgame777.xyz/2xn84Y",
    },
    {
      emoji: "✨",
      tag: "Бонусные",
      title: "Бонус-раунды",
      description: "Слоты с расширенными фичами",
      href: "https://lbgame777.xyz/2xn84Y",
    },
  ];

  return (
    <section className="bg-[#05080f] py-14">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="mb-8 text-[28px] font-bold uppercase tracking-wide text-white">
          Популярные категории игр
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              className="group relative flex min-h-[140px] flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[rgba(15,23,42,0.6)] p-5 backdrop-blur-[8px] transition-all duration-300 hover:scale-[1.02] hover:border-[#3B82F6]/30"
            >
              <div className="flex items-center justify-between">
                <span className="text-[22px]">{category.emoji}</span>
                <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase text-white/40 transition-colors group-hover:bg-[#3B82F6]/20 group-hover:text-[#3B82F6]">
                  {category.tag}
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-[15px] font-semibold text-white transition-colors group-hover:text-[#3B82F6]">
                  {category.title}
                </h3>
                <p className="mt-1 text-[12px] text-white/35">
                  {category.description}
                </p>
              </div>
              {/* Bottom hover bar effect */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#3B82F6] opacity-60 transition-all duration-500 group-hover:w-full"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}