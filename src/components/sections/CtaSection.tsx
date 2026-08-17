import evening from "@/assets/cta-evening.jpg";
import { useLang } from "@/lib/i18n";
import { Reveal } from "../Reveal";
import { ArrowLink, SectionLabel } from "../ui-apex";

export function CtaSection() {
  const { t, pick } = useLang();

  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img
        src={evening}
        alt={pick({
          en: "Illuminated office towers in a city business district at night",
          fr: "Tours de bureaux illuminées dans un quartier d'affaires la nuit",
        })}
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(100deg,var(--navy-deep)_18%,color-mix(in_oklab,var(--navy-deep)_72%,transparent)_58%,color-mix(in_oklab,var(--navy-deep)_38%,transparent)_100%)]"
      />
      <div className="relative container-apex py-24 lg:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel tone="light">{t("cta.label")}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-2 mt-8 text-white">{t("cta.title")}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-white/75">
              {t("cta.body")}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <ArrowLink to="/contact" variant="solid">
                {t("cta.primary")}
              </ArrowLink>
              <ArrowLink to="/expertise" variant="outlineLight">
                {t("cta.secondary")}
              </ArrowLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
