import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <p className="font-serif italic text-gold text-lg mb-2">404</p>
        <h1 className="text-4xl font-extrabold uppercase tracking-tighter text-ink">
          Página no encontrada
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Esta página no existe o fue movida.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-xs font-bold uppercase tracking-[0.25em] text-paper"
        >
          Volver al menú
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-extrabold uppercase tracking-tighter text-ink">
          Algo salió mal
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Intenta de nuevo o vuelve al menú principal.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-ink px-5 py-2.5 text-xs font-bold uppercase tracking-[0.25em] text-paper"
          >
            Reintentar
          </button>
          <a
            href="/"
            className="rounded-full border border-ink px-5 py-2.5 text-xs font-bold uppercase tracking-[0.25em] text-ink"
          >
            Inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#0d0606" },
      { title: "Beer Lovers Bogotá — Menú" },
      {
        name: "description",
        content:
          "Menú digital de Beer Lovers, Parque de la 93. Más de 30 cervezas importadas, cocktails, comida y licores.",
      },
      { property: "og:title", content: "Beer Lovers Bogotá — Menú" },
      {
        property: "og:description",
        content:
          "Menú digital de Beer Lovers, Parque de la 93. Más de 30 cervezas importadas, cocktails, comida y licores.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Beer Lovers Bogotá — Menú" },
      { name: "twitter:description", content: "Menú digital de Beer Lovers, Parque de la 93. Más de 30 cervezas importadas, cocktails, comida y licores." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6e7e79e2-47ea-47c2-9b33-5662d31b7709/id-preview-a166ed1b--2b7ddf30-d35f-40fe-a83f-8c7de4118a78.lovable.app-1784406013427.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6e7e79e2-47ea-47c2-9b33-5662d31b7709/id-preview-a166ed1b--2b7ddf30-d35f-40fe-a83f-8c7de4118a78.lovable.app-1784406013427.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&family=Inter+Tight:wght@400;500;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
