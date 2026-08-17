import { createFileRoute } from "@tanstack/react-router";
import accra from "@/assets/accra.jpg";
import { Reveal } from "@/components/Reveal";
import { ArrowLink, SectionLabel } from "@/components/ui-apex";
import { AfricaMap } from "@/components/AfricaMap";
import { CtaSection } from "@/components/sections/CtaSection";
import { StandardsStrip } from "@/components/sections/StandardsStrip";
import { useLang } from "@/lib/i18n";
import { expertise } from "@/data/expertise";
import { AppLink } from "@/components/AppLink";

export const Route = createFileRoute("/gh")({
  head: () => ({
    meta: [
      { title: "Ghana — gthink advisory consult | Accra" },
      {
        name: "description",
        content:
          "gthink advisory consult's Ghana practice. Independent advisory from our Accra head office — strategy, transactions, risk and market intelligence for Ghanaian and West African markets.",
      },
      { property: "og:title", content: "Ghana — gthink advisory consult" },
      { property: "og:description", content: "Independent advisory from Accra, Ghana." },
      { property: "og:url", content: "/gh" },
    ],
    links: [{ rel: "canonical", href: "/gh" }],
  }),
  component: GhanaPage,
});

function GhanaPage() {
  const { pick } = useLang();

  const highlights = [
    {
      title: { en: "Head Office", fr: "Siège social" },
      body: { en: "gthink House, 12 Independence Avenue, Airport Commercial Area, Accra", fr: "gthink House, 12 Independence Avenue, Airport Commercial Area, Accra" },
    },
    {
      title: { en: "Market Focus", fr: "Marchés couverts" },
      body: { en: "Ghana, Nigeria, Sierra Leone, Liberia and Anglophone West Africa", fr: "Ghana, Nigéria, Sierra Leone, Liberia et Afrique de l'Ouest anglophone" },
    },
    {
      title: { en: "Languages", fr: "Langues" },
      body: { en: "English (primary) · French (available)", fr: "Anglais (principal) · Français (disponible)" },
    },
    {
      title: { en: "Regulatory", fr: "Cadre réglementaire" },
      body: { en: "Operating under Ghanaian professional services regulations. SEC-registered advisory activities.", fr: "Activités exercées sous réglementation ghanéenne des services professionnels. Activités de conseil enregistrées auprès de la SEC." },
    },
  ];

  const sectors = [
    { en: "Financial Services & Banking", fr: "Services financiers & banque" },
    { en: "Energy & Natural Resources", fr: "Énergie & ressources naturelles" },
    { en: "Real Estate & Infrastructure", fr: "Immobilier & infrastructures" },
    { en: "Public Sector & Development", fr: "Secteur public & développement" },
    { en: "Consumer & Retail", fr: "Consommation & distribution" },
    { en: "Technology & Telecoms", fr: "Technologie & télécoms" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-navy">
        <img
          src={accra}
          alt={pick({ en: "Modern commercial avenue in Accra, Ghana", fr: "Avenue commerciale moderne à Accra, Ghana" })}
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--navy-deep)_50%,transparent)_0%,color-mix(in_oklab,var(--navy-deep)_85%,transparent)_100%)]"
        />
        <div className="relative container-apex pb-16 pt-40">
          <Reveal>
            <span className="eyebrow text-white/65">
              {pick({ en: "Ghana · Accra", fr: "Ghana · Accra" })}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="display-1 mt-6 text-white">
              {pick({ en: "Advisory from the heart of West Africa.", fr: "Le conseil au cœur de l'Afrique de l'Ouest." })}
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-white/75">
              {pick({
                en: "Our Accra head office serves as the anchor for gthink's Anglophone West Africa practice — combining deep local knowledge with international professional standards.",
                fr: "Notre siège d'Accra est l'ancrage de la pratique Afrique de l'Ouest anglophone de gthink — alliant connaissance locale approfondie et standards professionnels internationaux.",
              })}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-4">
              <ArrowLink to="/contact" variant="solid">
                {pick({ en: "Talk to our Accra team", fr: "Contacter notre équipe d'Accra" })}
              </ArrowLink>
              <ArrowLink to="/expertise" variant="outlineLight">
                {pick({ en: "Our expertise", fr: "Nos expertises" })}
              </ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Zone switcher */}
      <div className="border-b border-hairline bg-surface">
        <div className="container-apex flex items-center gap-6 py-4">
          <span className="text-[0.75rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            {pick({ en: "Regional zones", fr: "Zones régionales" })}
          </span>
          <AppLink
            to="/gh"
            className="border-b-2 border-primary pb-0.5 text-[0.8125rem] font-semibold text-primary"
          >
            🇬🇭 Ghana
          </AppLink>
          <AppLink
            to="/ci"
            className="text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            🇨🇮 Côte d'Ivoire
          </AppLink>
          <AppLink
            to="/locations"
            className="ml-auto text-[0.75rem] font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {pick({ en: "All locations →", fr: "Toutes les implantations →" })}
          </AppLink>
        </div>
      </div>

      {/* Office highlights */}
      <section className="py-16 lg:py-24">
        <div className="container-apex">
          <Reveal>
            <SectionLabel>{pick({ en: "Our Ghana practice", fr: "Notre pratique Ghana" })}</SectionLabel>
          </Reveal>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal as="li" key={h.title.en} delay={i * 70} className="border-t border-hairline pt-6">
                <h3 className="font-display text-[0.75rem] font-bold tracking-[0.18em] text-primary uppercase">
                  {pick(h.title)}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {pick(h.body)}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="container-apex">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <Reveal>
              <SectionLabel>{pick({ en: "Sector focus", fr: "Secteurs prioritaires" })}</SectionLabel>
              <h2 className="display-2 mt-6 text-navy">
                {pick({ en: "Where we work in Ghana.", fr: "Nos secteurs d'intervention au Ghana." })}
              </h2>
              <p className="lead mt-6">
                {pick({
                  en: "Ghana's economy offers a diverse range of advisory opportunities — from capital markets and energy to infrastructure and consumer growth.",
                  fr: "L'économie ghanéenne offre un large éventail d'opportunités de conseil — des marchés de capitaux et de l'énergie aux infrastructures et à la croissance de la consommation.",
                })}
              </p>
              <div className="mt-8">
                <ArrowLink to="/industries">{pick({ en: "All industries", fr: "Tous les secteurs" })}</ArrowLink>
              </div>
            </Reveal>
            <ul className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
              {sectors.map((s, i) => (
                <Reveal as="li" key={s.en} delay={i * 60} className="bg-background px-6 py-5">
                  <span className="text-[0.9375rem] font-medium text-navy">{pick(s)}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Expertise preview */}
      <section className="py-16 lg:py-24">
        <div className="container-apex">
          <Reveal>
            <SectionLabel>{pick({ en: "What we do in Ghana", fr: "Ce que nous faisons au Ghana" })}</SectionLabel>
            <h2 className="display-2 mt-6 max-w-2xl text-navy">
              {pick({ en: "Full-service advisory from Accra.", fr: "Conseil complet depuis Accra." })}
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((e, i) => (
              <Reveal as="li" key={e.slug} delay={(i % 3) * 70}>
                <AppLink
                  to={`/expertise/${e.slug}`}
                  className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-brand-pale/25"
                >
                  <span className="font-display text-[0.75rem] font-bold tracking-[0.2em] text-primary">{e.number}</span>
                  <h3 className="mt-5 font-display text-[1.125rem] font-bold leading-snug text-navy transition-colors group-hover:text-primary">
                    {pick(e.title)}
                  </h3>
                </AppLink>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-apex">
          <AfricaMap />
        </div>
      </section>

      <StandardsStrip tone="surface" />
      <CtaSection />
    </>
  );
}
