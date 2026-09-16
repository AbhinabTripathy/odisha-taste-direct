import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Our Products — Boitas" },
      { name: "description", content: "Explore the full Boitas collection of handcrafted Odia sweets and savouries — Khaja, Arisa, Moa Bites, Chuda Mixture and more." },
      { property: "og:title", content: "Our Products — Boitas" },
      { property: "og:description", content: "Handcrafted Odia sweets and savouries. Layers of joy in every bite." },
    ],
  }),
  component: ProductsPage,
});

const filters = ["All", "Sweets", "Savouries"] as const;

function ProductsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <section className="pt-36 pb-12 bg-secondary/40">
        <div className="container-x text-center">
          <p className="uppercase tracking-widest text-xs text-accent">The Collection</p>
          <h1 className="font-serif text-5xl md:text-6xl text-primary mt-3">
            A tribute to Odia flavours
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Each product is small-batch, handcrafted and rooted in the food traditions of Odisha.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                  filter === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-foreground border-border hover:border-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visible.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
