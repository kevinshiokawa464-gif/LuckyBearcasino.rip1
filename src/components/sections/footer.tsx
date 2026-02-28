import React from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#05080F] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto max-w-[1200px] px-5">
        {/* SEO & Main Content Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="mb-6 text-[24px] font-black uppercase tracking-tight text-white leading-tight">
              Lucky Bear Casino (Лаки Бир) — <br />
              <span className="text-[#3B82F6]">Официальный сайт и зеркало</span>
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-white/55">
              <p>
                Lucky Bear Casino (Лаки Бир) — это современная гемблинг-платформа, завоевавшая доверие тысяч игроков по всему миру. Наш официальный сайт Лаки Бир предлагает уникальный игровой опыт, сочетающий в себе классические слоты, инновационные краш-игры и атмосферу реального казино с живыми дилерами.
              </p>
              <p>
                Если основной ресурс временно недоступен, вы всегда можете использовать актуальное зеркало Lucky Bear. Зеркало — это точная копия сайта со всеми вашими данными, бонусами и балансом. Вход в Lucky Bear через альтернативные ссылки гарантирует бесперебойный доступ к любимым играм 24/7.
              </p>
              <p>
                Для тех, кто ценит мобильность, мы разработали идеальную адаптацию. Играть в Лаки Бир онлайн можно прямо из браузера вашего смартфона или через удобный Telegram-бот. Регистрация занимает всего несколько кликов — достаточно указать почту или войти через социальные сети.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 border border-white/5">
                <span className="text-xl">🛡️</span>
                <span className="text-[13px] font-semibold text-white/80">SSL 256-bit</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 border border-white/5">
                <span className="text-xl">🔞</span>
                <span className="text-[13px] font-semibold text-white/80">18+ Only</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 border border-white/5">
                <ShieldCheck className="h-5 w-5 text-gold" />
                <span className="text-[13px] font-semibold text-white/80">Certified RNG</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-[18px] font-bold uppercase tracking-wider text-white">
              Безопасность и ответственная игра
            </h3>
            <div className="space-y-8">
              <div>
                <b className="mb-2 block text-[15px] font-bold text-white/90">Защита данных</b>
                <p className="text-[14px] leading-relaxed text-white/50">
                  Платформа применяет SSL-шифрование для всех транзакций. Личная информация пользователей не передаётся третьим лицам. Для дополнительной безопасности доступна двухфакторная аутентификация.
                </p>
              </div>
              <div>
                <b className="mb-2 block text-[15px] font-bold text-white/90">Возрастная проверка (18+)</b>
                <p className="text-[14px] leading-relaxed text-white/50">
                  Доступ к казино Lucky Bear открыт только совершеннолетним. При необходимости администрация вправе запросить документ, удостоверяющий личность, в соответствии с действующим законодательством.
                </p>
              </div>
              <div>
                <b className="mb-2 block text-[15px] font-bold text-white/90">Ответственная игра</b>
                <p className="text-[14px] leading-relaxed text-white/50">
                  В личном кабинете вы можете установить лимиты на депозиты, потери и длительность сессий. Также предусмотрена опция временного самоисключения — пауза в несколько дней или недель.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/5 pt-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3B82F6]/20 ring-1 ring-[#3B82F6]/30 text-lg">🐻</div>
                <span className="text-[16px] font-extrabold tracking-tight text-white">Lucky<span className="text-[#3B82F6]">Bear</span></span>
             </div>
             <p className="text-[13px] text-white/35 leading-relaxed">
               © 2024 Lucky Bear Casino.<br />Все права защищены.
             </p>
          </div>

          <div>
            <h4 className="mb-5 text-[12px] font-bold uppercase tracking-[0.1em] text-white">Навигация</h4>
            <ul className="space-y-3">
              <li><a href="#games" className="text-[13px] text-white/50 transition-colors hover:text-white">Все игры</a></li>
              <li><a href="#bonuses" className="text-[13px] text-white/50 transition-colors hover:text-white">Бонусы</a></li>
              <li><a href="#features" className="text-[13px] text-white/50 transition-colors hover:text-white">Преимущества</a></li>
              <li><a href="#faq" className="text-[13px] text-white/50 transition-colors hover:text-white">Вопросы и ответы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[12px] font-bold uppercase tracking-[0.1em] text-white">Аккаунт</h4>
            <ul className="space-y-3">
              <li><a href="#vhod" className="text-[13px] text-white/50 transition-colors hover:text-white">Вход</a></li>
              <li><a href="#registraciya" className="text-[13px] text-white/50 transition-colors hover:text-white">Регистрация</a></li>
              <li><a href="#top" className="text-[13px] text-white/50 transition-colors hover:text-white">Личный кабинет</a></li>
              <li><a href="#telegram" className="text-[13px] text-white/50 transition-colors hover:text-white">Telegram бот</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[12px] font-bold uppercase tracking-[0.1em] text-white">Помощь</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[13px] text-white/50 transition-colors hover:text-white">Техподдержка 24/7</a></li>
              <li><a href="#" className="text-[13px] text-white/50 transition-colors hover:text-white">Правила и условия</a></li>
              <li><a href="#" className="text-[13px] text-white/50 transition-colors hover:text-white">Политика выплат</a></li>
              <li><a href="#" className="text-[13px] text-white/50 transition-colors hover:text-white">Партнерская программа</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
             <h4 className="mb-5 text-[12px] font-bold uppercase tracking-[0.1em] text-white">Принимаем</h4>
             <div className="flex flex-wrap gap-2">
                <div className="h-8 w-12 rounded bg-white/5 flex items-center justify-center text-[10px] font-bold text-white/20 border border-white/5">VISA</div>
                <div className="h-8 w-12 rounded bg-white/5 flex items-center justify-center text-[10px] font-bold text-white/20 border border-white/5">MC</div>
                <div className="h-8 w-12 rounded bg-white/5 flex items-center justify-center text-[10px] font-bold text-white/20 border border-white/5">USDT</div>
                <div className="h-8 w-12 rounded bg-white/5 flex items-center justify-center text-[10px] font-bold text-white/20 border border-white/5">BTC</div>
             </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 border-t border-white/5 pt-8">
          <p className="text-center text-[12px] italic leading-relaxed text-white/25">
            * Помните, что азартные игры предназначены для развлечения. Играйте ответственно. Доступно только для лиц старше 18 лет. Лаки Бир казино — это ваше место для ярких побед и честной игры.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
