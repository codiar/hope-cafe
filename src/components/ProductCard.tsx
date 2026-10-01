import React, { useState } from 'react';
import { Product } from '../data/cafeData';
import { useCart } from '../context/CartContext';
import { Plus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    // If product has size variants, open modal for explicit selection
    if (product.sizes && product.sizes.length > 1) {
      onOpenDetails(product);
      return;
    }

    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div
      onClick={() => onOpenDetails(product)}
      className="group flex flex-col bg-white rounded-2xl border border-[#EAE5DE] overflow-hidden hover:border-[#D4C8B8] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-200 cursor-pointer"
    >
      {/* Product Image Container */}
      <div className="relative aspect-square w-full bg-[#F5F2ED] overflow-hidden">
        <img
          src={product.image}
          alt={product.nameAr}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {product.badge && (
          <span className="absolute top-2.5 right-2.5 px-2 py-0.5 text-[11px] font-semibold bg-[#1F1D1B]/80 text-[#FAF7F2] backdrop-blur-md rounded-md">
            {product.badge}
          </span>
        )}
      </div>

      {/* Info & Purchase Area */}
      <div className="flex flex-col flex-1 p-3.5 sm:p-4 justify-between">
        <div>
          <h3 className="font-bold text-sm sm:text-base text-[#1F1D1B] leading-snug line-clamp-1">
            {product.nameAr}
          </h3>
          <p className="text-xs text-[#82786F] font-latin font-medium mt-0.5 line-clamp-1">
            {product.nameEn}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          {/* Price display with Iraqi Dinar */}
          <div className="flex flex-col">
            <span className="text-[11px] text-[#8C827A]">السعر</span>
            <span className="text-sm sm:text-base font-bold text-[#1F1D1B] font-latin tabular-nums">
              {product.price.toLocaleString('en-US')}{' '}
              <span className="text-xs font-arabic font-normal text-[#6E675F]">د.ع</span>
            </span>
          </div>

          {/* Add / إضافة Button */}
          <button
            onClick={handleAddClick}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center gap-1.5 active:scale-95 ${
              justAdded
                ? 'bg-[#00BA77] text-white border border-[#00BA77]'
                : 'bg-[#F8F6F2] hover:bg-[#1F1D1B] text-[#1F1D1B] hover:text-white border border-[#E0D7CB]'
            }`}
            aria-label={`إضافة ${product.nameAr} إلى السلة`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>تم</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>{product.sizes && product.sizes.length > 1 ? 'خيارات' : 'Add'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
