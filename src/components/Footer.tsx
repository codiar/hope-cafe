import React from 'react';
import { HopeLogo } from './HopeLogo';
import { businessInfo } from '../data/cafeData';
import { MapPin, Clock, Phone, Instagram, MessageCircle, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#191816] text-[#E0D7CB] border-t border-[#292622] pt-12 pb-24 md:pb-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & Slogan */}
          <div className="md:col-span-1 space-y-4">
            <HopeLogo variant="full" theme="gold" size="md" className="items-start" />
            <p className="text-xs text-[#A89E94] leading-relaxed pt-1">
              {businessInfo.sloganAr} — كافيه ومخبوزات وماتشا مختصة في البصرة، تجربة قهوة استثنائية مع كل فنجان.
            </p>
          </div>

          {/* Col 2: Location & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B69771]">
              العنوان والدوام
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C8BFB4]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B69771] shrink-0 mt-0.5" />
                <span>{businessInfo.addressAr}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#B69771] shrink-0 mt-0.5" />
                <span>{businessInfo.workingHoursAr}</span>
              </li>
              <li>
                <a
                  href={businessInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#B69771] hover:underline pt-1"
                >
                  <span>عرض الموقع على Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Delivery */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B69771]">
              الطلب والتوصيل
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${businessInfo.phone}`}
                className="flex items-center gap-2 text-[#C8BFB4] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B69771]" />
                <span className="font-latin">{businessInfo.phone}</span>
              </a>
              <a
                href={`https://wa.me/${businessInfo.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#C8BFB4] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>طلب مباشر عبر واتساب</span>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              {businessInfo.externalDeliveryApps.map(app => (
                <a
                  key={app.name}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-[#26231F] hover:bg-[#332F2A] border border-[#3A352F] text-[11px] text-[#E0D7CB] flex items-center gap-1 transition-colors"
                >
                  <span>{app.nameAr}</span>
                  <ExternalLink className="w-2.5 h-2.5 text-stone-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B69771]">
              تابعنا
            </h4>
            <p className="text-xs text-[#A89E94]">
              شاهد كواليس التحضير والفعاليات اليومية عبر حساباتنا
            </p>
            <a
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#26231F] hover:bg-[#332F2A] border border-[#3A352F] text-xs font-semibold text-white transition-colors"
            >
              <Instagram className="w-4 h-4 text-rose-400" />
              <span>Instagram: @hope_cafe.iq</span>
            </a>
          </div>
        </div>

        {/* Bottom Credits & Codiar Tech Attribution */}
        <div className="pt-8 border-t border-[#292622] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8177]">
          <p>© {new Date().getFullYear()} هوب كافيه - Hope cafe. جميع الحقوق محفوظة.</p>


          <div className="flex items-center gap-1.5">
            <Heart className="w-3 h-3 text-[#B69771]/60 inline" />
            <a
              href={businessInfo.developerCredit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B69771] hover:text-[#D5C2AB] transition-colors font-medium hover:underline"
              title="تم تطوير الموقع بواسطة كوديار تك"
            >
              {businessInfo.developerCredit.textAr}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
