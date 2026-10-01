import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HeroHome } from './components/HeroHome';
import { MenuView } from './components/MenuView';
import { CartView } from './components/CartView';
import { MoreView } from './components/MoreView';
import { ProductModal } from './components/ProductModal';
import { SplashModal } from './components/SplashModal';
import { Footer } from './components/Footer';
import { Product } from './data/cafeData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'menu' | 'cart' | 'more'>('home');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Splash screen state - show on initial session
  const [showSplash, setShowSplash] = useState<boolean>(() => {
    try {
      return !sessionStorage.getItem('hope_cafe_splash_dismissed');
    } catch {
      return true;
    }
  });

  const handleDismissSplash = () => {
    setShowSplash(false);
    try {
      sessionStorage.setItem('hope_cafe_splash_dismissed', 'true');
    } catch (e) {
      console.error(e);
    }
  };

  const handleSelectCategoryFromHome = (catId: string) => {
    setActiveCategory(catId);
    setCurrentTab('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#F8F6F2] text-[#1F1D1B] flex flex-col font-sans selection:bg-[#B69771]/20">
        
        {showSplash && <SplashModal onContinue={handleDismissSplash} />}

        
        <Header
          currentTab={currentTab}
          setCurrentTab={(tab) => {
            setCurrentTab(tab as any);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />

        
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          {currentTab === 'home' && (
            <HeroHome
              onSelectCategory={handleSelectCategoryFromHome}
              onNavigateToMenu={() => {
                setCurrentTab('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {currentTab === 'menu' && (
            <MenuView
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onOpenDetails={prod => setSelectedProduct(prod)}
            />
          )}

          {currentTab === 'cart' && (
            <CartView
              onBackToMenu={() => {
                setCurrentTab('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {currentTab === 'more' && <MoreView />}
        </main>

        
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />

        
        <Footer />

        
        <BottomNav
          currentTab={currentTab}
          setCurrentTab={(tab) => {
            setCurrentTab(tab as any);
          }}
        />
      </div>
    </CartProvider>
  );
}
