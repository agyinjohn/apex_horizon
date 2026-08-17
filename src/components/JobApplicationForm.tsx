import { useState } from "react";
import {
  ConsentField,
  FieldLabel,
  FormError,
  SubmitButton,
  SuccessPanel,
  TextAreaField,
  TextField,
  fieldClass,
} from "@/components/form-apex";
import { AppLink } from "@/components/AppLink";
import { useLang } from "@/lib/i18n";

export function JobApplicationForm({ roleLabel }: { roleLabel?: string | undefined }) {
  const { pick } = useLang();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("firstName") || !data.get("lastName") || !data.get("email")) {
      return setError(
        pick({
          en: "Please provide your name and email.",
          fr: "Veuillez indiquer votre nom et votre e-mail.",
        }),
      );
    }
    if (!data.get("cv")) {
      return setError(pick({ en: "Please attach your CV.", fr: "Veuillez joindre votre CV." }));
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

  if (sent) {
    return (
      <SuccessPanel
        title={pick({ en: "Application received.", fr: "Candidature reçue." })}
        body={pick({
          en: "Thank you for applying. Our recruitment team will review your application in confidence and contact you if you are shortlisted. No information has been transmitted in this concept demonstration.",
          fr: "Merci pour votre candidature. Notre équipe recrutement l'examinera en toute confidentialité et vous contactera en cas de présélection. Aucune information n'a été transmise dans cette démonstration de concept.",
        })}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
      <TextField name="firstName" required label={pick({ en: "First name", fr: "Prénom" })} />
      <TextField name="lastName" required label={pick({ en: "Last name", fr: "Nom" })} />
      <TextField name="email" type="email" required label={pick({ en: "Email", fr: "E-mail" })} />
      <TextField name="phone" type="tel" label={pick({ en: "Telephone", fr: "Téléphone" })} />
      <TextField name="country" label={pick({ en: "Country", fr: "Pays" })} />
      <TextField
        name="linkedin"
        label={pick({ en: "LinkedIn profile", fr: "Profil LinkedIn" })}
        placeholder="https://linkedin.com/in/…"
      />
      <TextField
        name="role"
        span
        label={pick({ en: "Role applied for", fr: "Poste visé" })}
        placeholder={roleLabel}
      />
      <TextAreaField
        name="coverNote"
        rows={4}
        label={pick({ en: "Short cover note", fr: "Note de motivation" })}
      />
      <div>
        <FieldLabel htmlFor="cv" required>
          {pick({ en: "Upload CV", fr: "Téléverser le CV" })}
        </FieldLabel>
        <input id="cv" name="cv" type="file" accept=".pdf,.doc,.docx" className={fieldClass} />
      </div>
      <div>
        <FieldLabel htmlFor="coverLetter">
          {pick({ en: "Upload cover letter", fr: "Téléverser la lettre de motivation" })}
        </FieldLabel>
        <input
          id="coverLetter"
          name="coverLetter"
          type="file"
          accept=".pdf,.doc,.docx"
          className={fieldClass}
        />
      </div>
      <p className="text-[0.75rem] leading-relaxed text-muted-foreground sm:col-span-2">
        {pick({
          en: "Illustrative only — files are not uploaded in this concept demonstration.",
          fr: "À titre illustratif — aucun fichier n'est transféré dans cette démonstration de concept.",
        })}
      </p>
      <ConsentField
        label={
          <>
            {pick({
              en: "By submitting your application, you consent to gthink advisory consult processing your personal information for recruitment purposes in accordance with our ",
              fr: "En soumettant votre candidature, vous consentez à ce qu'gthink advisory consult traite vos données personnelles à des fins de recrutement, conformément à notre ",
            })}
            <AppLink to="/privacy" className="text-primary underline underline-offset-2 hover:text-navy">
              {pick({ en: "Privacy Notice", fr: "avis de confidentialité" })}
            </AppLink>
            .
          </>
        }
      />
      <FormError message={error} />
      <SubmitButton>{pick({ en: "Submit application", fr: "Envoyer ma candidature" })}</SubmitButton>
    </form>
  );
}
