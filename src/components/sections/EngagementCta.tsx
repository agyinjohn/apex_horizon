import { ArrowLink } from "@/components/ui-apex";
import { Reveal } from "@/components/Reveal";
import { useLang, type Bi } from "@/lib/i18n";

export type EngagementPreset = "default" | "transactions" | "risk" | "industry";

type Preset = {
  title: Bi;
  body: Bi;
  primary: { to: string; label: Bi };
  secondary: { to: string; label: Bi };
};

const presets: Record<EngagementPreset, Preset> = {
  default: {
    title: {
      en: "Considering an engagement?",
      fr: "Vous envisagez une mission ?",
    },
    body: {
      en: "Share your brief or RFP with our team and we will connect you with the professionals best placed to assist.",
      fr: "Transmettez votre cahier des charges ou votre appel d'offres : nous vous mettrons en relation avec les professionnels les mieux placés pour vous accompagner.",
    },
    primary: { to: "/contact", label: { en: "Talk to an adviser", fr: "Parler à un conseiller" } },
    secondary: { to: "/rfp", label: { en: "Submit an RFP", fr: "Soumettre un appel d'offres" } },
  },
  transactions: {
    title: { en: "Planning a transaction?", fr: "Vous préparez une transaction ?" },
    body: {
      en: "Bring us in early. Independent analysis before commitment can change the outcome.",
      fr: "Associez-nous tôt. Une analyse indépendante avant tout engagement peut changer l'issue.",
    },
    primary: {
      to: "/contact",
      label: { en: "Discuss a transaction", fr: "Discuter d'une transaction" },
    },
    secondary: { to: "/rfp", label: { en: "Submit an RFP", fr: "Soumettre un appel d'offres" } },
  },
  risk: {
    title: { en: "Prepared is better than reactive.", fr: "Anticiper vaut mieux que réagir." },
    body: {
      en: "Review your organisation's exposure, controls and resilience before an incident or regulatory deadline puts them to the test.",
      fr: "Examinez l'exposition, les contrôles et la résilience de votre organisation avant qu'un incident ou une échéance réglementaire ne les mette à l'épreuve.",
    },
    primary: {
      to: "/contact",
      label: { en: "Assess your readiness", fr: "Évaluer votre préparation" },
    },
    secondary: {
      to: "/contact",
      label: { en: "Talk to an adviser", fr: "Parler à un conseiller" },
    },
  },
  industry: {
    title: { en: "Planning your next move?", fr: "Vous préparez votre prochaine étape ?" },
    body: {
      en: "Speak with the partners who work in this sector every week, or send a brief and we will respond with an approach.",
      fr: "Échangez avec les associés qui travaillent chaque semaine dans ce secteur, ou envoyez-nous un dossier : nous vous répondrons avec une approche.",
    },
    primary: { to: "/contact", label: { en: "Talk to our team", fr: "Parler à notre équipe" } },
    secondary: { to: "/rfp", label: { en: "Submit an RFP", fr: "Soumettre un appel d'offres" } },
  },
};

/**
 * Contextual, restrained engagement CTA used at the foot of expertise,
 * industry and case-study pages. Never e-commerce; consultative in tone.
 */
export function EngagementCta({
  preset = "default",
  title,
  body,
  primaryLabel,
  primaryTo,
  tone = "surface",
}: {
  preset?: EngagementPreset;
  title?: Bi | undefined;
  body?: Bi | undefined;
  primaryLabel?: Bi | undefined;
  primaryTo?: string | undefined;
  tone?: "surface" | "white" | "pale";
}) {
  const { pick } = useLang();
  const p = presets[preset];
  const bg =
    tone === "surface" ? "bg-surface" : tone === "pale" ? "bg-brand-pale/40" : "bg-background";

  return (
    <section className={`${bg} py-16 lg:py-20`}>
      <div className="container-apex">
        <Reveal>
          <div className="grid gap-8 border-t border-navy/15 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy lg:text-[2rem] lg:leading-tight">
                {pick(title ?? p.title)}
              </h2>
              <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
                {pick(body ?? p.body)}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <ArrowLink to={primaryTo ?? p.primary.to} variant="solid">
                {pick(primaryLabel ?? p.primary.label)}
              </ArrowLink>
              <ArrowLink to={p.secondary.to} variant="outline">
                {pick(p.secondary.label)}
              </ArrowLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
