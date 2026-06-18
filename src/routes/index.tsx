import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Flame, Wine, Armchair, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import dishImg from "@/assets/dish-philosophy.jpg";
import diningImg from "@/assets/dining-room.jpg";
import reservationImg from "@/assets/reservation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Argenté — An Evening to Savour | Mayfair, London" },
      { name: "description", content: "A Mayfair restaurant celebrating seasonal European cuisine. Reserve your table at Maison Argenté." },
      { property: "og:title", content: "Maison Argenté — Mayfair, London" },
      { property: "og:description", content: "Seasonal ingredients. Thoughtful preparation. Unforgettable moments." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const features = [
  { icon: Leaf, title: "Seasonal & Local", text: "We source the finest seasonal ingredients from British farms, coastlines and trusted growers across Europe." },
  { icon: Flame, title: "Refined Technique", text: "Classic European foundations, modern restraint, and meticulous attention to every plate that leaves our pass." },
  { icon: Wine, title: "Exceptional Pairings", text: "A 400-strong cellar of old-world and biodynamic wines, curated to complement and elevate each course." },
  { icon: Armchair, title: "Elegant Atmosphere", text: "A timeless dining room designed for intimate dinners, anniversaries and quiet, unhurried evenings." },
];

const menuPreview = [
  { name: "Hand-Dived Scallop", desc: "Crispy pancetta, celeriac purée, sea herbs", price: "£18" },
  { name: "Cornish Sea Bass", desc: "Fennel, samphire, beurre blanc", price: "£28" },
  { name: "Braised Short Rib", desc: "Red wine jus, smoked shallots, bone marrow", price: "£32" },
  { name: "Valrhona Chocolate Tart", desc: "Hazelnut praline, crème fraîche", price: "£12" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Maison Argenté dining room at evening"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(20,12,6,0.55) 0%, rgba(20,12,6,0.25) 40%, rgba(20,12,6,0.7) 100%)" }}
        />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 min-h-[100svh] flex flex-col justify-center pt-32 pb-20">
          <div className="max-w-2xl fade-up" style={{ color: "#f5efe3" }}>
            <p className="eyebrow" style={{ color: "#d4b078" }}>Modern European Cuisine</p>
            <h1 className="font-display text-[3.5rem] sm:text-[4.5rem] lg:text-[6rem] leading-[1.02] mt-6">
              An evening<br />
              to <span className="italic-serif" style={{ color: "#d4b078" }}>savour.</span>
            </h1>
            <p className="mt-8 text-base lg:text-lg max-w-md leading-relaxed" style={{ color: "rgba(245,239,227,0.85)" }}>
              Seasonal ingredients. Thoughtful preparation.<br />
              Unforgettable moments.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/reservations" className="btn-primary">Reserve a Table</Link>
              <Link to="/menu" className="btn-outline">Explore Menu</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-ivory">
        <div className="flex items-center px-6 lg:px-20 py-20 lg:py-32">
          <div className="max-w-md">
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="font-display text-4xl lg:text-6xl mt-6 leading-[1.05]">
              Where ingredient<br />
              <span className="italic-serif">meets</span> intent.
            </h2>
            <span className="divider-gold mt-8" />
            <p className="mt-8 text-cocoa leading-relaxed">
              At Maison Argenté, we celebrate the finest seasonal produce with refined
              technique and a quiet passion for detail. Every plate begins with what is
              best on the day — and ends with a sense of place.
            </p>
            <p className="mt-4 text-cocoa leading-relaxed">
              Our kitchen draws from the classic European canon, then steps back, allowing
              ingredients to lead. Balance, elegance, and warmth above all.
            </p>
            <Link to="/about" className="link-gold mt-10">Our Story <ArrowRight size={14} /></Link>
          </div>
        </div>
        <div className="relative min-h-[420px] lg:min-h-[720px]">
          <img src={dishImg} alt="Seared scallops with herb oil" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1280} height={1280} />
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 lg:py-28 border-t border-border bg-cream">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="eyebrow">The Experience</p>
            <h2 className="font-display text-4xl lg:text-5xl mt-5">A signature evening</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {features.map((f) => (
              <div key={f.title} className="bg-cream px-8 py-12 text-center flex flex-col items-center">
                <f.icon size={28} strokeWidth={1.2} className="text-gold" />
                <h3 className="eyebrow mt-6" style={{ color: "var(--color-espresso)" }}>{f.title}</h3>
                <p className="mt-4 text-sm text-cocoa leading-relaxed max-w-[16rem]">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-ivory">
        <div className="relative min-h-[420px] lg:min-h-[640px] order-2 lg:order-1">
          <img src={diningImg} alt="Maison Argenté dining room" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1280} height={1280} />
        </div>
        <div className="px-6 lg:px-20 py-20 lg:py-28 order-1 lg:order-2">
          <p className="eyebrow">Our Menu</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-5 leading-tight">
            A menu that <span className="italic-serif">evolves</span><br />with the seasons.
          </h2>
          <p className="mt-6 text-cocoa max-w-md leading-relaxed">
            Our chefs craft tasting and à la carte menus that showcase the very best of each season —
            quietly inventive, never showy.
          </p>

          <div className="mt-12 space-y-6">
            {menuPreview.map((m) => (
              <div key={m.name} className="border-b border-border pb-5">
                <div className="flex justify-between items-baseline gap-4">
                  <h4 className="font-display text-xl">{m.name}</h4>
                  <span className="text-gold font-medium text-sm tracking-wider">{m.price}</span>
                </div>
                <p className="text-sm text-cocoa mt-1.5">{m.desc}</p>
              </div>
            ))}
          </div>

          <Link to="/menu" className="link-gold mt-10 inline-flex">View Full Menu <ArrowRight size={14} /></Link>
        </div>
      </section>

      {/* RESERVATIONS CTA */}
      <section className="relative py-28 lg:py-40 overflow-hidden">
        <img src={reservationImg} alt="Marble table with olive branches" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={900} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(245,239,227,0.85), rgba(245,239,227,0.95))" }} />
        <div className="relative z-10 text-center px-6">
          <p className="eyebrow">Reservations</p>
          <h2 className="font-display text-4xl lg:text-6xl mt-6 leading-[1.05]">
            Secure your table.<br />
            <span className="italic-serif">Savour the moment.</span>
          </h2>
          <p className="mt-6 text-cocoa max-w-md mx-auto">
            Reservations are released eight weeks in advance. We recommend booking ahead for weekends.
          </p>
          <div className="mt-10">
            <Link to="/reservations" className="btn-primary">Reserve a Table</Link>
          </div>
        </div>
      </section>
    </>
  );
}
