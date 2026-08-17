import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { ArrowLink } from "@/components/ui-apex";
import { EngagementCta, type EngagementPreset } from "@/components/sections/EngagementCta";
import { useLang } from "@/lib/i18n";
import { expertise } from "@/data/expertise";
import { caseStudies } from "@/data/case-studies";

export const Route = createFileRoute("/expertise/$slug")({
  loader: ({ params }) => {
    const item = expertise.find((e) => e.slug === params.slug);
    if (!item) throw notFound();
    return { slug: item.slug, title: item.title.en, summary: item.summary.en };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Apex Advisory Group" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.title} — Apex Advisory Group`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.summary },
        { property: "og:url", content: `/expertise/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/expertise/${params.slug}` }],
    };
  },
  component: ExpertiseDetail,
});

const TRANSACTION_SLUGS = ["transaction-advisory", "business-financial-advisory"];
const RISK_SLUGS = ["risk-governance", "technology-digital"];

function presetForSlug(slug: string): EngagementPreset {
  if (TRANSACTION_SLUGS.includes(slug)) return "transactions";
  if (RISK_SLUGS.includes(slug)) return "risk";
  return "default";
}

function ExpertiseDetail() {
  const { slug } = Route.useParams();
  const { t, pick } = useLang();
  const item = expertise.find((e) => e.slug === slug)!;
  const related = caseStudies.filter((c) => c.serviceSlugs.includes(slug)).slice(0, 3);

  return (
    <>
      <PageHero label={`${item.number} · ${t("expertise.label")}`} title={pick(item.title)} body={pick(item.summary)} />

      <section className="py-16 lg:py-24">
        <div className="container-apex grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <h2 className="eyebrow text-primary">{t("generic.overview")}</h2>
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-foreground/85">
              {pick(item.overview)}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="eyebrow text-primary">{t("expertise.capabilities")}</h2>
            <ul className="mt-6 border-t border-hairline">
              {pick(item.capabilities).map((c) => (
                <li
                  key={c}
                  className="border-b border-hairline py-4 text-[0.9375rem] text-foreground/85"
                >
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <ArrowLink to="/contact">{t("expertise.contact")}</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-surface py-16 lg:py-24">
          <div className="container-apex">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="display-3 text-navy">{t("cases.label")}</h2>
              <ArrowLink to="/case-studies">
                {pick({ en: "View all case studies", fr: "Voir toutes les études de cas" })}
              </ArrowLink>
            </div>
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

      <EngagementCta preset={presetForSlug(slug)} />
    </>
  );
}
