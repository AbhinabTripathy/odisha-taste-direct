import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { getProduct } from "@/lib/products";

export function CartSheet() {
  const { isOpen, close, items, updateQty, remove, subtotal, checkoutOnWhatsApp } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/40 z-50" onClick={close}
          />
          <motion.aside
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 h-full w-full sm:w-[440px] bg-background z-50 flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="font-serif text-2xl">Your Basket</h3>
              <button onClick={close} className="p-2 rounded-full hover:bg-secondary" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
                <p className="text-muted-foreground">Your basket is waiting to be filled.</p>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.map((item) => {
                  const p = getProduct(item.slug);
                  if (!p) return null;
                  return (
                    <div key={`${item.slug}-${item.weight}`} className="flex gap-3 card-soft p-3">
                      <img src={p.image} alt={p.name} className="w-20 h-20 object-cover rounded-lg" />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-2">
                          <div>
                            <p className="font-medium text-sm">{p.name}</p>
                            <p className="text-xs text-muted-foreground">{item.weight}</p>
                          </div>
                          <button onClick={() => remove(item.slug, item.weight)} className="text-muted-foreground hover:text-primary">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2 border border-border rounded-full px-2 py-1">
                            <button onClick={() => updateQty(item.slug, item.weight, item.quantity - 1)} aria-label="Decrease">
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-sm w-5 text-center">{item.quantity}</span>
                            <button onClick={() => updateQty(item.slug, item.weight, item.quantity + 1)} aria-label="Increase">
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <span className="font-medium text-primary">₹{item.price * item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold text-lg">₹{subtotal}</span>
                </div>
                <button onClick={checkoutOnWhatsApp} className="btn-primary w-full">
                  Proceed to Order on WhatsApp
                </button>
                <p className="text-xs text-center text-muted-foreground">
                  You'll be redirected to WhatsApp to confirm your order with us.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
