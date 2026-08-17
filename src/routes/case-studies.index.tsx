import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { useLang } from "@/lib/i18n";
import { caseStudies, markets } from "@/data/case-studies";
import { industries } from "@/data/industries";
import { expertise } from "@/data/expertise";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — Apex Advisory Group" },
      {
        name: "description",
        content:
          "Illustrative advisory engagements across financial services, energy, consumer, technology and the public sector in African markets.",
      },
      { property: "og:title", content: "Case Studies — Apex Advisory Group" },
      { property: "og:description", content: "Evidence, not adjectives." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  const { t, pick } = useLang();
  const [industry, setIndustry] = useState("all");
  const [service, setService] = useState("all");
  const [market, setMarket] = useState("all");

  const results = useMemo(
    () =>
      caseStudies.filter(
        (c) =>
          (industry === "all" || c.industrySlug === industry) &&
          (service === "all" || c.serviceSlugs.includes(service)) &&
          (market === "all" || c.marketKey === market),
      ),
    [industry, service, market],
  );

  const groups = [
    {
      label: t("cases.filterIndustry"),
      value: industry,
      set: setIndustry,
      options: industries.map((i) => ({ key: i.slug, label: pick(i.name) })),
    },
    {
      label: t("cases.filterService"),
      value: service,
      set: setService,
      options: expertise.map((e) => ({ key: e.slug, label: pick(e.title) })),
    },
    {
      label: t("cases.filterMarket"),
      value: market,
      set: setMarket,
      options: markets.map((m) => ({ key: m.key, label: pick(m.label) })),
    },
  ];

  return (
    <>
      <PageHero label={t("cases.label")} title={t("cases.title")} body={t("cases.body")} />

      <section className="py-14 lg:py-20">
        <div className="container-apex">
          <div className="space-y-6">
            {groups.map((g) => (
              <div key={g.label} className="grid gap-3 lg:grid-cols-[10rem_1fr] lg:items-baseline">
                <span className="eyebrow text-muted-foreground">{g.label}</span>
                <div className="flex flex-wrap gap-2">
                  {[{ key: "all", label: t("cases.filterAll") }, ...g.options].map((o) => (
                    <button
                      key={o.key}
                      type="button"
                      aria-pressed={g.value === o.key}
                      onClick={() => g.set(o.key)}
                      className={cn(
                        "border px-4 py-2 text-[0.75rem] font-medium transition-colors",
                        g.value === o.key
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-input text-muted-foreground hover:border-primary hover:text-primary",
                      )}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
            <p className="text-[0.8125rem] text-muted-foreground">
              <span className="font-display font-bold text-navy">{results.length}</span>{" "}
              {t("cases.results")}
            </p>
            <button
              type="button"
              onClick={() => {
                setIndustry("all");
                setService("all");
                setMarket("all");
              }}
              className="text-[0.75rem] font-semibold tracking-[0.1em] text-primary uppercase underline underline-offset-4"
            >
              {t("cases.reset")}
            </button>
          </div>

          {results.length === 0 ? (
            <p className="mt-16 text-[0.9375rem] text-muted-foreground">{t("cases.none")}</p>
          ) : (
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((c, i) => (
                <Reveal as="li" key={c.slug} delay={(i % 3) * 70}>
                  <CaseCard item={c} />
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
