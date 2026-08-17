import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { AppLink } from "@/components/AppLink";
import { CaseCard } from "@/components/CaseCard";
import { ArrowLink, SectionLabel } from "@/components/ui-apex";
import { EngagementCta } from "@/components/sections/EngagementCta";
import { useLang } from "@/lib/i18n";
import { expertise } from "@/data/expertise";
import { featuredCases } from "@/data/case-studies";

export const Route = createFileRoute("/expertise/")({
  head: () => ({
    meta: [
      { title: "Expertise — Apex Advisory Group" },
      {
        name: "description",
        content:
          "Strategy, transactions, financial advisory, risk and governance, technology and market intelligence for organisations operating in African markets.",
      },
      { property: "og:title", content: "Expertise — Apex Advisory Group" },
      {
        property: "og:description",
        content: "Expertise built around the decisions that matter.",
      },
      { property: "og:url", content: "/expertise" },
    ],
    links: [{ rel: "canonical", href: "/expertise" }],
  }),
  component: ExpertisePage,
});

function ExpertisePage() {
  const { t, pick } = useLang();
  const cases = featuredCases.slice(0, 3);

  return (
    <>
      <PageHero label={t("expertise.label")} title={t("expertise.title")} />
      <section className="py-16 lg:py-24">
        <div className="container-apex">
          <ul className="border-t border-hairline">
            {expertise.map((e, i) => (
              <Reveal as="li" key={e.slug} delay={(i % 3) * 60} className="border-b border-hairline">
                <AppLink
                  to={`/expertise/${e.slug}`}
                  className="group grid gap-4 py-10 transition-colors hover:bg-surface/70 lg:grid-cols-[auto_1fr_1.2fr] lg:items-baseline lg:gap-12 lg:px-4"
                >
                  <span className="font-display text-[0.75rem] font-bold tracking-[0.2em] text-primary">
                    {e.number}
                  </span>
                  <h2 className="display-3 text-navy transition-colors group-hover:text-primary">
                    {pick(e.title)}
                  </h2>
                  <p className="max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {pick(e.summary)}
                  </p>
                </AppLink>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {cases.length > 0 && (
        <section className="bg-surface py-16 lg:py-24">
          <div className="container-apex">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <Reveal>
                  <SectionLabel>
                    {pick({ en: "Our work", fr: "Nos réalisations" })}
                  </SectionLabel>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="display-2 mt-4 text-navy">
                    {pick({ en: "Selected engagements.", fr: "Missions sélectionnées." })}
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={120}>
                <ArrowLink to="/case-studies">
                  {pick({ en: "View all case studies", fr: "Voir toutes les études de cas" })}
                </ArrowLink>
              </Reveal>
            </div>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cases.map((c, i) => (
                <Reveal as="li" key={c.slug} delay={i * 80}>
                  <CaseCard item={c} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <EngagementCta preset="default" />
    </>
  );
}
