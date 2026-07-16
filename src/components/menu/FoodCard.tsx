import type { FoodItem } from "@/lib/menu-data";

export function FoodCard({ item, index }: { item: FoodItem; index: number }) {
  return (
    <article
      className="animate-reveal rounded-2xl border border-border bg-card overflow-hidden"
      style={{ animationDelay: `${Math.min(index * 60, 400)}ms` }}
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-4 pt-4 pb-5">
        <div className="flex items-center justify-between gap-3 mb-2">
          <h3 className="flex-1 min-w-0 text-xl font-extrabold tracking-tight uppercase leading-none text-balance">
            {item.name}
          </h3>
          {item.spicy && (
            <span
              role="img"
              aria-label="Picante"
              title="Picante"
              className="shrink-0 text-accent"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c1 3-2 4-2 7a3 3 0 0 0 6 0c0-1-.5-2-1-2 1 0 3 2 3 5a6 6 0 0 1-12 0c0-5 4-6 4-10a3 3 0 0 1 2-0z" />
              </svg>
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed text-pretty mb-3">
          {item.description}
        </p>
        <span className="text-lg font-extrabold tracking-tight text-ink block">
          {item.price}
        </span>
      </div>
    </article>
  );
}
