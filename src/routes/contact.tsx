import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maison Argenté" },
      { name: "description", content: "Visit Maison Argenté at 14 Mayfair Square, London. Reservations, private dining and press enquiries." },
      { property: "og:title", content: "Contact — Maison Argenté" },
      { property: "og:description", content: "14 Mayfair Square, London. 020 7123 4567." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <article>
      <section className="pt-40 pb-16 lg:pt-52 lg:pb-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow">Contact</p>
          <h1 className="font-display text-5xl lg:text-7xl mt-6 leading-[1.05]">
            Find <span className="italic-serif">us.</span>
          </h1>
          <p className="mt-8 text-cocoa max-w-xl mx-auto leading-relaxed">
            Tucked into a quiet corner of Mayfair, a short walk from Green Park and Bond Street.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-20">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          <Info icon={MapPin} label="Address">
            14 Mayfair Square<br />London W1J 8AB
          </Info>
          <Info icon={Phone} label="Telephone">
            <a href="tel:+442071234567" className="hover:text-gold transition-colors">020 7123 4567</a>
          </Info>
          <Info icon={Mail} label="Email">
            <a href="mailto:reservations@maisonargente.com" className="hover:text-gold transition-colors">
              reservations@<br />maisonargente.com
            </a>
          </Info>
          <Info icon={Clock} label="Opening Hours">
            Mon – Thu · 5:30pm – 11pm<br />
            Fri – Sat · 12pm – 11:30pm<br />
            Sunday · 12pm – 9:30pm
          </Info>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative overflow-hidden border border-border" style={{ height: "520px" }}>
            <iframe
              title="Maison Argenté location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1490%2C51.5070%2C-0.1390%2C51.5130&layer=mapnik&marker=51.5100,-0.1440"
              className="absolute inset-0 w-full h-full grayscale-[40%]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Private Dining & Press</p>
          <h2 className="font-display text-3xl lg:text-4xl mt-5">A room of your own.</h2>
          <p className="mt-6 text-cocoa leading-relaxed">
            Our private dining room seats up to fourteen guests for intimate celebrations,
            tasting dinners and bespoke menus. For private hire, press and partnership
            enquiries, please write to{" "}
            <a href="mailto:hello@maisonargente.com" className="text-gold">hello@maisonargente.com</a>.
          </p>
        </div>
      </section>
    </article>
  );
}

function Info({ icon: Icon, label, children }: { icon: typeof MapPin; label: string; children: React.ReactNode }) {
  return (
    <div className="bg-cream px-8 py-12 text-center flex flex-col items-center">
      <Icon size={22} strokeWidth={1.2} className="text-gold" />
      <p className="eyebrow mt-5" style={{ color: "var(--color-espresso)" }}>{label}</p>
      <div className="mt-4 text-sm text-cocoa leading-relaxed">{children}</div>
    </div>
  );
}
