import { Link } from "@tanstack/react-router";

export function BottomNav() {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[398px] z-40">
      <Link
        to="/"
        className="w-full bg-ink text-paper py-4 px-7 rounded-full flex justify-between items-center shadow-2xl active:scale-[0.98] transition-transform"
      >
        <span className="text-[11px] font-bold uppercase tracking-[0.25em]">
          Volver a Categorías
        </span>
        <span className="font-serif italic text-base">Menú</span>
      </Link>
    </div>
  );
}
