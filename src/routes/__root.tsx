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
import { SiteNav } from "../components/site-nav";
import { SiteFooter } from "../components/site-footer";
import { CartSheet } from "../components/cart-sheet";
import { CartProvider } from "../lib/cart";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">This page has wandered off</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Perhaps a cup of tea and a plate of khaja will help. Head back home.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Go home</Link>
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
        <h1 className="font-serif text-2xl text-primary">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Please try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">
            Try again
          </button>
          <a href="/" className="btn-outline">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Boitas — Authentic Odia Delicacies, Crafted with Tradition" },
      {
        name: "description",
        content:
          "Boitas brings authentic, handcrafted Odia sweets and savouries — Khaja, Arisa, Chuda Mixture and more — to homes across India. Layers of joy in every bite.",
      },
      { name: "author", content: "Boitas" },
      { property: "og:title", content: "Boitas — Authentic Odia Delicacies, Crafted with Tradition" },
      {
        property: "og:description",
        content: "Handcrafted Odia delicacies. Layers of joy in every bite.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Boitas" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#7A1F1F" },
      { name: "twitter:title", content: "Boitas — Authentic Odia Delicacies, Crafted with Tradition" },
      { name: "description", content: "Boitas brings authentic, handcrafted Odia sweets and savouries — Khaja, Arisa, Chuda Mixture and more — to homes across India. Layers of joy in every bite." },
      { property: "og:description", content: "Boitas brings authentic, handcrafted Odia sweets and savouries — Khaja, Arisa, Chuda Mixture and more — to homes across India. Layers of joy in every bite." },
      { name: "twitter:description", content: "Boitas brings authentic, handcrafted Odia sweets and savouries — Khaja, Arisa, Chuda Mixture and more — to homes across India. Layers of joy in every bite." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b536fb2f-12ff-46fc-98af-082106c98acb/id-preview-0f177dfc--02a62b7a-b76f-422f-bdc4-1cd77b35010b.lovable.app-1783221477771.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b536fb2f-12ff-46fc-98af-082106c98acb/id-preview-0f177dfc--02a62b7a-b76f-422f-bdc4-1cd77b35010b.lovable.app-1783221477771.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=Caveat:wght@600&display=swap",
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
    <html lang="en">
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
      <CartProvider>
        <SiteNav />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <SiteFooter />
        <CartSheet />
      </CartProvider>
    </QueryClientProvider>
  );
}
