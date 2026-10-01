import React, { useMemo } from 'react';
import { products, categories, Product } from '../data/cafeData';
import { ProductCard } from './ProductCard';
import { Search, Sparkles, FilterX } from 'lucide-react';

interface MenuViewProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenDetails: (product: Product) => void;
}

export const MenuView: React.FC<MenuViewProps> = ({
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
  onOpenDetails
}) => {
  // Filter products by category and search
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category check
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;

      // Search check
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        product.nameAr.toLowerCase().includes(query) ||
        product.nameEn.toLowerCase().includes(query) ||
        (product.descriptionAr && product.descriptionAr.toLowerCase().includes(query)) ||
        (product.descriptionEn && product.descriptionEn.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Category Horizontal Filter Bar - Exact match with Screen 3 */}
      <div className="sticky top-16 sm:top-20 z-30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 bg-[#F8F6F2]/95 backdrop-blur-md border-b border-[#EAE5DE]">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {categories.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                }}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 shrink-0 ${
                  isActive
                    ? 'bg-[#1F1D1B] text-white shadow-sm ring-1 ring-[#1F1D1B]'
                    : 'bg-white hover:bg-[#F2ECE3] text-[#5C544C] border border-[#E5DDD2]'
                }`}
              >
                <span>{cat.nameAr}</span>
                <span className="font-latin text-[11px] font-medium opacity-75 mr-1.5">
                  ({cat.nameEn})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu Header Status & Search Feedback */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-[#1F1D1B] flex items-center gap-2">
            <span>
              {categories.find(c => c.id === activeCategory)?.nameAr || 'قائمة المنيو'}
            </span>
            <span className="text-xs font-latin font-bold text-[#8C827A] px-2 py-0.5 bg-[#FAF7F2] border border-[#EAE5DE] rounded-full tabular-nums">
              {filteredProducts.length} صنف
            </span>
          </h2>
          <p className="text-xs text-[#8C827A] font-latin mt-0.5">
            {categories.find(c => c.id === activeCategory)?.nameEn || 'All Menu Items'}
          </p>
        </div>

        {searchQuery && (
          <div className="flex items-center gap-2 bg-[#F3EDE3] px-3 py-1.5 rounded-full text-xs text-[#524B43]">
            <Search className="w-3.5 h-3.5 text-[#B69771]" />
            <span>نتائج البحث عن: "{searchQuery}"</span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#B69771] hover:text-[#9C7C54] font-bold text-xs mr-1"
            >
              إلغاء
            </button>
          </div>
        )}
      </div>

      
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-16 text-center bg-white rounded-3xl border border-[#EAE5DE] p-8 max-w-md mx-auto space-y-4">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#FAF7F2] border border-[#E0D7CB] flex items-center justify-center text-[#B69771]">
            <FilterX className="w-7 h-7 stroke-[1.8]" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#1F1D1B]">
            لا توجد أصناف تطابق بحثك
          </h3>
          <p className="text-xs sm:text-sm text-[#7D736A] leading-relaxed">
            لم نتمكن من العثور على أي منتج يطابق عبارة البحث "{searchQuery}". جرب البحث بكلمة أخرى أو اختر تصنيفاً آخر.
          </p>
          <div className="flex justify-center gap-2 pt-2">
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-[#1F1D1B] hover:bg-[#332F2A] text-white text-xs font-bold transition-all shadow-xs"
            >
              عرض كافة الأصناف
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
