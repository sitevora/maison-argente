import { createFileRoute } from "@tanstack/react-router";
import chefImg from "@/assets/chef.jpg";
import diningImg from "@/assets/dining-room.jpg";
import dishImg from "@/assets/dish-philosophy.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Maison Argenté" },
      { name: "description", content: "The story behind Maison Argenté: seasonal sourcing, classical technique, and quiet hospitality in Mayfair." },
      { property: "og:title", content: "Our Story — Maison Argenté" },
      { property: "og:description", content: "Seasonal sourcing, classical technique, and quiet hospitality in Mayfair." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <article>
      {/* Intro */}
      <section className="pt-40 pb-20 lg:pt-52 lg:pb-28 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center fade-up">
          <p className="eyebrow">Est. 2018 · Mayfair</p>
          <h1 className="font-display text-5xl lg:text-7xl mt-6 leading-[1.05]">
            A quiet room. A <span className="italic-serif">considered</span> table.
          </h1>
          <p className="mt-8 text-lg text-cocoa leading-relaxed">
            Maison Argenté was opened with a simple intention — to cook seasonal European
            food with care, to pour beautiful wine, and to welcome guests as we would into our home.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-ivory">
        <div className="relative min-h-[480px] lg:min-h-[720px]">
          <img src={chefImg} alt="Chef plating a dish in the kitchen" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1080} height={1280} />
        </div>
        <div className="px-6 lg:px-20 py-20 lg:py-32 flex items-center">
          <div className="max-w-md">
            <p className="eyebrow">The Kitchen</p>
            <h2 className="font-display text-4xl lg:text-5xl mt-5 leading-tight">
              Chef <span className="italic-serif">Olivier Marchand</span>
            </h2>
            <span className="divider-gold mt-8" />
            <p className="mt-8 text-cocoa leading-relaxed">
              Trained between Lyon and London, Chef Marchand brings two decades of fine-dining
              experience — including stints at L'Arpège and The Ledbury — to a kitchen built
              around restraint and respect for produce.
            </p>
            <p className="mt-4 text-cocoa leading-relaxed">
              "I'm interested in the moment when a dish becomes inevitable — when nothing else
              could have been on the plate. That's the work."
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <p className="eyebrow">01 · Sourcing</p>
              <h3 className="font-display text-2xl mt-4">A short journey from soil to plate.</h3>
              <p className="mt-5 text-cocoa leading-relaxed">
                We work directly with British farmers, Cornish day-boat fishermen, and a small
                handful of European growers we have known for years.
              </p>
            </div>
            <div>
              <p className="eyebrow">02 · Craft</p>
              <h3 className="font-display text-2xl mt-4">Technique in service of flavour.</h3>
              <p className="mt-5 text-cocoa leading-relaxed">
                Classical French foundations meet contemporary restraint. Every sauce, stock and
                ferment is made in-house, every morning.
              </p>
            </div>
            <div>
              <p className="eyebrow">03 · Hospitality</p>
              <h3 className="font-display text-2xl mt-4">A room that remembers you.</h3>
              <p className="mt-5 text-cocoa leading-relaxed">
                Our team is small by design. We learn your preferences, your wines, the table
                you prefer — and quietly look forward to your return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <img src={diningImg} alt="Dining room" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0" style={{ background: "rgba(20,12,6,0.65)" }} />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto" style={{ color: "#f5efe3" }}>
          <p className="font-display italic text-3xl lg:text-5xl leading-tight">
            "Luxury, to us, is the absence of friction —<br />the sense that everything has been
            quietly considered."
          </p>
          <p className="mt-8 eyebrow" style={{ color: "#d4b078" }}>— Olivier Marchand, Head Chef</p>
        </div>
      </section>

      {/* Closing image strip */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <img src={dishImg} alt="Plated dish" className="w-full h-[420px] object-cover" loading="lazy" />
        <img src={diningImg} alt="Dining room" className="w-full h-[420px] object-cover" loading="lazy" />
      </section>
    </article>
  );
}
