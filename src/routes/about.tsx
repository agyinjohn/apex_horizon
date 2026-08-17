import { createFileRoute } from "@tanstack/react-router";
import boardroom from "@/assets/story-boardroom.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PersonCard } from "@/components/PersonCard";
import { AfricaMap } from "@/components/AfricaMap";
import { ArrowLink, SectionLabel } from "@/components/ui-apex";
import { Play } from "lucide-react";
import { CharterSection } from "@/components/sections/CharterSection";
import { AssuranceSection } from "@/components/sections/AssuranceSection";
import { StandardsStrip } from "@/components/sections/StandardsStrip";
import { RegulatorySection } from "@/components/sections/RegulatorySection";
import { CtaSection } from "@/components/sections/CtaSection";
import { useLang } from "@/lib/i18n";
import { people } from "@/data/people";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — gthink advisory consult" },
      {
        name: "description",
        content:
          "gthink advisory consult is an independent African advisory firm operating from Accra and Abidjan, with assignment experience across the continent.",
      },
      { property: "og:title", content: "About — gthink advisory consult" },
      { property: "og:description", content: "Independent thinking. Enduring relationships." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t, pick } = useLang();

  return (
    <>
      <PageHero
        label={t("about.whoLabel")}
        title={
          <>
            <span className="block">{t("about.title1")}</span>
            <span className="block text-primary">{t("about.title2")}</span>
          </>
        }
        body={t("about.intro")}
      />

      <section className="py-16 lg:py-24">
        <div className="container-apex grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <SectionLabel>{t("about.purposeLabel")}</SectionLabel>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="display-2 text-navy">{t("about.purposeTitle")}</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="lead mt-6 max-w-xl">{t("about.purposeBody")}</p>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-foreground/85">
                {t("about.whoBody")}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-apex grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <figure className="image-reveal overflow-hidden">
              <div className="group relative aspect-4/3 overflow-hidden bg-navy">
                <img
                  src={boardroom}
                  alt={pick({
                    en: "Corporate boardroom at dusk with city view",
                    fr: "Salle de conseil au crépuscule avec vue sur la ville",
                  })}
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/25" />
                <button
                  type="button"
                  aria-label={t("about.play")}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white transition-opacity"
                >
                  <span className="flex size-16 items-center justify-center rounded-full border border-white/60 bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                    <Play className="ml-0.5 size-6" strokeWidth={1.8} fill="currentColor" />
                  </span>
                  <span className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase">
                    {pick({ en: "Our story", fr: "Notre histoire" })}
                  </span>
                </button>
              </div>
              <figcaption className="mt-4 text-[0.75rem] tracking-[0.14em] text-muted-foreground uppercase">
                {t("about.watch")}
              </figcaption>
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <SectionLabel>{t("about.storyLabel")}</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-2 mt-6 text-navy">{t("about.storyTitle")}</h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="lead mt-6">{t("about.storyBody")}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-apex">
          <Reveal>
            <SectionLabel>{t("about.howLabel")}</SectionLabel>
          </Reveal>
          <ul className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {(
              [
                ["about.how1Title", "about.how1Body"],
                ["about.how2Title", "about.how2Body"],
                ["about.how3Title", "about.how3Body"],
                ["about.how4Title", "about.how4Body"],
              ] as const
            ).map(([tk, bk], i) => (
              <Reveal as="li" key={tk} delay={i * 70} className="border-t border-navy/15 pt-6">
                <h3 className="font-display text-2xl font-bold text-navy">{t(tk)}</h3>
                <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {t(bk)}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-apex">
          <Reveal>
            <SectionLabel>{t("about.marketsLabel")}</SectionLabel>
          </Reveal>
          <div className="mt-12">
            <AfricaMap />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-apex">
          <Reveal>
            <SectionLabel>{t("about.leadershipLabel")}</SectionLabel>
          </Reveal>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {people.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 4) * 80}>
                <PersonCard person={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-apex grid gap-8 border-t border-navy/15 pt-10 sm:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-xl font-bold text-navy">
              {pick({ en: "Meet the wider team", fr: "Découvrir toute l'équipe" })}
            </h3>
            <p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-muted-foreground">
              {pick({
                en: "Browse profiles across strategy, transactions, risk and technology.",
                fr: "Parcourez les profils en stratégie, transactions, risques et technologie.",
              })}
            </p>
            <div className="mt-6">
              <ArrowLink to="/people">{t("about.leadershipLabel")}</ArrowLink>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="font-display text-xl font-bold text-navy">
              {pick({ en: "Where we operate", fr: "Où nous opérons" })}
            </h3>
            <p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-muted-foreground">
              {pick({
                en: "Offices in Accra and Abidjan, with assignment experience across the continent.",
                fr: "Bureaux à Accra et Abidjan, avec une expérience de missions à travers le continent.",
              })}
            </p>
            <div className="mt-6">
              <ArrowLink to="/locations">{t("nav.locations")}</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      <CharterSection tone="surface" />
      <AssuranceSection detailed />
      <StandardsStrip tone="surface" variant="full" />
      <RegulatorySection />
      <CtaSection />
    </>
  );
}
