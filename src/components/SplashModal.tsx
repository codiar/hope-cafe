import React from 'react';
import { HopeLogo } from './HopeLogo';
import { ArrowLeft } from 'lucide-react';
import { businessInfo } from '../data/cafeData';

interface SplashModalProps {
  onContinue: () => void;
}

export const SplashModal: React.FC<SplashModalProps> = ({ onContinue }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between items-center bg-radial from-[#38332D] via-[#23201D] to-[#121110] text-white p-6 sm:p-10 select-none animate-in fade-in duration-300">
      {/* Decorative ambient blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#B69771]/15 blur-3xl pointer-events-none" />

      {/* Top spacer */}
      <div className="w-full flex justify-end">
        <button
          onClick={onContinue}
          className="text-xs text-[#A89E94] hover:text-white transition-colors px-3 py-1.5 rounded-full border border-white/10"
        >
          تخطي
        </button>
      </div>

      {/* Central Brand Badge - Exact match with Screen 1 and Image 6 */}
      <div className="flex flex-col items-center text-center space-y-6 max-w-sm">
        <HopeLogo variant="badge" size="xl" className="shadow-2xl shadow-[#B69771]/30" />

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            هوب كافيه
          </h1>
          <p className="text-xs sm:text-sm text-[#D5C2AB] font-latin tracking-widest uppercase">
            {businessInfo.sloganEn}
          </p>
          <p className="text-xs text-[#9E9285] max-w-xs mx-auto">
            {businessInfo.sloganAr} • البصرة
          </p>
        </div>
      </div>

      {/* Bottom Continue Action - Exact match with Screen 1 */}
      <div className="w-full max-w-xs space-y-3 pb-2">
        <button
          onClick={onContinue}
          className="w-full py-4 px-6 rounded-2xl bg-white hover:bg-stone-100 text-[#1F1D1B] font-bold text-base shadow-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          <span>متابعة</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
        <p className="text-[11px] text-center text-[#8C827A] font-latin">
          Basra, Iraq • Specialty Coffee & Bakery
        </p>
      </div>
    </div>
  );
};
