import { ArrowRight } from "lucide-react";
import { AppLink } from "@/components/AppLink";
import { ArrowLink, SectionLabel } from "@/components/ui-apex";
import { Reveal } from "@/components/Reveal";
import { useLang, type Bi } from "@/lib/i18n";

const themes: { to: string; title: Bi; question: Bi }[] = [
  {
    to: "/expertise",
    title: { en: "Governance", fr: "Gouvernance" },
    question: {
      en: "Are your structures keeping pace with your organisation?",
      fr: "Vos structures suivent-elles le rythme de votre organisation ?",
    },
  },
  {
    to: "/expertise",
    title: { en: "Transactions", fr: "Transactions" },
    question: {
      en: "What assumptions are driving the investment case?",
      fr: "Quelles hypothèses sous-tendent votre thèse d'investissement ?",
    },
  },
  {
    to: "/expertise",
    title: { en: "Risk & Resilience", fr: "Risques et résilience" },
    question: {
      en: "Where could disruption expose the business?",
      fr: "Où une perturbation exposerait-elle l'entreprise ?",
    },
  },
  {
    to: "/expertise",
    title: { en: "Market Expansion", fr: "Expansion régionale" },
    question: {
      en: "What changes when you cross a border?",
      fr: "Qu'est-ce qui change lorsque vous franchissez une frontière ?",
    },
  },
];

/**
 * Proactive advisory section — shifts the tone from reactive help
 * to early, independent counsel. Restrained navy treatment.
 */
export function ProactiveSection() {
  const { pick } = useLang();

  return (
    <section className="bg-navy py-20 text-navy-foreground lg:py-28">
      <div className="container-apex">
        <Reveal>
          <SectionLabel tone="light">
            {pick({ en: "Before it becomes urgent.", fr: "Avant que ce ne soit urgent." })}
          </SectionLabel>
          <h2 className="display-2 mt-6 max-w-3xl text-white">
            {pick({
              en: "The best time to ask the hard questions is early.",
              fr: "Le meilleur moment pour poser les questions difficiles, c'est tôt.",
            })}
          </h2>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-white/70">
            {pick({
              en: "Markets move. Regulations change. Transactions develop. Risks evolve. Independent advice is most valuable before the options narrow.",
              fr: "Les marchés bougent. Les réglementations changent. Les transactions avancent. Les risques évoluent. Un avis indépendant vaut le plus avant que les options ne se réduisent.",
            })}
          </p>
        </Reveal>

        <ul className="mt-14 grid border-t border-white/15 sm:grid-cols-2">
          {themes.map((theme, i) => (
            <Reveal
              as="li"
              key={theme.title.en}
              delay={i * 70}
              className="border-b border-white/15 sm:even:border-l sm:even:border-l-white/15"
            >
              <AppLink
                to={theme.to}
                className="group flex h-full flex-col justify-between gap-8 py-8 transition-colors sm:px-8 sm:first:pl-0 sm:[&:nth-child(3)]:pl-0 hover:bg-white/[0.04]"
              >
                <div>
                  <h3 className="font-display text-lg font-bold tracking-[0.04em] text-white uppercase">
                    {pick(theme.title)}
                  </h3>
                  <p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-white/65">
                    {pick(theme.question)}
                  </p>
                </div>
                <ArrowRight
                  className="size-4 text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
                  strokeWidth={1.8}
                />
              </AppLink>
            </Reveal>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap gap-4">
          <ArrowLink to="/expertise" variant="outlineLight">
            {pick({ en: "Explore our expertise", fr: "Découvrir notre expertise" })}
          </ArrowLink>
          <ArrowLink to="/contact" variant="outlineLight">
            {pick({ en: "Talk to an adviser", fr: "Parler à un conseiller" })}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
