import { useLang } from "@/lib/i18n";
import { Reveal } from "../Reveal";
import { SectionLabel } from "../ui-apex";
import type { DictKey } from "@/lib/translations";

const pillars: [DictKey, DictKey][] = [
  ["assurance.1Title", "assurance.1Body"],
  ["assurance.2Title", "assurance.2Body"],
  ["assurance.3Title", "assurance.3Body"],
  ["assurance.4Title", "assurance.4Body"],
];

export function AssuranceSection({
  tone = "white",
  detailed = false,
}: {
  tone?: "white" | "surface";
  detailed?: boolean;
}) {
  const { t } = useLang();

  return (
    <section className={tone === "surface" ? "bg-surface py-20 lg:py-28" : "py-20 lg:py-28"}>
      <div className="container-apex">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <SectionLabel>{t("assurance.label")}</SectionLabel>
          </Reveal>
          <div>
            <Reveal delay={80}>
              <h2 className="display-2 max-w-2xl text-navy">{t("assurance.title")}</h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="lead mt-6 max-w-xl">
                {detailed ? t("assurance.bodyLong") : t("assurance.body")}
              </p>
            </Reveal>
          </div>
        </div>

        <ul className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(([titleKey, bodyKey], i) => (
            <Reveal
              as="li"
              key={titleKey}
              delay={i * 70}
              className="border-t border-navy/15 pt-6"
            >
              <span className="font-display text-[0.75rem] font-bold tracking-[0.2em] text-primary">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold tracking-[0.02em] text-navy uppercase">
                {t(titleKey)}
              </h3>
              <p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-muted-foreground">
                {t(bodyKey)}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
