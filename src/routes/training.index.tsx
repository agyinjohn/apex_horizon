import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowLink, Section, SectionLabel } from "@/components/ui-apex";
import { AppLink } from "@/components/AppLink";
import { useLang } from "@/lib/i18n";
import { upcomingProgrammes } from "@/data/programmes";

export const Route = createFileRoute("/training/")({
  head: () => ({
    meta: [
      { title: "gthink Academy — Professional Programmes & Bespoke Training" },
      {
        name: "description",
        content:
          "gthink Academy delivers governance, risk, strategy, finance and transformation programmes for individuals and bespoke training for organisations in Accra, Abidjan, Lagos and virtually.",
      },
      { property: "og:title", content: "gthink Academy — Learning for regulated organisations" },
      {
        property: "og:description",
        content:
          "Open masterclasses for individuals and tailored programmes designed around a single organisation's agenda.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/training" }],
  }),
  component: AcademyPage,
});

function AcademyPage() {
  const { pick } = useLang();
  const featured = upcomingProgrammes.slice(0, 4);

  const deliveryFormats = [
    {
      key: "in-person",
      title: { en: "In-person", fr: "En présentiel" },
      body: {
        en: "Cohort sessions hosted in Accra and Abidjan, in dedicated learning space away from the office.",
        fr: "Sessions en promotion organisées à Accra et Abidjan, dans un espace de formation dédié, à l'écart du bureau.",
      },
    },
    {
      key: "virtual",
      title: { en: "Virtual", fr: "Virtuel" },
      body: {
        en: "Live, practitioner-led sessions for distributed teams, delivered bilingually in English and French.",
        fr: "Sessions en direct animées par des praticiens pour des équipes dispersées, proposées en anglais et en français.",
      },
    },
    {
      key: "in-house",
      title: { en: "In-house", fr: "En interne" },
      body: {
        en: "Programmes delivered at the client's own offices, built around their agenda, sector and regulator.",
        fr: "Programmes animés dans les bureaux du client, construits autour de son agenda, de son secteur et de son régulateur.",
      },
    },
  ];

  const principles = [
    {
      number: "01",
      title: { en: "Taught by practitioners", fr: "Animé par des praticiens" },
      body: {
        en: "Every session is led by advisers who carry the same work for clients, not by career trainers.",
        fr: "Chaque séance est animée par des conseils qui exercent réellement ces missions, non par des formateurs de métier.",
      },
    },
    {
      number: "02",
      title: { en: "African context, international standards", fr: "Contexte africain, standards internationaux" },
      body: {
        en: "Frameworks are recognised internationally; the cases, regulators and constraints are the ones you work with.",
        fr: "Les cadres sont reconnus à l'international ; les cas, régulateurs et contraintes sont ceux de votre quotidien.",
      },
    },
    {
      number: "03",
      title: { en: "Deliberately small", fr: "Volontairement restreint" },
      body: {
        en: "Cohorts are capped so that participants can bring live questions and leave with decisions, not notes.",
        fr: "Les promotions sont limitées afin que les participants apportent de vraies questions et repartent avec des décisions.",
      },
    },
    {
      number: "04",
      title: { en: "Confidential in the room", fr: "Confidentiel dans la salle" },
      body: {
        en: "Discussions are held in confidence, which is what allows senior participants to speak candidly.",
        fr: "Les échanges sont confidentiels, ce qui permet aux participants seniors de s'exprimer librement.",
      },
    },
  ];

  return (
    <>
      <PageHero
        label={pick({ en: "gthink Academy", fr: "gthink Academy" })}
        title={pick({
          en: "Capability, built before it is needed.",
          fr: "Des compétences bâties avant d'en avoir besoin.",
        })}
        body={pick({
          en: "gthink Academy extends our advisory practice into learning. We work with individuals who want to sharpen judgement, and with organisations building the capability their governance, risk and growth agenda now demands.",
          fr: "gthink Academy prolonge notre pratique de conseil dans la formation. Nous accompagnons les individus qui veulent affûter leur jugement et les organisations qui construisent les compétences exigées par leur agenda de gouvernance, de risques et de croissance.",
        })}
      />

      <Section>
        <div className="grid gap-px border border-hairline bg-hairline lg:grid-cols-2">
          <Reveal>
            <AppLink
              to="/training/programmes"
              className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-surface lg:p-12"
            >
              <span className="eyebrow text-primary">
                {pick({ en: "For individuals", fr: "Pour les individus" })}
              </span>
              <h2 className="mt-6 font-display text-[1.625rem] leading-tight font-bold text-navy transition-colors group-hover:text-primary lg:text-[2rem]">
                {pick({ en: "Upcoming programmes", fr: "Programmes à venir" })}
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-foreground/85">
                {pick({
                  en: "Open masterclasses in Accra, Abidjan, Lagos and online, delivered in English or French across one or two days.",
                  fr: "Masterclasses ouvertes à Accra, Abidjan, Lagos et en ligne, animées en anglais ou en français sur un ou deux jours.",
                })}
              </p>
              <span className="mt-8 inline-flex items-center gap-2.5 text-[0.75rem] font-semibold tracking-[0.1em] text-primary uppercase">
                {pick({ en: "View the calendar", fr: "Voir le calendrier" })}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </AppLink>
          </Reveal>
          <Reveal delay={80}>
            <AppLink
              to="/training/corporate"
              className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-surface lg:p-12"
            >
              <span className="eyebrow text-primary">
                {pick({ en: "For organisations", fr: "Pour les organisations" })}
              </span>
              <h2 className="mt-6 font-display text-[1.625rem] leading-tight font-bold text-navy transition-colors group-hover:text-primary lg:text-[2rem]">
                {pick({ en: "Bespoke training", fr: "Formation sur mesure" })}
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-foreground/85">
                {pick({
                  en: "Programmes designed around one organisation's agenda and delivered at your offices, at gthink, virtually or in a hybrid format.",
                  fr: "Des programmes conçus autour de l'agenda d'une organisation et animés dans vos bureaux, chez gthink, à distance ou en format hybride.",
                })}
              </p>
              <span className="mt-8 inline-flex items-center gap-2.5 text-[0.75rem] font-semibold tracking-[0.1em] text-primary uppercase">
                {pick({ en: "Discuss a programme", fr: "Concevoir un programme" })}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </AppLink>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionLabel>{pick({ en: "Delivery formats", fr: "Modalités de formation" })}</SectionLabel>
          <h2 className="display-2 mt-8 max-w-3xl text-navy">
            {pick({
              en: "Delivered the way your teams actually work.",
              fr: "Animées comme vos équipes travaillent réellement.",
            })}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px border border-hairline bg-hairline sm:grid-cols-3">
          {deliveryFormats.map((f, i) => (
            <Reveal key={f.key} delay={i * 70}>
              <div className="h-full bg-background p-8">
                <SectionLabel>{pick(f.title)}</SectionLabel>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-foreground/85">
                  {pick(f.body)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionLabel>{pick({ en: "Next sessions", fr: "Prochaines sessions" })}</SectionLabel>
          <h2 className="display-2 mt-8 max-w-3xl text-navy">
            {pick({ en: "Currently enrolling.", fr: "Inscriptions ouvertes." })}
          </h2>
        </Reveal>
        <ul className="mt-14 divide-y divide-hairline border-y border-hairline">
          {featured.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={i * 60}>
                <AppLink
                  to={`/training/programmes/${p.slug}`}
                  className="group grid gap-4 py-8 lg:grid-cols-[auto_1fr_auto] lg:items-baseline lg:gap-10"
                >
                  <span className="eyebrow text-primary">{p.number}</span>
                  <div>
                    <h3 className="font-display text-[1.25rem] font-bold text-navy transition-colors group-hover:text-primary">
                      {pick(p.title)}
                    </h3>
                    <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">
                      {pick(p.summary)}
                    </p>
                  </div>
                  <span className="text-[0.8125rem] text-muted-foreground lg:text-right">
                    {pick(p.dates)}
                    <span className="block text-navy">{pick(p.location)}</span>
                  </span>
                </AppLink>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <ArrowLink to="/training/programmes" variant="outline">
            {pick({ en: "All programmes", fr: "Tous les programmes" })}
          </ArrowLink>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionLabel>{pick({ en: "How we teach", fr: "Notre pédagogie" })}</SectionLabel>
          <h2 className="display-2 mt-8 max-w-3xl text-navy">
            {pick({
              en: "Learning that changes a decision, not a slide deck.",
              fr: "Une formation qui change une décision, pas une présentation.",
            })}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal key={p.number} delay={i * 60}>
              <div className="border-t border-hairline pt-6">
                <span className="eyebrow text-primary">{p.number}</span>
                <h3 className="mt-3 font-display text-[1.0625rem] font-bold text-navy">
                  {pick(p.title)}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-muted-foreground">
                  {pick(p.body)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="grid gap-8 border border-hairline bg-surface p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">
            <div>
              <SectionLabel>{pick({ en: "Bespoke training", fr: "Formation sur mesure" })}</SectionLabel>
              <h2 className="display-3 mt-6 max-w-2xl text-navy">
                {pick({
                  en: "Need this for a team rather than an individual? We design it around your organisation.",
                  fr: "Besoin d'une formation pour une équipe plutôt qu'un individu ? Nous la concevons autour de votre organisation.",
                })}
              </h2>
            </div>
            <ArrowLink to="/training/corporate">
              {pick({ en: "Discuss a bespoke programme", fr: "Concevoir un programme sur mesure" })}
            </ArrowLink>
          </div>
        </Reveal>
      </Section>

      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <Reveal>
            <SectionLabel tone="light">
              {pick({ en: "Certificates", fr: "Attestations" })}
            </SectionLabel>
            <h2 className="display-2 mt-8 text-white">
              {pick({
                en: "Participants receive an gthink Academy certificate of completion.",
                fr: "Les participants reçoivent une attestation d'gthink Academy.",
              })}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-[0.9375rem] leading-relaxed text-white/70">
              {pick({
                en: "Certificates record attendance, content covered and contact hours, so they can be submitted towards continuing professional development where your professional body permits. gthink Academy programmes and certificates shown here are illustrative content prepared for a concept demonstration.",
                fr: "Les attestations mentionnent la présence, le contenu traité et les heures de formation, afin d'être présentées au titre du développement professionnel continu lorsque votre organisation professionnelle l'autorise. Les programmes et attestations présentés ici sont des contenus illustratifs préparés pour une démonstration de concept.",
              })}
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
