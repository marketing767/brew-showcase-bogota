import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MenuShell } from "@/components/menu/MenuShell";
import { SectionHero } from "@/components/menu/SectionHero";
import { StickyTabs } from "@/components/menu/StickyTabs";
import { FoodCard } from "@/components/menu/FoodCard";
import {
  COMIDA_ENTRADAS,
  COMIDA_FUERTES,
  COMIDA_COMPARTIR,
  HERO_IMAGES,
} from "@/lib/menu-data";
import type { FoodItem } from "@/lib/menu-data";

export const Route = createFileRoute("/comida")({
  head: () => ({
    meta: [
      { title: "Comida — Beer Lovers Bogotá" },
      {
        name: "description",
        content:
          "Entradas, platos fuertes y para compartir. Pensado para realzar tu cerveza favorita.",
      },
      { property: "og:title", content: "Comida — Beer Lovers Bogotá" },
      {
        property: "og:description",
        content: "Hamburguesas, tapas, tacos y más. Para acompañar cerveza.",
      },
    ],
  }),
  component: Comida,
});

const TABS = [
  { id: "entradas", label: "Entradas" },
  { id: "fuertes", label: "Fuertes" },
  { id: "compartir", label: "Compartir" },
];

function Comida() {
  const [active, setActive] = useState("entradas");
  return (
    <MenuShell>
      <SectionHero
        eyebrow="Para acompañar"
        title="Comida"
        description="Un menú pensado para equilibrar y realzar la frescura de tu bebida favorita."
        image={HERO_IMAGES.comida}
      />
      <StickyTabs tabs={TABS} active={active} onChange={setActive} />

      <Section id="entradas" title="Entradas" items={COMIDA_ENTRADAS} />
      <Section id="fuertes" title="Fuertes" items={COMIDA_FUERTES} />
      <Section id="compartir" title="Para Compartir" items={COMIDA_COMPARTIR} />
    </MenuShell>
  );
}

function Section({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: FoodItem[];
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <header className="px-5 pt-12 pb-6 border-t border-border">
        <h2 className="text-4xl font-extrabold tracking-tighter uppercase leading-none">
          {title}
        </h2>
      </header>
      <div className="px-5 space-y-10 pb-6">
        {items.map((item, i) => (
          <FoodCard key={item.name} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
