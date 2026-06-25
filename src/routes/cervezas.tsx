import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MenuShell } from "@/components/menu/MenuShell";
import { SectionHero } from "@/components/menu/SectionHero";
import { StickyTabs } from "@/components/menu/StickyTabs";
import { BeerCard } from "@/components/menu/BeerCard";
import { Marquee } from "@/components/menu/Marquee";
import {
  CERVEZAS_BELGICA,
  CERVEZAS_ALEMANIA,
  CERVEZAS_OTROS,
  HERO_IMAGES,
} from "@/lib/menu-data";

export const Route = createFileRoute("/cervezas")({
  head: () => ({
    meta: [
      { title: "Cervezas — Beer Lovers Bogotá" },
      {
        name: "description",
        content:
          "Más de 30 referencias de cerveza importada: Bélgica, Alemania y otros orígenes. Estilo, ABV, IBU y tamaño.",
      },
      { property: "og:title", content: "Cervezas — Beer Lovers Bogotá" },
      {
        property: "og:description",
        content: "Belgas, alemanas y más. Estilo, ABV, IBU y precios en COP.",
      },
    ],
  }),
  component: Cervezas,
});

const TABS = [
  { id: "belgica", label: "Bélgica" },
  { id: "alemania", label: "Alemania" },
  { id: "otros", label: "Otros" },
];

function Cervezas() {
  const [active, setActive] = useState("belgica");

  return (
    <MenuShell>
      <SectionHero
        eyebrow="Selección de la casa"
        title="Cervezas"
        description="Disfruta nuestra selección de más de cien referencias de distintas partes del mundo."
        image={HERO_IMAGES.cervezas}
      />

      <StickyTabs tabs={TABS} active={active} onChange={setActive} />

      <Marquee />

      <CountrySection
        id="belgica"
        eyebrow="Tradición belga"
        title="Bélgica"
        blurb="Una curaduría de las mejores maltas y levaduras de las abadías belgas."
        items={CERVEZAS_BELGICA}
      />

      <CountrySection
        id="alemania"
        eyebrow="Pureza alemana"
        title="Alemania"
        blurb="Hefe Weizen, Dunkel, Weizenbock y más, fieles a la ley de pureza."
        items={CERVEZAS_ALEMANIA}
      />

      <CountrySection
        id="otros"
        eyebrow="Del mundo"
        title="Otros"
        blurb="Reino Unido, República Checa, Escocia. Estilos clásicos y modernos."
        items={CERVEZAS_OTROS}
      />

      <Disclaimer />
    </MenuShell>
  );
}

function CountrySection({
  id,
  eyebrow,
  title,
  blurb,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  blurb: string;
  items: typeof CERVEZAS_BELGICA;
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <header className="px-5 pt-12 pb-6 border-t border-border">
        <p className="font-serif italic text-lg text-accent mb-1">{eyebrow}</p>
        <h2 className="text-4xl font-extrabold tracking-tighter uppercase leading-none mb-2">
          {title}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-[34ch] text-pretty">
          {blurb}
        </p>
      </header>
      <div className="px-5 space-y-12 pb-6">
        {items.map((item, i) => (
          <BeerCard key={item.name + item.size} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

function Disclaimer() {
  return (
    <div className="px-5 py-10 border-t border-border">
      <p className="text-xs text-muted-foreground leading-relaxed text-pretty italic">
        Cervezas sujetas a disponibilidad de inventario según el tiempo del proceso
        de importación y producción. Procuramos mantener la totalidad de las
        referencias para la satisfacción de su experiencia.
      </p>
    </div>
  );
}
