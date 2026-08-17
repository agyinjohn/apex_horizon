import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionLabel } from "@/components/ui-apex";
import {
  ConsentField,
  FormError,
  SelectField,
  SubmitButton,
  SuccessPanel,
  TextAreaField,
  TextField,
} from "@/components/form-apex";
import { useLang } from "@/lib/i18n";
import { programmeTopics } from "@/data/programmes";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/training/corporate")({
  head: () => ({
    meta: [
      { title: "Bespoke Corporate Training — gthink Academy" },
      {
        name: "description",
        content:
          "Tailored governance, risk, strategy and finance training designed around your organisation and delivered at your offices, at gthink, virtually or hybrid.",
      },
      { property: "og:title", content: "Bespoke Corporate Training — gthink Academy" },
      {
        property: "og:description",
        content: "Programmes designed around one organisation's agenda, in English or French.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/training/corporate" }],
  }),
  component: BespokePage,
});

const TOTAL_STEPS = 3;

function BespokePage() {
  const { pick } = useLang();
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deliveryModes = [
    {
      number: "01",
      title: { en: "At your offices", fr: "Dans vos bureaux" },
      body: {
        en: "We come to you, anywhere in our markets. Best where teams need to stay close to operations.",
        fr: "Nous nous déplaçons, partout dans nos marchés. Idéal lorsque les équipes doivent rester proches des opérations.",
      },
    },
    {
      number: "02",
      title: { en: "At gthink", fr: "Chez gthink" },
      body: {
        en: "Hosted in Accra or Abidjan, away from daily interruptions, with faculty available across the day.",
        fr: "À Accra ou Abidjan, à l'écart des interruptions quotidiennes, avec les intervenants disponibles toute la journée.",
      },
    },
    {
      number: "03",
      title: { en: "Virtual", fr: "À distance" },
      body: {
        en: "Live sessions for distributed teams, structured in shorter modules to hold attention.",
        fr: "Séances en direct pour équipes dispersées, structurées en modules courts pour maintenir l'attention.",
      },
    },
    {
      number: "04",
      title: { en: "Hybrid", fr: "Hybride" },
      body: {
        en: "A residential opening followed by virtual reinforcement and a practical review session.",
        fr: "Un lancement en présentiel suivi d'un renforcement à distance et d'une séance de revue pratique.",
      },
    },
  ];

  const method = [
    {
      number: "01",
      title: { en: "Diagnose", fr: "Diagnostiquer" },
      body: {
        en: "A short discovery with sponsors to establish the capability gap and the decisions it affects.",
        fr: "Une phase de découverte avec les sponsors pour établir l'écart de compétences et les décisions concernées.",
      },
    },
    {
      number: "02",
      title: { en: "Design", fr: "Concevoir" },
      body: {
        en: "A programme outline with modules, cases drawn from your sector, and measurable outcomes.",
        fr: "Un plan de programme avec modules, cas issus de votre secteur et résultats mesurables.",
      },
    },
    {
      number: "03",
      title: { en: "Deliver", fr: "Animer" },
      body: {
        en: "Practitioner-led sessions in English or French, with materials adapted to your policies.",
        fr: "Séances animées par des praticiens en anglais ou en français, avec supports adaptés à vos politiques internes.",
      },
    },
    {
      number: "04",
      title: { en: "Embed", fr: "Ancrer" },
      body: {
        en: "A follow-up review after 60 to 90 days to confirm what changed in practice, not only in knowledge.",
        fr: "Une revue de suivi à 60–90 jours pour confirmer ce qui a changé en pratique, et pas seulement en connaissances.",
      },
    },
  ];

  const stepLabels = [
    pick({ en: "Organisation", fr: "Organisation" }),
    pick({ en: "Programme", fr: "Programme" }),
    pick({ en: "Contact", fr: "Contact" }),
  ];

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (step < TOTAL_STEPS) {
      setError(null);
      setStep((s) => s + 1);
      return;
    }
    if (!data.get("contactName") || !data.get("email")) {
      return setError(
        pick({
          en: "Please provide a contact name and email.",
          fr: "Veuillez indiquer un nom de contact et un e-mail.",
        }),
      );
    }
    if (!data.get("consent")) {
      return setError(
        pick({
          en: "Please confirm you accept how we handle your enquiry.",
          fr: "Veuillez confirmer votre accord sur le traitement de votre demande.",
        }),
      );
    }
    setError(null);
    setSent(true);
  };

  return (
    <>
      <PageHero
        label={pick({ en: "Bespoke corporate training", fr: "Formation sur mesure" })}
        title={pick({
          en: "Training designed around your organisation.",
          fr: "Une formation conçue autour de votre organisation.",
        })}
        body={pick({
          en: "When several colleagues need the same capability — and the context is specific to your sector, regulator and operating model — a bespoke programme is more effective than open enrolment.",
          fr: "Lorsque plusieurs collaborateurs doivent acquérir la même compétence — dans un contexte propre à votre secteur, votre régulateur et votre modèle opérationnel — un programme sur mesure est plus efficace qu'une inscription libre.",
        })}
      />

      <Section>
        <Reveal>
          <SectionLabel>{pick({ en: "Delivery", fr: "Modalités" })}</SectionLabel>
          <h2 className="display-2 mt-8 max-w-3xl text-navy">
            {pick({
              en: "Four ways we deliver a programme.",
              fr: "Quatre façons d'animer un programme.",
            })}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {deliveryModes.map((m, i) => (
            <Reveal key={m.number} delay={i * 60}>
              <div className="border-t border-hairline pt-6">
                <span className="eyebrow text-primary">{m.number}</span>
                <h3 className="mt-3 font-display text-[1.0625rem] font-bold text-navy">
                  {pick(m.title)}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-muted-foreground">
                  {pick(m.body)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionLabel>{pick({ en: "How we work", fr: "Notre méthode" })}</SectionLabel>
          <h2 className="display-2 mt-8 max-w-3xl text-navy">
            {pick({
              en: "Diagnose, design, deliver, embed.",
              fr: "Diagnostiquer, concevoir, animer, ancrer.",
            })}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {method.map((m, i) => (
            <Reveal key={m.number} delay={i * 60}>
              <div className="h-full bg-background p-8">
                <span className="eyebrow text-primary">{m.number}</span>
                <h3 className="mt-3 font-display text-[1.0625rem] font-bold text-navy">
                  {pick(m.title)}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-muted-foreground">
                  {pick(m.body)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <SectionLabel>{pick({ en: "Enquiry", fr: "Demande" })}</SectionLabel>
            <h2 className="display-3 mt-6 text-navy">
              {pick({
                en: "Tell us what your teams need to be able to do.",
                fr: "Dites-nous ce que vos équipes doivent savoir faire.",
              })}
            </h2>
            <p className="mt-6 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {pick({
                en: "Three short steps. A member of the Academy team responds within two working days with an outline and an indicative fee basis. Enquiries are treated in confidence.",
                fr: "Trois étapes courtes. Un membre de l'équipe Academy répond sous deux jours ouvrés avec un plan et une base d'honoraires indicative. Les demandes sont traitées de manière confidentielle.",
              })}
            </p>
          </Reveal>

          <Reveal delay={80}>
            {sent ? (
              <SuccessPanel
                title={pick({ en: "Enquiry received.", fr: "Demande reçue." })}
                body={pick({
                  en: "Thank you. The Academy team will come back to you within two working days. No information has been transmitted in this concept demonstration.",
                  fr: "Merci. L'équipe Academy vous répondra sous deux jours ouvrés. Aucune information n'a été transmise dans cette démonstration de concept.",
                })}
              />
            ) : (
              <div className="border border-hairline p-8 lg:p-10">
                <ol className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-hairline pb-6">
                  {stepLabels.map((label, i) => (
                    <li
                      key={label}
                      aria-current={step === i + 1 ? "step" : undefined}
                      className={cn(
                        "text-[0.6875rem] font-semibold tracking-[0.16em] uppercase",
                        step === i + 1
                          ? "text-primary"
                          : step > i + 1
                            ? "text-navy"
                            : "text-muted-foreground/60",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")} · {label}
                    </li>
                  ))}
                </ol>

                <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-6 sm:grid-cols-2">
                  {step === 1 && (
                    <>
                        <TextField
                          name="organisation"
                          required
                          span
                          label={pick({ en: "Organisation", fr: "Organisation" })}
                        />
                        <TextField
                          name="sector"
                          label={pick({ en: "Sector", fr: "Secteur" })}
                        />
                        <SelectField
                          name="country"
                          label={pick({ en: "Country", fr: "Pays" })}
                          options={[
                            { value: "ghana", label: pick({ en: "Ghana", fr: "Ghana" }) },
                            { value: "civ", label: pick({ en: "Côte d'Ivoire", fr: "Côte d'Ivoire" }) },
                            { value: "nigeria", label: pick({ en: "Nigeria", fr: "Nigéria" }) },
                            { value: "other", label: pick({ en: "Other", fr: "Autre" }) },
                          ]}
                        />
                        <SelectField
                          name="participants"
                          label={pick({ en: "Participants", fr: "Participants" })}
                          options={[
                            { value: "4-10", label: "4–10" },
                            { value: "11-25", label: "11–25" },
                            { value: "26-50", label: "26–50" },
                            { value: "50+", label: "50+" },
                          ]}
                        />
                        <SelectField
                          name="seniority"
                          label={pick({ en: "Seniority", fr: "Niveau hiérarchique" })}
                          options={[
                            { value: "board", label: pick({ en: "Board", fr: "Conseil" }) },
                            { value: "executive", label: pick({ en: "Executive", fr: "Direction générale" }) },
                            { value: "senior", label: pick({ en: "Senior management", fr: "Encadrement supérieur" }) },
                            { value: "specialist", label: pick({ en: "Specialists", fr: "Spécialistes" }) },
                          ]}
                        />
                    </>
                  )}


                  {step === 2 && (
                    <>
                      <SelectField
                        name="topic"
                        span
                        label={pick({ en: "Programme area", fr: "Domaine du programme" })}
                        options={programmeTopics.map((t) => ({
                          value: t.key,
                          label: pick(t.label),
                        }))}
                      />
                      <SelectField
                        name="delivery"
                        label={pick({ en: "Preferred delivery", fr: "Modalité souhaitée" })}
                        options={[
                          { value: "your-offices", label: pick({ en: "At your offices", fr: "Dans vos bureaux" }) },
                          { value: "at-apex", label: pick({ en: "At gthink", fr: "Chez gthink" }) },
                          { value: "virtual", label: pick({ en: "Virtual", fr: "À distance" }) },
                          { value: "hybrid", label: pick({ en: "Hybrid", fr: "Hybride" }) },
                        ]}
                      />
                      <SelectField
                        name="language"
                        label={pick({ en: "Language of delivery", fr: "Langue d'animation" })}
                        options={[
                          { value: "en", label: pick({ en: "English", fr: "Anglais" }) },
                          { value: "fr", label: pick({ en: "French", fr: "Français" }) },
                          { value: "both", label: pick({ en: "Both", fr: "Les deux" }) },
                        ]}
                      />
                      <SelectField
                        name="timing"
                        label={pick({ en: "Indicative timing", fr: "Échéance indicative" })}
                        options={[
                          { value: "quarter", label: pick({ en: "This quarter", fr: "Ce trimestre" }) },
                          { value: "next-quarter", label: pick({ en: "Next quarter", fr: "Trimestre prochain" }) },
                          { value: "planning", label: pick({ en: "Planning ahead", fr: "En anticipation" }) },
                        ]}
                      />
                      <SelectField
                        name="duration"
                        label={pick({ en: "Preferred duration", fr: "Durée souhaitée" })}
                        options={[
                          { value: "half-day", label: pick({ en: "Half day", fr: "Demi-journée" }) },
                          { value: "one-day", label: pick({ en: "One day", fr: "Une journée" }) },
                          { value: "two-days", label: pick({ en: "Two days", fr: "Deux jours" }) },
                          { value: "modular", label: pick({ en: "Modular series", fr: "Série modulaire" }) },
                        ]}
                      />
                      <TextAreaField
                        name="objectives"
                        rows={4}
                        label={pick({
                          en: "What should participants be able to do afterwards?",
                          fr: "Que doivent savoir faire les participants ensuite ?",
                        })}
                      />
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <TextField
                        name="contactName"
                        required
                        label={pick({ en: "Contact name", fr: "Nom du contact" })}
                      />
                      <TextField name="role" label={pick({ en: "Role", fr: "Fonction" })} />
                      <TextField
                        name="email"
                        type="email"
                        required
                        label={pick({ en: "Email", fr: "E-mail" })}
                      />
                      <TextField
                        name="telephone"
                        label={pick({ en: "Telephone", fr: "Téléphone" })}
                      />
                      <TextAreaField
                        name="notes"
                        rows={3}
                        label={pick({
                          en: "Anything else we should know",
                          fr: "Autres éléments utiles",
                        })}
                      />
                      <ConsentField
                        label={pick({
                          en: "I agree that gthink may contact me about this training enquiry. Information is handled under professional confidentiality obligations.",
                          fr: "J'accepte que gthink me contacte au sujet de cette demande de formation. Les informations sont traitées sous obligation de confidentialité professionnelle.",
                        })}
                      />
                    </>
                  )}

                  <FormError message={error} />

                  <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          setError(null);
                          setStep((s) => s - 1);
                        }}
                        className="inline-flex min-h-12 items-center border border-input px-6 py-4 text-[0.75rem] font-semibold tracking-[0.1em] text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
                      >
                        {pick({ en: "Back", fr: "Retour" })}
                      </button>
                    )}
                    <button
                      type="submit"
                      className="inline-flex min-h-12 items-center gap-2.5 border border-primary bg-primary px-7 py-4 text-[0.75rem] font-semibold tracking-[0.1em] text-primary-foreground uppercase transition-colors hover:border-navy hover:bg-navy"
                    >
                      {step < TOTAL_STEPS
                        ? pick({ en: "Continue", fr: "Continuer" })
                        : pick({ en: "Send enquiry", fr: "Envoyer la demande" })}
                    </button>
                    <span className="text-[0.75rem] text-muted-foreground">
                      {pick({ en: "Step", fr: "Étape" })} {step}/{TOTAL_STEPS}
                    </span>
                  </div>
                </form>
              </div>
            )}
          </Reveal>
        </div>
      </Section>
    </>
  );
}
