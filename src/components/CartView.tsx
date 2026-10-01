import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { businessInfo } from '../data/cafeData';
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Copy,
  Check,
  Phone,
  User,
  MapPin,
  Building,
  FileText
} from 'lucide-react';

interface CartViewProps {
  onBackToMenu: () => void;
}

export const CartView: React.FC<CartViewProps> = ({ onBackToMenu }) => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    deliveryFee,
    total,
    customerInfo,
    setCustomerInfo,
    generateOrderId,
    createWhatsAppInvoiceUrl
  } = useCart();

  const [copiedInvoice, setCopiedInvoice] = useState(false);
  const [formErrors, setFormErrors] = useState<{ name?: string; phone?: string }>({});

  // Maintain a stable unique order ID for this checkout session
  const orderId = useMemo(() => generateOrderId(), [cart.length]);

  const { url: whatsappUrl, rawMessage } = useMemo(
    () => createWhatsAppInvoiceUrl(orderId),
    [orderId, cart, customerInfo, subtotal, total]
  );

  const handleCopyInvoice = () => {
    navigator.clipboard.writeText(rawMessage);
    setCopiedInvoice(true);
    setTimeout(() => setCopiedInvoice(false), 2000);
  };

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    const errors: { name?: string; phone?: string } = {};
    if (!customerInfo.name.trim()) {
      errors.name = 'يرجى كتابة الاسم لتسجيل الفاتورة';
    }
    if (!customerInfo.phone.trim()) {
      errors.phone = 'يرجى كتابة رقم الهاتف للتواصل';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (cart.length === 0) {
    return (
      <div className="py-16 px-4 text-center max-w-md mx-auto space-y-4 animate-in fade-in duration-200">
        <div className="w-20 h-20 mx-auto rounded-full bg-[#F4EFEA] border border-[#E0D7CB] flex items-center justify-center text-[#B69771]">
          <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
        </div>
        <h2 className="text-xl font-bold text-[#1F1D1B]">السلة فارغة حالياً</h2>
        <p className="text-sm text-[#7D736A] leading-relaxed">
          لم تقم بإضافة أي مشروب أو حلى بعد. استكشف قائمة هوب كافيه الفاخرة واختر ما يسعدك اليوم.
        </p>
        <button
          onClick={onBackToMenu}
          className="mt-2 px-6 py-3 rounded-full bg-[#1F1D1B] hover:bg-[#332F2A] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
        >
          تصفح المنيو الآن
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12 animate-in fade-in duration-200">
      
      <div className="flex items-center justify-between pb-4 border-b border-[#EAE5DE]">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToMenu}
            className="p-2 rounded-full hover:bg-white border border-[#EAE5DE] text-[#1F1D1B] transition-colors"
            aria-label="الرجوع للمنيو"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-[#1F1D1B]">
              سلة الطلب والفاتورة
            </h1>
            <p className="text-xs text-[#8C827A] font-latin font-medium">
              Order Summary & WhatsApp Invoice
            </p>
          </div>
        </div>

        <button
          onClick={clearCart}
          className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1 font-semibold p-2 rounded-lg hover:bg-red-50 transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>تفريغ السلة</span>
        </button>
      </div>

      
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#EAE5DE] shadow-xs space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-[#8C827A]">
          المشروبات والطلبات المختارة ({cart.length})
        </h2>

        <div className="divide-y divide-[#F0EBE3]">
          {cart.map(item => {
            const itemTotal = item.unitPrice * item.quantity;
            return (
              <div
                key={item.id}
                className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-3"
              >
                {/* Product thumbnail & Info */}
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={item.product.image}
                    alt={item.product.nameAr}
                    className="w-12 h-12 rounded-xl object-cover bg-[#F5F2ED] border border-[#EAE5DE] shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#B69771] font-latin tabular-nums">
                        {item.quantity}x
                      </span>
                      <h4 className="font-bold text-sm text-[#1F1D1B] truncate">
                        {item.product.nameAr}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#8C827A] mt-0.5">
                      {item.selectedSize && (
                        <span className="font-medium text-[#B69771]">
                          الحجم: {item.selectedSize.nameAr} ({item.selectedSize.name})
                        </span>
                      )}
                      <span className="font-latin tabular-nums">
                        {item.unitPrice.toLocaleString('en-US')} د.ع
                      </span>
                    </div>
                  </div>
                </div>

                {/* Steppers & Line Total */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex items-center bg-[#F4EFEA] rounded-full border border-[#E0D7CB] p-0.5">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-stone-700 hover:bg-stone-50 transition-colors shadow-xs"
                      aria-label="تقليل"
                    >
                      <Minus className="w-3 h-3 stroke-[2.5]" />
                    </button>
                    <span className="w-6 text-center text-xs font-bold font-latin tabular-nums">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-stone-700 hover:bg-stone-50 transition-colors shadow-xs"
                      aria-label="زيادة"
                    >
                      <Plus className="w-3 h-3 stroke-[2.5]" />
                    </button>
                  </div>

                  <span className="font-latin font-bold text-sm sm:text-base text-[#1F1D1B] w-20 text-left tabular-nums">
                    {itemTotal.toLocaleString('en-US')}{' '}
                    <span className="text-[10px] font-arabic font-normal text-[#8C827A]">د.ع</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Subtotal / Total Summary - Matches Screen 4 */}
        <div className="pt-4 border-t border-[#EAE5DE] space-y-2 text-sm">
          <div className="flex justify-between text-[#6E655C]">
            <span>المجموع الفرعي (Subtotal)</span>
            <span className="font-latin font-bold tabular-nums">
              {subtotal.toLocaleString('en-US')} د.ع
            </span>
          </div>
          <div className="flex justify-between text-[#6E655C]">
            <span>رسوم التوصيل (Delivery Fee)</span>
            <span className="font-semibold text-emerald-600">
              {deliveryFee === 0 ? 'مجاناً' : `${deliveryFee.toLocaleString('en-US')} د.ع`}
            </span>
          </div>
          <div className="flex justify-between text-base sm:text-lg font-black text-[#1F1D1B] pt-2 border-t border-[#EAE5DE]">
            <span>المجموع الكلي (TOTAL)</span>
            <span className="font-latin text-[#B69771] tabular-nums">
              {total.toLocaleString('en-US')} د.ع
            </span>
          </div>
        </div>
      </div>

      {/* Customer Information Form - Source of truth Section 17 & 18 */}
      <form onSubmit={handleSendViaWhatsApp} className="bg-white rounded-3xl p-5 sm:p-6 border border-[#EAE5DE] shadow-xs space-y-4">
        <div>
          <h3 className="text-base font-bold text-[#1F1D1B]">بيانات العميل والتوصيل</h3>
          <p className="text-xs text-[#8C827A] mt-0.5">
            تُرفق تلقائياً مع الفاتورة عند الإرسال عبر WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Name */}
          <div>
            <label className="block text-xs font-bold text-[#5A524A] mb-1">
              اسم العميل <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute right-3 top-3 w-4 h-4 text-stone-400" />
              <input
                type="text"
                required
                value={customerInfo.name}
                onChange={e => {
                  setCustomerInfo(prev => ({ ...prev, name: e.target.value }));
                  if (formErrors.name) setFormErrors(prev => ({ ...prev, name: undefined }));
                }}
                placeholder="مثال: علي محمد"
                className={`w-full pr-9 pl-3 py-2.5 bg-[#FAF7F2] border rounded-xl text-sm text-[#1F1D1B] focus:outline-none focus:border-[#B69771] ${
                  formErrors.name ? 'border-red-400' : 'border-[#E0D7CB]'
                }`}
              />
            </div>
            {formErrors.name && (
              <p className="text-[11px] text-red-500 mt-1">{formErrors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-bold text-[#5A524A] mb-1">
              رقم الهاتف (WhatsApp) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute right-3 top-3 w-4 h-4 text-stone-400" />
              <input
                type="tel"
                required
                value={customerInfo.phone}
                onChange={e => {
                  setCustomerInfo(prev => ({ ...prev, phone: e.target.value }));
                  if (formErrors.phone) setFormErrors(prev => ({ ...prev, phone: undefined }));
                }}
                placeholder="مثال: 07700000000"
                className={`w-full pr-9 pl-3 py-2.5 bg-[#FAF7F2] border rounded-xl text-sm text-[#1F1D1B] font-latin focus:outline-none focus:border-[#B69771] ${
                  formErrors.phone ? 'border-red-400' : 'border-[#E0D7CB]'
                }`}
              />
            </div>
            {formErrors.phone && (
              <p className="text-[11px] text-red-500 mt-1">{formErrors.phone}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs font-bold text-[#5A524A] mb-1">
              العنوان / المنطقة
            </label>
            <div className="relative">
              <MapPin className="absolute right-3 top-3 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={customerInfo.address}
                onChange={e =>
                  setCustomerInfo(prev => ({ ...prev, address: e.target.value }))
                }
                placeholder="مثال: البصرة - الجزائر أو استلام من الكافيه"
                className="w-full pr-9 pl-3 py-2.5 bg-[#FAF7F2] border border-[#E0D7CB] rounded-xl text-sm text-[#1F1D1B] focus:outline-none focus:border-[#B69771]"
              />
            </div>
          </div>

          {/* Nearest Landmark */}
          <div>
            <label className="block text-xs font-bold text-[#5A524A] mb-1">
              أقرب نقطة دالة
            </label>
            <div className="relative">
              <Building className="absolute right-3 top-3 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={customerInfo.nearestLandmark}
                onChange={e =>
                  setCustomerInfo(prev => ({ ...prev, nearestLandmark: e.target.value }))
                }
                placeholder="مثال: قرب فندق مناوي باشا / مدرسة..."
                className="w-full pr-9 pl-3 py-2.5 bg-[#FAF7F2] border border-[#E0D7CB] rounded-xl text-sm text-[#1F1D1B] focus:outline-none focus:border-[#B69771]"
              />
            </div>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-bold text-[#5A524A] mb-1">
            ملاحظات خاصة بالطلب
          </label>
          <div className="relative">
            <FileText className="absolute right-3 top-3 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={customerInfo.notes}
              onChange={e =>
                setCustomerInfo(prev => ({ ...prev, notes: e.target.value }))
              }
              placeholder="مثال: سكر خفيف / ثلج زيادة / بدون كريمة..."
              className="w-full pr-9 pl-3 py-2.5 bg-[#FAF7F2] border border-[#E0D7CB] rounded-xl text-sm text-[#1F1D1B] focus:outline-none focus:border-[#B69771]"
            />
          </div>
        </div>

        {/* Structured WhatsApp Invoice Preview Box - Exactly as Screen 4 */}
        <div className="mt-4 pt-4 border-t border-[#EAE5DE]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-[#1F1D1B] font-latin">
                {orderId}
              </span>
              <span className="text-[11px] text-[#8C827A]">
                معاينة الفاتورة المنظمة
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopyInvoice}
              className="text-xs font-semibold text-[#B69771] hover:text-[#9C7C54] flex items-center gap-1 p-1"
            >
              {copiedInvoice ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">تم النسخ</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>نسخ الفاتورة</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-3.5 bg-[#FAF7F2] border border-[#E0D7CB] rounded-2xl text-[11px] sm:text-xs text-[#3D3731] font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap select-all">
            {rawMessage}
          </pre>
        </div>

        {/* Big WhatsApp CTA Button - Matches Screen 4 */}
        <button
          type="submit"
          className="w-full py-4 px-6 rounded-2xl bg-[#59422F] hover:bg-[#483525] text-white font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span>إرسال الطلب عبر WhatsApp</span>
        </button>
        <p className="text-[11px] text-center text-[#8C827A]">
          سيتم فتح تطبيق واتساب مباشرة مع تفاصيل فاتورة الطلب كاملة
        </p>
      </form>
    </div>
  );
};
