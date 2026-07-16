import type { FoodItem } from "@/lib/menu-data";

export function DrinkCard({ item, index }: { item: FoodItem; index: number }) {
  return (
    <article
      className="animate-reveal rounded-2xl border border-border bg-card overflow-hidden p-3 flex gap-4 items-start"
      style={{ animationDelay: `${Math.min(index * 60, 400)}ms` }}
    >
      <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-stone-100">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0 pt-1">
        <h3 className="text-lg font-extrabold tracking-tight uppercase leading-none mb-2 text-balance">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed text-pretty mb-2">
          {item.description}
        </p>
        <span className="text-base font-extrabold tracking-tight text-ink block">
          {item.price}
        </span>
      </div>
    </article>
  );
}
