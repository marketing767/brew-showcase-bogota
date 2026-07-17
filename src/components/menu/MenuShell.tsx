import type { ReactNode } from "react";
import { TopBar } from "./TopBar";
import { BottomNav } from "./BottomNav";
import slogan from "@/assets/beer-lovers-slogan.png";

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
        <div className="px-5 py-10 flex justify-center">
          <img
            src={slogan}
            alt="¡La amamos, la tomamos!"
            className="w-full max-w-[280px] h-auto object-contain"
          />
        </div>
        <div className="h-28" />
        {showBottomNav && <BottomNav />}
      </div>
    </div>
  );
}
