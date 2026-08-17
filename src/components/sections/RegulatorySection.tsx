import { useLang } from "@/lib/i18n";
import { Reveal } from "../Reveal";
import { SectionLabel } from "../ui-apex";
import type { DictKey } from "@/lib/translations";

const categories: [DictKey, DictKey][] = [
  ["regulatory.1Title", "regulatory.1Body"],
  ["regulatory.2Title", "regulatory.2Body"],
  ["regulatory.3Title", "regulatory.3Body"],
  ["regulatory.4Title", "regulatory.4Body"],
  ["regulatory.5Title", "regulatory.5Body"],
];

export function RegulatorySection({ tone = "white" }: { tone?: "white" | "surface" }) {
  const { t } = useLang();

  return (
    <section className={tone === "surface" ? "bg-surface py-20 lg:py-28" : "py-20 lg:py-28"}>
      <div className="container-apex">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <SectionLabel>{t("regulatory.label")}</SectionLabel>
          </Reveal>
          <div>
            <Reveal delay={80}>
              <h2 className="display-2 max-w-2xl text-navy">{t("regulatory.title")}</h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="lead mt-6 max-w-xl">{t("regulatory.body")}</p>
            </Reveal>
          </div>
        </div>

        <dl className="mt-16 border-t border-navy/15">
          {categories.map(([titleKey, bodyKey], i) => (
            <Reveal
              key={titleKey}
              delay={i * 60}
              className="grid gap-2 border-b border-navy/15 py-6 lg:grid-cols-[1fr_1.2fr_auto] lg:items-baseline lg:gap-10"
            >
              <dt className="font-display text-[0.8125rem] font-bold tracking-[0.16em] text-navy uppercase">
                {t(titleKey)}
              </dt>
              <dd className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                {t(bodyKey)}
              </dd>
              <dd className="text-[0.6875rem] tracking-[0.1em] text-muted-foreground/70 uppercase">
                {t("regulatory.placeholder")}
              </dd>
            </Reveal>
          ))}
        </dl>

        <p className="mt-8 text-[0.75rem] text-muted-foreground/80 italic">{t("standards.note")}</p>
      </div>
    </section>
  );
}
