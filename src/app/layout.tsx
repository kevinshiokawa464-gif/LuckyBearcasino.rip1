import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LuckyBear — Официальный Сайт Казино | Играть в Лаки Бир Онлайн",
  description:
    "Официальный сайт LuckyBear: современная игровая платформа в Telegram. Быстрые выплаты, ежедневные бонусы и эксклюзивные слоты Lucky Bear. Узнайте, как начать играть в Лаки Бир через официальный бот.",
  keywords:
    "LuckyBear, Лаки Бир, официальный сайт LuckyBear, казино LuckyBear, играть в LuckyBear, регистрация Lucky Bear, бонусы LuckyBear, телеграм бот LuckyBear, LuckyBear зеркало, Lucky Bear отзывы, выплаты LuckyBear",
  other: {
    "yandex-verification": "2eaa30cafc768d8f",
  },
  robots: "index, follow",
  openGraph: {
    title: "LuckyBear — Официальный Сайт Казино | Играть в Лаки Бир Онлайн",
    description:
      "Официальный сайт LuckyBear: современная игровая платформа в Telegram. Быстрые выплаты, ежедневные бонусы и эксклюзивные слоты Lucky Bear.",
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className="antialiased">
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
