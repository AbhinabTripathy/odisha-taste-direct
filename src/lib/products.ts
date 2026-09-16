import chuda from "@/assets/Chuda_Mixture.png.asset.json";
import badi from "@/assets/Fried_Badi.png.asset.json";
import khajaMasala from "@/assets/Khaja_Masala.png.asset.json";
import nimki from "@/assets/Nimki.jpg.asset.json";
import moa from "@/assets/Moa_Bites.jpg.asset.json";
import arisa from "@/assets/Arisa.jpg.asset.json";

export type WeightOption = { label: string; price: number };

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: "Sweets" | "Savouries";
  image: string;
  shortDescription: string;
  description: string;
  ingredients: string;
  shelfLife: string;
  storage: string;
  story: string;
  weights: WeightOption[];
  comingSoon?: boolean;
};

export const products: Product[] = [
  {
    slug: "khaja-masala",
    name: "Khaja Masala Crunch",
    tagline: "Layered. Fiery. Unforgettable.",
    category: "Savouries",
    image: khajaMasala.url,
    shortDescription: "Flaky layered khaja dusted with our house masala.",
    description:
      "A savoury reinvention of Puri's iconic khaja — folded thirty-two times, fried till golden, then finished with a bold masala blend of chilli, cumin and rock salt.",
    ingredients: "Refined flour, refined oil, red chilli, cumin, black salt, spices.",
    shelfLife: "45 days from date of packaging.",
    storage: "Store in an airtight container in a cool, dry place.",
    story:
      "The khaja belongs to the sacred kitchens of Puri. We keep the craft — thirty-two layers, no shortcuts — and give it a modern, snackable twist.",
    weights: [
      { label: "150g", price: 45 },
      { label: "300g", price: 85 },
    ],
  },
  {
    slug: "nimki",
    name: "Nimki",
    tagline: "Crisp. Salty. Unapologetically addictive.",
    category: "Savouries",
    image: nimki.url,
    shortDescription: "Diamond-shaped savoury crackers, spiced with cumin and finished with rock salt.",
    description:
      "Our Nimki is the quintessential Odia tea-time companion — crisp, diamond-shaped crackers kneaded with cumin and carom seeds, then fried to a delicate golden finish and dusted with rock salt. Simple, honest and impossible to stop at one.",
    ingredients: "Refined flour, cumin seeds, carom seeds (ajwain), rock salt, refined oil.",
    shelfLife: "45 days from date of packaging.",
    storage: "Store in an airtight container in a cool, dry place.",
    story:
      "In every Odia household, the evening tea is incomplete without a bowl of nimki. Mothers would roll and cut diamond shapes by hand while the oil warmed on the stove — a ritual we preserve in every batch.",
    weights: [
      { label: "150g", price: 30 },
      { label: "300g", price: 55 },
    ],
  },
  {
    slug: "chuda-mixture",
    name: "Chuda Mixture",
    tagline: "The everyday indulgence",
    category: "Savouries",
    image: chuda.url,
    shortDescription: "Flattened rice tossed with peanuts, curry leaves and warm spices.",
    description:
      "Our Chuda Mixture layers roasted chuda with peanuts, cashews, coconut, curry leaves and a hint of turmeric — the perfect balance of light, savoury and aromatic.",
    ingredients: "Flattened rice, peanuts, cashews, coconut, curry leaves, spices, refined oil.",
    shelfLife: "45 days from date of packaging.",
    storage: "Keep sealed in a dry, airy container.",
    story:
      "In Odia homes, chuda is breakfast, tea-time and midnight snack. Ours captures that quiet daily ritual in every handful.",
    weights: [
      { label: "150g", price: 25 },
      { label: "300g", price: 45 },
    ],
  },
  {
    slug: "fried-badi",
    name: "Fried Badi",
    tagline: "Crunchy heirloom nuggets",
    category: "Savouries",
    image: badi.url,
    shortDescription: "Sun-dried lentil nuggets fried into crisp, savoury crunch.",
    description:
      "Hand-shaped, sun-dried under the Odia sun for days and then fried till they blush golden. A traditional accompaniment reborn as a modern snack.",
    ingredients: "Black gram (urad dal), spices, refined oil, salt.",
    shelfLife: "60 days from date of packaging.",
    storage: "Store in an airtight container in a cool, dry place.",
    story:
      "Every Odia terrace tells the same summer story — women shaping badi on cotton cloths, drying it under an unforgiving sun. We honour that ritual, one crunchy bite at a time.",
    weights: [
      { label: "150g", price: 55 },
      { label: "300g", price: 100 },
    ],
  },
  {
    slug: "moa-bites",
    name: "Moa Bites",
    tagline: "Puffed rice, bound in jaggery",
    category: "Sweets",
    image: moa.url,
    shortDescription: "Light, airy puffed-rice bites with a caramel-jaggery finish.",
    description:
      "Moa is a cherished traditional sweet made from puffed rice bound with rich jaggery — light, airy and softly caramel-sweet. Crafted to retain its original essence while delivering a premium snacking experience.",
    ingredients: "Puffed rice, jaggery, cardamom.",
    shelfLife: "60 days from date of packaging.",
    storage: "Store in an airtight container in a cool, dry place.",
    story:
      "A festival staple in Odia homes, moa carries the warmth of jaggery cooked slow, the crackle of freshly puffed rice and hands that shape each bite with care.",
    weights: [{ label: "100g", price: 180 }],
    comingSoon: true,
  },
  {
    slug: "arisa",
    name: "Arisa Pitha",
    tagline: "Just the way you remember",
    category: "Sweets",
    image: arisa.url,
    shortDescription: "Jaggery-sweetened rice-flour pitha, kissed with sesame.",
    description:
      "Arisa is a celebration of authentic traditional taste — rice flour and jaggery pressed together, crowned with sesame and fried till a deep amber. A pitha that carries the memory of every Odia festival.",
    ingredients: "Rice flour, jaggery, sesame seeds, refined oil.",
    shelfLife: "45 days from date of packaging.",
    storage: "Store in an airtight container in a cool, dry place.",
    story:
      "No Odia festival is complete without arisa. We honour the recipe passed down through generations — slow-cooked jaggery, hand-pressed dough, sesame-crowned.",
    weights: [{ label: "100g", price: 200 }],
    comingSoon: true,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const WHATSAPP_NUMBER = "919778708100";

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
