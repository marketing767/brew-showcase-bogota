import { useState } from "react";

export type Tab = { id: string; label: string };

export function StickyTabs({
  tabs,
  active,
  onChange,
}: {
  tabs: Tab[];
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="sticky top-[57px] z-30 bg-paper/95 backdrop-blur-sm border-b border-border flex px-5 overflow-x-auto no-scrollbar">
      {tabs.map((t) => {
        const isActive = t.id === active;
        return (
          <button
            key={t.id}
            onClick={() => {
              onChange(t.id);
              const el = document.getElementById(t.id);
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 110;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            className={`py-4 mr-7 text-[11px] font-extrabold uppercase tracking-[0.25em] border-b-2 whitespace-nowrap transition-all ${
              isActive
                ? "border-accent text-ink"
                : "border-transparent text-ink/30 hover:text-ink/60"
            }`}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

export function useTabState(initial: string) {
  return useState(initial);
}
