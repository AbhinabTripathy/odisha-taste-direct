import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, Sparkles, Leaf, Users, Hammer } from "lucide-react";
import logo from "@/assets/boitas-logo.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Boitas — Preserving Odisha's Food Heritage" },
      { name: "description", content: "The Boitas story: preserving Odisha's traditional food culture and bringing authentic Odia delicacies to modern homes across India." },
      { property: "og:title", content: "About Boitas" },
      { property: "og:description", content: "Preserving Odisha's culinary heritage, one handcrafted bite at a time." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Authenticity", desc: "Recipes untouched by shortcuts, exactly the way they've always been made." },
  { icon: Sparkles, title: "Quality", desc: "Every ingredient is chosen with the same care our grandmothers used." },
  { icon: Leaf, title: "Tradition", desc: "We honour rituals — the slow stir, the sun-drying, the folded layers." },
  { icon: Users, title: "Community", desc: "We work with women-led artisan clusters across coastal Odisha." },
  { icon: Hammer, title: "Craftsmanship", desc: "Handmade, small batch, and never rushed. Craft over scale, always." },
];

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 text-center">
        <div className="container-x max-w-3xl">
          <img src={logo.url} alt="Boitas" className="w-20 h-20 mx-auto" />
          <p className="uppercase tracking-[0.3em] text-xs text-accent mt-6">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl text-primary mt-4">
            A quiet love letter to the food we grew up with.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Boitas was born in the memory of grandmothers stirring jaggery, of temple kitchens
            layering thirty-two folds of khaja, of terraces lined with sun-drying badi. We started
            Boitas because these flavours deserved a modern shelf life, not a museum.
          </p>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-widest text-xs text-accent">Our Mission</p>
            <h2 className="font-serif text-4xl text-primary mt-3">
              Take Odisha's kitchen table to India.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              To make authentic Odia delicacies accessible across India — without diluting the
              tradition, the ingredients, or the hands that make them. Every packet you open is a
              small piece of Odisha, delivered as it was meant to be tasted.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-serif text-2xl md:text-3xl italic text-primary/80 leading-relaxed border-l-4 border-accent pl-6"
          >
            "The best food doesn't need reinvention. It needs a boat that will carry it — carefully — to the next generation."
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-widest text-xs text-accent">What we stand for</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mt-3">Our values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((v) => (
              <div key={v.title} className="card-soft p-6 text-center">
                <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg mt-4 text-primary">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
