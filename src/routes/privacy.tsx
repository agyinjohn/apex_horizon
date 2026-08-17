import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/ui-apex";
import { AppLink } from "@/components/AppLink";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — gthink advisory consult" },
      {
        name: "description",
        content:
          "How gthink advisory consult collects, uses and protects personal information submitted through enquiries, RFPs, training and recruitment.",
      },
      { property: "og:title", content: "Privacy Policy — gthink advisory consult" },
      {
        property: "og:description",
        content: "Our approach to personal data across advisory, training and recruitment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { pick } = useLang();
  return (
    <>
      <PageHero
        label={pick({ en: "Legal", fr: "Mentions légales" })}
        title={pick({ en: "Privacy Policy", fr: "Politique de confidentialité" })}
        body={pick({
          en: "This page explains what personal information gthink advisory consult collects, why, and how it is protected.",
          fr: "Cette page explique quelles informations personnelles gthink advisory consult collecte, pourquoi, et comment elles sont protégées.",
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
                {pick({ en: "Information we collect", fr: "Informations que nous collectons" })}
              </h2>
              <p className="mt-3">
                {pick({
                  en: "We collect information you provide directly through our website, including:",
                  fr: "Nous collectons les informations que vous nous fournissez directement via notre site, notamment :",
                })}
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  {pick({
                    en: "Advisory enquiries: name, organisation, role, contact details and the nature of your enquiry.",
                    fr: "Demandes de conseil : nom, organisation, fonction, coordonnées et objet de la demande.",
                  })}
                </li>
                <li>
                  {pick({
                    en: "Requests for Proposal (RFP): contact and organisational details, engagement scope, budget indications and any documents you choose to attach.",
                    fr: "Demandes de proposition (RFP) : coordonnées et informations sur l'organisation, périmètre du projet, indications budgétaires et tout document joint.",
                  })}
                </li>
                <li>
                  {pick({
                    en: "Training enquiries: name, organisation, contact details and programme interests.",
                    fr: "Demandes relatives aux formations : nom, organisation, coordonnées et programmes d'intérêt.",
                  })}
                </li>
                <li>
                  {pick({
                    en: "Recruitment applications: CV, cover letter, employment history and other information you submit when applying for a role.",
                    fr: "Candidatures : CV, lettre de motivation, parcours professionnel et autres informations transmises lors d'une candidature.",
                  })}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                {pick({ en: "Lawful basis and purpose", fr: "Base légale et finalité" })}
              </h2>
              <p className="mt-3">
                {pick({
                  en: "We process this information to respond to enquiries, evaluate and respond to RFPs, administer training programmes, assess recruitment applications, and to meet legitimate business and, where applicable, contractual and legal obligations.",
                  fr: "Nous traitons ces informations pour répondre aux demandes, évaluer et répondre aux appels d'offres, administrer les programmes de formation, examiner les candidatures, et pour répondre à des intérêts légitimes ainsi qu'à des obligations contractuelles et légales, le cas échéant.",
                })}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                {pick({ en: "Retention", fr: "Conservation" })}
              </h2>
              <p className="mt-3">
                {pick({
                  en: "Information is retained only for as long as necessary for the purpose for which it was collected, typically for the duration of any resulting engagement plus a reasonable period thereafter for record-keeping, or, for unsuccessful recruitment applications, for a limited period unless you consent to longer retention.",
                  fr: "Les informations sont conservées uniquement pour la durée nécessaire à leur finalité, généralement pendant la durée d'une éventuelle mission puis pour une période raisonnable à des fins d'archivage, ou, pour les candidatures non retenues, pour une durée limitée sauf accord de votre part pour une conservation plus longue.",
                })}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                {pick({ en: "Confidentiality", fr: "Confidentialité" })}
              </h2>
              <p className="mt-3">
                {pick({
                  en: "Information submitted through advisory enquiries and RFPs is treated as confidential and is only accessed by personnel involved in reviewing and responding to the relevant submission.",
                  fr: "Les informations transmises via les demandes de conseil et les appels d'offres sont traitées de manière confidentielle et ne sont accessibles qu'au personnel chargé de l'examen et du traitement de la demande concernée.",
                })}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                {pick({ en: "Cookies", fr: "Cookies" })}
              </h2>
              <p className="mt-3">
                {pick({
                  en: "Our website uses essential cookies required for the site to function, and, subject to your consent, analytics and marketing cookies. See our ",
                  fr: "Notre site utilise des cookies essentiels nécessaires à son fonctionnement et, sous réserve de votre consentement, des cookies analytiques et marketing. Voir notre ",
                })}
                <AppLink to="/cookie-policy" className="text-primary underline underline-offset-4">
                  {pick({ en: "Cookie Policy", fr: "politique de cookies" })}
                </AppLink>
                {pick({ en: " for detail.", fr: " pour plus de détails." })}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                {pick({ en: "Your rights and contact", fr: "Vos droits et contact" })}
              </h2>
              <p className="mt-3">
                {pick({
                  en: "You may request access to, correction of, or deletion of your personal information by contacting us through our ",
                  fr: "Vous pouvez demander l'accès, la correction ou la suppression de vos informations personnelles en nous contactant via notre ",
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
