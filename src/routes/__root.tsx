import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { CartProvider } from "@/context/cart";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex flex-1 items-center justify-center px-4 py-24">
          <div className="max-w-md text-center">
            <p className="font-serif text-7xl text-primary">404</p>
            <h1 className="mt-4 font-serif text-2xl text-foreground">This page is unwritten</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              The page you're looking for doesn't exist — or perhaps it never did.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
              >
                Back to the homepage
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Marginalia — Boutique Marketing for Indie Authors" },
      {
        name: "description",
        content:
          "Amazon SEO, A+ Content, Goodreads optimization, and book promotion services that treat indie books with the polish traditional publishers reserve for their own.",
      },
      { name: "author", content: "Marginalia Studio" },
      { property: "og:title", content: "Marginalia — Boutique Marketing for Indie Authors" },
      {
        property: "og:description",
        content:
          "Amazon SEO, A+ Content, Goodreads optimization, and book promotion services for serious indie authors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Marginalia — Boutique Marketing for Indie Authors" },
      { name: "description", content: "Marginalia is a boutique book marketing studio for serious indie authors. We restructure Amazon SEO, rewrite descriptions that actually sell, design A+ content," },
      { property: "og:description", content: "Marginalia is a boutique book marketing studio for serious indie authors. We restructure Amazon SEO, rewrite descriptions that actually sell, design A+ content," },
      { name: "twitter:description", content: "Marginalia is a boutique book marketing studio for serious indie authors. We restructure Amazon SEO, rewrite descriptions that actually sell, design A+ content," },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/PlzrQaazmJNKtRzW0sTMcYFTRDE2/social-images/social-1778079637747-marginalia-logo.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/PlzrQaazmJNKtRzW0sTMcYFTRDE2/social-images/social-1778079637747-marginalia-logo.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
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
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <Toaster />
      </div>
    </CartProvider>
  );
}
