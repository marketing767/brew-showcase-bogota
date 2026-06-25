import type { ReactNode } from "react";
import { TopBar } from "./TopBar";
import { BottomNav } from "./BottomNav";

export function MenuShell({
  children,
  showBottomNav = true,
}: {
  children: ReactNode;
  showBottomNav?: boolean;
}) {
  return (
    <div className="min-h-screen bg-paper">
      <div className="max-w-[430px] mx-auto border-x border-border min-h-screen relative">
        <TopBar />
        {children}
        <div className="h-28" />
        {showBottomNav && <BottomNav />}
      </div>
    </div>
  );
}
