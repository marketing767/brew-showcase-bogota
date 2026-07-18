import { createFileRoute } from "@tanstack/react-router";
import { MenuShell } from "@/components/menu/MenuShell";
import { PhotoMarquee } from "@/components/menu/PhotoMarquee";
import { SocialLinks } from "@/components/menu/SocialLinks";
import { NOSOTROS_GALLERY, OPENING_HOURS, MAPS_URL } from "@/lib/menu-data";

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

      {/* HORARIOS */}
      <section className="px-5 pb-8">
        <p className="font-serif italic text-gold text-sm mb-1">Horarios</p>
        <h2 className="text-3xl font-extrabold tracking-tighter uppercase leading-none mb-6">
          Horarios de apertura
        </h2>
        <dl className="text-sm">
          {OPENING_HOURS.map(({ day, hours }) => (
            <div
              key={day}
              className="flex items-baseline justify-between gap-3 border-t border-border py-3 first:border-t-0"
            >
              <dt className="font-bold">{day}</dt>
              <dd
                className={`font-mono text-xs ${
                  hours === "Sin servicio"
                    ? "text-muted-foreground"
                    : "text-ink"
                }`}
              >
                {hours}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* REDES Y UBICACIÓN RÁPIDA */}
      <SocialLinks />

      {/* GALERÍA */}
      <section className="pt-10 pb-6">
        <div className="px-5">
          <p className="font-serif italic text-gold text-sm mb-1">Galería</p>
          <h2 className="text-3xl font-extrabold tracking-tighter uppercase leading-none mb-6">
            La casa
          </h2>
        </div>
        <PhotoMarquee images={NOSOTROS_GALLERY} />
      </section>

      {/* UBICACIÓN DETALLADA */}
      <section className="px-5 pt-12 pb-10 border-t border-border mt-8">
        <p className="font-serif italic text-gold text-sm mb-1">Visítanos</p>
        <h2 className="text-3xl font-extrabold tracking-tighter uppercase leading-none mb-6">
          Encuéntranos
        </h2>
        <dl className="space-y-5 mb-8">
          <Detail label="Dirección" value="Parque de la 93 · Bogotá, Colombia" />
          <Detail label="Especialidad" value="Cervezas importadas · 30+ referencias" />
          <Detail label="Cocina" value="Burgers, tapas, tacos, picadas" />
          <Detail label="Ambiente" value="Casa cervecera · Parque de la 93" />
        </dl>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-accent text-ink font-extrabold uppercase tracking-tight py-4 rounded-md"
        >
          Cómo llegar
        </a>
      </section>
    </MenuShell>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-border pt-4">
      <dt className="font-serif italic text-gold text-xs mb-1">{label}</dt>
      <dd className="text-sm text-ink">{value}</dd>
    </div>
  );
}
