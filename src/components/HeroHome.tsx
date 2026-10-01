import React from 'react';
import { businessInfo } from '../data/cafeData';
import { MapPin, Clock, ArrowLeft, ExternalLink, Coffee, Sparkles } from 'lucide-react';
import storefrontImg from '../assets/images/storefront.jpg';

interface HeroHomeProps {
  onSelectCategory: (categoryId: string) => void;
  onNavigateToMenu: () => void;
}

export const HeroHome: React.FC<HeroHomeProps> = ({ onSelectCategory, onNavigateToMenu }) => {
  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Hero Welcome Card - Exact visual match with Screen 2 */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#DEC9AF] via-[#E8D9C5] to-[#EFE4D4] border border-[#D5C2AB] p-6 sm:p-10 shadow-sm">
        {/* Subtle decorative circles */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-white/20 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-[#B69771]/20 blur-xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/60 backdrop-blur-md text-[#5E4C38] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#9C7C54]" />
            <span>كافيه ومخبوزات مختصة في البصرة</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#1F1D1B] tracking-tight leading-tight">
            A New Hope,
            <span className="block mt-1 sm:mt-2 text-[#4A3D2F]">With Every Cup</span>
          </h1>

          <p className="text-base sm:text-lg text-[#5E5144] font-medium max-w-md mx-auto">
            {businessInfo.sloganAr}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onNavigateToMenu}
              className="px-6 py-3 rounded-full bg-[#1F1D1B] hover:bg-[#332F2A] text-white text-sm sm:text-base font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <Coffee className="w-4 h-4" />
              <span>تصفح المنيو الكامل</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
            <a
              href={businessInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-white/80 hover:bg-white text-[#1F1D1B] text-sm sm:text-base font-bold flex items-center gap-2 border border-[#C5B39C] transition-all"
            >
              <MapPin className="w-4 h-4 text-[#B69771]" />
              <span>الاتجاهات بالخريطة</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Location & Working Hours Info Card - Matches Screen 2 */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#EAE5DE] shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-[#EAE5DE]">
          {/* Address */}
          <div className="flex items-start gap-3.5 pt-2 md:pt-0">
            <div className="w-10 h-10 rounded-2xl bg-[#F8F5F0] border border-[#E5DDD2] flex items-center justify-center shrink-0 text-[#B69771]">
              <MapPin className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#8C827A] uppercase tracking-wider block">
                الموقع والفرع
              </span>
              <p className="text-sm sm:text-base font-bold text-[#1F1D1B] mt-0.5">
                {businessInfo.addressAr}
              </p>
              <p className="text-xs text-[#8C827A] font-latin mt-0.5">
                {businessInfo.addressEn}
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pr-6">
            <div className="w-10 h-10 rounded-2xl bg-[#F8F5F0] border border-[#E5DDD2] flex items-center justify-center shrink-0 text-[#B69771]">
              <Clock className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#8C827A] uppercase tracking-wider block">
                أوقات العمل
              </span>
              <p className="text-sm sm:text-base font-bold text-[#1F1D1B] mt-0.5">
                {businessInfo.workingHoursAr}
              </p>
              <p className="text-xs text-[#8C827A] font-latin mt-0.5">
                {businessInfo.workingHoursEn}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories Grid - Matches Screen 2 */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="text-base sm:text-lg font-extrabold text-[#1F1D1B]">
            Featured categories / التصنيفات
          </h2>
          <button
            onClick={onNavigateToMenu}
            className="text-xs font-bold text-[#B69771] hover:text-[#9C7C54] transition-colors flex items-center gap-1"
          >
            <span>عرض الكل</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { id: 'hot_coffee', nameEn: 'Hot Coffee', nameAr: 'القهوة الساخنة' },
            { id: 'cold_drinks', nameEn: 'Cold Drinks', nameAr: 'مشروبات باردة' },
            { id: 'matcha', nameEn: 'Matcha', nameAr: 'ماتشا' },
            { id: 'bakery', nameEn: 'Bakery', nameAr: 'الحلويات والمخبوزات' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group p-4 bg-white hover:bg-[#FDFBF7] border border-[#EAE5DE] hover:border-[#B69771] rounded-2xl text-center transition-all duration-200 shadow-xs hover:shadow-md"
            >
              <span className="block text-sm sm:text-base font-bold text-[#1F1D1B] group-hover:text-[#B69771] font-latin transition-colors">
                {cat.nameEn}
              </span>
              <span className="block text-xs text-[#8C827A] mt-0.5 font-medium">
                {cat.nameAr}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Building Facade Architectural Card - Matches Screen 2 & Image 3 */}
      <div className="relative overflow-hidden rounded-3xl bg-white border border-[#EAE5DE] shadow-sm">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-[#EAE5DE] overflow-hidden">
          <img
            src={storefrontImg}
            alt="Hope Cafe & Bakery Facade"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 sm:p-8 text-white">
            <span className="text-xs uppercase tracking-widest text-[#E8D9C5] font-semibold">
              الموقع والفرع الرئيسي
            </span>
            <h3 className="text-xl sm:text-2xl font-black mt-1">
              البصرة - الطويسة - مجاور الكحلة
            </h3>
            <p className="text-xs sm:text-sm text-[#F5F2ED] font-latin tracking-wider mt-1 uppercase">
              A NEW HOPE, WITH EVERY CUP
            </p>
          </div>
        </div>
      </div>

      {/* External Delivery Apps Quick Action Banner */}
      {businessInfo.externalDeliveryApps.length > 0 && (
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F6F3EE] border border-[#E5DDD2] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-start">
            <h4 className="text-sm font-bold text-[#1F1D1B]">
              تفضل الطلب عبر تطبيقات التوصيل؟
            </h4>
            <p className="text-xs text-[#7A7168] mt-0.5">
              متاحون أيضًا على تطبيقات التوصيل السريع في البصرة
            </p>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {businessInfo.externalDeliveryApps.map(app => (
              <a
                key={app.name}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-4 py-2 bg-white hover:bg-stone-50 border border-[#DCD3C7] rounded-xl text-xs font-bold text-[#1F1D1B] flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <span>{app.nameAr}</span>
                <span className="font-latin text-[11px] text-[#8C827A]">({app.name})</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
