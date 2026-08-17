import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-district.jpg";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { AfricaMap } from "@/components/AfricaMap";
import { CaseCard } from "@/components/CaseCard";
import { PersonCard } from "@/components/PersonCard";
import { InsightCard } from "@/components/InsightCard";
import { ArrowLink, SectionLabel } from "@/components/ui-apex";
import { AppLink } from "@/components/AppLink";
import { TrustSection } from "@/components/sections/TrustSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { BilingualSection } from "@/components/sections/BilingualSection";
import { CharterSection } from "@/components/sections/CharterSection";
import { ForesightSection } from "@/components/sections/ForesightSection";
import { AssuranceSection } from "@/components/sections/AssuranceSection";
import { StandardsStrip } from "@/components/sections/StandardsStrip";
import { ProactiveSection } from "@/components/sections/ProactiveSection";
import { AcademySection } from "@/components/sections/AcademySection";
import { CareersTeaser } from "@/components/sections/CareersTeaser";
import { TechArchitectureSection } from "@/components/sections/TechArchitectureSection";

import { expertise } from "@/data/expertise";
import { industries } from "@/data/industries";
import { featuredCases } from "@/data/case-studies";
import { people } from "@/data/people";
import { insights } from "@/data/insights";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "gthink advisory consult — Independent African Advisory Firm" },
      {
        name: "description",
        content:
          "Independent advisory firm in Accra and Abidjan. Strategy, transactions, risk and market intelligence for African markets, to international standards.",
      },
      { property: "og:title", content: "gthink advisory consult — Independent African Advisory Firm" },
      {
        property: "og:description",
        content:
          "Insight that travels. Expertise that delivers. Independent advisory across Anglophone and Francophone Africa.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const { t, pick } = useLang();
  const homeInsights = insights.slice(0, 4);
  const featured = homeInsights[0];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-navy">
        <img
          src={hero}
          alt={t("hero.alt")}
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--navy-deep)_74%,transparent)_0%,color-mix(in_oklab,var(--navy-deep)_40%,transparent)_42%,color-mix(in_oklab,var(--navy-deep)_88%,transparent)_100%)]"
        />
        <div className="relative container-apex pt-40 pb-20 lg:pb-28">
          <div className="max-w-4xl">
            <Reveal>
              <span className="eyebrow text-white/65">{t("hero.eyebrow")}</span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="display-1 mt-8 text-white">
                <span className="block">{t("hero.title1")}</span>
                <span className="block text-brand-pale">{t("hero.title2")}</span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 max-w-2xl text-[1.0625rem] leading-relaxed text-white/75 lg:text-[1.125rem]">
                {t("hero.body")}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <ArrowLink to="/expertise" variant="solid">
                  {t("hero.cta1")}
                </ArrowLink>
                <ArrowLink to="/contact" variant="outlineLight">
                  {t("hero.cta2")}
                </ArrowLink>
              </div>
            </Reveal>
          </div>
          <Reveal delay={380}>
            <p className="mt-16 border-t border-white/20 pt-6 text-[0.6875rem] font-semibold tracking-[0.22em] text-white/55 uppercase">
              {t("hero.locations")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Introduction + stats */}
      <section className="py-20 lg:py-28">
        <div className="container-apex">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <SectionLabel>{t("intro.label")}</SectionLabel>
            </Reveal>
            <div>
              <Reveal>
                <h2 className="display-2 text-navy">{t("intro.title")}</h2>
              </Reveal>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-10">
                <Reveal delay={100}>
                  <p className="text-[0.9375rem] leading-relaxed text-foreground/85">
                    {t("intro.p1")}
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <p className="text-[0.9375rem] leading-relaxed text-foreground/85">
                    {t("intro.p2")}
                  </p>
                </Reveal>
              </div>
              <Reveal delay={240}>
                <div className="mt-10">
                  <ArrowLink to="/about">{t("intro.cta")}</ArrowLink>
                </div>
              </Reveal>
            </div>
          </div>

          <ul className="mt-20 grid gap-x-10 gap-y-10 border-t border-hairline pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: 120, suffix: "+", key: "stat.1" as const },
              { value: 2, suffix: "", key: "stat.2" as const },
              { value: 60, suffix: "+", key: "stat.3" as const },
              { value: 14, suffix: "", key: "stat.4" as const },
            ].map((s, i) => (
              <Reveal as="li" key={s.key} delay={i * 80}>
                <p className="font-display text-5xl font-bold tracking-tight text-navy">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-4 max-w-[15rem] text-[0.8125rem] leading-relaxed text-muted-foreground">
                  {t(s.key)}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Africa is not one market */}
      <section className="bg-navy py-24 text-navy-foreground lg:py-32">
        <div className="container-apex">
          <Reveal>
            <h2 className="display-2 max-w-3xl text-white">{t("africa.statement")}</h2>
          </Reveal>
          <ul className="mt-14 grid gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {(["africa.l1", "africa.l2", "africa.l3", "africa.l4"] as const).map((k, i) => (
              <Reveal as="li" key={k} delay={i * 90} className="border-t border-white/20 pt-5">
                <span className="font-display text-[1.0625rem] font-semibold text-white/90">
                  {t(k)}
                </span>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={360}>
            <p className="mt-14 max-w-2xl text-[1.0625rem] leading-relaxed text-brand-pale">
              {t("africa.close")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footprint / map */}
      <section className="py-20 lg:py-28">
        <div className="container-apex">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <Reveal>
              <SectionLabel>{t("footprint.label")}</SectionLabel>
            </Reveal>
            <div>
              <Reveal>
                <h2 className="display-2 text-navy">{t("footprint.title")}</h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="lead mt-6 max-w-xl">{t("footprint.body")}</p>
              </Reveal>
            </div>
          </div>
          <div className="mt-16">
            <AfricaMap />
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="container-apex">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <Reveal>
                <SectionLabel>{t("expertise.label")}</SectionLabel>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-2 mt-6 max-w-2xl text-navy">{t("expertise.title")}</h2>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <ArrowLink to="/expertise">{t("expertise.cta")}</ArrowLink>
            </Reveal>
          </div>

          <ul className="mt-16 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((e, i) => (
              <Reveal as="li" key={e.slug} delay={(i % 3) * 80}>
                <AppLink
                  to={`/expertise/${e.slug}`}
                  className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-brand-pale/25 lg:p-10"
                >
                  <span className="font-display text-[0.75rem] font-bold tracking-[0.2em] text-primary">
                    {e.number}
                  </span>
                  <h3 className="mt-6 font-display text-[1.375rem] leading-snug font-bold text-navy transition-colors group-hover:text-primary">
                    {pick(e.title)}
                  </h3>
                  <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {pick(e.summary)}
                  </p>
                </AppLink>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-28">
        <div className="container-apex">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <Reveal>
              <SectionLabel>{t("industries.label")}</SectionLabel>
            </Reveal>
            <div>
              <Reveal>
                <h2 className="display-2 text-navy">{t("industries.title")}</h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="lead mt-6 max-w-xl">{t("industries.body")}</p>
              </Reveal>
            </div>
          </div>

          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.slice(0, 6).map((ind, i) => (
              <Reveal as="li" key={ind.slug} delay={(i % 3) * 80}>
                <AppLink to={`/industries/${ind.slug}`} className="group block image-reveal">
                  <div className="relative aspect-4/3 overflow-hidden bg-navy">
                    <img
                      src={ind.image}
                      alt={pick(ind.imageAlt)}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="size-full object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,color-mix(in_oklab,var(--navy-deep)_82%,transparent)_100%)]"
                    />
                    <h3 className="absolute inset-x-0 bottom-0 p-6 font-display text-[1.125rem] font-bold text-white">
                      {pick(ind.name)}
                    </h3>
                  </div>
                </AppLink>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ProactiveSection />

      <ForesightSection />


      <TrustSection />

      {/* Case studies */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="container-apex">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <Reveal>
                <SectionLabel>{t("cases.label")}</SectionLabel>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-2 mt-6 max-w-2xl text-navy">{t("cases.title")}</h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="lead mt-6 max-w-xl">{t("cases.body")}</p>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <ArrowLink to="/case-studies">{t("cases.cta")}</ArrowLink>
            </Reveal>
          </div>

          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCases.slice(0, 6).map((c, i) => (
              <Reveal as="li" key={c.slug} delay={(i % 3) * 80}>
                <CaseCard item={c} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* People */}
      <section className="py-20 lg:py-28">
        <div className="container-apex">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <Reveal>
                <SectionLabel>{t("people.label")}</SectionLabel>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-2 mt-6 max-w-2xl text-navy">{t("people.title")}</h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="lead mt-6 max-w-xl">{t("people.body")}</p>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <ArrowLink to="/people">{t("people.cta")}</ArrowLink>
            </Reveal>
          </div>

          <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {people.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 4) * 80}>
                <PersonCard person={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <AssuranceSection />
      <StandardsStrip tone="surface" />

      <CharterSection />
      <BilingualSection />

      <AcademySection />
      <CareersTeaser />

      <TechArchitectureSection />


      {/* Insights */}
      <section className="py-20 lg:py-28">
        <div className="container-apex">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <Reveal>
                <SectionLabel>{t("insights.label")}</SectionLabel>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-2 mt-6 max-w-2xl text-navy">{t("insights.title")}</h2>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <ArrowLink to="/insights">{t("insights.cta")}</ArrowLink>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {featured && (
              <Reveal>
                <InsightCard item={featured} withImage />
              </Reveal>
            )}
            <ul className="space-y-10">
              {homeInsights.slice(1).map((item, i) => (
                <Reveal as="li" key={item.slug} delay={i * 90}>
                  <InsightCard item={item} />
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
