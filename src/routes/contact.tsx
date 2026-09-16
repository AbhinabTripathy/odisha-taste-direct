import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { WA_URL } from "@/lib/cart";
import { WHATSAPP_NUMBER } from "@/lib/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Boitas — Chat with us on WhatsApp" },
      { name: "description", content: "Reach the Boitas team on WhatsApp, phone or email. We're happy to help with orders, bulk gifting and any questions about our products." },
      { property: "og:title", content: "Contact Boitas" },
      { property: "og:description", content: "Chat with us on WhatsApp — we're always happy to help." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="pt-40 pb-12 text-center">
        <div className="container-x max-w-2xl">
          <p className="uppercase tracking-[0.3em] text-xs text-accent">Get in touch</p>
          <h1 className="font-serif text-5xl md:text-6xl text-primary mt-4">
            We'd love to hear from you
          </h1>
          <p className="mt-4 text-muted-foreground">
            The fastest way to reach us is WhatsApp — we usually reply within minutes.
          </p>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-primary mt-6 inline-flex">
            Chat with us on WhatsApp
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <InfoCard icon={Phone} label="Call us" value={`+91 ${WHATSAPP_NUMBER.slice(2)}`} href={`tel:+${WHATSAPP_NUMBER}`} />
            <InfoCard icon={Mail} label="Email" value="hello@boitas.in" href="mailto:hello@boitas.in" />
            <InfoCard icon={MapPin} label="Studio Kitchen" value="Bhubaneswar, Odisha, India" />
            <div className="card-soft overflow-hidden">
              <iframe
                title="Boitas location"
                src="https://www.google.com/maps?q=Bhubaneswar,Odisha&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              />
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="card-soft p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <h2 className="font-serif text-2xl text-primary">Send us a message</h2>
            <p className="text-sm text-muted-foreground mt-1">
              We'll get back to you within one business day.
            </p>
            <div className="mt-6 grid gap-4">
              <Field label="Name" name="name" required />
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <button type="submit" className="btn-primary mt-2">
                {submitted ? "Thank you — we'll be in touch" : "Send message"}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const inner = (
    <div className="card-soft p-5 flex items-center gap-4">
      <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="font-medium mt-0.5">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
