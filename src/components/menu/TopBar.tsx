import { Link } from "@tanstack/react-router";
import logo from "@/assets/beer-lovers-logo.png.asset.json";

export function TopBar() {
  return (
    <nav className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-border px-5 py-3 flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <img
          src={logo.url}
          alt="Beer Lovers Bogotá"
          className="h-9 w-auto object-contain"
        />
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

