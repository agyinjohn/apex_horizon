import { useLang } from "@/lib/i18n";
import { Reveal } from "../Reveal";
import { ArrowLink, SectionLabel } from "../ui-apex";

export function CareersTeaser() {
  const { pick } = useLang();

  return (
    <section className="border-t border-hairline bg-surface py-20 lg:py-28">
      <div className="container-apex grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <Reveal>
          <SectionLabel>{pick({ en: "Careers at Apex", fr: "Carrières chez Apex" })}</SectionLabel>
          <h2 className="display-2 mt-6 text-navy">
            {pick({
              en: "Built by people who ask better questions.",
              fr: "Construit par des personnes qui posent de meilleures questions.",
            })}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="lead max-w-xl">
            {pick({
              en: "We look for curiosity, rigour and a genuine commitment to clients — whether you are joining as an experienced professional, a graduate or an intern.",
              fr: "Nous recherchons de la curiosité, de la rigueur et un engagement sincère envers les clients — que vous rejoigniez Apex en tant que professionnel expérimenté, diplômé ou stagiaire.",
            })}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
            <ArrowLink to="/careers" variant="solid">
              {pick({ en: "Explore careers", fr: "Explorer les carrières" })}
            </ArrowLink>
            <ArrowLink to="/careers#vacancies" variant="text">
              {pick({ en: "Graduate opportunities", fr: "Programmes diplômés" })}
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
