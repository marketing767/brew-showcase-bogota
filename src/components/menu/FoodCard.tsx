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
              className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#3D1408" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 3.5c.6 1 .3 1.8-.3 2.6C7.4 7.5 6 9.2 6 12.5 6 16.6 9 19 12.5 19c3.9 0 6.5-2.8 6.5-6.2 0-2-1-3.5-2.3-4.3-.4-.2-.7 0-.6.5.3 1.2 0 2.3-.8 2.3-.9 0-1-1-.7-2 .5-1.7-.2-3.3-1.6-4.3-.4-.3-.8 0-.7.5.4 1.4-.4 2.2-1.2 1.5-.9-.8-1-2.2-1.2-3.5-.1-.5-.5-.6-.9-0z"
                  fill="#FF6A3D"
                />
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
