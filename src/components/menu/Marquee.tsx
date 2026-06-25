import { BRAND_MARQUEE } from "@/lib/menu-data";

export function Marquee() {
  const items = [...BRAND_MARQUEE, ...BRAND_MARQUEE];
  return (
    <div className="border-y border-border py-3 overflow-hidden whitespace-nowrap bg-ink text-paper">
      <div className="inline-flex animate-marquee will-change-transform">
        {items.map((b, i) => (
          <span
            key={i}
            className="uppercase text-[11px] font-bold tracking-[0.3em] px-6 inline-flex items-center gap-6"
          >
            {b}
            <span className="opacity-50">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
