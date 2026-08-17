import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/ui-apex";
import { AppLink } from "@/components/AppLink";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility — Apex Advisory Group" },
      {
        name: "description",
        content: "Our commitment to making the Apex Advisory Group website accessible.",
      },
      { property: "og:title", content: "Accessibility — Apex Advisory Group" },
      { property: "og:description", content: "Accessibility commitments and feedback channel." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/accessibility" }],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  const { pick } = useLang();
  return (
    <>
      <PageHero
        label={pick({ en: "Legal", fr: "Mentions légales" })}
        title={pick({ en: "Accessibility", fr: "Accessibilité" })}
        body={pick({
          en: "We aim for this website to be usable by as many people as possible.",
          fr: "Nous souhaitons que ce site soit utilisable par le plus grand nombre.",
        })}
      />
      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-10 text-[0.9375rem] leading-relaxed text-muted-foreground">
            <p className="border-l-2 border-primary/50 bg-brand-pale/20 px-5 py-4 text-[0.8125rem]">
              {pick({
                en: "This is a fictional demonstration document created for a design concept. It does not constitute a formal accessibility conformance statement.",
                fr: "Ce document est une démonstration fictive conçue pour un concept de design. Il ne constitue pas une déclaration formelle de conformité en matière d'accessibilité.",
              })}
            </p>
            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                {pick({ en: "Our commitment", fr: "Notre engagement" })}
              </h2>
              <p className="mt-3">
                {pick({
                  en: "We aim to design this website in line with recognised accessibility practices, including clear navigation, sufficient colour contrast, keyboard operability and descriptive text alternatives.",
                  fr: "Nous cherchons à concevoir ce site conformément aux bonnes pratiques d'accessibilité reconnues : navigation claire, contraste de couleurs suffisant, utilisation possible au clavier et alternatives textuelles descriptives.",
                })}
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                {pick({ en: "Ongoing work", fr: "Travail continu" })}
              </h2>
              <p className="mt-3">
                {pick({
                  en: "Accessibility is an ongoing effort. We periodically review the site and welcome feedback on any part of it that is difficult to use.",
                  fr: "L'accessibilité est un effort continu. Nous revoyons régulièrement le site et accueillons volontiers vos retours sur toute partie difficile d'utilisation.",
                })}
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                {pick({ en: "Feedback", fr: "Retours" })}
              </h2>
              <p className="mt-3">
                {pick({
                  en: "If you experience any difficulty using this website, please let us know through our ",
                  fr: "Si vous rencontrez une difficulté lors de l'utilisation de ce site, merci de nous en informer via notre ",
                })}
                <AppLink to="/contact" className="text-primary underline underline-offset-4">
                  {pick({ en: "Contact page", fr: "page de contact" })}
                </AppLink>
                .
              </p>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
