import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MenuShell } from "@/components/menu/MenuShell";
import { SectionHero } from "@/components/menu/SectionHero";
import { StickyTabs } from "@/components/menu/StickyTabs";
import { DrinkCard } from "@/components/menu/DrinkCard";
import { COCKTAILS, MOCKTAILS, SHOTS, HERO_IMAGES } from "@/lib/menu-data";
import type { FoodItem } from "@/lib/menu-data";

export const Route = createFileRoute("/bebidas")({
  head: () => ({
    meta: [
      { title: "Bebidas — Beer Lovers Bogotá" },
      {
        name: "description",
        content: "Cocktails de autor, sin alcohol y shots. Tradición y vanguardia.",
      },
      { property: "og:title", content: "Bebidas — Beer Lovers Bogotá" },
      {
        property: "og:description",
        content: "Cocktails, mocktails y shots en el Parque de la 93.",
      },
    ],
  }),
  component: Bebidas,
});

const TABS = [
  { id: "cocktails", label: "Cocktails" },
  { id: "mocktails", label: "Sin Alcohol" },
  { id: "shots", label: "Shots" },
];

function Bebidas() {
  const [active, setActive] = useState("cocktails");
  return (
    <MenuShell>
      <SectionHero
        eyebrow="Coctelería"
        title="Bebidas"
        description="Cócteles de autor que combinan tradición y vanguardia."
        image={HERO_IMAGES.bebidas}
      />
      <StickyTabs tabs={TABS} active={active} onChange={setActive} />

      <Section id="cocktails" title="Cocktails" items={COCKTAILS} />
      <Section id="mocktails" title="Sin Alcohol" items={MOCKTAILS} />
      <Section id="shots" title="Shots" items={SHOTS} />
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
      <div className="px-5 space-y-4 pb-6">
        {items.map((item, i) => (
          <DrinkCard key={item.name} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
