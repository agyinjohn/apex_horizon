import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionLabel } from "@/components/ui-apex";
import { AppLink } from "@/components/AppLink";
import { useLang } from "@/lib/i18n";
import { expertise } from "@/data/expertise";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/case-studies";
import { insights } from "@/data/insights";
import { people } from "@/data/people";
import { programmes } from "@/data/programmes";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap — gthink advisory consult" },
      {
        name: "description",
        content: "A structured index of every page on the gthink advisory consult website.",
      },
      { property: "og:title", content: "Sitemap — gthink advisory consult" },
      { property: "og:description", content: "Full directory of pages across the site." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sitemap" }],
  }),
  component: SitemapPage,
});

function SitemapPage() {
  const { pick, t } = useLang();

  const groups: { label: string; links: { to: string; label: string }[] }[] = [
    {
      label: pick({ en: "Company", fr: "Le cabinet" }),
      links: [
        { to: "/", label: pick({ en: "Home", fr: "Accueil" }) },
        { to: "/about", label: pick({ en: "About", fr: "À propos" }) },
        { to: "/people", label: pick({ en: "People", fr: "Nos équipes" }) },
        { to: "/locations", label: pick({ en: "Locations", fr: "Implantations" }) },
        { to: "/careers", label: pick({ en: "Careers", fr: "Carrières" }) },
        { to: "/contact", label: pick({ en: "Contact", fr: "Contact" }) },
        { to: "/engage", label: pick({ en: "Talk to Us", fr: "Parlons-en" }) },
      ],
    },
    {
      label: pick({ en: "Expertise", fr: "Expertises" }),
      links: [
        { to: "/expertise", label: pick({ en: "Expertise overview", fr: "Vue d'ensemble des expertises" }) },
        ...expertise.map((e) => ({ to: `/expertise/${e.slug}`, label: pick(e.title) })),
      ],
    },
    {
      label: pick({ en: "Industries", fr: "Secteurs" }),
      links: [
        { to: "/industries", label: pick({ en: "Industries overview", fr: "Vue d'ensemble des secteurs" }) },
        ...industries.map((i) => ({ to: `/industries/${i.slug}`, label: pick(i.name) })),
      ],
    },
    {
      label: pick({ en: "Case Studies", fr: "Études de cas" }),
      links: [
        { to: "/case-studies", label: pick({ en: "Case studies overview", fr: "Vue d'ensemble des études de cas" }) },
        ...caseStudies.map((c) => ({ to: `/case-studies/${c.slug}`, label: pick(c.headline) })),
      ],
    },
    {
      label: pick({ en: "Insights", fr: "Perspectives" }),
      links: [
        { to: "/insights", label: pick({ en: "Insights overview", fr: "Vue d'ensemble des perspectives" }) },
        ...insights.map((i) => ({ to: `/insights/${i.slug}`, label: pick(i.title) })),
      ],
    },
    {
      label: pick({ en: "People", fr: "Nos équipes" }),
      links: people.map((p) => ({ to: `/people/${p.slug}`, label: p.name })),
    },
    {
      label: pick({ en: "Training", fr: "Formation" }),
      links: [
        { to: "/training", label: pick({ en: "Training overview", fr: "Vue d'ensemble de la formation" }) },
        { to: "/training/corporate", label: pick({ en: "Corporate Training", fr: "Formation en entreprise" }) },
        { to: "/training/programmes", label: pick({ en: "Programmes", fr: "Programmes" }) },
        ...programmes.map((p) => ({
          to: `/training/programmes/${p.slug}`,
          label: pick(p.title),
        })),
      ],
    },
    {
      label: pick({ en: "Proposals & Engagement", fr: "Propositions & mise en relation" }),
      links: [
        { to: "/rfp", label: pick({ en: "Submit an RFP", fr: "Soumettre un appel d'offres" }) },
        { to: "/request-proposal", label: pick({ en: "Request a Proposal", fr: "Demande de proposition" }) },
      ],
    },
    {
      label: pick({ en: "Legal", fr: "Mentions légales" }),
      links: [
        { to: "/privacy", label: t("footer.privacy") },
        { to: "/cookie-policy", label: t("footer.cookies") },
        { to: "/terms", label: t("footer.terms") },
        { to: "/accessibility", label: t("footer.accessibility") },
        { to: "/sitemap", label: t("footer.sitemap") },
      ],
    },
  ];

  return (
    <>
      <PageHero
        label={pick({ en: "Sitemap", fr: "Plan du site" })}
        title={pick({ en: "Sitemap", fr: "Plan du site" })}
        body={pick({
          en: "A structured index of every page on this website.",
          fr: "Un index structuré de l'ensemble des pages de ce site.",
        })}
      />
      <Section>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <Reveal key={g.label}>
              <SectionLabel>{g.label}</SectionLabel>
              <ul className="mt-5 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.to + l.label}>
                    <AppLink
                      to={l.to}
                      className="text-[0.875rem] text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
