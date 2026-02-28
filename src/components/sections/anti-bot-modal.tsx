import React from 'react';
import Image from 'next/image';

/**
 * AntiBotModal Component
 * Clones the verification overlay with a reCAPTCHA style "I am not a robot" checkbox.
 * Includes branding and security indicators as per the design instructions.
 */
export default function AntiBotModal() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a] font-sans">
      <div className="max-w-[420px] w-full p-10 bg-[#111] border border-[#222] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] text-center">
        {/* Shield Icon Header */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-[#fbbf24]/10 rounded-full flex items-center justify-center border border-[#fbbf24]/20">
            <svg 
              className="w-8 h-8 text-[#fbbf24]" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
            </svg>
          </div>
        </div>

        {/* Modal Title and Description */}
        <h2 className="text-2xl font-bold text-white mb-3">Вы человек?</h2>
        <p className="text-[rgba(255,255,255,0.55)] text-sm mb-8 leading-relaxed">
          Чтобы защитить сайт от ботов и обеспечить стабильную работу Lucky Bear Casino, пожалуйста, пройдите проверку.
        </p>

        {/* Verification Checkbox Panel */}
        <div className="group cursor-pointer bg-[#1a1a1a] border border-[#333] hover:border-[#fbbf24] transition-all p-5 rounded-xl flex items-center justify-between mb-8 shadow-inner">
          <div className="flex items-center gap-4">
            {/* Custom Checkbox UI */}
            <div className="w-7 h-7 border-2 border-[#444] group-hover:border-[#fbbf24] rounded-md flex items-center justify-center transition-all bg-[#111]">
              <div className="w-3.5 h-3.5 bg-[#fbbf24] rounded-sm scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
            <span className="text-gray-200 text-lg font-medium">Я не робот</span>
          </div>

          {/* reCAPTCHA Brand Section */}
          <div className="flex flex-col items-end">
            <Image 
              alt="reCAPTCHA" 
              className="w-8 h-8 opacity-70 grayscale group-hover:grayscale-0 transition-all duration-300"
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              width={32}
              height={32}
            />
            <span className="text-[9px] text-gray-500 mt-1 uppercase tracking-widest font-bold">Privacy - Terms</span>
          </div>
        </div>

        {/* Footer Security Indicator */}
        <div className="text-[11px] text-gray-600 border-t border-[#222] pt-6 flex items-center justify-center gap-2">
          <svg 
            className="w-3 h-3" 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              fillRule="evenodd" 
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" 
              clipRule="evenodd" 
            />
          </svg>
          Безопасное соединение установлено
        </div>
      </div>
    </div>
  );
}