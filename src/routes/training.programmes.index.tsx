import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionLabel } from "@/components/ui-apex";
import { AppLink } from "@/components/AppLink";
import { useLang } from "@/lib/i18n";
import {
  programmeFormats,
  programmeLanguages,
  programmeLocations,
  programmeTopics,
  programmes,
} from "@/data/programmes";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/training/programmes/")({
  head: () => ({
    meta: [
      { title: "Upcoming Programmes — Apex Academy" },
      {
        name: "description",
        content:
          "Browse upcoming Apex Academy masterclasses by topic, location and language — Accra, Abidjan, Lagos and virtual sessions in English and French.",
      },
      { property: "og:title", content: "Upcoming Programmes — Apex Academy" },
      {
        property: "og:description",
        content: "Governance, risk, strategy, finance and transformation masterclasses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/training/programmes" }],
  }),
  component: ProgrammesPage,
});

function ProgrammesPage() {
  const { pick } = useLang();
  const [topic, setTopic] = useState("all");
  const [location, setLocation] = useState("all");
  const [language, setLanguage] = useState("all");
  const [format, setFormat] = useState("all");

  const filtered = useMemo(
    () =>
      programmes.filter(
        (p) =>
          (topic === "all" || p.topicKey === topic) &&
          (location === "all" || p.locationKey === location) &&
          (language === "all" || p.languageKey === language) &&
          (format === "all" || p.formatKey === format),
      ),
    [topic, location, language, format],
  );

  const allLabel = pick({ en: "All", fr: "Tous" });

  const groups = [
    {
      label: pick({ en: "Topic", fr: "Thème" }),
      value: topic,
      set: setTopic,
      options: programmeTopics,
    },
    {
      label: pick({ en: "Location", fr: "Lieu" }),
      value: location,
      set: setLocation,
      options: programmeLocations,
    },
    {
      label: pick({ en: "Language", fr: "Langue" }),
      value: language,
      set: setLanguage,
      options: programmeLanguages,
    },
    {
      label: pick({ en: "Format", fr: "Format" }),
      value: format,
      set: setFormat,
      options: programmeFormats,
    },
  ];

  return (
    <>
      <PageHero
        label={pick({ en: "Apex Academy", fr: "Apex Academy" })}
        title={pick({ en: "Upcoming programmes.", fr: "Programmes à venir." })}
        body={pick({
          en: "Open enrolment masterclasses for senior professionals. Cohorts are small, sessions are practitioner-led, and every programme is available in the working language of the market it is delivered in.",
          fr: "Masterclasses en inscription libre pour professionnels seniors. Promotions restreintes, séances animées par des praticiens, et chaque programme est proposé dans la langue de travail du marché concerné.",
        })}
      />

      <Section>
        <div className="grid gap-8 border-b border-hairline pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <fieldset key={g.label}>
              <legend className="eyebrow text-primary">{g.label}</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {[{ key: "all", label: allLabel }, ...g.options.map((o) => ({ key: o.key, label: pick(o.label) }))].map(
                  (o) => (
                    <button
                      key={o.key}
                      type="button"
                      onClick={() => g.set(o.key)}
                      aria-pressed={g.value === o.key}
                      className={cn(
                        "border px-3 py-2 text-[0.75rem] font-medium transition-colors",
                        g.value === o.key
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-input text-muted-foreground hover:border-primary hover:text-primary",
                      )}
                    >
                      {o.label}
                    </button>
                  ),
                )}
              </div>
            </fieldset>
          ))}
        </div>

        <p className="mt-8 text-[0.8125rem] text-muted-foreground">
          {filtered.length}{" "}
          {filtered.length === 1
            ? pick({ en: "programme", fr: "programme" })
            : pick({ en: "programmes", fr: "programmes" })}
        </p>

        {filtered.length === 0 ? (
          <p className="mt-10 border-t border-hairline pt-10 text-[0.9375rem] text-muted-foreground">
            {pick({
              en: "No programme matches this combination yet. Adjust the filters, or ask us to design a bespoke session for your organisation.",
              fr: "Aucun programme ne correspond encore à cette combinaison. Ajustez les filtres ou demandez-nous une session sur mesure pour votre organisation.",
            })}
          </p>
        ) : (
          <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
            {filtered.map((p, i) => (
              <li key={p.slug}>
                <Reveal delay={Math.min(i, 5) * 50}>
                  <AppLink
                    to={`/training/programmes/${p.slug}`}
                    className="group grid gap-5 py-10 lg:grid-cols-[auto_1fr_16rem] lg:gap-10"
                  >
                    <span className="eyebrow text-primary">{p.number}</span>
                    <div>
                      <span className="eyebrow text-muted-foreground">{pick(p.topic)}</span>
                      <h2 className="mt-3 font-display text-[1.375rem] leading-snug font-bold text-navy transition-colors group-hover:text-primary">
                        {pick(p.title)}
                      </h2>
                      <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">
                        {pick(p.summary)}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2.5 text-[0.75rem] font-semibold tracking-[0.1em] text-primary uppercase">
                        {pick({ en: "Programme details", fr: "Détails du programme" })}
                        <span aria-hidden className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                    <dl className="space-y-2 text-[0.8125rem] text-muted-foreground lg:border-l lg:border-hairline lg:pl-8">
                      {(
                        [
                          [pick({ en: "Dates", fr: "Dates" }), pick(p.dates)],
                          [pick({ en: "Location", fr: "Lieu" }), pick(p.location)],
                          [pick({ en: "Format", fr: "Format" }), pick(p.format)],
                          [pick({ en: "Language", fr: "Langue" }), pick(p.language)],
                          [pick({ en: "Duration", fr: "Durée" }), pick(p.duration)],
                          [pick({ en: "Fee", fr: "Frais" }), pick(p.price)],
                        ] as const
                      ).map(([k, v]) => (
                        <div key={k} className="flex justify-between gap-4">
                          <dt className="text-muted-foreground/70">{k}</dt>
                          <dd className="text-right text-navy">{v}</dd>
                        </div>
                      ))}
                      <div className="pt-2">
                        <span className="border border-primary/40 bg-brand-pale/30 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-[0.1em] text-primary uppercase">
                          {pick(p.availability)}
                        </span>
                      </div>
                    </dl>
                  </AppLink>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section tone="surface">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionLabel>
                {pick({ en: "For organisations", fr: "Pour les organisations" })}
              </SectionLabel>
              <h2 className="display-3 mt-6 max-w-2xl text-navy">
                {pick({
                  en: "Training four or more colleagues? A bespoke programme is usually the better route.",
                  fr: "Quatre collaborateurs ou plus à former ? Un programme sur mesure est généralement préférable.",
                })}
              </h2>
            </div>
            <AppLink
              to="/training/corporate"
              className="inline-flex items-center gap-2.5 border border-primary bg-primary px-6 py-4 text-[0.75rem] font-semibold tracking-[0.1em] text-primary-foreground uppercase transition-colors hover:border-navy hover:bg-navy"
            >
              {pick({ en: "Bespoke training", fr: "Formation sur mesure" })}
            </AppLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
