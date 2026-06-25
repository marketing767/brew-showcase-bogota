import type { FoodItem } from "@/lib/menu-data";

export function FoodCard({ item, index }: { item: FoodItem; index: number }) {
  return (
    <article
      className="animate-reveal"
      style={{ animationDelay: `${Math.min(index * 60, 400)}ms` }}
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100 border border-border mb-4">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="flex-1 min-w-0 text-2xl font-extrabold tracking-tighter uppercase leading-[0.9] text-balance">
          {item.name}
        </h3>
        <span className="font-mono text-sm font-bold whitespace-nowrap pt-1">
          {item.price}
        </span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
        {item.description}
      </p>
      <div className="mt-4 border-b border-border" />
    </article>
  );
}
