import { Shield, Globe, Cpu, FileText, Layers, Zap } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "../Reveal";
import { SectionLabel } from "../ui-apex";

const pillars = [
  {
    icon: Globe,
    title: { en: "Multi-zone Architecture", fr: "Architecture multi-zones" },
    body: {
      en: "Single domain with dedicated regional landing pages for Ghana (/gh) and Côte d'Ivoire (/ci). Scalable to any future market zone.",
      fr: "Domaine unique avec pages régionales dédiées pour le Ghana (/gh) et la Côte d'Ivoire (/ci). Extensible à toute future zone.",
    },
    tag: { en: "Live demo: /gh · /ci", fr: "Démo live : /gh · /ci" },
  },
  {
    icon: FileText,
    title: { en: "CMS-Ready Content Layer", fr: "Couche contenu prête pour CMS" },
    body: {
      en: "All content is structured in typed data files and translation keys — ready to be replaced by a headless CMS (Contentful, Sanity, Strapi) without touching the UI.",
      fr: "Tout le contenu est structuré en fichiers de données typés et clés de traduction — prêt à être remplacé par un CMS headless (Contentful, Sanity, Strapi) sans toucher l'interface.",
    },
    tag: { en: "CMS-ready architecture", fr: "Architecture prête pour CMS" },
  },
  {
    icon: Cpu,
    title: { en: "AI-Integrated", fr: "Intégration IA" },
    body: {
      en: "Bilingual AI assistant embedded site-wide. Extensible to OpenAI, AWS Bedrock or custom LLM for intelligent content search, lead qualification and client support.",
      fr: "Assistant IA bilingue intégré sur tout le site. Extensible à OpenAI, AWS Bedrock ou LLM personnalisé pour la recherche intelligente, la qualification de leads et le support client.",
    },
    tag: { en: "AI assistant active ↘", fr: "Assistant IA actif ↘" },
  },
  {
    icon: Shield,
    title: { en: "Security Architecture", fr: "Architecture de sécurité" },
    body: {
      en: "SSL/TLS enforced at CDN layer. GDPR-compliant cookie consent. CSP headers, input sanitisation, no credentials in client bundle. ISO 27001-aligned practices.",
      fr: "SSL/TLS appliqué au niveau CDN. Consentement cookies conforme RGPD. En-têtes CSP, assainissement des entrées, aucune donnée sensible dans le bundle client. Pratiques alignées ISO 27001.",
    },
    tag: { en: "GDPR · WCAG 2.1 · ISO 27001", fr: "RGPD · WCAG 2.1 · ISO 27001" },
  },
  {
    icon: Layers,
    title: { en: "Multi-lingual by Design", fr: "Multilingue par conception" },
    body: {
      en: "Full EN/FR parity across every page, form, legal document and error state. Language preference persisted. Scalable to Arabic, Portuguese or any additional language.",
      fr: "Parité totale EN/FR sur chaque page, formulaire, document légal et état d'erreur. Préférence de langue persistée. Extensible à l'arabe, au portugais ou toute autre langue.",
    },
    tag: { en: "EN · FR · Scalable", fr: "EN · FR · Extensible" },
  },
  {
    icon: Zap,
    title: { en: "Performance & SEO", fr: "Performance & SEO" },
    body: {
      en: "Server-side rendering, code splitting, lazy images. Canonical URLs, OG tags, schema.org JSON-LD and sitemap on every route. Built for international discoverability.",
      fr: "Rendu côté serveur, découpage du code, images différées. URLs canoniques, balises OG, JSON-LD schema.org et sitemap sur chaque route. Conçu pour la visibilité internationale.",
    },
    tag: { en: "SSR · Core Web Vitals", fr: "SSR · Core Web Vitals" },
  },
];

export function TechArchitectureSection() {
  const { pick } = useLang();

  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="container-apex">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <SectionLabel tone="light">
              {pick({ en: "Platform architecture", fr: "Architecture de la plateforme" })}
            </SectionLabel>
            <h2 className="display-2 mt-6 text-white">
              {pick({
                en: "Built to every requirement.",
                fr: "Conçu pour chaque exigence.",
              })}
            </h2>
            <p className="mt-6 max-w-sm text-[1rem] leading-relaxed text-white/70">
              {pick({
                en: "This platform demonstrates all six technical pillars specified in the RFP — live, in production-ready code.",
                fr: "Cette plateforme démontre les six piliers techniques spécifiés dans l'appel d'offres — en direct, dans un code prêt pour la production.",
              })}
            </p>
          </Reveal>

          <ul className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal
                  as="li"
                  key={p.title.en}
                  delay={i * 60}
                  className="flex flex-col gap-3 bg-navy p-7"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5">
                      <Icon className="size-4 text-brand-pale" strokeWidth={1.6} />
                    </span>
                    <h3 className="font-display text-[0.9375rem] font-bold text-white">
                      {pick(p.title)}
                    </h3>
                  </div>
                  <p className="text-[0.8125rem] leading-relaxed text-white/60">
                    {pick(p.body)}
                  </p>
                  <span className="mt-auto inline-block text-[0.6875rem] font-semibold tracking-[0.1em] text-brand-pale/80 uppercase">
                    {pick(p.tag)}
                  </span>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
