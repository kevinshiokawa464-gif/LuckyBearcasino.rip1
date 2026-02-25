import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucky Bear Casino — официальный сайт казино Лаки Бир",
  description:
    "Lucky Bear Casino — официальный сайт. Лаки Бир казино: регистрация, бонусы до 360%, быстрые выплаты тысячи слотов. Вход через сайт или Телеграм.",
  keywords:
    "лаки бир, lucky bear casino, казино лаки бир, лаки бир официальный сайт, lucky bear вход, лаки бир регистрация, лаки бир бонус, лаки бир играть онлайн, lucky bear зеркало",
  robots: "index, follow",
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
  children: React.Node;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
