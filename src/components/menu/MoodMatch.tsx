import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MOODS } from "@/lib/menu-data";

export function MoodMatch() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = MOODS.find((m) => m.id === activeId);

  return (
    <section className="px-5 pt-10 pb-8 border-t border-border animate-reveal">
      <p className="font-serif italic text-base text-gold mb-1">
        Antes de elegir
      </p>
      <h2 className="text-3xl font-extrabold tracking-tighter uppercase leading-[0.9] mb-2">
        ¿Cómo te sientes hoy?
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-[34ch]">
        Elige tu mood y te recomendamos la cerveza perfecta.
      </p>

      <div className="grid grid-cols-2 gap-2 mb-6">
        {MOODS.map((mood) => {
          const isActive = mood.id === activeId;
          return (
            <button
              key={mood.id}
              type="button"
              onClick={() => setActiveId(isActive ? null : mood.id)}
              className={`rounded-2xl border px-4 py-5 text-left transition-colors ${
                isActive
                  ? "bg-accent text-paper border-accent"
                  : "border-border hover:bg-accent/5"
              }`}
            >
              <span className="text-sm font-extrabold uppercase tracking-tight leading-tight block">
                {mood.label}
              </span>
            </button>
          );
        })}
      </div>

      {active && (
        <div className="space-y-3 animate-reveal">
          <p className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground mb-1">
            {active.tagline}
          </p>
          {active.beers.map((beer) => (
            <Link
              key={beer.name}
              to={beer.category}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-3 hover:border-accent transition-colors"
            >
              <div className="w-16 h-20 shrink-0 flex items-center justify-center">
                <img
                  src={beer.image}
                  alt={beer.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-extrabold uppercase tracking-tight leading-none mb-1 text-balance">
                  {beer.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-snug text-pretty">
                  {beer.reason}
                </p>
              </div>
              <span className="text-sm font-extrabold whitespace-nowrap">
                {beer.price}
              </span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
