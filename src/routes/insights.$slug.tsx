import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { InsightCard } from "@/components/InsightCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { useLang } from "@/lib/i18n";
import { insights } from "@/data/insights";
import { personBySlug } from "@/data/people";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const item = insights.find((i) => i.slug === params.slug);
    if (!item) throw notFound();
    return { title: item.title.en, standfirst: item.standfirst.en };
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
    return {
      meta: [
        { title: `${loaderData.title} — gthink advisory consult` },
        { name: "description", content: loaderData.standfirst },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.standfirst },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/insights/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/insights/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            description: loaderData.standfirst,
            publisher: { "@type": "Organization", name: "gthink advisory consult" },
          }),
        },
      ],
    };
  },
  component: InsightDetail,
});

function InsightDetail() {
  const { slug } = Route.useParams();
  const { t, pick } = useLang();
  const item = insights.find((i) => i.slug === slug)!;
  const author = personBySlug(item.authorSlug);
  const related = insights.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero label={pick(item.category)} title={pick(item.title)} body={pick(item.standfirst)} />

      <section className="py-16 lg:py-24">
        <div className="container-apex grid gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20">
          <Reveal>
            <dl className="border-t border-navy/20">
              {author && (
                <div className="border-b border-hairline py-4">
                  <dt className="eyebrow text-muted-foreground">{t("insights.author")}</dt>
                  <dd className="mt-2 text-[0.9375rem] text-navy">{author.name}</dd>
                </div>
              )}
              <div className="border-b border-hairline py-4">
                <dt className="eyebrow text-muted-foreground">{t("insights.published")}</dt>
                <dd className="mt-2 text-[0.9375rem] text-navy">{pick(item.date)}</dd>
              </div>
              <div className="border-b border-hairline py-4">
                <dt className="eyebrow text-muted-foreground">{t("insights.readTime")}</dt>
                <dd className="mt-2 text-[0.9375rem] text-navy">{pick(item.readTime)}</dd>
              </div>
            </dl>
          </Reveal>

          <div>
            <Reveal>
              <figure className="image-reveal overflow-hidden">
                <div className="aspect-16/9 overflow-hidden bg-surface">
                  <img
                    src={item.image}
                    alt={pick(item.imageAlt)}
                    width={1600}
                    height={900}
                    className="size-full object-cover"
                  />
                </div>
              </figure>
            </Reveal>
            <div className="mt-10 space-y-6">
              {pick(item.body).map((p, i) => (
                <Reveal key={i} delay={Math.min(i, 3) * 60}>
                  <p className="text-[1.0625rem] leading-relaxed text-foreground/85">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-apex">
          <h2 className="display-3 text-navy">{t("insights.related")}</h2>
          <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Reveal as="li" key={r.slug} delay={i * 80}>
                <InsightCard item={r} withImage />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
