export function SectionHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <header className="px-5 pt-8 pb-6">
      <div className="aspect-[4/3] w-full overflow-hidden bg-stone-200 mb-6 border border-border">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <p className="font-serif italic text-lg text-gold mb-1">{eyebrow}</p>
      <h1 className="text-5xl font-extrabold tracking-tighter uppercase leading-[0.85] mb-3 text-balance">
        {title}
      </h1>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[36ch] text-pretty">
        {description}
      </p>
    </header>
  );
}
