import type { BeerItem } from "@/lib/menu-data";

export function BeerCard({ item, index }: { item: BeerItem; index: number }) {
  return (
    <article
      className="animate-reveal"
      style={{ animationDelay: `${Math.min(index * 60, 400)}ms` }}
    >
      <div className="flex gap-5 items-end mb-3">
        <div className="w-20 shrink-0 aspect-[1/2.5] bg-stone-50 border border-border flex items-end justify-center p-1.5 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="max-h-full max-w-full object-contain object-bottom"
          />
        </div>
        <div className="flex-1 min-w-0 pb-1">
          <h3 className="text-2xl font-extrabold tracking-tighter uppercase leading-[0.9] mb-1 text-balance">
            {item.name}
          </h3>
          <p className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">
            {item.style}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 border-t border-border pt-2.5 gap-2">
        <Stat label="ABV" value={item.abv} />
        <Stat label="IBU" value={item.ibu} />
        <Stat label="Vol" value={item.size} />
        <Stat label="Precio" value={item.price} align="end" />
      </div>
    </article>
  );
}

function Stat({
  label,
  value,
  align = "start",
}: {
  label: string;
  value: string;
  align?: "start" | "end";
}) {
  return (
    <div className={`flex flex-col ${align === "end" ? "items-end text-right" : ""}`}>
      <span className="font-mono text-[9px] uppercase opacity-40 mb-0.5 tracking-wider">
        {label}
      </span>
      <span className="text-xs font-bold leading-tight">{value}</span>
    </div>
  );
}
