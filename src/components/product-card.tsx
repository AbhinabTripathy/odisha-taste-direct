import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const startPrice = product.weights[0];
  const comingSoon = product.comingSoon;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="card-soft overflow-hidden flex flex-col group"
    >
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="block relative overflow-hidden bg-secondary/40"
        aria-disabled={comingSoon}
        onClick={(e) => {
          if (comingSoon) e.preventDefault();
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          className={`w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105 ${
            comingSoon ? "opacity-70 grayscale-[15%]" : ""
          }`}
        />
        {comingSoon && (
          <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest font-medium px-3 py-1.5 rounded-full shadow-md">
            Coming Soon
          </span>
        )}
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-accent font-medium">
              {product.category}
            </p>
            {comingSoon ? (
              <h3 className="font-serif text-xl mt-1">{product.name}</h3>
            ) : (
              <Link to="/products/$slug" params={{ slug: product.slug }}>
                <h3 className="font-serif text-xl mt-1 hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </Link>
            )}
          </div>
          <div className="text-right">
            {comingSoon ? (
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Soon</p>
            ) : (
              <>
                <p className="font-serif text-lg text-primary">₹{startPrice.price}</p>
                <p className="text-xs text-muted-foreground">{startPrice.label}</p>
              </>
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">
          {product.shortDescription}
        </p>
        <div className="flex gap-2 mt-5">
          {comingSoon ? (
            <button
              disabled
              className="btn-outline flex-1 !py-2.5 !text-sm opacity-60 cursor-not-allowed"
            >
              Notify Me
            </button>
          ) : (
            <>
              <button
                onClick={() =>
                  add({ slug: product.slug, weight: startPrice.label, price: startPrice.price, quantity: 1 })
                }
                className="btn-primary flex-1 !py-2.5 !text-sm"
              >
                Order Now
              </button>
              <Link
                to="/products/$slug"
                params={{ slug: product.slug }}
                className="btn-outline !py-2.5 !text-sm !px-4"
              >
                Details
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
