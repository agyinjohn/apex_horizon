import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { InsightCard } from "@/components/InsightCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { useLang } from "@/lib/i18n";
import { insights } from "@/data/insights";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights — Apex Advisory Group" },
      {
        name: "description",
        content:
          "Perspective on African markets: investment, governance, energy, consumer demand and institutional reform from Apex Advisory Group.",
      },
      { property: "og:title", content: "Insights — Apex Advisory Group" },
      { property: "og:description", content: "Perspective for decisions that matter." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero label={t("insights.label")} title={t("insights.title")} />
      <section className="py-16 lg:py-24">
        <div className="container-apex">
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((item, i) => (
              <Reveal as="li" key={item.slug} delay={(i % 3) * 70}>
                <InsightCard item={item} withImage />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
