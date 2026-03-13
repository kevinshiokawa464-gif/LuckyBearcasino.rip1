"use client";

import React from "react";

export default function Home() {
  return (
    <div className="manrope-font">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;700;900&family=Manrope:wght@300;400;600;800&display=swap');
        
        :root {
            --accent-purple: #9d50bb;
            --accent-pink: #6e48aa;
            --neon-glow: #bc13fe;
        }

        .manrope-font {
            font-family: 'Manrope', sans-serif;
            background-color: #050505;
            color: #f5f5f7;
            line-height: 1.6;
            overflow-x: hidden;
            min-height: 100-vh;
        }

        .unbounded-font {
            font-family: 'Unbounded', sans-serif;
            letter-spacing: -0.04em;
        }

        .btn-vibrant {
            background: linear-gradient(45deg, #bc13fe, #ff00ff, #9d50bb);
            background-size: 200% auto;
            color: #ffffff;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 0 20px rgba(188, 19, 254, 0.4);
            animation: gradient-shift 3s ease infinite;
        }

        @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .btn-vibrant:hover {
            transform: scale(1.05) translateY(-2px);
            box-shadow: 0 0 40px rgba(188, 19, 254, 0.7);
        }

        .section-vibrant-dark {
            background: radial-gradient(circle at 50% 50%, #120a1a 0%, #050505 100%);
        }

        .text-vibrant-gradient {
            background: linear-gradient(to bottom, #ffffff 30%, #bc13fe 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(0 0 10px rgba(188, 19, 254, 0.3));
        }

        .card-vibrant {
            background: rgba(28, 28, 30, 0.6);
            backdrop-filter: blur(10px);
            border-radius: 24px;
            padding: 40px;
            border: 1px solid rgba(188, 19, 254, 0.2);
            transition: all 0.4s ease;
        }

        .card-vibrant:hover {
            border-color: #bc13fe;
            box-shadow: 0 0 30px rgba(188, 19, 254, 0.2);
            transform: translateY(-5px);
        }

        .sticky-nav {
            background: rgba(5, 5, 5, 0.85);
            backdrop-filter: saturate(180%) blur(20px);
        }

        .glow-sphere {
            position: absolute;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(188, 19, 254, 0.1) 0%, transparent 70%);
            pointer-events: none;
            z-index: 0;
        }

        .seo-text-block p {
            margin-bottom: 24px;
            color: #b1b1b6;
        }

        .seo-text-block strong {
            color: #ffffff;
            text-shadow: 0 0 5px rgba(188, 19, 254, 0.2);
        }
      `}</style>

      <div className="glow-sphere top-[-10%] left-[-10%]"></div>
      <div className="glow-sphere bottom-[-10%] right-[-10%]"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 sticky-nav border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-6xl">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-black tracking-tight text-white unbounded-font uppercase">
              Lucky<span className="text-[#bc13fe]">Bear</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-10 text-xs font-black uppercase tracking-widest text-[#a1a1a6]">
            <a href="#about" className="hover:text-[#bc13fe] transition">О проекте</a>
            <a href="#games" className="hover:text-[#bc13fe] transition">Слоты</a>
            <a href="#faq" className="hover:text-[#bc13fe] transition">FAQ</a>
          </div>
          <a href="https://lbgame777.xyz/2xn84Y" target="_blank" className="btn-vibrant px-8 py-2 rounded-full text-xs font-black">Играть</a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-24 pb-32 text-center max-w-4xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#bc13fe]/5 to-transparent blur-[100px] pointer-events-none"></div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-vibrant-gradient uppercase leading-tight unbounded-font">
            ДОБРО ПОЖАЛОВАТЬ В <br />
            LUCKY BEAR БОТ КАЗИНО В ТЕЛЕГРАМ
          </h1>
          
          <p className="text-xl md:text-2xl text-[#86868b] mb-14 font-medium max-w-2xl mx-auto leading-relaxed">
            Твой путь к миллионам начинается здесь. <br className="hidden md:block" />
            Забудь про блокировки — играй в Telegram 24/7.
          </p>
          
          <div className="flex justify-center">
            <a href="https://lbgame777.xyz/2xn84Y" target="_blank" className="btn-vibrant px-14 py-6 rounded-2xl text-xl font-black shadow-2xl">
              ЗАПУСТИТЬ LUCKYBEAR
            </a>
          </div>
        </section>

        {/* SEO Content Block 1 */}
        <section id="about" className="section-vibrant-dark py-32 border-y border-white/5">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black mb-16 text-center text-white uppercase tracking-tighter unbounded-font">Полный обзор платформы LuckyBear</h2>
            <div className="seo-text-block text-lg leading-relaxed text-left">
              <p>
                <strong>LuckyBear (Лаки Бир)</strong> — это современная гемблинг-платформа, которая совершила революцию в индустрии азартных игр, полностью интегрировавшись в экосистему Telegram. Официальный сайт LuckyBear создан для тех, кто ценит свое время и предпочитает качественный сервис без лишних сложностей. Сегодня <em>казино LuckyBear</em> предлагает уникальный пользовательский опыт, объединяя безопасность мессенджера и мощный функционал топовых игровых площадок.
              </p>
              <p>
                Главная особенность <strong>Лаки Бир</strong> заключается в том, что вам не нужно проходить утомительную процедуру регистрации. Достаточно запустить <strong>официальный бот LuckyBear</strong>, и вы сразу получаете доступ к своему игровому балансу. Это избавляет пользователей от необходимости постоянно искать <strong>актуальное зеркало LuckyBear</strong>, так как Telegram-бот работает стабильно в любых условиях.
              </p>
              <p>
                Для новых игроков предусмотрена щедрая система поощрений. <strong>Бонусы LuckyBear</strong> включают в себя приветственный пакет до 600% на первые депозиты, а также ежедневное бонусное колесо, где каждый может выиграть реальные деньги или фриспины. Если вы ищете, где <strong>играть в LuckyBear онлайн</strong>, наш официальный сайт предоставит вам все необходимые ссылки и инструкции.
              </p>
              <p>
                Безопасность транзакций — еще один приоритет <strong>LuckyBear Casino</strong>. Платформа использует передовые методы шифрования, гарантируя анонимность и защиту ваших средств. <strong>Выплаты LuckyBear</strong> происходят мгновенно, что подтверждают многочисленные положительные <strong>отзывы о LuckyBear</strong> от игроков по всему миру.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="card-vibrant group">
                <div className="w-16 h-16 bg-[#bc13fe]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#bc13fe]/20 transition-all">
                  <i className="fas fa-bolt text-2xl text-[#bc13fe]"></i>
                </div>
                <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter unbounded-font">Мгновенный вывод</h3>
                <p className="text-[#86868b] leading-relaxed">Выплаты в LuckyBear обрабатываются автоматически. Среднее время вывода средств составляет всего 12 минут на любую платежную систему.</p>
              </div>
              <div className="card-vibrant group">
                <div className="w-16 h-16 bg-[#bc13fe]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#bc13fe]/20 transition-all">
                  <i className="fas fa-lock text-2xl text-[#bc13fe]"></i>
                </div>
                <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter unbounded-font">Полная анонимность</h3>
                <p className="text-[#86868b] leading-relaxed">Ваши данные защищены протоколами Telegram. В LuckyBear Casino не требуется верификация личности для начала игры или вывода выигрыша.</p>
              </div>
              <div className="card-vibrant group">
                <div className="w-16 h-16 bg-[#bc13fe]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#bc13fe]/20 transition-all">
                  <i className="fas fa-gamepad text-2xl text-[#bc13fe]"></i>
                </div>
                <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter unbounded-font">Лицензионные игры</h3>
                <p className="text-[#86868b] leading-relaxed">На платформе Лаки Бир представлены слоты от ведущих мировых провайдеров. Честность игры гарантирована технологией Provably Fair.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Block 2 */}
        <section id="games" className="section-vibrant-dark py-32 border-y border-white/5">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-16 text-white uppercase tracking-tighter unbounded-font">Почему игроки выбирают Lucky Bear Casino?</h2>
            <div className="seo-text-block text-lg leading-relaxed text-left">
              <p>
                Анализируя многочисленные <strong>отзывы о LuckyBear</strong>, можно выделить несколько ключевых преимуществ, которые делают это казино лидером рынка. Во-первых, это удобство интерфейса. Разработчики Лаки Бир сделали ставку на минимализм: всё интуитивно понятно даже новичку. Во-вторых, это стабильность. Пока другие ищут <strong>зеркало Lucky Bear</strong>, пользователи бота наслаждаются бесперебойной игрой.
              </p>
              <p>
                <strong>Регистрация в Lucky Bear</strong> через Telegram занимает менее одной секунды. Вы просто нажимаете кнопку "Старт", и ваша учетная запись готова. Это особенно важно для тех, кто ценит конфиденциальность. <strong>Выплаты LuckyBear</strong> также заслуживают отдельного упоминания — поддержка криптовалют и популярных банковских карт делает процесс получения выигрыша максимально простым.
              </p>
              <p>
                В каталоге <strong>Lucky Bear Casino</strong> вы найдете сотни популярных слотов, рулетку, карточные игры и эксклюзивные новинки, доступные только на нашей платформе. Постоянные акции и <strong>промокоды Лаки Бир</strong> позволяют значительно увеличить ваш банкролл и получить еще больше удовольствия от процесса.
              </p>
              <p>
                Мы также уделяем огромное внимание поддержке пользователей. <strong>Официальный сайт Lucky Bear</strong> предоставляет круглосуточную помощь по любым вопросам. Наша команда стремится сделать так, чтобы <strong>играть в Lucky Bear</strong> было максимально комфортно и безопасно для каждого клиента.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-32 container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black mb-20 text-center text-white uppercase tracking-tighter unbounded-font">Вопросы о LuckyBear</h2>
          <div className="space-y-12">
            <div className="card-vibrant p-10">
              <h3 className="text-xl md:text-2xl font-black mb-5 text-white uppercase tracking-tighter unbounded-font">Как начать играть в LuckyBear?</h3>
              <p className="text-[#a1a1a6] leading-relaxed">Вам нужно нажать кнопку "Запустить" на нашем сайте, после чего вы перейдете в официальный Telegram-бот. Нажмите "Старт" в мессенджере, и игра начнется. Это самый простой способ доступа к Lucky Bear.</p>
            </div>
            <div className="card-vibrant p-10 border-l-4 border-l-[#bc13fe]">
              <h3 className="text-xl md:text-2xl font-black mb-5 text-white uppercase tracking-tighter unbounded-font">Нужно ли искать зеркало Лаки Бир?</h3>
              <p className="text-[#a1a1a6] leading-relaxed">При использовании Telegram-бота необходимость в поиске зеркал отпадает, так как бот работает напрямую через защищенные сервера мессенджера. Однако наш сайт всегда предоставляет актуальные ссылки на LuckyBear зеркало.</p>
            </div>
            <div className="card-vibrant p-10">
              <h3 className="text-xl md:text-2xl font-black mb-5 text-white uppercase tracking-tighter unbounded-font">Какие бонусы дает Lucky Bear новым игрокам?</h3>
              <p className="text-[#a1a1a6] leading-relaxed">Новые пользователи получают приветственный пакет, который может достигать 600% на первые пополнения баланса. Также доступно ежедневное бонусное колесо с ценными призами.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 section-vibrant-dark">
        <div className="container mx-auto px-6 text-center">
          <div className="text-3xl font-black mb-10 text-white uppercase tracking-tighter unbounded-font">Lucky<span className="text-[#bc13fe]">Bear</span></div>
          <p className="text-sm text-[#86868b] max-w-xl mx-auto mb-12 font-medium">
            © 2026 LuckyBear Official. Платформа для азартных игр. Мы призываем к ответственной игре. Только для лиц старше 18 лет.
          </p>
          <div className="flex justify-center space-x-10 text-[#86868b] text-xs font-black uppercase tracking-widest">
            <a href="https://lbgame777.xyz/2xn84Y" target="_blank" className="hover:text-white transition">Telegram</a>
            <a href="#" className="hover:text-white transition">Поддержка</a>
            <a href="#" className="hover:text-white transition">Правила</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
