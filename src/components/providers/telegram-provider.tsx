"use client";

import { useEffect } from "react";

export default function TelegramProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initTWA = () => {
      if (typeof window !== "undefined" && window.Telegram && window.Telegram.WebApp) {
        try {
          // Вызываем ready() максимально быстро
          window.Telegram.WebApp.ready();
          window.Telegram.WebApp.expand();
          
          // Сообщаем, что страница загружена, чтобы убрать индикатор загрузки Telegram
          if (window.Telegram.WebApp.isExpanded) {
            console.log("TWA Expanded and Ready");
          }
        } catch (e) {
          console.error("Telegram WebApp init error:", e);
        }
      }
    };

    // Пробуем инициализировать сразу
    initTWA();

    // И на всякий случай по событию загрузки
    window.addEventListener("load", initTWA);
    return () => window.removeEventListener("load", initTWA);
  }, []);

  return <>{children}</>;
}
