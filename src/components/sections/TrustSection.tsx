import { useLang } from "@/lib/i18n";
import { Reveal } from "../Reveal";
import { SectionLabel } from "../ui-apex";

export function TrustSection() {
  const { t } = useLang();

  return (
    <section className="bg-navy py-24 text-navy-foreground lg:py-32">
      <div className="container-apex">
        <Reveal>
          <SectionLabel tone="light">{t("trust.label")}</SectionLabel>
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal delay={80}>
            <h2 className="display-2 max-w-3xl text-white">{t("trust.title")}</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-md text-[1.0625rem] leading-relaxed text-white/70 lg:mt-3">
              {t("trust.body")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
