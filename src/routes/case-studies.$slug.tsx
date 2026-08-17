import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { EngagementCta } from "@/components/sections/EngagementCta";
import { useLang } from "@/lib/i18n";
import { caseStudies, caseBySlug } from "@/data/case-studies";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const item = caseBySlug(params.slug);
    if (!item) throw notFound();
    return { headline: item.headline.en, industry: item.industry.en };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Not found — gthink advisory consult" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.industry} engagement — gthink advisory consult`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.headline },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.headline },
        { property: "og:url", content: `/case-studies/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/case-studies/${params.slug}` }],
    };
  },
  component: CaseDetail,
});

function CaseDetail() {
  const { slug } = Route.useParams();
  const { t, pick } = useLang();
  const item = caseBySlug(slug)!;
  const related = caseStudies
    .filter((c) => c.slug !== slug && c.industrySlug === item.industrySlug)
    .slice(0, 3);

  const facts = [
    [t("cases.client"), item.confidential ? t("cases.confidential") : pick(item.client)],
    [t("cases.industry"), pick(item.industry)],
    [t("cases.market"), pick(item.market)],
    [t("cases.services"), pick(item.services).join(" · ")],
    [t("cases.year"), item.year],
  ];

  const sections = [
    { heading: { en: "The context", fr: "Le contexte" }, value: item.challenge },
    { heading: { en: "Our mandate", fr: "Notre mandat" }, value: item.mandate },
    { heading: { en: "Our approach", fr: "Notre approche" }, value: item.approach },
    { heading: { en: "The outcome", fr: "Le résultat" }, value: item.outcome },
  ];

  return (
    <>
      <PageHero label={`${item.ref} · ${pick(item.industry)}`} title={pick(item.headline)} />

      <section className="py-16 lg:py-24">
        <div className="container-apex grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="space-y-10">
            {sections.map(({ heading, value }, i) => (
              <Reveal key={heading.en} delay={i * 80}>
                <h2 className="eyebrow text-primary">{pick(heading).toUpperCase()}</h2>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-foreground/85">
                  {pick(value)}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <dl className="border-t border-navy/20">
              {facts.map(([k, v]) => (
                <div key={k} className="border-b border-hairline py-4">
                  <dt className="eyebrow text-muted-foreground">{k}</dt>
                  <dd className="mt-2 text-[0.9375rem] text-navy">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-surface py-16 lg:py-24">
          <div className="container-apex">
            <h2 className="display-3 text-navy">{t("cases.related")}</h2>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c, i) => (
                <Reveal as="li" key={c.slug} delay={i * 80}>
                  <CaseCard item={c} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <EngagementCta
        title={{ en: "Facing a similar decision?", fr: "Face à une décision comparable ?" }}
        primaryLabel={{ en: "Talk to our team", fr: "Parler à notre équipe" }}
        primaryTo="/contact"
      />
    </>
  );
}
