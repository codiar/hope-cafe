import React from 'react';
import { Home, UtensilsCrossed, ShoppingBag, MoreHorizontal } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface BottomNavProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, setCurrentTab }) => {
  const { totalItemsCount } = useCart();

  const navItems = [
    { id: 'home', labelAr: 'الرئيسية', icon: Home },
    { id: 'menu', labelAr: 'المنيو', icon: UtensilsCrossed },
    { id: 'cart', labelAr: 'السلة', icon: ShoppingBag, badge: totalItemsCount },
    { id: 'more', labelAr: 'المزيد', icon: MoreHorizontal }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-lg border-t border-[#EAE5DE] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-4 h-16 items-center px-2">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setCurrentTab(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`relative flex flex-col items-center justify-center h-full transition-colors duration-150 ${
                isActive ? 'text-[#1F1D1B]' : 'text-[#8C827A] hover:text-[#4A4540]'
              }`}
              aria-label={item.labelAr}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform duration-150 ${
                    isActive ? 'scale-110 stroke-[2.2]' : 'stroke-[1.8]'
                  }`}
                />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 min-w-4 h-4 px-1 flex items-center justify-center text-[10px] font-bold text-white bg-[#B69771] rounded-full font-latin shadow-sm animate-in zoom-in-50 duration-150">
                    {item.badge}
                  </span>
                )}
              </div>
              <span
                className={`text-[11px] mt-1 transition-all ${
                  isActive ? 'font-bold text-[#1F1D1B]' : 'font-medium text-[#8C827A]'
                }`}
              >
                {item.labelAr}
              </span>
              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 bg-[#B69771] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
