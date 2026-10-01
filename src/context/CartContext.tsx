import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ProductOptionSize, businessInfo } from '../data/cafeData';

export interface CartItem {
  id: string; // unique item key: `${productId}-${selectedSize?.name || 'def'}`
  product: Product;
  selectedSize?: ProductOptionSize;
  quantity: number;
  unitPrice: number;
}

export interface CustomerOrderInfo {
  name: string;
  phone: string;
  address: string;
  nearestLandmark: string;
  notes: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size?: ProductOptionSize, quantity?: number) => void;
  updateQuantity: (itemId: string, newQty: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  totalItemsCount: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  customerInfo: CustomerOrderInfo;
  setCustomerInfo: React.Dispatch<React.SetStateAction<CustomerOrderInfo>>;
  generateOrderId: () => string;
  createWhatsAppInvoiceUrl: (orderId: string) => { url: string; rawMessage: string };
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'hope_cafe_cart_v1';
const CUSTOMER_STORAGE_KEY = 'hope_cafe_customer_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [customerInfo, setCustomerInfo] = useState<CustomerOrderInfo>(() => {
    try {
      const saved = localStorage.getItem(CUSTOMER_STORAGE_KEY);
      return saved
        ? JSON.parse(saved)
        : { name: '', phone: '', address: '', nearestLandmark: '', notes: '' };
    } catch {
      return { name: '', phone: '', address: '', nearestLandmark: '', notes: '' };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(customerInfo));
    } catch (e) {
      console.error('Failed to save customerInfo to localStorage', e);
    }
  }, [customerInfo]);

  const addToCart = (product: Product, size?: ProductOptionSize, quantity = 1) => {
    const unitPrice = size ? size.price : product.price;
    const itemKey = `${product.id}-${size ? size.name : 'standard'}`;

    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.id === itemKey);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }
      return [
        ...prev,
        {
          id: itemKey,
          product,
          selectedSize: size,
          quantity,
          unitPrice
        }
      ];
    });
  };

  const updateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.id === itemId ? { ...item, quantity: newQty } : item))
    );
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);

  // Delivery fee: Free / pickup / 0 or standard
  const deliveryFee: number = 0;

  const total = subtotal + deliveryFee;

  // Generate unique order ID in format ORD-2026-XXXXX
  const generateOrderId = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `ORD-2026-${code}`;
  };

  const createWhatsAppInvoiceUrl = (orderId: string) => {
    const formattedTotal = total.toLocaleString('en-US');
    const formattedSubtotal = subtotal.toLocaleString('en-US');
    const formattedDelivery = deliveryFee === 0 ? 'مجاناً' : `${deliveryFee.toLocaleString('en-US')} د.ع`;

    let itemsText = '';
    cart.forEach(item => {
      const sizeTag = item.selectedSize ? ` (${item.selectedSize.nameAr})` : '';
      const itemSubtotal = (item.unitPrice * item.quantity).toLocaleString('en-US');
      itemsText += `▫️ ${item.product.nameAr}${sizeTag} × ${item.quantity}\nالسعر: ${itemSubtotal} د.ع\n\n`;
    });

    const rawMessage = `━━━━━━━━━━━━━━━━
طلب جديد من هوب كافيه - Hope cafe
رقم الطلب: ${orderId}
━━━━━━━━━━━━━━━━

👤 العميل:
${customerInfo.name || 'بدون اسم'}

📱 الهاتف:
${customerInfo.phone || 'غير محدد'}

📍 العنوان:
${customerInfo.address || 'استلام من الفرع أو لم يُحدد'}

🏛️ أقرب نقطة دالة:
${customerInfo.nearestLandmark || 'غير محدد'}

📋 الطلب:
${itemsText}━━━━━━━━━━━━━━━━
المجموع الفرعي: ${formattedSubtotal} د.ع
التوصيل: ${formattedDelivery}
المجموع الكلي: ${formattedTotal} د.ع
━━━━━━━━━━━━━━━━

💬 ملاحظات إضافية:
${customerInfo.notes ? customerInfo.notes : 'لا توجد ملاحظات'}

📍 فرع هوب كافيه: ${businessInfo.addressAr}`;

    const encodedText = encodeURIComponent(rawMessage);
    const url = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodedText}`;

    return { url, rawMessage };
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItemsCount,
        subtotal,
        deliveryFee,
        total,
        customerInfo,
        setCustomerInfo,
        generateOrderId,
        createWhatsAppInvoiceUrl
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
