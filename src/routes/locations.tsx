import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { AfricaMap } from "@/components/AfricaMap";
import { CtaSection } from "@/components/sections/CtaSection";
import { useLang } from "@/lib/i18n";
import { offices } from "@/data/markets";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — Apex Advisory Group" },
      {
        name: "description",
        content:
          "Apex Advisory Group operates from Accra, Ghana and Abidjan, Côte d'Ivoire, with assignment experience across selected African markets.",
      },
      { property: "og:title", content: "Locations — Apex Advisory Group" },
      { property: "og:description", content: "Two operating markets, one firm." },
      { property: "og:url", content: "/locations" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  const { t, pick } = useLang();

  return (
    <>
      <PageHero label={t("nav.locations")} title={t("locations.title")} body={t("locations.body")} />

      <section className="py-16 lg:py-24">
        <div className="container-apex grid gap-10 sm:grid-cols-2 lg:gap-16">
          {offices.map((o, i) => (
            <Reveal key={o.key} delay={i * 100}>
              <figure className="image-reveal overflow-hidden">
                <div className="aspect-4/3 overflow-hidden bg-navy">
                  <img
                    src={o.image}
                    alt={pick(o.imageAlt)}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="size-full object-cover"
                  />
                </div>
              </figure>
              <h2 className="mt-6 font-display text-2xl font-bold text-navy">{pick(o.city)}</h2>
              <p className="mt-1 text-[0.875rem] text-primary">{pick(o.country)}</p>
              <address className="mt-5 space-y-1 border-t border-hairline pt-5 text-[0.9375rem] leading-relaxed text-muted-foreground not-italic">
                {pick(o.address).map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <a
                  href={`tel:${o.phone.replace(/[^+\d]/g, "")}`}
                  className="mt-3 block text-navy hover:text-primary"
                >
                  {o.phone}
                </a>
                <a href={`mailto:${o.email}`} className="block text-navy hover:text-primary">
                  {o.email}
                </a>
              </address>
              <p className="mt-4 text-[0.8125rem] text-muted-foreground">
                {t("locations.hours")}: {t("locations.hoursValue")}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-apex">
          <AfricaMap />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
