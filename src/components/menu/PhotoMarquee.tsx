export function PhotoMarquee({ images }: { images: string[] }) {
  const items = [...images, ...images];
  return (
    <div className="border-y border-border py-3 overflow-hidden whitespace-nowrap bg-ink">
      <div className="inline-flex animate-marquee will-change-transform gap-3">
        {items.map((src, i) => (
          <div
            key={i}
            className="w-40 h-28 shrink-0 overflow-hidden rounded-xl border border-border/40"
          >
            <img
              src={src}
              alt={`Beer Lovers ${(i % images.length) + 1}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
