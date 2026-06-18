import { QueryClient } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
} from "@tanstack/react-router";
import { useEffect } from "react";

import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="font-display text-5xl mt-4">Page not found</h1>
        <p className="mt-4 text-cocoa">
          The page you're looking for has moved or no longer exists.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-outline-dark">Return Home</Link>
        </div>
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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="font-display text-4xl mt-4">This page didn't load</h1>
        <p className="mt-4 text-cocoa">Please try again, or return to the homepage.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Try again</button>
          <a href="/" className="btn-outline-dark">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { title: "Maison Argenté — Modern European Fine Dining in Mayfair, London" },
      { name: "description", content: "Seasonal European cuisine in the heart of Mayfair. Reserve your table at Maison Argenté for an evening to savour." },
      { property: "og:title", content: "Maison Argenté — Modern European Fine Dining in Mayfair, London" },
      { property: "og:description", content: "Seasonal European cuisine in the heart of Mayfair. Reserve your table at Maison Argenté for an evening to savour." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Maison Argenté" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Maison Argenté — Modern European Fine Dining in Mayfair, London" },
      { name: "twitter:description", content: "Seasonal European cuisine in the heart of Mayfair. Reserve your table at Maison Argenté for an evening to savour." },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
