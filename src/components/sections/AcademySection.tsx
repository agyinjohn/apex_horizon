import { useLang } from "@/lib/i18n";
import { Reveal } from "../Reveal";
import { AppLink } from "../AppLink";
import { ArrowLink, SectionLabel } from "../ui-apex";
import { programmes } from "@/data/programmes";

const formats = [
  {
    title: { en: "In person", fr: "En présentiel" },
    body: {
      en: "Small-cohort sessions in Accra and Abidjan, taught by practising advisers.",
      fr: "Sessions en petits groupes à Accra et Abidjan, animées par des conseillers en exercice.",
    },
  },
  {
    title: { en: "Virtual", fr: "À distance" },
    body: {
      en: "Live bilingual delivery for teams spread across markets and time zones.",
      fr: "Animation bilingue en direct pour des équipes réparties sur plusieurs marchés.",
    },
  },
  {
    title: { en: "In-house", fr: "En entreprise" },
    body: {
      en: "Programmes designed around your organisation and delivered at your offices.",
      fr: "Programmes conçus pour votre organisation et délivrés dans vos bureaux.",
    },
  },
];

/**
 * Homepage teaser for gthink Academy — professional development business line.
 */
export function AcademySection() {
  const { pick } = useLang();
  const preview = programmes.slice(0, 3);

  return (
    <section className="py-20 lg:py-28">
      <div className="container-apex">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Reveal>
              <SectionLabel>{pick({ en: "gthink Academy", fr: "gthink Academy" })}</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-2 mt-6 max-w-2xl text-navy">
                {pick({
                  en: "Capability, built deliberately.",
                  fr: "Des compétences construites avec méthode.",
                })}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead mt-6 max-w-xl">
                {pick({
                  en: "Professional development for boards, executives and finance and risk teams — taught by the advisers who do the work.",
                  fr: "Formation professionnelle pour conseils, dirigeants et équipes finance et risques — animée par les conseillers qui exercent le métier.",
                })}
              </p>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <ArrowLink to="/training">
              {pick({ en: "Explore training", fr: "Découvrir les formations" })}
            </ArrowLink>
          </Reveal>
        </div>

        <ul className="mt-14 grid border-t border-hairline sm:grid-cols-3">
          {formats.map((f, i) => (
            <Reveal
              as="li"
              key={f.title.en}
              delay={i * 80}
              className="border-b border-hairline py-8 sm:px-8 sm:first:pl-0 sm:not-first:border-l sm:not-first:border-l-hairline"
            >
              <h3 className="font-display text-[0.75rem] font-bold tracking-[0.2em] text-primary uppercase">
                {pick(f.title)}
              </h3>
              <p className="mt-4 text-[0.875rem] leading-relaxed text-muted-foreground">
                {pick(f.body)}
              </p>
            </Reveal>
          ))}
        </ul>

        <ul className="mt-12 divide-y divide-hairline border-y border-hairline">
          {preview.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 70}>
              <AppLink
                to={`/training/programmes/${p.slug}`}
                className="group grid gap-2 py-6 transition-colors hover:bg-brand-pale/20 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
              >
                <div>
                  <h3 className="font-display text-[1.0625rem] font-bold text-navy transition-colors group-hover:text-primary">
                    {pick(p.title)}
                  </h3>
                  <p className="mt-1 text-[0.8125rem] text-muted-foreground">
                    {pick(p.location)} · {pick(p.format)} · {pick(p.language)}
                  </p>
                </div>
                <span className="text-[0.8125rem] font-semibold tracking-[0.06em] text-navy">
                  {pick(p.dates)}
                </span>
              </AppLink>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap gap-4">
            <ArrowLink to="/training/programmes" variant="solid">
              {pick({ en: "Upcoming programmes", fr: "Prochaines formations" })}
            </ArrowLink>
            <ArrowLink to="/training/corporate" variant="outline">
              {pick({ en: "Corporate training", fr: "Formations sur mesure" })}
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
