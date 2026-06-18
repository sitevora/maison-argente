import { createFileRoute } from "@tanstack/react-router";
import dishImg from "@/assets/dish-philosophy.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Maison Argenté" },
      { name: "description", content: "Seasonal à la carte menu featuring starters, main courses, desserts and a thoughtfully curated wine list." },
      { property: "og:title", content: "Menu — Maison Argenté" },
      { property: "og:description", content: "A menu that evolves with the seasons." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

type Item = { name: string; desc: string; price: string };
const starters: Item[] = [
  { name: "Hand-Dived Scallop", desc: "Crispy pancetta, celeriac purée, sea herbs", price: "£18" },
  { name: "Heritage Tomato", desc: "Burrata di Andria, basil oil, aged balsamic", price: "£14" },
  { name: "Cured Sea Trout", desc: "Cucumber, horseradish crème fraîche, dill", price: "£16" },
  { name: "Wild Mushroom Velouté", desc: "Truffle cream, brioche, chive oil", price: "£13" },
  { name: "Foie Gras Parfait", desc: "Sauternes jelly, fig, toasted sourdough", price: "£19" },
];
const mains: Item[] = [
  { name: "Cornish Sea Bass", desc: "Fennel, samphire, beurre blanc", price: "£28" },
  { name: "Braised Short Rib", desc: "Red wine jus, smoked shallots, bone marrow", price: "£32" },
  { name: "Herdwick Lamb Saddle", desc: "Pea, mint, anchovy, lamb sweetbread", price: "£34" },
  { name: "Roasted Guinea Fowl", desc: "Morels, asparagus, vin jaune sauce", price: "£29" },
  { name: "Hand-Rolled Tagliolini", desc: "Cornish crab, lemon, brown butter, chives", price: "£26" },
  { name: "Aubergine & Smoked Ricotta", desc: "Capers, tomato confit, olive crumb", price: "£24" },
];
const desserts: Item[] = [
  { name: "Valrhona Chocolate Tart", desc: "Hazelnut praline, crème fraîche", price: "£12" },
  { name: "Vanilla Mille-Feuille", desc: "Madagascan vanilla, raspberry, brown butter", price: "£12" },
  { name: "Poached Yorkshire Rhubarb", desc: "Almond cream, gingerbread, sorbet", price: "£11" },
  { name: "Selection of British Cheeses", desc: "Quince, walnut, oat biscuits", price: "£16" },
];
const wines: Item[] = [
  { name: "Domaine Leflaive, Mâcon-Verzé 2021", desc: "Burgundy · Chardonnay · Glass 18 / Bottle 84", price: "" },
  { name: "Domaine Tempier, Bandol Rosé 2022", desc: "Provence · Mourvèdre blend · Glass 16 / Bottle 72", price: "" },
  { name: "Château Brane-Cantenac 2015", desc: "Margaux · Bordeaux blend · Bottle 195", price: "" },
  { name: "Giacomo Conterno, Barbera d'Alba 2020", desc: "Piedmont · Barbera · Glass 22 / Bottle 96", price: "" },
  { name: "Egly-Ouriet Brut Tradition NV", desc: "Champagne · Grower · Glass 24 / Bottle 130", price: "" },
];

function Section({ title, eyebrow, items }: { title: string; eyebrow: string; items: Item[] }) {
  return (
    <section className="py-16 lg:py-20 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4">{title}</h2>
        </div>
        <div className="lg:col-span-8 space-y-7">
          {items.map((m) => (
            <div key={m.name} className="border-b border-border pb-5">
              <div className="flex justify-between items-baseline gap-6">
                <h3 className="font-display text-xl lg:text-2xl">{m.name}</h3>
                {m.price && <span className="text-gold font-medium tracking-wider">{m.price}</span>}
              </div>
              <p className="text-sm text-cocoa mt-1.5 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuPage() {
  return (
    <article>
      <section className="pt-40 pb-12 lg:pt-52 lg:pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow">À la Carte · Spring 2026</p>
          <h1 className="font-display text-5xl lg:text-7xl mt-6 leading-[1.05]">
            A menu that <span className="italic-serif">evolves</span> with the seasons.
          </h1>
          <p className="mt-8 text-cocoa max-w-xl mx-auto leading-relaxed">
            Our à la carte changes gently throughout the year. A six-course tasting menu (£95) is
            also available, with optional wine pairing (£75).
          </p>
        </div>
      </section>

      <div className="relative h-[40vh] lg:h-[55vh] my-8">
        <img src={dishImg} alt="Signature dish" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8 pb-24">
        <Section eyebrow="To Begin" title="Starters" items={starters} />
        <Section eyebrow="The Main" title="Main Courses" items={mains} />
        <Section eyebrow="To Finish" title="Desserts" items={desserts} />
        <Section eyebrow="The Cellar" title="Wine Selection" items={wines} />
        <p className="mt-16 text-center text-xs tracking-[0.2em] uppercase text-muted-foreground">
          A discretionary 12.5% service charge is added to your bill.
        </p>
      </div>
    </article>
  );
}
