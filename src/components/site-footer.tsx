import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import logo from "@/assets/boitas-logo.png.asset.json";
import { WA_URL } from "@/lib/cart";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo.url} alt="Boitas" className="h-16 w-16 bg-background rounded-full p-1" />
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/80 leading-relaxed">
            Boitas brings the timeless flavours of Odisha to homes across India — handcrafted,
            heritage-rooted, and made with quiet devotion.
          </p>
          <p className="mt-6 font-serif text-lg italic text-accent">
            Layers of joy in every bite.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-accent mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-accent">Products</Link></li>
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/stories" className="hover:text-accent">Stories</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-accent mb-4">Reach us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 97787 08100</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> taste@theboitas.com</li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href={WA_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp"
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.52 3.48A11.9 11.9 0 0012.02 0C5.4 0 .04 5.36.04 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.62a11.94 11.94 0 005.83 1.49h.01c6.62 0 11.98-5.36 11.98-11.98 0-3.2-1.25-6.21-3.49-8.41zM12.03 21.3h-.01a9.3 9.3 0 01-4.75-1.3l-.34-.2-3.67.96.98-3.58-.22-.37a9.31 9.31 0 01-1.43-4.83c0-5.15 4.19-9.34 9.34-9.34 2.5 0 4.85.97 6.62 2.74a9.28 9.28 0 012.74 6.61c0 5.15-4.19 9.34-9.26 9.34zm5.4-6.98c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.15-.17.2-.34.22-.63.07-.3-.15-1.24-.46-2.36-1.47-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.9-2.19-.24-.57-.48-.5-.66-.51h-.56c-.19 0-.5.07-.76.37-.26.29-1 .98-1 2.4s1.02 2.78 1.17 2.97c.15.2 2.01 3.07 4.87 4.31.68.29 1.2.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.75-.71 2-1.4.25-.68.25-1.27.17-1.4-.07-.13-.27-.2-.57-.35z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-x py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()}&nbsp;The Boitas Prop. All rights reserved.</p>
          <p>Taste of Odisha. Crafted with Tradition.</p>
        </div>
      </div>
    </footer>
  );
}
