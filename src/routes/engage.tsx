import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowLink, Section, SectionLabel } from "@/components/ui-apex";
import { AppLink } from "@/components/AppLink";
import { useLang } from "@/lib/i18n";
import { offices } from "@/data/markets";

export const Route = createFileRoute("/engage")({
  head: () => ({
    meta: [
      { title: "Engage Apex — Advisory, RFP, Training & Careers" },
      {
        name: "description",
        content:
          "Four clear routes into Apex Advisory Group: advisory support, a formal RFP, Apex Academy training, or a career with the firm.",
      },
      { property: "og:title", content: "Engage Apex Advisory Group" },
      {
        property: "og:description",
        content: "Advisory support, RFP submission, training and careers — one structured gateway.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/engage" }],
  }),
  component: EngagePage,
});

function EngagePage() {
  const { pick } = useLang();

  const paths = [
    {
      number: "01",
      to: "/contact",
      title: { en: "Advisory Support", fr: "Accompagnement conseil" },
      lede: {
        en: "Discuss a decision, a market or an emerging risk with a partner.",
        fr: "Échanger avec un associé sur une décision, un marché ou un risque émergent.",
      },
      body: {
        en: "For organisations that want an early, confidential conversation before scoping work formally. A partner responds within two working days.",
        fr: "Pour les organisations souhaitant un premier échange confidentiel avant tout cadrage formel. Un associé répond sous deux jours ouvrés.",
      },
      cta: { en: "Start a conversation", fr: "Ouvrir un échange" },
    },
    {
      number: "02",
      to: "/rfp",
      title: { en: "Submit an RFP", fr: "Soumettre un appel d'offres" },
      lede: {
        en: "Send a formal brief, tender or request for proposal.",
        fr: "Transmettre un cahier des charges, un appel d'offres ou une demande de proposition.",
      },
      body: {
        en: "A structured submission route for procurement teams, with document upload, timelines and the option to request a non-disclosure agreement first.",
        fr: "Un parcours structuré pour les équipes achats, avec dépôt de documents, calendrier et possibilité de demander un accord de confidentialité au préalable.",
      },
      cta: { en: "Submit a brief", fr: "Déposer un dossier" },
    },
    {
      number: "03",
      to: "/academy",
      title: { en: "Apex Academy", fr: "Apex Academy" },
      lede: {
        en: "Professional programmes for individuals and bespoke training for organisations.",
        fr: "Programmes professionnels pour les individus et formations sur mesure pour les organisations.",
      },
      body: {
        en: "Open masterclasses in Accra, Abidjan, Lagos and virtually, alongside tailored programmes designed around a single organisation's agenda.",
        fr: "Masterclasses ouvertes à Accra, Abidjan, Lagos et à distance, ainsi que des programmes conçus autour de l'agenda d'une seule organisation.",
      },
      cta: { en: "Explore the Academy", fr: "Découvrir l'Academy" },
    },
    {
      number: "04",
      to: "/careers",
      title: { en: "Careers", fr: "Carrières" },
      lede: {
        en: "Experienced professionals, early careers and internships.",
        fr: "Professionnels expérimentés, jeunes diplômés et stages.",
      },
      body: {
        en: "Join a firm built on African knowledge and international standards — or join our talent network and we will contact you when a suitable mandate opens.",
        fr: "Rejoindre un cabinet fondé sur la connaissance africaine et les standards internationaux — ou rejoindre notre réseau de talents pour être contacté au bon moment.",
      },
      cta: { en: "See pathways", fr: "Voir les parcours" },
    },
  ];

  const assurances = [
    {
      title: { en: "Confidential by default", fr: "Confidentiel par défaut" },
      body: {
        en: "Every enquiry is handled under professional confidentiality obligations. Nothing is shared outside the responsible team.",
        fr: "Chaque demande est traitée sous obligation de confidentialité professionnelle et n'est pas partagée hors de l'équipe responsable.",
      },
    },
    {
      title: { en: "A partner reads it", fr: "Un associé la lit" },
      body: {
        en: "Enquiries are reviewed by a partner, not a queue. You will hear from the person who would lead the work.",
        fr: "Les demandes sont examinées par un associé, non par une file d'attente. Votre interlocuteur sera celui qui piloterait la mission.",
      },
    },
    {
      title: { en: "Independence checked first", fr: "Indépendance vérifiée d'abord" },
      body: {
        en: "We complete conflict and independence checks before accepting an engagement, and tell you promptly if we cannot act.",
        fr: "Nous réalisons les vérifications de conflits et d'indépendance avant d'accepter une mission, et vous informons rapidement si nous ne pouvons agir.",
      },
    },
    {
      title: { en: "Two languages, two markets", fr: "Deux langues, deux marchés" },
      body: {
        en: "Correspondence, proposals and delivery are available in English or French across our Accra and Abidjan practices.",
        fr: "Correspondance, propositions et exécution disponibles en anglais ou en français depuis nos bureaux d'Accra et d'Abidjan.",
      },
    },
  ];

  return (
    <>
      <PageHero
        label={pick({ en: "Talk to us", fr: "Parlons-en" })}
        title={pick({
          en: "Four clear routes into the firm.",
          fr: "Quatre voies claires vers le cabinet.",
        })}
        body={pick({
          en: "Whether you are testing an early idea, running a formal procurement process, developing your people or building your own career — start in the right place and reach the right team first time.",
          fr: "Que vous testiez une idée, meniez un processus d'achat formel, développiez vos équipes ou construisiez votre carrière — commencez au bon endroit et atteignez la bonne équipe du premier coup.",
        })}
      />

      <Section>
        <div className="grid gap-px border border-hairline bg-hairline lg:grid-cols-2">
          {paths.map((p, i) => (
            <Reveal key={p.to} delay={i * 70}>
              <AppLink
                to={p.to}
                className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-surface lg:p-12"
              >
                <span className="eyebrow text-primary">{p.number}</span>
                <h2 className="mt-6 font-display text-[1.5rem] leading-tight font-bold text-navy transition-colors group-hover:text-primary lg:text-[1.75rem]">
                  {pick(p.title)}
                </h2>
                <p className="mt-4 text-[1rem] leading-relaxed text-foreground/85">
                  {pick(p.lede)}
                </p>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {pick(p.body)}
                </p>
                <span className="mt-8 inline-flex items-center gap-2.5 text-[0.75rem] font-semibold tracking-[0.1em] text-primary uppercase">
                  {pick(p.cta)}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </AppLink>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionLabel>{pick({ en: "How we respond", fr: "Notre réponse" })}</SectionLabel>
          <h2 className="display-2 mt-8 max-w-3xl text-navy">
            {pick({
              en: "What happens after you write to us.",
              fr: "Ce qui se passe après votre message.",
            })}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {assurances.map((a, i) => (
            <Reveal key={a.title.en} delay={i * 60}>
              <div className="border-t border-hairline pt-6">
                <h3 className="font-display text-[1.0625rem] font-bold text-navy">
                  {pick(a.title)}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-muted-foreground">
                  {pick(a.body)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionLabel tone="light">
              {pick({ en: "Our offices", fr: "Nos bureaux" })}
            </SectionLabel>
            <h2 className="display-2 mt-8 text-white">
              {pick({
                en: "Prefer to speak with a specific office?",
                fr: "Vous préférez joindre un bureau précis ?",
              })}
            </h2>
            <div className="mt-10">
              <ArrowLink to="/locations" variant="outlineLight">
                {pick({ en: "All locations", fr: "Toutes les implantations" })}
              </ArrowLink>
            </div>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2">
            {offices.map((o) => (
              <div key={o.city.en} className="border-t border-white/15 pt-6">
                <h3 className="font-display text-[1.0625rem] font-bold text-white">
                  {pick(o.city)}
                </h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-white/65">
                  {pick(o.country)}
                </p>
                <p className="mt-3 text-[0.875rem] text-white/80">{o.email}</p>
                <p className="text-[0.875rem] text-white/80">{o.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
