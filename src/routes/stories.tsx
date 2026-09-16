import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import khaja from "@/assets/Khaja_Masala.png.asset.json";
import chuda from "@/assets/Chuda_Mixture.png.asset.json";
import badi from "@/assets/Fried_Badi.png.asset.json";
import nimki from "@/assets/Nimki.jpg.asset.json";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Stories — The Food Heritage of Odisha | Boitas" },
      { name: "description", content: "Discover the stories behind Odisha's beloved sweets and savouries — Khaja, Arisa, Chuda Mixture and the festivals that shaped them." },
      { property: "og:title", content: "Stories from Odisha's Kitchens" },
      { property: "og:description", content: "Heritage, festivals and the stories behind every Boitas creation." },
    ],
    links: [{ rel: "canonical", href: "/stories" }],
  }),
  component: StoriesPage,
});

const stories = [
  {
    image: khaja.url,
    title: "The Story of Khaja",
    summary: "Thirty-two folds, one temple, and a sweet that has travelled through centuries of Puri's Jagannath tradition.",
    tag: "Heritage",
  },
  {
    image: nimki.url,
    title: "Nimki: The Odia Tea-Time Ritual",
    summary: "Diamond-cut, cumin-spiced and fried to a golden crisp — the cracker that completes every evening cup of tea.",
    tag: "Tradition",
  },
  {
    image: chuda.url,
    title: "The Heritage of Chuda Mixture",
    summary: "How a simple bowl of flattened rice became Odisha's most beloved everyday snack.",
    tag: "Everyday",
  },
  {
    image: badi.url,
    title: "Handmade with Generations of Experience",
    summary: "Meet the women-led artisan clusters in coastal Odisha who shape every badi, one by one, under the summer sun.",
    tag: "Artisans",
  },
];

function StoriesPage() {
  return (
    <>
      <section className="pt-40 pb-16 text-center">
        <div className="container-x max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-xs text-accent">The Journal</p>
          <h1 className="font-serif text-5xl md:text-6xl text-primary mt-4">
            Stories from Odisha's kitchens
          </h1>
          <p className="mt-4 text-muted-foreground">
            Heritage, festivals and the hands behind every Boitas creation.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card-soft overflow-hidden group cursor-pointer"
            >
              <div className="overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-widest text-accent">{s.tag}</p>
                <h2 className="font-serif text-2xl text-primary mt-2 leading-tight">{s.title}</h2>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.summary}</p>
                <p className="mt-4 text-sm font-medium text-primary hover:text-accent transition-colors">
                  Read more →
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
