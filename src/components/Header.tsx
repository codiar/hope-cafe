import React from 'react';
import { HopeLogo } from './HopeLogo';
import { useCart } from '../context/CartContext';
import { Search, ShoppingBag, MapPin, Clock } from 'lucide-react';
import { businessInfo } from '../data/cafeData';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  searchQuery,
  setSearchQuery,
  isSearchOpen,
  setIsSearchOpen,
}) => {
  const { totalItemsCount, total } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#EAE5DE] transition-colors duration-200">
      {/* Top Banner on Desktop */}
      <div className="hidden lg:flex items-center justify-between px-8 py-1.5 bg-[#1F1D1B] text-[#E7DFD5] text-xs">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#B69771]" />
            <span>{businessInfo.workingHoursAr}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#B69771]" />
            <span>{businessInfo.addressAr}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={businessInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B69771] transition-colors"
          >
            Instagram: @hope_cafe.iq
          </a>
          <span className="text-stone-600">|</span>
          <a
            href={`tel:${businessInfo.phone}`}
            className="hover:text-[#B69771] font-latin transition-colors"
          >
            {businessInfo.phone}
          </a>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Zone */}
        <button
          onClick={() => setCurrentTab('home')}
          className="flex items-center gap-2 group text-start focus:outline-none"
          aria-label="Hope Cafe Home"
        >
          <HopeLogo variant="header" size="sm" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#5A544E]">
          <button
            onClick={() => setCurrentTab('home')}
            className={`transition-colors py-1 relative ${
              currentTab === 'home'
                ? 'text-[#1F1D1B] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#B69771]'
                : 'hover:text-[#1F1D1B]'
            }`}
          >
            الرئيسية
          </button>
          <button
            onClick={() => setCurrentTab('menu')}
            className={`transition-colors py-1 relative ${
              currentTab === 'menu'
                ? 'text-[#1F1D1B] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#B69771]'
                : 'hover:text-[#1F1D1B]'
            }`}
          >
            المنيو
          </button>
          <button
            onClick={() => setCurrentTab('more')}
            className={`transition-colors py-1 relative ${
              currentTab === 'more'
                ? 'text-[#1F1D1B] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#B69771]'
                : 'hover:text-[#1F1D1B]'
            }`}
          >
            الموقع والتواصل
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Trigger Button */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={`p-2.5 rounded-full transition-colors ${
              isSearchOpen
                ? 'bg-[#B69771] text-white'
                : 'text-[#1F1D1B] hover:bg-[#EFE9DF]'
            }`}
            aria-label="البحث في القائمة"
            title="البحث في القائمة"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Cart Trigger Button */}
          <button
            onClick={() => setCurrentTab('cart')}
            className={`relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border transition-all ${
              currentTab === 'cart'
                ? 'bg-[#1F1D1B] text-white border-[#1F1D1B]'
                : 'bg-white hover:bg-[#F4EFEA] text-[#1F1D1B] border-[#EAE5DE]'
            }`}
            aria-label="سلة المشتريات"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItemsCount > 0 && (
              <span className="flex items-center justify-center min-w-5 h-5 px-1 text-[11px] font-bold text-white bg-[#B69771] rounded-full font-latin">
                {totalItemsCount}
              </span>
            )}
            {total > 0 && (
              <span className="hidden sm:inline-block text-xs font-semibold font-latin">
                {total.toLocaleString('en-US')} د.ع
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Expandable Search Input Row */}
      {isSearchOpen && (
        <div className="bg-[#FAF7F2] border-t border-[#EAE5DE] px-4 py-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="max-w-2xl mx-auto relative flex items-center">
            <Search className="absolute right-3.5 w-4 h-4 text-stone-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value);
                if (currentTab !== 'menu') {
                  setCurrentTab('menu');
                }
              }}
              placeholder="ابحث عن مشروب، ماتشا، قهوة مفلترة، حلى..."
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#E0D7CB] rounded-full text-sm text-[#1F1D1B] placeholder:text-stone-400 focus:outline-none focus:border-[#B69771] focus:ring-1 focus:ring-[#B69771]"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-3.5 text-xs text-stone-500 hover:text-stone-800"
              >
                مسح
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
