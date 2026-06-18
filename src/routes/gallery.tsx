import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import dish from "@/assets/dish-philosophy.jpg";
import dining from "@/assets/dining-room.jpg";
import chef from "@/assets/chef.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Maison Argenté" },
      { name: "description", content: "A visual journey through Maison Argenté: dining room, kitchen, dishes, wines." },
      { property: "og:title", content: "Gallery — Maison Argenté" },
      { property: "og:description", content: "Moments from the room, the kitchen, and the plate." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const tiles: { src: string; alt: string; tall?: boolean; wide?: boolean }[] = [
  { src: hero, alt: "Dining room at evening", wide: true },
  { src: dish, alt: "Signature scallop dish", tall: true },
  { src: g1, alt: "Braised short rib" },
  { src: g2, alt: "Sommelier pouring wine", tall: true },
  { src: dining, alt: "Dining room daylight" },
  { src: g3, alt: "Chocolate dessert with gold leaf" },
  { src: chef, alt: "Chef plating in the kitchen", tall: true },
  { src: g4, alt: "Bar at Maison Argenté", wide: true },
  { src: g5, alt: "Plating microgreens" },
  { src: g6, alt: "Sea bass with beurre blanc" },
];

function Gallery() {
  return (
    <article>
      <section className="pt-40 pb-16 lg:pt-52 lg:pb-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow">Gallery</p>
          <h1 className="font-display text-5xl lg:text-7xl mt-6 leading-[1.05]">
            Moments from <span className="italic-serif">the room.</span>
          </h1>
          <p className="mt-8 text-cocoa max-w-xl mx-auto leading-relaxed">
            A small glimpse of Maison Argenté — the dining room, the kitchen at service,
            and the quiet details that bring our evenings to life.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-24">
        <div className="mx-auto max-w-[1400px] grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] lg:auto-rows-[280px] gap-3">
          {tiles.map((t, i) => (
            <div
              key={i}
              className={`overflow-hidden bg-bone ${t.tall ? "row-span-2" : ""} ${t.wide ? "col-span-2" : ""}`}
            >
              <img
                src={t.src}
                alt={t.alt}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
