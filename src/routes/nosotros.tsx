import { createFileRoute } from "@tanstack/react-router";
import { MenuShell } from "@/components/menu/MenuShell";
import { Marquee } from "@/components/menu/Marquee";
import { NOSOTROS_GALLERY } from "@/lib/menu-data";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Beer Lovers Bogotá" },
      {
        name: "description",
        content:
          "Beer Lovers, importadores de cerveza en el Parque de la 93, Bogotá. Más de 30 referencias del mundo.",
      },
      { property: "og:title", content: "Nosotros — Beer Lovers Bogotá" },
      {
        property: "og:description",
        content: "Importadores de cerveza en el Parque de la 93, Bogotá.",
      },
    ],
  }),
  component: Nosotros,
});

function Nosotros() {
  return (
    <MenuShell>
      <header className="px-5 pt-10 pb-6">
        <p className="font-serif italic text-gold text-lg mb-2">
          Una casa para los que aman la cerveza.
        </p>
        <h1 className="text-5xl font-extrabold tracking-tighter uppercase leading-[0.85] mb-4 text-balance">
          Nosotros
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
          Somos importadores de cerveza en Bogotá. En nuestro local del{" "}
          <span className="text-ink font-semibold">Parque de la 93</span>{" "}
          encontrarás más de 30 referencias de cervezas importadas, una
          cocina pensada para acompañarlas y una coctelería de autor.
        </p>
      </header>

      <Marquee />

      <section className="px-5 pt-10 pb-6">
        <p className="font-serif italic text-gold text-sm mb-1">Galería</p>
        <h2 className="text-3xl font-extrabold tracking-tighter uppercase leading-none mb-6">
          La casa
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {NOSOTROS_GALLERY.map((src, i) => (
            <div
              key={src}
              className={`overflow-hidden border border-border bg-stone-100 ${
                i % 5 === 0 ? "col-span-2 aspect-[2/1]" : "aspect-square"
              }`}
            >
              <img
                src={src}
                alt={`Beer Lovers ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pt-12 pb-6 border-t border-border mt-8">
        <p className="font-serif italic text-gold text-sm mb-1">Visítanos</p>
        <h2 className="text-3xl font-extrabold tracking-tighter uppercase leading-none mb-6">
          Encuéntranos
        </h2>
        <dl className="space-y-5">
          <Detail label="Dirección" value="Parque de la 93 · Bogotá, Colombia" />
          <Detail label="Especialidad" value="Cervezas importadas · 30+ referencias" />
          <Detail label="Cocina" value="Burgers, tapas, tacos, picadas" />
          <Detail label="Bar" value="Cocktails de autor & licores premium" />
        </dl>
      </section>
    </MenuShell>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-border pt-3">
      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
        {label}
      </dt>
      <dd className="text-base font-bold uppercase tracking-tight text-balance">
        {value}
      </dd>
    </div>
  );
}
