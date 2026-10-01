import React, { useState, useEffect } from 'react';
import { Product, ProductOptionSize } from '../data/cafeData';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Check, ShoppingBag } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<ProductOptionSize | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      // Default to first size if available
      if (product.sizes && product.sizes.length > 0) {
        setSelectedSize(product.sizes[0]);
      } else {
        setSelectedSize(undefined);
      }
      setQuantity(1);
      setIsAdded(false);
    }
  }, [product]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const currentUnitPrice = selectedSize ? selectedSize.price : product.price;
  const currentTotalPrice = currentUnitPrice * quantity;

  const handleConfirmAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Backdrop tap to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in slide-in-from-bottom duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-stone-700 shadow-md backdrop-blur-md transition-all"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative w-full aspect-[4/3] bg-[#F5F2ED] shrink-0 overflow-hidden">
          <img
            src={product.image}
            alt={product.nameAr}
            className="w-full h-full object-cover"
          />
          {product.badge && (
            <span className="absolute bottom-3 right-3 px-3 py-1 text-xs font-bold bg-[#1F1D1B]/85 text-white backdrop-blur-md rounded-lg">
              {product.badge}
            </span>
          )}
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {/* Title & Price */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1F1D1B]">
                {product.nameAr}
              </h2>
              <p className="text-sm font-semibold text-[#8C827A] font-latin mt-0.5">
                {product.nameEn}
              </p>
            </div>
            <div className="text-left shrink-0">
              <span className="text-lg sm:text-xl font-extrabold text-[#B69771] font-latin tabular-nums">
                {currentUnitPrice.toLocaleString('en-US')}{' '}
                <span className="text-xs font-arabic font-normal text-[#1F1D1B]">د.ع</span>
              </span>
            </div>
          </div>

          {/* Description */}
          {product.descriptionAr && (
            <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#EAE5DE] text-sm text-[#4E4842] leading-relaxed">
              <p>{product.descriptionAr}</p>
              {product.descriptionEn && (
                <p className="text-xs text-[#8C827A] font-latin mt-1">
                  {product.descriptionEn}
                </p>
              )}
            </div>
          )}

          {/* Size Options (if available) */}
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#6B6258] mb-2">
                اختر الحجم (Size)
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {product.sizes.map(size => {
                  const isSelected = selectedSize?.name === size.name;
                  return (
                    <button
                      key={size.name}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-sm font-medium transition-all ${
                        isSelected
                          ? 'border-[#B69771] bg-[#B69771]/10 text-[#1F1D1B] ring-1 ring-[#B69771]'
                          : 'border-[#EAE5DE] hover:border-[#D4C8B8] bg-white text-[#575048]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full border border-[#B69771]" style={{ backgroundColor: isSelected ? '#B69771' : 'transparent' }} />
                        <span>{size.nameAr} ({size.name})</span>
                      </div>
                      <span className="font-latin font-bold text-xs text-[#1F1D1B]">
                        {size.price.toLocaleString('en-US')} د.ع
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity Stepper */}
          <div className="flex items-center justify-between pt-2 border-t border-[#EAE5DE]">
            <span className="text-sm font-bold text-[#1F1D1B]">الكمية</span>
            <div className="flex items-center gap-3 bg-[#F4EFEA] px-3 py-1.5 rounded-full border border-[#E0D7CB]">
              <button
                type="button"
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                disabled={quantity <= 1}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-stone-700 disabled:opacity-40 hover:bg-stone-50 transition-colors shadow-xs"
                aria-label="إنقاص الكمية"
              >
                <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
              <span className="text-sm font-bold w-6 text-center font-latin tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(prev => prev + 1)}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-stone-700 hover:bg-stone-50 transition-colors shadow-xs"
                aria-label="زيادة الكمية"
              >
                <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="p-4 sm:p-5 bg-[#FAF7F2] border-t border-[#EAE5DE]">
          <button
            type="button"
            onClick={handleConfirmAddToCart}
            disabled={isAdded}
            className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-between transition-all duration-200 active:scale-[0.98] ${
              isAdded
                ? 'bg-[#00BA77] text-white'
                : 'bg-[#1F1D1B] hover:bg-[#2F2C28] text-white shadow-lg shadow-black/10'
            }`}
          >
            <div className="flex items-center gap-2">
              {isAdded ? (
                <>
                  <Check className="w-5 h-5 stroke-[2.5]" />
                  <span>تمت الإضافة للسلة!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  <span>إضافة للطلب</span>
                </>
              )}
            </div>
            <span className="font-latin text-sm font-semibold tabular-nums">
              {currentTotalPrice.toLocaleString('en-US')} د.ع
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
