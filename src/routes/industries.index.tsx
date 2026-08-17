import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { AppLink } from "@/components/AppLink";
import { CtaSection } from "@/components/sections/CtaSection";
import { useLang } from "@/lib/i18n";
import { industries } from "@/data/industries";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industries — Apex Advisory Group" },
      {
        name: "description",
        content:
          "Sector experience across financial services, real estate and infrastructure, consumer, energy, technology, public sector and manufacturing in Africa.",
      },
      { property: "og:title", content: "Industries — Apex Advisory Group" },
      { property: "og:description", content: "Experience where it matters." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  const { t, pick } = useLang();

  return (
    <>
      <PageHero label={t("industries.label")} title={t("industries.title")} body={t("industries.body")} />
      <section className="py-16 lg:py-24">
        <div className="container-apex">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal as="li" key={ind.slug} delay={(i % 3) * 70}>
                <AppLink to={`/industries/${ind.slug}`} className="group block image-reveal">
                  <div className="aspect-4/3 overflow-hidden bg-navy">
                    <img
                      src={ind.image}
                      alt={pick(ind.imageAlt)}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="mt-5 border-t border-hairline pt-5">
                    <h2 className="font-display text-[1.125rem] font-bold text-navy transition-colors group-hover:text-primary">
                      {pick(ind.name)}
                    </h2>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                      {pick(ind.overview)}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.12em] text-primary uppercase">
                      {pick({ en: "Selected engagements", fr: "Missions sélectionnées" })}
                    </span>
                  </div>
                </AppLink>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
