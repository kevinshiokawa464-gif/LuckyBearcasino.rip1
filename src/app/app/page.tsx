import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lucky Bear — Вход в игру ��",
  description: "Официальное приложение. Быстрый вход и мгновенная синхронизация.",
  robots: "noindex, nofollow",
};

export default function AppFunnelPage() {
  return (
    <div className="min-h-screen bg-[#05080f] text-white overflow-x-hidden font-sans">
      <div className="max-w-[400px] mx-auto px-6 py-12 flex flex-col min-h-screen justify-center">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-blue-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
            <span className="text-4xl">⭐</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Lucky Bear</h1>
          <p className="text-white/40 text-sm italic">Система готова к работе</p>
        </div>

        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
            <h3 className="font-bold text-sm mb-1 text-blue-400 uppercase tracking-tighter">Мгновенный доступ</h3>
            <p className="text-[11px] text-white/30">Ваш аккаунт синхронизирован с сервером</p>
          </div>

          <a 
            href="https://lbgame777.xyz/2xn84Y"
            className="block w-full py-5 rounded-2xl bg-blue-600 text-white text-center font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
          >
            Войти в систему 🚀
          </a>
        </div>

        <footer className="mt-12 text-center text-[10px] text-white/10 uppercase tracking-widest">
          Secure Connection Enabled
        </footer>
      </div>
    </div>
  );
}
