import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { InsightCard } from "@/components/InsightCard";
import { PersonCard } from "@/components/PersonCard";
import { AppLink } from "@/components/AppLink";
import { ArrowLink, SectionLabel } from "@/components/ui-apex";
import { EngagementCta } from "@/components/sections/EngagementCta";
import { useLang } from "@/lib/i18n";
import { industries } from "@/data/industries";
import { expertise } from "@/data/expertise";
import { caseStudies } from "@/data/case-studies";
import { insights } from "@/data/insights";
import { people } from "@/data/people";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const item = industries.find((i) => i.slug === params.slug);
    if (!item) throw notFound();
    return { name: item.name.en, overview: item.overview.en };
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
    const title = `${loaderData.name} — gthink advisory consult`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.overview },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.overview },
        { property: "og:url", content: `/industries/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/industries/${params.slug}` }],
    };
  },
  component: IndustryDetail,
});

function IndustryDetail() {
  const { slug } = Route.useParams();
  const { t, pick } = useLang();
  const item = industries.find((i) => i.slug === slug)!;
  const related = caseStudies.filter((c) => c.industrySlug === slug).slice(0, 3);
  const relevant = expertise.filter((e) => item.expertiseSlugs.includes(e.slug));
  const relevantInsights = (() => {
    const matched = insights.filter((ins) =>
      pick(ins.category).toLowerCase().includes(pick(item.name).toLowerCase().split(" ")[0] ?? ""),
    );
    return (matched.length > 0 ? matched : insights).slice(0, 3);
  })();
  const relevantPeople = people.filter((p) => p.sectors.en.includes(item.name.en)).slice(0, 3);

  return (
    <>
      <PageHero
        label={`${item.number} · ${t("industries.label")}`}
        title={pick(item.name)}
        body={pick(item.overview)}
      />

      <section className="py-16 lg:py-24">
        <div className="container-apex">
          <figure className="image-reveal overflow-hidden">
            <div className="aspect-21/9 overflow-hidden bg-navy">
              <img
                src={item.image}
                alt={pick(item.imageAlt)}
                width={1920}
                height={823}
                className="size-full object-cover"
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-apex grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionLabel>
              {pick({ en: "Issues shaping the sector", fr: "Les enjeux qui façonnent le secteur" })}
            </SectionLabel>
            <ul className="mt-8 border-t border-hairline">
              {pick(item.issues).map((issue) => (
                <li key={issue} className="border-b border-hairline py-4 text-[0.9375rem] leading-relaxed text-foreground/85">
                  {issue}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <SectionLabel>
              {pick({ en: "How gthink helps", fr: "Comment gthink accompagne" })}
            </SectionLabel>
            <ul className="mt-8 border-t border-hairline">
              {pick(item.howWeHelp).map((point) => (
                <li key={point} className="border-b border-hairline py-4 text-[0.9375rem] leading-relaxed text-foreground/85">
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-apex">
          <h2 className="display-3 text-navy">{t("industries.relevantExpertise")}</h2>
          <ul className="mt-8 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {relevant.map((e, i) => (
              <Reveal as="li" key={e.slug} delay={(i % 3) * 70}>
                <AppLink
                  to={`/expertise/${e.slug}`}
                  className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-brand-pale/25"
                >
                  <h3 className="font-display text-[1.125rem] font-bold text-navy transition-colors group-hover:text-primary">
                    {pick(e.title)}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {pick(e.summary)}
                  </p>
                </AppLink>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container-apex">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="display-3 text-navy">{t("industries.selectedCases")}</h2>
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

      {relevantInsights.length > 0 && (
        <section className="bg-surface py-16 lg:py-24">
          <div className="container-apex">
            <h2 className="display-3 text-navy">{t("industries.relatedInsights")}</h2>
            <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {relevantInsights.map((ins, i) => (
                <Reveal as="li" key={ins.slug} delay={i * 80}>
                  <InsightCard item={ins} withImage />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {relevantPeople.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container-apex">
            <h2 className="display-3 text-navy">{t("industries.professionals")}</h2>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relevantPeople.map((p, i) => (
                <Reveal as="li" key={p.slug} delay={i * 80}>
                  <PersonCard person={p} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <EngagementCta
        preset="industry"
        primaryLabel={{
          en: `Talk to our ${pick(item.name).toLowerCase()} team`,
          fr: `Parler à notre équipe ${pick(item.name).toLowerCase()}`,
        }}
      />
    </>
  );
}
