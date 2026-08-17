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
import { LanguageProvider } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CookieConsent } from "@/components/CookieConsent";
import { AiAssistant } from "@/components/AiAssistant";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <span className="eyebrow text-primary">404</span>
        <h1 className="display-2 mt-5 text-navy">Page not found</h1>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center border border-primary bg-primary px-6 text-[0.75rem] font-semibold tracking-[0.1em] text-primary-foreground uppercase transition-colors hover:border-navy hover:bg-navy"
          >
            Go home
          </Link>
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
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="display-3 text-navy">This page didn't load</h1>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-11 items-center justify-center border border-primary bg-primary px-6 text-[0.75rem] font-semibold tracking-[0.1em] text-primary-foreground uppercase transition-colors hover:border-navy hover:bg-navy"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex min-h-11 items-center justify-center border border-input px-6 text-[0.75rem] font-semibold tracking-[0.1em] text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
          >
            Go home
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
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "gthink advisory consult — African Advisory Firm" },
      {
        name: "description",
        content:
          "Independent African advisory firm. Trust, competence, people, African knowledge, international standards.",
      },
      { name: "author", content: "gthink advisory consult" },
      { property: "og:site_name", content: "gthink advisory consult" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap",
      },
      { rel: "icon", href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%231a1a2e'/><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='20'>🌍</text></svg>", type: "image/svg+xml" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "gthink advisory consult",
          description:
            "Independent African advisory firm providing strategy, transaction, financial, risk, technology and market intelligence advisory services.",
          areaServed: ["Ghana", "Côte d'Ivoire", "Africa"],
          address: [
            {
              "@type": "PostalAddress",
              streetAddress: "gthink House, 12 Independence Avenue",
              addressLocality: "Accra",
              addressCountry: "GH",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "Immeuble gthink, 8 Boulevard Lagunaire",
              addressLocality: "Abidjan",
              addressCountry: "CI",
            },
          ],
        }),
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
      <LanguageProvider>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[90] focus:border focus:border-primary focus:bg-background focus:px-4 focus:py-3 focus:text-[0.75rem] focus:font-semibold focus:tracking-[0.1em] focus:text-navy focus:uppercase"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
        <CookieConsent />
        <AiAssistant />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
