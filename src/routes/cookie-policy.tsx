import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/ui-apex";
import { AppLink } from "@/components/AppLink";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Apex Advisory Group" },
      {
        name: "description",
        content: "How Apex Advisory Group uses cookies and similar technologies on this website.",
      },
      { property: "og:title", content: "Cookie Policy — Apex Advisory Group" },
      { property: "og:description", content: "Details of essential, analytics and marketing cookies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cookie-policy" }],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  const { pick } = useLang();
  return (
    <>
      <PageHero
        label={pick({ en: "Legal", fr: "Mentions légales" })}
        title={pick({ en: "Cookie Policy", fr: "Politique de cookies" })}
        body={pick({
          en: "This page explains the cookies used on this website and the choices available to you.",
          fr: "Cette page explique les cookies utilisés sur ce site et les choix qui s'offrent à vous.",
        })}
      />
      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-10 text-[0.9375rem] leading-relaxed text-muted-foreground">
            <p className="border-l-2 border-primary/50 bg-brand-pale/20 px-5 py-4 text-[0.8125rem]">
              {pick({
                en: "This is a fictional demonstration document created for a design concept. It does not constitute legal advice.",
                fr: "Ce document est une démonstration fictive conçue pour un concept de design. Il ne constitue pas un avis juridique.",
              })}
            </p>
            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                {pick({ en: "Essential cookies", fr: "Cookies essentiels" })}
              </h2>
              <p className="mt-3">
                {pick({
                  en: "Required for the website to function correctly, including remembering your language and cookie preferences. These cannot be disabled.",
                  fr: "Nécessaires au bon fonctionnement du site, notamment pour mémoriser votre langue et vos préférences de cookies. Ils ne peuvent pas être désactivés.",
                })}
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                {pick({ en: "Analytics cookies", fr: "Cookies analytiques" })}
              </h2>
              <p className="mt-3">
                {pick({
                  en: "Help us understand how the website is used, so that we can improve content and navigation. Used only with your consent.",
                  fr: "Nous aident à comprendre l'utilisation du site afin d'en améliorer le contenu et la navigation. Utilisés uniquement avec votre consentement.",
                })}
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                {pick({ en: "Marketing cookies", fr: "Cookies marketing" })}
              </h2>
              <p className="mt-3">
                {pick({
                  en: "Used to tailor communications and measure the effectiveness of outreach. Used only with your consent.",
                  fr: "Utilisés pour personnaliser les communications et mesurer l'efficacité des actions de sensibilisation. Utilisés uniquement avec votre consentement.",
                })}
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                {pick({ en: "Managing your preferences", fr: "Gérer vos préférences" })}
              </h2>
              <p className="mt-3">
                {pick({
                  en: "You can change your cookie preferences at any time via the cookie banner presented on your first visit, or by clearing your browser storage. See our ",
                  fr: "Vous pouvez modifier vos préférences de cookies à tout moment via la bannière présentée lors de votre première visite, ou en effaçant les données de votre navigateur. Voir notre ",
                })}
                <AppLink to="/privacy" className="text-primary underline underline-offset-4">
                  {pick({ en: "Privacy Policy", fr: "politique de confidentialité" })}
                </AppLink>
                {pick({ en: " for more on how data is handled.", fr : " pour en savoir plus sur le traitement des données." })}
              </p>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
