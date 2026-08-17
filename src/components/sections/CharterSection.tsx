import { charter } from "@/data/people";
import { useLang } from "@/lib/i18n";
import { Reveal } from "../Reveal";
import { ArrowLink, SectionLabel } from "../ui-apex";

export function CharterSection({ tone = "white" }: { tone?: "white" | "surface" }) {
  const { t, pick } = useLang();

  return (
    <section className={tone === "surface" ? "bg-surface py-20 lg:py-28" : "py-20 lg:py-28"}>
      <div className="container-apex">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <SectionLabel>{t("charter.label")}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-2 max-w-2xl text-navy">{t("charter.title")}</h2>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {charter.map((value, i) => (
            <Reveal as="li" key={value.title.en} delay={i * 70} className="border-t border-navy/15 pt-6">
              <span className="font-display text-[0.75rem] font-bold tracking-[0.2em] text-primary">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-navy">
                {pick(value.title)}
              </h3>
              <p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-muted-foreground">
                {pick(value.body)}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={240}>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-navy/15 pt-10">
            <h3 className="font-display text-xl font-bold text-navy">
              {pick({ en: "See yourself here?", fr: "Vous vous voyez ici ?" })}
            </h3>
            <ArrowLink to="/careers" variant="outline">
              {pick({ en: "Explore careers", fr: "Découvrir les carrières" })}
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
