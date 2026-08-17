import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
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
} from "@/components/form-apex";
import { useLang } from "@/lib/i18n";
import { programmes } from "@/data/programmes";

export const Route = createFileRoute("/training/programmes/$slug")({
  loader: ({ params }) => {
    const programme = programmes.find((p) => p.slug === params.slug);
    if (!programme) throw notFound();
    return { slug: programme.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Programme unavailable — gthink Academy" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const programme = programmes.find((p) => p.slug === loaderData.slug)!;
    const title = `${programme.title.en} — gthink Academy`;
    return {
      meta: [
        { title },
        { name: "description", content: programme.summary.en },
        { property: "og:title", content: title },
        { property: "og:description", content: programme.summary.en },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/training/programmes/${programme.slug}` }],
    };
  },
  component: ProgrammeDetail,
});

function ProgrammeDetail() {
  const { slug } = Route.useLoaderData();
  const { pick } = useLang();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const programme = programmes.find((p) => p.slug === slug)!;

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

  const facts = [
    [pick({ en: "Dates", fr: "Dates" }), pick(programme.dates)],
    [pick({ en: "Location", fr: "Lieu" }), pick(programme.location)],
    [pick({ en: "Format", fr: "Format" }), pick(programme.format)],
    [pick({ en: "Language of delivery", fr: "Langue d'animation" }), pick(programme.language)],
    [pick({ en: "Duration", fr: "Durée" }), pick(programme.duration)],
    [pick({ en: "Fee", fr: "Frais de participation" }), pick(programme.price)],
    [pick({ en: "Availability", fr: "Disponibilité" }), pick(programme.availability)],
  ] as const;

  const related = programmes.filter((p) => p.slug !== programme.slug).slice(0, 3);

  return (
    <>
      <PageHero
        label={pick(programme.topic)}
        title={pick(programme.title)}
        body={pick(programme.summary)}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel>{pick({ en: "Overview", fr: "Présentation" })}</SectionLabel>
              <p className="lead mt-6">{pick(programme.overview)}</p>
            </Reveal>

            <Reveal delay={70}>
              <div className="mt-14">
                <SectionLabel>{pick({ en: "Who it is for", fr: "Public visé" })}</SectionLabel>
                <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
                  {pick(programme.audience).map((a) => (
                    <li key={a} className="py-4 text-[0.9375rem] text-foreground/85">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={110}>
              <div className="mt-14">
                <SectionLabel>
                  {pick({ en: "What you will take away", fr: "Ce que vous en retirerez" })}
                </SectionLabel>
                <ol className="mt-6 space-y-5">
                  {pick(programme.outcomes).map((o, i) => (
                    <li key={o} className="flex gap-5">
                      <span className="eyebrow shrink-0 text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.9375rem] leading-relaxed text-foreground/85">{o}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-14">
                <SectionLabel>{pick({ en: "Structure", fr: "Structure" })}</SectionLabel>
                <dl className="mt-6 divide-y divide-hairline border-y border-hairline">
                  {pick(programme.structure).map((s) => (
                    <div key={s.label} className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr] sm:gap-8">
                      <dt className="eyebrow text-primary">{s.label}</dt>
                      <dd className="text-[0.9375rem] text-foreground/85">{s.detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={170}>
              <div className="mt-14 border-t border-hairline pt-8">
                <SectionLabel>{pick({ en: "Faculty", fr: "Intervenants" })}</SectionLabel>
                <ul className="mt-5 space-y-2">
                  {pick(programme.faculty).map((f) => (
                    <li key={f} className="text-[0.9375rem] text-foreground/85">
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-[0.75rem] leading-relaxed text-muted-foreground italic">
                  {pick({
                    en: "This programme is illustrative content prepared for a concept demonstration. Dates, fees and faculty are indicative.",
                    fr: "Ce programme est un contenu illustratif préparé pour une démonstration de concept. Dates, frais et intervenants sont indicatifs.",
                  })}
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={60}>
              <dl className="border border-hairline bg-surface p-8">
                {facts.map(([k, v]) => (
                  <div key={k} className="border-b border-hairline py-3 first:pt-0 last:border-0 last:pb-0">
                    <dt className="text-[0.6875rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                      {k}
                    </dt>
                    <dd className="mt-1 text-[0.9375rem] text-navy">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={110}>
              <div className="mt-12" id="register">
                <SectionLabel>
                  {pick({ en: "Register interest", fr: "Manifester votre intérêt" })}
                </SectionLabel>
                {sent ? (
                  <div className="mt-6">
                    <SuccessPanel
                      title={pick({ en: "Interest registered.", fr: "Intérêt enregistré." })}
                      body={pick({
                        en: "Thank you. The Academy team will confirm your place and send joining details. No information has been transmitted in this concept demonstration.",
                        fr: "Merci. L'équipe de l'Academy confirmera votre place et enverra les informations pratiques. Aucune information n'a été transmise dans cette démonstration de concept.",
                      })}
                    />
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-5">
                    <TextField
                      name="fullName"
                      required
                      span
                      label={pick({ en: "Full name", fr: "Nom complet" })}
                    />
                    <TextField
                      name="organisation"
                      span
                      label={pick({ en: "Organisation", fr: "Organisation" })}
                    />
                    <TextField
                      name="email"
                      type="email"
                      required
                      span
                      label={pick({ en: "Email", fr: "E-mail" })}
                    />
                    <TextField
                      name="telephone"
                      span
                      label={pick({ en: "Telephone", fr: "Téléphone" })}
                    />
                    <SelectField
                      name="participants"
                      span
                      label={pick({ en: "Number of participants", fr: "Nombre de participants" })}
                      options={[
                        { value: "1", label: "1" },
                        { value: "2-3", label: "2–3" },
                        { value: "4+", label: "4+" },
                      ]}
                    />
                    <TextAreaField
                      name="notes"
                      rows={4}
                      label={pick({
                        en: "Anything you would like covered",
                        fr: "Points que vous souhaitez aborder",
                      })}
                    />
                    <ConsentField
                      label={pick({
                        en: "I agree that gthink may contact me about this programme.",
                        fr: "J'accepte que gthink me contacte au sujet de ce programme.",
                      })}
                    />
                    <FormError message={error} />
                    <SubmitButton>
                      {pick({ en: "Register interest", fr: "Enregistrer mon intérêt" })}
                    </SubmitButton>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="grid gap-8 border border-hairline bg-surface p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">
            <div>
              <SectionLabel>{pick({ en: "For organisations", fr: "Pour les organisations" })}</SectionLabel>
              <h2 className="display-3 mt-6 max-w-2xl text-navy">
                {pick({
                  en: "Need this programme for your organisation?",
                  fr: "Besoin de ce programme pour votre organisation ?",
                })}
              </h2>
              <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
                {pick({
                  en: "We can adapt this content into a bespoke session for your team, delivered at your offices, at gthink, or virtually.",
                  fr: "Nous pouvons adapter ce contenu en une session sur mesure pour votre équipe, animée dans vos bureaux, chez gthink ou à distance.",
                })}
              </p>
            </div>
            <AppLink
              to="/training/corporate"
              className="inline-flex items-center gap-2.5 border border-primary bg-primary px-6 py-4 text-[0.75rem] font-semibold tracking-[0.1em] text-primary-foreground uppercase transition-colors hover:border-navy hover:bg-navy"
            >
              {pick({ en: "Discuss a bespoke programme", fr: "Concevoir un programme sur mesure" })}
            </AppLink>
          </div>
        </Reveal>
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionLabel>{pick({ en: "Also scheduled", fr: "Également programmé" })}</SectionLabel>
        </Reveal>
        <ul className="mt-10 grid gap-px border border-hairline bg-hairline lg:grid-cols-3">
          {related.map((p) => (
            <li key={p.slug} className="bg-background">
              <AppLink
                to={`/training/programmes/${p.slug}`}
                className="group flex h-full flex-col p-8 transition-colors hover:bg-surface"
              >
                <span className="eyebrow text-primary">{pick(p.topic)}</span>
                <h3 className="mt-4 font-display text-[1.125rem] leading-snug font-bold text-navy transition-colors group-hover:text-primary">
                  {pick(p.title)}
                </h3>
                <p className="mt-3 text-[0.8125rem] text-muted-foreground">
                  {pick(p.dates)} · {pick(p.location)}
                </p>
              </AppLink>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <ArrowLink to="/training/programmes" variant="outline">
            {pick({ en: "All programmes", fr: "Tous les programmes" })}
          </ArrowLink>
        </div>
      </Section>
    </>
  );
}
