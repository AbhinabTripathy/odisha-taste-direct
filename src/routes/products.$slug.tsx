import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, Minus, Plus, ShoppingBag, Check } from "lucide-react";
import { getProduct, products, buildWhatsAppUrl } from "@/lib/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product } as const;
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Product — Boitas" }] };
    return {
      meta: [
        { title: `${p.name} — Boitas` },
        { name: "description", content: p.shortDescription },
        { property: "og:title", content: `${p.name} — Boitas` },
        { property: "og:description", content: p.shortDescription },
        { property: "og:image", content: p.image },
        { property: "og:type", content: "product" },
        { property: "twitter:image", content: p.image },
      ],
      links: [{ rel: "canonical", href: `/products/${p.slug}` }],
    };
  },
  component: ProductDetail,
  notFoundComponent: () => (
    <div className="min-h-screen pt-40 text-center container-x">
      <h1 className="font-serif text-4xl text-primary">Product not found</h1>
      <Link to="/products" className="btn-primary mt-6 inline-flex">Back to products</Link>
    </div>
  ),
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [weightIdx, setWeightIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const weight = product.weights[weightIdx];

  const handleAdd = () => {
    add({ slug: product.slug, weight: weight.label, price: weight.price, quantity: qty });
  };

  const handleBuyNow = () => {
    const msg = `Hi Boitas,\n\nI would like to order:\n\n• ${product.name} (${weight.label}) × ${qty} — ₹${weight.price * qty}\n\nPlease assist me with my order.`;
    window.open(buildWhatsAppUrl(msg), "_blank");
  };

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container-x">
          <Link to="/products" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1 mb-8">
            <ArrowLeft className="w-4 h-4" /> All products
          </Link>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary rounded-[2rem] rotate-1" />
                <img src={product.image} alt={product.name} className="relative rounded-[2rem] w-full aspect-[4/5] object-cover shadow-xl" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="uppercase tracking-widest text-xs text-accent">{product.category}</p>
              <h1 className="font-serif text-5xl md:text-6xl text-primary mt-2">{product.name}</h1>
              <p className="font-serif italic text-lg text-muted-foreground mt-2">{product.tagline}</p>

              {product.comingSoon ? (
                <div className="mt-6 inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs uppercase tracking-widest font-medium">
                  Coming Soon
                </div>
              ) : (
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-serif text-4xl text-primary">₹{weight.price * qty}</span>
                  <span className="text-sm text-muted-foreground">incl. all taxes</span>
                </div>
              )}

              <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

              {!product.comingSoon && (
                <>
                  <div className="mt-8">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Weight</p>
                    <div className="flex gap-2 flex-wrap">
                      {product.weights.map((w: { label: string; price: number }, i: number) => (
                        <button
                          key={w.label}
                          onClick={() => setWeightIdx(i)}
                          className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                            i === weightIdx
                              ? "bg-primary text-primary-foreground border-primary"
                              : "border-border hover:border-primary"
                          }`}
                        >
                          {w.label} · ₹{w.price}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Quantity</p>
                    <div className="flex items-center gap-3 border border-border rounded-full px-3 py-2">
                      <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease"><Minus className="w-4 h-4" /></button>
                      <span className="w-6 text-center font-medium">{qty}</span>
                      <button onClick={() => setQty(qty + 1)} aria-label="Increase"><Plus className="w-4 h-4" /></button>
                    </div>
                  </div>
                </>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                {product.comingSoon ? (
                  <button disabled className="btn-outline opacity-60 cursor-not-allowed">
                    Notify Me When Available
                  </button>
                ) : (
                  <>
                    <button onClick={handleAdd} className="btn-outline">
                      <ShoppingBag className="w-4 h-4" /> Add to Basket
                    </button>
                    <button onClick={handleBuyNow} className="btn-primary">
                      Order on WhatsApp
                    </button>
                  </>
                )}
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 border-t border-border pt-8">
                <Detail label="Ingredients" value={product.ingredients} />
                <Detail label="Shelf Life" value={product.shelfLife} />
                <Detail label="Storage" value={product.storage} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container-x max-w-3xl text-center">
          <p className="uppercase tracking-widest text-xs text-accent">The story</p>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mt-3">The heritage of {product.name}</h2>
          <p className="mt-6 text-lg font-serif italic leading-relaxed text-foreground/80">
            "{product.story}"
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <h2 className="font-serif text-3xl text-primary mb-8">You may also like</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="card-soft overflow-hidden group block">
                <img src={p.image} alt={p.name} className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-widest text-accent">{p.category}</p>
                  <h3 className="font-serif text-xl mt-1 text-primary">{p.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3 items-start">
      <Check className="w-4 h-4 text-accent shrink-0 mt-1" />
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="text-sm mt-0.5">{value}</p>
      </div>
    </div>
  );
}
