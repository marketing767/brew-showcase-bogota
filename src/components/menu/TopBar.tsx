import { Link } from "@tanstack/react-router";

export function TopBar() {
  return (
    <nav className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-border px-5 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-extrabold tracking-tighter uppercase leading-[0.85]">
        Beer<br />Lovers
        <span className="text-gold italic font-serif normal-case ml-1 text-base font-bold">
          Bogotá
        </span>
      </Link>
      <Link
        to="/"
        className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-ink transition-colors"
      >
        ← Menú
      </Link>
    </nav>
  );
}
