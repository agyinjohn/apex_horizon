import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { AppLink } from "@/components/AppLink";
import { ArrowLink, Section, SectionLabel } from "@/components/ui-apex";
import {
  ConsentField,
  FormError,
  SelectField,
  SubmitButton,
  SuccessPanel,
  TextAreaField,
  TextField,
  fieldClass,
  FieldLabel,
} from "@/components/form-apex";
import { useLang } from "@/lib/i18n";
import { expertise } from "@/data/expertise";
import { jobs, type JobCategory } from "@/data/jobs";

export const Route = createFileRoute("/careers/")({
  head: () => ({
    meta: [
      { title: "Careers — gthink advisory consult" },
      {
        name: "description",
        content:
          "Build an advisory career at gthink advisory consult: experienced professionals, graduate opportunities and internships across Accra and Abidjan, in English and French.",
      },
      { property: "og:title", content: "Careers — gthink advisory consult" },
      {
        property: "og:description",
        content:
          "African knowledge, international standards — and a talent network for professionals considering their next move.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const pathways: {
  category: JobCategory;
  number: string;
  title: { en: string; fr: string };
  body: { en: string; fr: string };
  cta: { en: string; fr: string };
}[] = [
  {
    category: "experienced",
    number: "01",
    title: { en: "Experienced professionals", fr: "Professionnels expérimentés" },
    body: {
      en: "For professionals ready to bring their expertise to complex assignments across African markets.",
      fr: "Pour les professionnels prêts à mettre leur expertise au service de missions complexes sur les marchés africains.",
    },
    cta: { en: "View opportunities →", fr: "Voir les postes →" },
  },
  {
    category: "graduate",
    number: "02",
    title: { en: "Graduate opportunities", fr: "Programmes diplômés" },
    body: {
      en: "Start your career working alongside experienced professionals on problems that matter.",
      fr: "Démarrez votre carrière aux côtés de professionnels expérimentés, sur des problématiques qui comptent.",
    },
    cta: { en: "Explore graduate roles →", fr: "Découvrir les postes diplômés →" },
  },
  {
    category: "internship",
    number: "03",
    title: { en: "Internships", fr: "Stages" },
    body: {
      en: "Get practical exposure to consulting, research, analysis and client delivery.",
      fr: "Bénéficiez d'une exposition pratique au conseil, à la recherche, à l'analyse et à la livraison de missions.",
    },
    cta: { en: "Explore internships →", fr: "Découvrir les stages →" },
  },
];

const categoryFilters: { value: JobCategory | "all"; label: { en: string; fr: string } }[] = [
  { value: "all", label: { en: "All roles", fr: "Tous les postes" } },
  { value: "experienced", label: { en: "Experienced professionals", fr: "Professionnels expérimentés" } },
  { value: "graduate", label: { en: "Graduate", fr: "Diplômés" } },
  { value: "internship", label: { en: "Internships", fr: "Stages" } },
];

function CareersPage() {
  const { pick } = useLang();
  const [filter, setFilter] = useState<JobCategory | "all">("all");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filteredJobs = useMemo(
    () => (filter === "all" ? jobs : jobs.filter((j) => j.category === filter)),
    [filter],
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("fullName") || !data.get("email")) {
      return setError(
        pick({
          en: "Please provide your name and email.",
          fr: "Veuillez indiquer votre nom et votre e-mail.",
        }),
      );
    }
    if (!data.get("consent")) {
      return setError(
        pick({
          en: "Please confirm you accept how we handle your details.",
          fr: "Veuillez confirmer votre accord sur le traitement de vos données.",
        }),
      );
    }
    setError(null);
    setSent(true);
  };

  return (
    <>
      <PageHero
        label={pick({ en: "Careers at Apex", fr: "Carrières chez Apex" })}
        title={pick({
          en: "A career built on better questions.",
          fr: "Une carrière fondée sur de meilleures questions.",
        })}

        body={pick({
          en: "We look for people who are curious enough to ask better questions, rigorous enough to challenge easy answers and grounded enough to put clients first.",
          fr: "Nous recherchons des personnes suffisamment curieuses pour poser de meilleures questions, suffisamment rigoureuses pour remettre en cause les réponses faciles, et suffisamment ancrées pour faire passer le client en premier.",
        })}
      >
        <div className="mt-10">
          <ArrowLink to="#vacancies" variant="solid">
            {pick({ en: "Explore opportunities", fr: "Explorer les opportunités" })}
          </ArrowLink>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-px border border-hairline bg-hairline lg:grid-cols-3">
          {pathways.map((p, i) => (
            <Reveal key={p.number} delay={i * 70}>
              <div className="flex h-full flex-col bg-background p-8 lg:p-10">
                <span className="eyebrow text-primary">{p.number}</span>
                <h2 className="mt-5 font-display text-[1.375rem] leading-tight font-bold text-navy">
                  {pick(p.title)}
                </h2>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-foreground/85">
                  {pick(p.body)}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFilter(p.category);
                    document.getElementById("vacancies")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-8 inline-flex items-center gap-2.5 text-left text-[0.75rem] font-semibold tracking-[0.1em] text-primary uppercase transition-colors hover:text-navy"
                >
                  {pick(p.cta)}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="vacancies" tone="surface">
        <Reveal>
          <SectionLabel>{pick({ en: "Current vacancies", fr: "Postes ouverts" })}</SectionLabel>
          <h2 className="display-2 mt-8 max-w-3xl text-navy">
            {pick({ en: "Open roles across our practices.", fr: "Postes ouverts dans nos pratiques." })}
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          {categoryFilters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={`border px-4 py-2 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase transition-colors ${
                filter === f.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-input text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {pick(f.label)}
            </button>
          ))}
        </div>

        <ul className="mt-10 border-t border-hairline">
          {filteredJobs.map((job, i) => (
            <Reveal as="li" key={job.slug} delay={(i % 4) * 60} className="border-b border-hairline">
              <AppLink
                to={`/careers/${job.slug}`}
                className="group grid gap-2 py-7 transition-colors hover:bg-background/70 sm:grid-cols-[1.6fr_1fr_1fr] sm:items-center sm:gap-6"
              >
                <h3 className="font-display text-[1.0625rem] font-bold text-navy transition-colors group-hover:text-primary">
                  {pick(job.title)}
                </h3>
                <p className="text-[0.8125rem] text-muted-foreground">{pick(job.location)}</p>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[0.8125rem] text-muted-foreground">{pick(job.employmentType)}</p>
                  <span aria-hidden className="text-primary transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </AppLink>
            </Reveal>
          ))}
          {filteredJobs.length === 0 && (
            <li className="py-10 text-[0.9375rem] text-muted-foreground">
              {pick({ en: "No roles in this category right now.", fr: "Aucun poste dans cette catégorie pour le moment." })}
            </li>
          )}
        </ul>
      </Section>

      <Section id="talent-network">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <SectionLabel>{pick({ en: "Talent network", fr: "Réseau de talents" })}</SectionLabel>
            <h2 className="display-3 mt-6 text-navy">
              {pick({
                en: "Don't see the right role?",
                fr: "Vous ne trouvez pas le poste idéal ?",
              })}
            </h2>
            <p className="mt-6 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {pick({
                en: "Join our talent network and let us know what you could bring to Apex. Most of our senior appointments begin as a conversation months before a role is published.",
                fr: "Rejoignez notre réseau de talents et dites-nous ce que vous pourriez apporter à Apex. La plupart de nos nominations seniors commencent par un échange, des mois avant la publication d'un poste.",
              })}
            </p>
            <p className="mt-6 text-[0.8125rem] leading-relaxed text-muted-foreground italic">
              {pick({
                en: "Roles, intakes and processes described here are illustrative content prepared for a concept demonstration.",
                fr: "Les postes, promotions et processus décrits ici sont des contenus illustratifs préparés pour une démonstration de concept.",
              })}
            </p>
            <div className="mt-10">
              <ArrowLink to="/people" variant="outline">
                {pick({ en: "Meet our people", fr: "Découvrir nos équipes" })}
              </ArrowLink>
            </div>
          </Reveal>

          <Reveal delay={80}>
            {sent ? (
              <SuccessPanel
                title={pick({ en: "Profile received.", fr: "Profil reçu." })}
                body={pick({
                  en: "Thank you. Our recruitment team will review your profile in confidence and contact you if there is a suitable mandate. No information has been transmitted in this concept demonstration.",
                  fr: "Merci. Notre équipe recrutement examinera votre profil en toute confidentialité et vous contactera en cas de mission adaptée. Aucune information n'a été transmise dans cette démonstration de concept.",
                })}
              />
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
                <TextField
                  name="fullName"
                  required
                  label={pick({ en: "Full name", fr: "Nom complet" })}
                />
                <TextField
                  name="email"
                  type="email"
                  required
                  label={pick({ en: "Email", fr: "E-mail" })}
                />
                <SelectField
                  name="pathway"
                  label={pick({ en: "Pathway", fr: "Parcours" })}
                  options={[
                    {
                      value: "experienced",
                      label: pick({ en: "Experienced professional", fr: "Professionnel expérimenté" }),
                    },
                    { value: "graduate", label: pick({ en: "Graduate", fr: "Jeune diplômé" }) },
                    { value: "internship", label: pick({ en: "Internship", fr: "Stage" }) },
                  ]}
                />
                <SelectField
                  name="practice"
                  label={pick({ en: "Practice of interest", fr: "Pratique visée" })}
                  options={expertise.map((e) => ({ value: e.slug, label: pick(e.title) }))}
                />
                <SelectField
                  name="location"
                  label={pick({ en: "Preferred location", fr: "Lieu souhaité" })}
                  options={[
                    { value: "accra", label: pick({ en: "Accra", fr: "Accra" }) },
                    { value: "abidjan", label: pick({ en: "Abidjan", fr: "Abidjan" }) },
                    { value: "either", label: pick({ en: "Either", fr: "Indifférent" }) },
                  ]}
                />
                <SelectField
                  name="experience"
                  label={pick({ en: "Years of experience", fr: "Années d'expérience" })}
                  options={[
                    { value: "0-2", label: "0–2" },
                    { value: "3-6", label: "3–6" },
                    { value: "7-12", label: "7–12" },
                    { value: "12+", label: "12+" },
                  ]}
                />
                <SelectField
                  name="languages"
                  span
                  label={pick({ en: "Working languages", fr: "Langues de travail" })}
                  options={[
                    { value: "en", label: pick({ en: "English", fr: "Anglais" }) },
                    { value: "fr", label: pick({ en: "French", fr: "Français" }) },
                    { value: "both", label: pick({ en: "English and French", fr: "Anglais et français" }) },
                  ]}
                />
                <TextAreaField
                  name="statement"
                  rows={4}
                  label={pick({
                    en: "In a few lines, what kind of work do you want to do next?",
                    fr: "En quelques lignes, quel type de missions souhaitez-vous mener ?",
                  })}
                />
                <div className="sm:col-span-2">
                  <FieldLabel htmlFor="cv">
                    {pick({ en: "Attach CV (PDF or Word)", fr: "Joindre un CV (PDF ou Word)" })}
                  </FieldLabel>
                  <input
                    id="cv"
                    name="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className={fieldClass}
                  />
                  <p className="mt-2 text-[0.75rem] text-muted-foreground">
                    {pick({
                      en: "Illustrative only — files are not uploaded in this concept demonstration.",
                      fr: "À titre illustratif — aucun fichier n'est transféré dans cette démonstration de concept.",
                    })}
                  </p>
                </div>
                <ConsentField
                  label={pick({
                    en: "I agree that Apex may hold my details confidentially and contact me about suitable opportunities.",
                    fr: "J'accepte qu'Apex conserve mes données de manière confidentielle et me contacte pour des opportunités adaptées.",
                  })}
                />
                <FormError message={error} />
                <SubmitButton>
                  {pick({ en: "Join our talent network", fr: "Rejoindre le réseau de talents" })}
                </SubmitButton>
              </form>
            )}
          </Reveal>
        </div>
      </Section>
    </>
  );
}
