import { createFileRoute } from "@tanstack/react-router";
import { MenuShell } from "@/components/menu/MenuShell";
import { SectionHero } from "@/components/menu/SectionHero";
import { LICORES, HERO_IMAGES } from "@/lib/menu-data";

export const Route = createFileRoute("/licores")({
  head: () => ({
    meta: [
      { title: "Licores — Beer Lovers Bogotá" },
      {
        name: "description",
        content:
          "Aguardientes, ginebras, ron, tequila, vino y whisky. Selección exclusiva.",
      },
      { property: "og:title", content: "Licores — Beer Lovers Bogotá" },
      {
        property: "og:description",
        content: "Selección exclusiva para paladares exigentes.",
      },
    ],
  }),
  component: Licores,
});

function Licores() {
  return (
    <MenuShell>
      <SectionHero
        eyebrow="Selección exclusiva"
        title="Licores"
        description="Nuestra selección exclusiva, creada para paladares exigentes y momentos inolvidables."
        image={HERO_IMAGES.licores}
      />

      <div className="px-5 pb-6 space-y-14">
        {Object.entries(LICORES).map(([cat, items]) => (
          <section key={cat}>
            <header className="border-t border-border pt-8 pb-4 mb-2">
              <p className="font-serif italic text-gold text-sm mb-1">Categoría</p>
              <h2 className="text-3xl font-extrabold tracking-tighter uppercase leading-none">
                {cat}
              </h2>
            </header>
            <ul className="divide-y divide-border">
              {items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between gap-4 py-3.5"
                >
                  <span className="text-sm font-bold uppercase tracking-tight leading-snug text-balance flex-1 min-w-0">
                    {item.name}
                  </span>
                  <span className="font-mono text-xs font-bold whitespace-nowrap text-accent">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </MenuShell>
  );
}
