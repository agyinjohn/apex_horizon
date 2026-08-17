import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { AppLink } from "@/components/AppLink";
import { Section, SectionLabel } from "@/components/ui-apex";
import {
  ConsentField,
  FieldLabel,
  FormError,
  SelectField,
  SubmitButton,
  SuccessPanel,
  TextAreaField,
  TextField,
  fieldClass,
} from "@/components/form-apex";
import { useLang } from "@/lib/i18n";
import { expertise } from "@/data/expertise";
import { industries } from "@/data/industries";

export const Route = createFileRoute("/rfp")({
  head: () => ({
    meta: [
      { title: "Submit a Request for Proposal — Apex Advisory Group" },
      {
        name: "description",
        content:
          "Submit a formal Request for Proposal to Apex Advisory Group. Structured intake, confidential handling, routed to the appropriate team.",
      },
      { property: "og:title", content: "Submit a Request for Proposal — Apex Advisory Group" },
      {
        property: "og:description",
        content: "A structured route for procurement teams and formal tender processes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/rfp" }],
  }),
  component: RfpPage,
});

const requiredFields = [
  "firstName",
  "lastName",
  "organisation",
  "email",
  "country",
  "expertiseArea",
  "description",
];

function RfpPage() {
  const { pick } = useLang();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const missing = requiredFields.some((f) => !data.get(f));
    if (missing) {
      return setError(
        pick({
          en: "Please complete all required fields, marked with an asterisk.",
          fr: "Veuillez renseigner tous les champs obligatoires, signalés par un astérisque.",
        }),
      );
    }
    if (!data.get("consent")) {
      return setError(
        pick({
          en: "Please confirm your authorisation to submit this information.",
          fr: "Veuillez confirmer que vous êtes autorisé à soumettre ces informations.",
        }),
      );
    }
    setError(null);
    setSent(true);
  };

  const steps = [
    {
      number: "01",
      title: { en: "Acknowledgement", fr: "Accusé de réception" },
      body: {
        en: "We confirm receipt within one working day and name the partner responsible for the submission.",
        fr: "Nous confirmons la réception sous un jour ouvré et désignons l'associé responsable du dossier.",
      },
    },
    {
      number: "02",
      title: { en: "Independence review", fr: "Revue d'indépendance" },
      body: {
        en: "Conflict and independence checks are completed before we proceed. If we cannot act, we say so immediately.",
        fr: "Les vérifications de conflits et d'indépendance sont réalisées avant toute suite. Si nous ne pouvons agir, nous le disons immédiatement.",
      },
    },
    {
      number: "03",
      title: { en: "Clarification", fr: "Clarification" },
      body: {
        en: "Where useful we request a short call to test scope, timing and the decision the work must support.",
        fr: "Si utile, nous demandons un court entretien pour préciser le périmètre, le calendrier et la décision à éclairer.",
      },
    },
    {
      number: "04",
      title: { en: "Proposal", fr: "Proposition" },
      body: {
        en: "A written proposal follows within five working days of clarification, in English or French, with team, method and fee basis.",
        fr: "Une proposition écrite suit sous cinq jours ouvrés après clarification, en anglais ou en français, avec équipe, méthode et base d'honoraires.",
      },
    },
  ];

  return (
    <>
      <PageHero
        label={pick({ en: "Submit an RFP", fr: "Soumettre un appel d'offres" })}
        title={pick({
          en: "Send us a formal brief.",
          fr: "Transmettez-nous un cahier des charges.",
        })}

        body={pick({
          en: "Planning an engagement? Share your requirements with us and we'll route your request to the appropriate team.",
          fr: "Vous préparez un projet ? Partagez vos besoins avec nous et nous transmettrons votre demande à l'équipe compétente.",
        })}
      />

      <section className="py-16 lg:py-24">
        <div className="container-apex grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal>
            {sent ? (
              <SuccessPanel
                title={pick({ en: "Thank you.", fr: "Merci." })}
                body={pick({
                  en: "Your request has been received. A member of our team will contact you shortly. This is a demonstration site: no information has actually been transmitted.",
                  fr: "Votre demande a bien été reçue. Un membre de notre équipe vous contactera prochainement. Ce site est une démonstration : aucune information n'a réellement été transmise.",
                })}
              />
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
                <TextField
                  name="firstName"
                  required
                  label={pick({ en: "First Name", fr: "Prénom" })}
                />
                <TextField
                  name="lastName"
                  required
                  label={pick({ en: "Last Name", fr: "Nom" })}
                />
                <TextField
                  name="organisation"
                  required
                  span
                  label={pick({ en: "Organisation", fr: "Organisation" })}
                />
                <TextField
                  name="jobTitle"
                  label={pick({ en: "Job Title", fr: "Fonction" })}
                />
                <TextField
                  name="email"
                  type="email"
                  required
                  label={pick({ en: "Work Email", fr: "E-mail professionnel" })}
                />
                <TextField
                  name="telephone"
                  label={pick({ en: "Telephone", fr: "Téléphone" })}
                />
                <TextField
                  name="country"
                  required
                  label={pick({ en: "Country", fr: "Pays" })}
                />
                <TextField
                  name="market"
                  label={pick({ en: "Relevant Market / Office", fr: "Marché / bureau concerné" })}
                />
                <SelectField
                  name="expertiseArea"
                  required
                  label={pick({ en: "Area of Expertise", fr: "Domaine d'expertise" })}
                  options={expertise.map((e) => ({ value: e.slug, label: pick(e.title) }))}
                />
                <SelectField
                  name="industry"
                  label={pick({ en: "Industry", fr: "Secteur" })}
                  options={industries.map((i) => ({ value: i.slug, label: pick(i.name) }))}
                />
                <TextField
                  name="startDate"
                  type="date"
                  label={pick({
                    en: "Expected Engagement Start Date",
                    fr: "Date de début envisagée",
                  })}
                />
                <TextField
                  name="deadline"
                  type="date"
                  label={pick({
                    en: "Proposal Submission Deadline",
                    fr: "Date limite de remise",
                  })}
                />
                <TextAreaField
                  name="description"
                  required
                  label={pick({
                    en: "Brief Description of Engagement",
                    fr: "Brève description du projet",
                  })}
                />
                <TextField
                  name="budget"
                  span
                  label={pick({
                    en: "Estimated Budget Range",
                    fr: "Fourchette budgétaire estimée",
                  })}
                />
                <div className="sm:col-span-2">
                  <FieldLabel htmlFor="document">
                    {pick({
                      en: "Upload RFP / Terms of Reference",
                      fr: "Joindre l'appel d'offres / les termes de référence",
                    }).toUpperCase()}
                  </FieldLabel>
                  <input
                    id="document"
                    name="document"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className={fieldClass}
                  />
                  <p className="mt-2 text-[0.75rem] text-muted-foreground">
                    {pick({
                      en: "Illustrative only — documents are not uploaded in this demonstration.",
                      fr: "À titre illustratif — aucun document n'est transféré dans cette démonstration.",
                    })}
                  </p>
                </div>
                <ConsentField
                  label={pick({
                    en: "I confirm that I am authorised to submit this information on behalf of my organisation.",
                    fr: "Je confirme être autorisé(e) à soumettre ces informations au nom de mon organisation.",
                  })}
                />
                <p className="text-[0.75rem] leading-relaxed text-muted-foreground sm:col-span-2">
                  {pick({
                    en: "Information you provide is treated confidentially. See our ",
                    fr: "Les informations transmises sont traitées de manière confidentielle. Voir notre ",
                  })}
                  <AppLink to="/privacy" className="text-primary underline underline-offset-4">
                    {pick({ en: "Privacy Policy", fr: "politique de confidentialité" })}
                  </AppLink>
                  .
                </p>
                <FormError message={error} />
                <SubmitButton>
                  {pick({ en: "Submit RFP →", fr: "Envoyer la demande →" })}
                </SubmitButton>
              </form>
            )}
          </Reveal>

          <Reveal delay={100}>
            <div className="border-t border-hairline pt-8">
              <SectionLabel>{pick({ en: "Our process", fr: "Notre processus" })}</SectionLabel>
              <ul className="mt-8 space-y-8">
                {steps.map((s) => (
                  <li key={s.number}>
                    <span className="eyebrow text-primary">{s.number}</span>
                    <h3 className="mt-2 font-display text-[1.0625rem] font-bold text-navy">
                      {pick(s.title)}
                    </h3>
                    <p className="mt-2 text-[0.875rem] leading-relaxed text-muted-foreground">
                      {pick(s.body)}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-10 border-t border-hairline pt-6 text-[0.8125rem] leading-relaxed text-muted-foreground">
                {pick({
                  en: "For tenders with a formal portal, send the portal reference and we will register through it. Written questions during a tender period are answered through the channel specified by the issuing organisation.",
                  fr: "Pour les appels d'offres dotés d'un portail, transmettez la référence et nous nous y enregistrerons. Les questions écrites pendant la période d'appel d'offres sont traitées via le canal indiqué par l'organisation émettrice.",
                })}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Section tone="surface">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-[0.9375rem] leading-relaxed text-muted-foreground">
            {pick({
              en: "No formal RFP yet? Use our lighter ",
              fr: "Pas encore de cahier des charges formel ? Utilisez notre ",
            })}
            <AppLink to="/request-proposal" className="text-primary underline underline-offset-4">
              {pick({ en: "Request a Proposal", fr: "demande de proposition simplifiée" })}
            </AppLink>
            {pick({ en: " form instead.", fr: "." })}
          </p>
        </Reveal>
      </Section>
    </>
  );
}
