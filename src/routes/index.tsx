import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Sparkles, MapPin, ChefHat, Quote } from "lucide-react";
import { products, WHATSAPP_NUMBER } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { WA_URL } from "@/lib/cart";
import heroImg from "@/assets/Khaja_Masala.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Boitas — Authentic Odia Delicacies, Crafted with Tradition" },
      { property: "og:title", content: "Boitas — Authentic Odia Delicacies" },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const featured = products;

const whyItems = [
  { icon: ChefHat, title: "Authentic Recipes", desc: "Rooted in the temple kitchens of Odisha and passed down by generations." },
  { icon: Leaf, title: "Premium Ingredients", desc: "Slow-cooked jaggery, hand-pounded rice, cold-pressed oils. Never a shortcut." },
  { icon: MapPin, title: "Made in Odisha", desc: "Crafted at the source by artisans who've made these treats for decades." },
  { icon: Sparkles, title: "Freshly Prepared", desc: "Every batch is prepared to order, never mass-produced or long-warehoused." },
];

const journey = [
  "Traditional Recipes",
  "Local Ingredients",
  "Handcrafted Preparation",
  "Premium Packaging",
  "Delivered with Care",
];

const testimonials = [
  { name: "Priya M.", city: "Bengaluru", text: "The Nimki took me straight back to my grandmother's kitchen in Cuttack. Genuinely the real thing." },
  { name: "Ankit S.", city: "Mumbai", text: "The Khaja Masala Crunch is dangerously addictive. Nothing else in the market comes close." },
  { name: "Ritika D.", city: "Delhi", text: "Beautiful packaging, honest ingredients, and every bite feels made with care. My family is hooked." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1200px 600px at 90% 10%, rgba(217,164,65,0.18), transparent 60%), radial-gradient(900px 500px at 5% 90%, rgba(122,31,31,0.12), transparent 55%), var(--background)",
          }}
        />
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="uppercase tracking-[0.28em] text-xs text-accent font-medium">
              Taste of Odisha · Est. Tradition
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mt-5 text-primary">
              Authentic Odia<br /> Delicacies,<br />
              <span className="italic text-accent">Crafted with Tradition.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Bringing the timeless flavours of Odisha to homes across India through
              handcrafted sweets and savouries — layers of joy in every bite.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="btn-primary">
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-outline">
                Order on WhatsApp
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-widest text-muted-foreground">
              <span>Handcrafted</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>No Preservatives</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>Made in Odisha</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-secondary rounded-[2rem] rotate-2" />
            <img src={heroImg} alt="Boitas Khaja Masala Crunch" className="relative rounded-[2rem] shadow-2xl w-full object-cover" />
            <div className="absolute -bottom-6 -left-6 card-soft px-5 py-3 hidden sm:flex items-center gap-3">
              <Quote className="w-4 h-4 text-accent" />
              <p className="font-serif italic text-sm">Layers of joy in every bite</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="uppercase tracking-widest text-xs text-accent">Our Collection</p>
              <h2 className="font-serif text-4xl md:text-5xl mt-2 text-primary">Featured Delicacies</h2>
            </div>
            <Link to="/products" className="text-sm font-medium text-primary hover:text-accent flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      {/* WHY BOITAS */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-widest text-xs text-accent">Why Boitas</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-2 text-primary">
              A promise in every packet
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyItems.map((w) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="card-soft p-6"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <w.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl mt-4">{w.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HERITAGE JOURNEY */}
      <section className="py-20 md:py-28">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-14">
            <p className="uppercase tracking-widest text-xs text-accent">Our Heritage</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-2 text-primary">
              From temple kitchens to your table
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Every Boitas product travels the same slow, honest journey — the way it has been made in Odia homes for generations.
            </p>
          </div>
          <ol className="relative border-l-2 border-dashed border-accent/50 pl-8 space-y-8">
            {journey.map((step, i) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative"
              >
                <span className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center justify-center">
                  {i + 1}
                </span>
                <h3 className="font-serif text-2xl text-primary">{step}</h3>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-widest text-xs text-accent">Loved across India</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-2">Kind words from our patrons</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6">
                <Quote className="w-6 h-6 text-accent" />
                <p className="mt-4 font-serif text-lg leading-relaxed italic">"{t.text}"</p>
                <p className="mt-5 text-sm text-primary-foreground/70">
                  {t.name} · <span className="text-accent">{t.city}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-x">
          <div
            className="rounded-3xl p-10 md:p-20 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #F5E6D3 0%, #F9EED9 100%)" }}
          >
            <p className="uppercase tracking-[0.3em] text-xs text-primary/60">Order today</p>
            <h2 className="font-serif text-4xl md:text-6xl text-primary mt-3 max-w-3xl mx-auto">
              Bring the taste of Odisha to your home
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Simply message us on WhatsApp. We'll craft your order fresh and dispatch it with care.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-8 !px-8 !py-4 !text-base"
            >
              Order on WhatsApp
            </a>
            <p className="mt-4 text-xs text-muted-foreground">+91 {WHATSAPP_NUMBER.slice(2)}</p>
          </div>
        </div>
      </section>
    </>
  );
}
