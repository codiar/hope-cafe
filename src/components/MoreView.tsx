import React, { useState } from 'react';
import { HopeLogo } from './HopeLogo';
import { businessInfo } from '../data/cafeData';
import {
  MapPin,
  Clock,
  Phone,
  Instagram,
  ExternalLink,
  Navigation,
  MessageCircle,
  ShoppingBag,
  Maximize2,
  X,
  Compass
} from 'lucide-react';

export const MoreView: React.FC = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  // Embedded map query for Hope Cafe in Al-Tuwaisa, Basra
  const embedMapUrl = `https://maps.google.com/maps?q=30.5081,47.8189+(Hope%20Cafe%20-%20%D9%87%D9%88%D8%A8%20%D9%83%D8%A7%D9%81%D9%8A%D9%87)&z=16&hl=ar&output=embed`;

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Dark Luxury Brand Card - Matches Screen 5 */}
      <div className="rounded-3xl bg-[#1C1A18] text-[#F5F2ED] p-8 sm:p-10 border border-[#2E2B27] shadow-xl text-center flex flex-col items-center space-y-6">
        {/* Hope Logo */}
        <div className="py-2">
          <HopeLogo variant="full" theme="gold" size="lg" />
        </div>

        <p className="text-sm sm:text-base text-[#D5C2AB] font-medium max-w-sm mx-auto">
          {businessInfo.sloganAr}
        </p>

        {/* Address & Hours - Matches Screen 5 layout */}
        <div className="w-full space-y-4 pt-4 border-t border-[#332F2A]">
          <div className="flex flex-col items-center gap-1.5 text-center">
            <div className="flex items-center gap-2 text-[#B69771]">
              <MapPin className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider font-latin">
                Location
              </span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white">
              {businessInfo.addressAr}
            </p>
            <p className="text-xs text-[#A89E94] font-latin">
              {businessInfo.addressEn}
            </p>
          </div>

          <div className="flex flex-col items-center gap-1.5 text-center pt-2">
            <div className="flex items-center gap-2 text-[#B69771]">
              <Clock className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider font-latin">
                Working Hours
              </span>
            </div>
            <p className="text-sm font-bold text-white">
              {businessInfo.workingHoursAr}
            </p>
            <p className="text-xs text-[#A89E94] font-latin">
              {businessInfo.workingHoursEn}
            </p>
          </div>
        </div>

        {/* Quick Direct Actions */}
        <div className="grid grid-cols-2 gap-3 w-full pt-2">
          <button
            type="button"
            onClick={() => setIsMapModalOpen(true)}
            className="p-3.5 rounded-2xl bg-[#2A2723] hover:bg-[#38342F] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border border-[#3E3A33] transition-all cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#B69771]" />
            <span>عرض الخريطة</span>
          </button>

          <a
            href={`tel:${businessInfo.phone}`}
            className="p-3.5 rounded-2xl bg-[#2A2723] hover:bg-[#38342F] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border border-[#3E3A33] transition-all"
          >
            <Phone className="w-4 h-4 text-[#B69771]" />
            <span className="font-latin">{businessInfo.phone}</span>
          </a>
        </div>
      </div>

      {/* External Delivery Apps (Talabaty & Toters) */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#EAE5DE] shadow-xs space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C827A]">
          الطلب عبر تطبيقات التوصيل الخارجية
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {businessInfo.externalDeliveryApps.map(app => (
            <a
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl border border-[#EAE5DE] hover:border-[#B69771] bg-[#FAF7F2] hover:bg-white flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{ backgroundColor: app.color }}
                >
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1F1D1B] group-hover:text-[#B69771] transition-colors">
                    {app.nameAr}
                  </h4>
                  <p className="text-xs text-[#8C827A] font-latin">
                    {app.name} Delivery
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#B69771] transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Social & Contact */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#EAE5DE] shadow-xs space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C827A]">
          حسابات التواصل الرسمية
        </h3>
        <div className="space-y-2.5">
          <a
            href={businessInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl border border-[#EAE5DE] hover:border-[#D4C8B8] hover:bg-[#FAF7F2] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-[#1F1D1B] block">
                  انستغرام هوب كافيه
                </span>
                <span className="text-xs text-[#8C827A] font-latin font-medium">
                  @hope_cafe.iq
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#1F1D1B]" />
          </a>

          <a
            href={`https://wa.me/${businessInfo.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl border border-[#EAE5DE] hover:border-[#D4C8B8] hover:bg-[#FAF7F2] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-[#1F1D1B] block">
                  محادثة مباشرة عبر واتساب
                </span>
                <span className="text-xs text-[#8C827A] font-latin font-medium">
                  +{businessInfo.whatsappNumber}
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#1F1D1B]" />
          </a>
        </div>
      </div>

      {/* Interactive Map Preview Card - Placed right above CODIAR TECH Credit */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#EAE5DE] shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#B69771]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C827A]">
              خريطة الموقع التفاعلية
            </h3>
          </div>
          <button
            onClick={() => setIsMapModalOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B69771] hover:text-[#9C7C54] transition-colors cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>تكبير الخريطة في واجهة منبثقة</span>
          </button>
        </div>

        {/* Interactive Map Container */}
        <div
          onClick={() => setIsMapModalOpen(true)}
          className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#E5DDD2] cursor-pointer group bg-[#F5F2ED]"
        >
          <iframe
            src={embedMapUrl}
            title="موقع هوب كافيه على الخريطة"
            className="w-full h-full border-0 pointer-events-none group-hover:opacity-90 transition-opacity"
            loading="lazy"
          />
          {/* Overlay CTA */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div className="px-4 py-2.5 rounded-full bg-white/95 text-[#1F1D1B] text-xs font-bold shadow-md backdrop-blur-md flex items-center gap-2 group-hover:scale-105 transition-transform">
              <Navigation className="w-3.5 h-3.5 text-[#B69771]" />
              <span>انقر لتكبير واستعراض الخريطة التفاعلية</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-[#8C827A] pt-1">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#B69771]" />
            <span>{businessInfo.addressAr}</span>
          </span>
          <a
            href={businessInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B69771] hover:underline font-semibold flex items-center gap-1"
          >
            <span>فتح عبر تطبيق الخرائط</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Interactive Map Popup Modal (الواجهة المنبثقة) */}
      {isMapModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={() => setIsMapModalOpen(false)} />

          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200 border border-[#EAE5DE]">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#EAE5DE] flex items-center justify-between bg-[#FAF7F2]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#B69771]/15 text-[#B69771] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg text-[#1F1D1B]">
                    موقع هوب كافيه — Hope Cafe
                  </h3>
                  <p className="text-xs text-[#8C827A] mt-0.5">
                    {businessInfo.addressAr}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsMapModalOpen(false)}
                className="p-2 rounded-full hover:bg-[#EFE9DF] text-stone-700 transition-colors"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Interactive Embedded Google Map Iframe */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#EAE5DE]">
              <iframe
                src={embedMapUrl}
                title="خريطة هوب كافيه التفاعلية"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 sm:p-5 bg-white border-t border-[#EAE5DE] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-[#6E655C] w-full sm:w-auto">
                <Clock className="w-4 h-4 text-[#B69771] shrink-0" />
                <span>{businessInfo.workingHoursAr}</span>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-[#E0D7CB] hover:bg-[#FAF7F2] text-xs font-bold text-[#1F1D1B] flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B69771]" />
                  <span>اتصال بالفرع</span>
                </a>
                <a
                  href={businessInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#1F1D1B] hover:bg-[#332F2A] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#B69771]" />
                  <span>الاتجاهات على Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CODIAR TECH Credit per Rule 23 */}
      <div className="pt-4 text-center">
        <a
          href={businessInfo.developerCredit.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-[#8C827A] hover:text-[#B69771] transition-colors"
        >
          <span>{businessInfo.developerCredit.textAr}</span>
          <span className="font-latin font-bold">({businessInfo.developerCredit.companyName})</span>
        </a>
      </div>
    </div>
  );
};

