import { useLang } from "@/lib/i18n";
import { Reveal } from "../Reveal";
import { ArrowLink, SectionLabel } from "../ui-apex";
import type { DictKey } from "@/lib/translations";

const steps: [DictKey, DictKey][] = [
  ["foresight.1Title", "foresight.1Body"],
  ["foresight.2Title", "foresight.2Body"],
  ["foresight.3Title", "foresight.3Body"],
];

export function ForesightSection({ tone = "white" }: { tone?: "white" | "surface" }) {
  const { t } = useLang();

  return (
    <section className={tone === "surface" ? "bg-surface py-20 lg:py-28" : "py-20 lg:py-28"}>
      <div className="container-apex">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <SectionLabel>{t("foresight.label")}</SectionLabel>
          </Reveal>
          <div>
            <Reveal delay={80}>
              <h2 className="display-2 max-w-2xl text-navy">{t("foresight.title")}</h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="lead mt-6 max-w-xl">{t("foresight.body")}</p>
            </Reveal>
          </div>
        </div>

        <ol className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-3">
          {steps.map(([titleKey, bodyKey], i) => (
            <Reveal as="li" key={titleKey} delay={i * 80} className="border-t border-navy/15 pt-6">
              <span className="font-display text-[0.75rem] font-bold tracking-[0.2em] text-primary">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold tracking-[0.04em] text-navy uppercase">
                {t(titleKey)}
              </h3>
              <p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-muted-foreground">
                {t(bodyKey)}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={260}>
          <div className="mt-12">
            <ArrowLink to="/expertise" variant="text">
              {t("foresight.cta")}
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
