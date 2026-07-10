import type { BeerItem } from "@/lib/menu-data";
import { useState } from "react";

export function BeerCard({ item, index }: { item: BeerItem; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      className="animate-reveal rounded-2xl border border-border bg-card overflow-hidden"
      style={{ animationDelay: `${Math.min(index * 60, 400)}ms` }}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left px-4 py-4 flex gap-4 items-center"
      >
        <div className="w-20 h-24 shrink-0 flex items-center justify-center">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="max-h-full max-w-full object-contain mix-blend-screen"
            style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))" }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-extrabold tracking-tight uppercase leading-[1] mb-2 text-balance">
            {item.name}
          </h3>
          <dl className="text-[11px] leading-tight space-y-0.5">
            <Row label="Estilo" value={item.style} />
            <Row label="ABV" value={item.abv} />
            <Row label="IBU" value={item.ibu} />
            <Row label="Tamaño" value={item.size} />
          </dl>
        </div>
      </button>
      <div className="px-4 pb-4 pt-1 border-t border-border/60 flex items-center justify-between gap-3">
        <span className="text-lg font-extrabold tracking-tight text-accent">
          {item.price}
        </span>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Expandir"
          className="w-7 h-7 grid place-items-center text-muted-foreground hover:text-ink"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </article>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-1.5">
      <dt className="font-bold shrink-0">{label}:</dt>
      <dd className="text-muted-foreground truncate">{value}</dd>
    </div>
  );
}
