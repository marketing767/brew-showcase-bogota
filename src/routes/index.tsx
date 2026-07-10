import { createFileRoute, Link } from "@tanstack/react-router";
import { Marquee } from "@/components/menu/Marquee";
import { CATEGORIES, HERO_IMAGES } from "@/lib/menu-data";
import logo from "@/assets/beer-lovers-logo.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beer Lovers Bogotá — Menú" },
      {
        name: "description",
        content:
          "Menú digital de Beer Lovers, Parque de la 93. Más de 30 cervezas importadas, cocktails, comida y licores.",
      },
      { property: "og:title", content: "Beer Lovers Bogotá — Menú" },
      {
        property: "og:description",
        content: "Cultura de lúpulo importado. Belgas, alemanas, IPAs y más.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="max-w-[430px] mx-auto border-x border-border min-h-screen flex flex-col">
        {/* HEADER */}
        <nav className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-border px-5 py-4 flex justify-center items-center">
          <img
            src={logo.url}
            alt="Beer Lovers Bogotá"
            className="h-20 w-auto object-contain"
          />
        </nav>



        {/* HERO */}
        <section className="px-5 pt-6 pb-10 animate-reveal">

          <p className="font-serif italic text-base text-gold mb-2">
            Bienvenidos a la casa.
          </p>
          <h1 className="text-[2.75rem] font-extrabold tracking-tighter uppercase leading-[0.85] text-balance">
            Cultura de{" "}
            <span className="text-accent italic font-serif lowercase tracking-normal text-[2.25rem]">
              lúpulo
            </span>{" "}
            importado.
          </h1>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-[32ch] text-pretty">
            Más de 30 referencias seleccionadas de Bélgica, Alemania y el mundo.
            Parque de la 93, Bogotá.
          </p>
        </section>

        {/* MARQUEE */}
        <Marquee />

        {/* CATEGORY GRID */}
        <section className="grid grid-cols-2 border-b border-border">
          {CATEGORIES.map((cat, i) => {
            const isAccent = i === 1; // Cervezas highlighted
            const borderR = i % 2 === 0 ? "border-r border-border" : "";
            const borderB = i < CATEGORIES.length - 2 ? "border-b border-border" : "";
            return (
              <Link
                key={cat.to}
                to={cat.to}
                className={`p-5 py-7 ${borderR} ${borderB} transition-colors group ${
                  isAccent
                    ? "bg-accent text-paper"
                    : "hover:bg-accent/5 active:bg-accent/10"
                }`}
              >
                <span
                  className={`font-mono text-[10px] mb-3 block ${
                    isAccent ? "opacity-70" : "opacity-50"
                  }`}
                >
                  ({cat.num})
                </span>
                <h2 className="text-[1.7rem] font-extrabold tracking-tighter uppercase leading-[0.9] mb-1">
                  {cat.label}
                </h2>
                <p
                  className={`text-[10px] font-mono uppercase tracking-wider ${
                    isAccent ? "opacity-70" : "opacity-50"
                  }`}
                >
                  {cat.caption}
                </p>
              </Link>
            );
          })}
        </section>

        {/* FOOTER */}
        <footer className="px-5 py-10 mt-auto">
          <p className="font-serif italic text-gold text-sm mb-2">Beer Lovers</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Parque de la 93 · Bogotá, Colombia
          </p>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60 mt-6">
            Disfruta con responsabilidad
          </p>
        </footer>
      </div>
    </div>
  );
}
