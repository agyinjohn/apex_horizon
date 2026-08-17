import { ShieldCheck } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "../Reveal";
import { SectionLabel } from "../ui-apex";
import type { DictKey } from "@/lib/translations";

const marks: { titleKey: DictKey; bodyKey: DictKey; mark: string }[] = [
  { titleKey: "standards.1Title", bodyKey: "standards.1Body", mark: "27001" },
  { titleKey: "standards.2Title", bodyKey: "standards.2Body", mark: "9001" },
  { titleKey: "standards.3Title", bodyKey: "standards.3Body", mark: "DP" },
  { titleKey: "standards.4Title", bodyKey: "standards.4Body", mark: "REG" },
];

const fullTiles = [
  {
    title: { en: "ISO/IEC 27001", fr: "ISO/IEC 27001" },
    body: { en: "Information Security Management", fr: "Management de la sécurité de l'information" },
    tag: { en: "Illustrative certification", fr: "Certification illustrative" },
    mark: "27001",
  },
  {
    title: { en: "ISO 9001", fr: "ISO 9001" },
    body: { en: "Quality Management Systems", fr: "Systèmes de management de la qualité" },
    tag: { en: "Demonstration credential", fr: "Référence de démonstration" },
    mark: "9001",
  },
  {
    title: { en: "Data Protection", fr: "Protection des données" },
    body: { en: "Privacy & Information Governance", fr: "Confidentialité & gouvernance de l'information" },
    tag: { en: "Illustrative certification", fr: "Certification illustrative" },
    mark: "DP",
  },
  {
    title: { en: "Professional Standards", fr: "Standards professionnels" },
    body: { en: "Ethics · Independence · Confidentiality", fr: "Éthique · Indépendance · Confidentialité" },
    tag: { en: "Demonstration credential", fr: "Référence de démonstration" },
    mark: "PS",
  },
];

/**
 * `variant="compact"` preserves the original homepage strip (translation-key driven).
 * `variant="full"` renders the fuller Standards & Assurance layer used on About, with
 * explicit "illustrative / demonstration" labelling on each credential tile.
 */
export function StandardsStrip({
  tone = "surface",
  variant = "compact",
}: {
  tone?: "white" | "surface";
  variant?: "compact" | "full";
}) {
  const { t, pick } = useLang();

  if (variant === "full") {
    return (
      <section className={tone === "surface" ? "bg-surface py-20 lg:py-28" : "py-20 lg:py-28"}>
        <div className="container-apex">
          <Reveal>
            <SectionLabel>
              {pick({ en: "Standards & Assurance", fr: "Standards & assurance" })}
            </SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-2 mt-6 max-w-2xl text-navy">
              {pick({
                en: "Built around professional standards.",
                fr: "Bâtis autour de standards professionnels.",
              })}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead mt-6 max-w-xl">
              {pick({
                en: "Our approach to advisory work is grounded in independence, confidentiality, professional discipline and robust information-management practices.",
                fr: "Notre approche du conseil repose sur l'indépendance, la confidentialité, la discipline professionnelle et des pratiques rigoureuses de gestion de l'information.",
              })}
            </p>
          </Reveal>

          <ul className="mt-14 grid border-t border-navy/15 sm:grid-cols-2 lg:grid-cols-4">
            {fullTiles.map((tile, i) => (
              <Reveal
                as="li"
                key={tile.title.en}
                delay={i * 70}
                className="border-b border-navy/15 px-0 py-8 sm:px-8 sm:first:pl-0 lg:border-l lg:first:border-l-0 lg:border-b-0"
              >
                <span
                  aria-hidden="true"
                  className="flex size-16 items-center justify-center rounded-full border border-primary/40 font-display text-[0.6875rem] font-bold tracking-[0.12em] text-primary"
                >
                  {tile.mark}
                </span>
                <h3 className="mt-6 font-display text-lg font-bold tracking-[0.04em] text-navy uppercase">
                  {pick(tile.title)}
                </h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-muted-foreground">
                  {pick(tile.body)}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold tracking-[0.08em] text-primary/80 uppercase">
                  <ShieldCheck className="size-3.5" strokeWidth={1.8} />
                  {pick(tile.tag)}
                </span>
              </Reveal>
            ))}
          </ul>

          <p className="mt-8 max-w-2xl text-[0.75rem] tracking-[0.06em] text-muted-foreground/80 italic">
            {pick({
              en: "Certification and regulatory information shown for demonstration purposes.",
              fr: "Informations de certification et réglementaires présentées à titre de démonstration.",
            })}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={tone === "surface" ? "bg-surface py-16 lg:py-20" : "py-16 lg:py-20"}>
      <div className="container-apex">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-navy lg:text-3xl">
            {t("standards.title")}
          </h2>
        </Reveal>

        <ul className="mt-10 grid border-t border-navy/15 sm:grid-cols-2 lg:grid-cols-4">
          {marks.map((m, i) => (
            <Reveal
              as="li"
              key={m.titleKey}
              delay={i * 70}
              className="border-b border-navy/15 px-0 py-8 sm:px-8 sm:first:pl-0 lg:border-l lg:first:border-l-0 lg:border-b-0"
            >
              <span
                aria-hidden="true"
                className="flex size-16 items-center justify-center rounded-full border border-primary/40 font-display text-[0.6875rem] font-bold tracking-[0.12em] text-primary"
              >
                {m.mark}
              </span>
              <h3 className="mt-6 font-display text-lg font-bold tracking-[0.04em] text-navy uppercase">
                {t(m.titleKey)}
              </h3>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-muted-foreground">
                {t(m.bodyKey)}
              </p>
            </Reveal>
          ))}
        </ul>

        <p className="mt-8 text-[0.75rem] tracking-[0.06em] text-muted-foreground/80 italic">
          {t("standards.note")}
        </p>
      </div>
    </section>
  );
}
