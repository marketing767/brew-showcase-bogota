import { createFileRoute } from "@tanstack/react-router";
import { MenuShell } from "@/components/menu/MenuShell";
import { SectionHero } from "@/components/menu/SectionHero";
import { BeerCard } from "@/components/menu/BeerCard";
import { DRAFT, HERO_IMAGES } from "@/lib/menu-data";

export const Route = createFileRoute("/draft")({
  head: () => ({
    meta: [
      { title: "Draft — Beer Lovers Bogotá" },
      {
        name: "description",
        content: "Nuestras cervezas de barril: Delirium Tremens, Delirium Red, Gulden Draak y más.",
      },
      { property: "og:title", content: "Draft — Beer Lovers Bogotá" },
      {
        property: "og:description",
        content: "Cervezas de barril en el Parque de la 93.",
      },
    ],
  }),
  component: Draft,
});

function Draft() {
  return (
    <MenuShell>
      <SectionHero
        eyebrow="Recién servidas"
        title="Draft"
        description="Disfruta nuestra selección de cervezas de barril."
        image={HERO_IMAGES.draft}
      />
      <div className="px-5 space-y-12 pb-6">
        {DRAFT.map((item, i) => (
          <BeerCard key={item.name} item={item} index={i} />
        ))}
      </div>
      <div className="px-5 py-10 border-t border-border">
        <p className="text-xs text-muted-foreground italic leading-relaxed text-pretty">
          Cervezas sujetas a disponibilidad de inventario según el tiempo del
          proceso de importación y producción.
        </p>
      </div>
    </MenuShell>
  );
}
