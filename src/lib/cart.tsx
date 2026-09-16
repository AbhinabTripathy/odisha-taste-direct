import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { buildWhatsAppUrl, getProduct, WHATSAPP_NUMBER } from "./products";

export type CartItem = {
  slug: string;
  weight: string;
  price: number;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (item: CartItem) => void;
  remove: (slug: string, weight: string) => void;
  updateQty: (slug: string, weight: string, quantity: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  checkoutOnWhatsApp: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const add: CartContextValue["add"] = (item) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.slug === item.slug && i.weight === item.weight);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + item.quantity };
        return next;
      }
      return [...prev, item];
    });
    setIsOpen(true);
  };

  const remove: CartContextValue["remove"] = (slug, weight) =>
    setItems((prev) => prev.filter((i) => !(i.slug === slug && i.weight === weight)));

  const updateQty: CartContextValue["updateQty"] = (slug, weight, quantity) =>
    setItems((prev) =>
      prev
        .map((i) =>
          i.slug === slug && i.weight === weight ? { ...i, quantity: Math.max(0, quantity) } : i,
        )
        .filter((i) => i.quantity > 0),
    );

  const { count, subtotal } = useMemo(() => {
    let c = 0;
    let s = 0;
    for (const it of items) {
      c += it.quantity;
      s += it.quantity * it.price;
    }
    return { count: c, subtotal: s };
  }, [items]);

  const checkoutOnWhatsApp = () => {
    if (items.length === 0) {
      window.open(buildWhatsAppUrl("Hi Boitas, I'd like to know more about your products."), "_blank");
      return;
    }
    const lines = items.map((i) => {
      const name = getProduct(i.slug)?.name ?? i.slug;
      return `• ${name} (${i.weight}) × ${i.quantity} — ₹${i.price * i.quantity}`;
    });
    const message =
      `Hi Boitas,\n\nI would like to order:\n\n${lines.join("\n")}\n\nSubtotal: ₹${subtotal}\n\nPlease assist me with my order.`;
    window.open(buildWhatsAppUrl(message), "_blank");
  };

  const value: CartContextValue = {
    items,
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    add,
    remove,
    updateQty,
    clear: () => setItems([]),
    count,
    subtotal,
    checkoutOnWhatsApp,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
