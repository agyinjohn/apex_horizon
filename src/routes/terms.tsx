import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/ui-apex";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — gthink advisory consult" },
      {
        name: "description",
        content: "The terms governing use of the gthink advisory consult website.",
      },
      { property: "og:title", content: "Terms of Use — gthink advisory consult" },
      { property: "og:description", content: "Conditions applicable to visitors of this website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  const { pick } = useLang();
  return (
    <>
      <PageHero
        label={pick({ en: "Legal", fr: "Mentions légales" })}
        title={pick({ en: "Terms of Use", fr: "Conditions d'utilisation" })}
        body={pick({
          en: "These terms govern your use of the gthink advisory consult website.",
          fr: "Les présentes conditions régissent votre utilisation du site gthink advisory consult.",
        })}
      />
      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-10 text-[0.9375rem] leading-relaxed text-muted-foreground">
            <p className="border-l-2 border-primary/50 bg-brand-pale/20 px-5 py-4 text-[0.8125rem]">
              {pick({
                en: "This is a fictional demonstration document created for a design concept. It does not constitute legal advice and does not reflect the practices of any real organisation.",
                fr: "Ce document est une démonstration fictive conçue pour un concept de design. Il ne constitue pas un avis juridique et ne reflète les pratiques d'aucune organisation réelle.",
              })}
            </p>
            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                {pick({ en: "Acceptance of terms", fr: "Acceptation des conditions" })}
              </h2>
              <p className="mt-3">
                {pick({
                  en: "By accessing this website, you agree to these terms of use. If you do not agree, please do not use the site.",
                  fr: "En accédant à ce site, vous acceptez les présentes conditions d'utilisation. Si vous n'êtes pas d'accord, veuillez ne pas utiliser le site.",
                })}
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                {pick({ en: "Content and intellectual property", fr: "Contenu et propriété intellectuelle" })}
              </h2>
              <p className="mt-3">
                {pick({
                  en: "All content on this site, including text, images and design, is the property of gthink advisory consult or its licensors and may not be reproduced without prior written consent.",
                  fr: "L'ensemble du contenu de ce site, y compris textes, images et éléments de design, est la propriété d'gthink advisory consult ou de ses concédants et ne peut être reproduit sans accord écrit préalable.",
                })}
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                {pick({ en: "No professional advice", fr: "Absence de conseil professionnel" })}
              </h2>
              <p className="mt-3">
                {pick({
                  en: "Content on this site is provided for general information only and does not constitute professional advice. You should seek specific advice before acting on any matter covered here.",
                  fr: "Le contenu de ce site est fourni à titre d'information générale et ne constitue pas un conseil professionnel. Il convient de solliciter un avis spécifique avant d'agir sur les sujets traités.",
                })}
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                {pick({ en: "Limitation of liability", fr: "Limitation de responsabilité" })}
              </h2>
              <p className="mt-3">
                {pick({
                  en: "gthink advisory consult accepts no liability for any loss arising from reliance on the content of this website.",
                  fr: "gthink advisory consult décline toute responsabilité pour toute perte résultant de l'utilisation du contenu de ce site.",
                })}
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                {pick({ en: "Governing law", fr: "Droit applicable" })}
              </h2>
              <p className="mt-3">
                {pick({
                  en: "These terms are governed by the laws applicable in the jurisdictions in which gthink advisory consult operates.",
                  fr: "Les présentes conditions sont régies par les lois applicables dans les juridictions où gthink advisory consult opère.",
                })}
              </p>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
