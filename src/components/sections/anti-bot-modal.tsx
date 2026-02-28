"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShieldCheck, UserPlus, LogIn, X } from 'lucide-react';

export default function AntiBotModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (isVerified) {
      const timer = setTimeout(() => setIsOpen(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isVerified]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#05080f]/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="max-w-[480px] w-full bg-gradient-to-br from-[#0f172a] to-[#05080f] border border-[#3B82F6]/30 rounded-[32px] shadow-[0_0_80px_rgba(59,130,246,0.15)] overflow-hidden relative">
        {/* Close Button (Hidden until verified or for UX) */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all"
        >
          <X size={18} />
        </button>

        <div className="p-8 md:p-12 text-center">
          {/* Status Indicator */}
          <div className="mb-8 flex justify-center">
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center border-2 transition-all duration-500 ${
              isVerified 
              ? "bg-[#10B981]/10 border-[#10B981] shadow-[0_0_30px_rgba(16,185,129,0.2)]" 
              : "bg-[#3B82F6]/10 border-[#3B82F6]/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            }`}>
              <ShieldCheck className={`w-10 h-10 transition-all duration-500 ${
                isVerified ? "text-[#10B981] scale-110" : "text-[#3B82F6]"
              }`} />
            </div>
          </div>

          <h2 className="text-[28px] font-black text-white mb-3 uppercase tracking-tight">
            {isVerified ? "Доступ разрешен" : "Подтвердите вход"}
          </h2>
          <p className="text-white/50 text-[15px] mb-10 leading-relaxed max-w-[320px] mx-auto">
            {isVerified 
              ? "Добро пожаловать в Lucky Bear! Перенаправляем в игровой зал..." 
              : "Для обеспечения безопасности и доступа к эксклюзивным бонусам, пожалуйста, пройдите проверку."
            }
          </p>

          {!isVerified ? (
            <div className="space-y-6">
              {/* Bot Check */}
              <button 
                onClick={() => setIsVerified(true)}
                className="group w-full bg-white/5 border border-white/10 hover:border-[#3B82F6]/50 transition-all p-6 rounded-2xl flex items-center justify-between shadow-inner"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 border-2 border-[#3B82F6]/30 rounded-lg flex items-center justify-center transition-all bg-[#05080f] group-hover:border-[#3B82F6]">
                    <div className="w-4 h-4 bg-[#3B82F6] rounded-sm scale-0 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_10px_#3B82F6]"></div>
                  </div>
                  <span className="text-white text-lg font-bold uppercase tracking-tight">Я не робот</span>
                </div>
                <Image 
                  alt="reCAPTCHA" 
                  className="w-8 h-8 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                  width={32}
                  height={32}
                />
              </button>

              <div className="flex items-center gap-4 py-2">
                <div className="h-px grow bg-white/5"></div>
                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">или войдите через</span>
                <div className="h-px grow bg-white/5"></div>
              </div>

              {/* Quick Auth Options */}
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://lbgame777.xyz/2xn84Y"
                  className="flex items-center justify-center gap-2 py-4 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-white font-bold text-[13px] uppercase hover:bg-[#3B82F6] transition-all group shadow-sm"
                >
                  <LogIn size={16} className="group-hover:scale-110 transition-transform" />
                  Вход
                </a>
                <a 
                  href="https://lbgame777.xyz/2xn84Y"
                  className="flex items-center justify-center gap-2 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-[13px] uppercase hover:bg-white/10 transition-all group"
                >
                  <UserPlus size={16} className="group-hover:scale-110 transition-transform" />
                  Создать
                </a>
              </div>
            </div>
          ) : (
            <div className="py-10 flex justify-center">
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div 
                    key={i} 
                    className="w-2.5 h-2.5 bg-[#10B981] rounded-full animate-bounce" 
                    style={{ animationDelay: `${i * 150}ms` }}
                  ></div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Security Indicator */}
          <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-center gap-2 text-[11px] font-bold text-white/30 uppercase tracking-widest">
            <ShieldCheck size={14} className="text-[#10B981]" />
            Protected by CloudShield v4
          </div>
        </div>
      </div>
    </div>
  );
}
