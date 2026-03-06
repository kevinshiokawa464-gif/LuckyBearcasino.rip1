import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucky Bear Casino — официальный сайт казино Лаки Бир",
  description:
    "Lucky Bear Casino — официальный сайт. Лаки Бир казино: регистрация, бонусы до 360%, быстрые выплаты, тысячи слотов. Вход через сайт или Telegram.",
  keywords:
    "лаки бир, lucky bear casino, казино лаки бир, лаки бир официальный сайт, lucky bear вход, лаки бир регистрация, лаки бир бонус, лаки бир играть онлайн, lucky bear зеркало",
  robots: "index, follow",
  verification: {
    yandex: "2eaa30cafc768d8f",
  },
  openGraph: {
    title: "Lucky Bear Casino — официальный сайт казино Лаки Бир",
    description:
      "Лаки Бир казино — регистрация, бонусы до 360%, мгновенные выплаты, тысячи слотов.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=107186646", "ym");

            ym(107186646, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              ecommerce:"dataLayer"
            });
          `}
        </Script>
      </head>
      <body className="antialiased">
        {children}
        <noscript>
          <div>
            <img 
              src="https://mc.yandex.ru/watch/107186646" 
              style={{ position: 'absolute', left: '-9999px' }} 
              alt="" 
            />
          </div>
        </noscript>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
