import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { AppLink } from "@/components/AppLink";
import { Section } from "@/components/ui-apex";
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
import { expertise } from "@/data/expertise";
import { industries } from "@/data/industries";

export const Route = createFileRoute("/request-proposal")({
  head: () => ({
    meta: [
      { title: "Request a Proposal — gthink advisory consult" },
      {
        name: "description",
        content:
          "Tell us what you need and let Apex prepare an appropriate engagement approach. A lighter route for prospects without a formal RFP.",
      },
      { property: "og:title", content: "Request a Proposal — gthink advisory consult" },
      {
        property: "og:description",
        content: "A concise way to start a conversation about an engagement.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/request-proposal" }],
  }),
  component: RequestProposalPage,
});

const required = ["name", "organisation", "email", "country", "need"];

function RequestProposalPage() {
  const { pick } = useLang();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (required.some((f) => !data.get(f))) {
      return setError(
        pick({
          en: "Please complete all required fields.",
          fr: "Veuillez renseigner tous les champs obligatoires.",
        }),
      );
    }
    if (!data.get("consent")) {
      return setError(
        pick({
          en: "Please confirm you accept how we handle your request.",
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
        label={pick({ en: "Request a Proposal", fr: "Demande de proposition" })}
        title={pick({ en: "Ask us for a proposal.", fr: "Demandez-nous une proposition." })}
        body={pick({
          en: "Tell us what you need and let Apex prepare an appropriate engagement approach.",
          fr: "Décrivez-nous votre besoin et Apex préparera une approche d'intervention adaptée.",
        })}
      />

      <section className="py-16 lg:py-24">
        <div className="container-apex mx-auto max-w-2xl">
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
                  name="name"
                  required
                  span
                  label={pick({ en: "Name", fr: "Nom" })}
                />
                <TextField
                  name="organisation"
                  required
                  label={pick({ en: "Organisation", fr: "Organisation" })}
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
                <SelectField
                  name="expertiseArea"
                  label={pick({ en: "Area of Expertise", fr: "Domaine d'expertise" })}
                  options={expertise.map((e) => ({ value: e.slug, label: pick(e.title) }))}
                />
                <SelectField
                  name="industry"
                  label={pick({ en: "Industry", fr: "Secteur" })}
                  options={industries.map((i) => ({ value: i.slug, label: pick(i.name) }))}
                />
                <TextField
                  name="timing"
                  label={pick({ en: "Timing", fr: "Calendrier" })}
                />
                <TextAreaField
                  name="need"
                  required
                  label={pick({
                    en: "What you need / desired outcome",
                    fr: "Votre besoin / le résultat recherché",
                  })}
                />
                <ConsentField
                  label={pick({
                    en: "I confirm Apex may review this request and contact me about it.",
                    fr: "Je confirme qu'Apex peut examiner cette demande et me contacter à ce sujet.",
                  })}
                />
                <FormError message={error} />
                <SubmitButton>
                  {pick({ en: "Request a Proposal →", fr: "Demander une proposition →" })}
                </SubmitButton>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <Section tone="surface">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-[0.9375rem] leading-relaxed text-muted-foreground">
            {pick({
              en: "Running a formal tender or procurement process? Use our ",
              fr: "Vous menez un appel d'offres ou un processus d'achat formel ? Utilisez notre ",
            })}
            <AppLink to="/rfp" className="text-primary underline underline-offset-4">
              {pick({ en: "Submit an RFP", fr: "formulaire de soumission d'appel d'offres" })}
            </AppLink>
            {pick({ en: " form.", fr: "." })}
          </p>
        </Reveal>
      </Section>
    </>
  );
}
