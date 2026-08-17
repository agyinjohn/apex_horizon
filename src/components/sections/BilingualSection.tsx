import accra from "@/assets/accra.jpg";
import abidjan from "@/assets/abidjan.jpg";
import { useLang } from "@/lib/i18n";
import { Reveal } from "../Reveal";
import { ArrowLink } from "../ui-apex";

export function BilingualSection() {
  const { t, pick } = useLang();

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container-apex grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
        <div>
          <Reveal>
            <h2 className="display-2 text-navy">
              <span className="block">{t("bilingual.t1")}</span>
              <span className="block text-primary">{t("bilingual.t2")}</span>
              <span className="block">{t("bilingual.t3")}</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lead mt-8 max-w-lg">{t("bilingual.body")}</p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <ArrowLink to="/locations" variant="solid">
                {t("footprint.cta1")}
              </ArrowLink>
              <ArrowLink to="/locations" variant="outline">
                {t("footprint.cta2")}
              </ArrowLink>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {[
            {
              img: accra,
              city: "Accra",
              country: pick({ en: "Ghana", fr: "Ghana" }),
              lang: "English",
              alt: pick({
                en: "Modern commercial avenue in Accra, Ghana",
                fr: "Avenue commerciale moderne à Accra, Ghana",
              }),
            },
            {
              img: abidjan,
              city: "Abidjan",
              country: pick({ en: "Côte d'Ivoire", fr: "Côte d'Ivoire" }),
              lang: "Français",
              alt: pick({
                en: "Abidjan business district seen across the lagoon",
                fr: "Quartier d'affaires d'Abidjan vu depuis la lagune",
              }),
            },
          ].map((c, i) => (
            <Reveal key={c.city} delay={i * 120}>
              <figure className="image-reveal overflow-hidden">
                <div className="aspect-4/5 overflow-hidden bg-navy">
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    width={1200}
                    height={912}
                    className="size-full object-cover"
                  />
                </div>
                <figcaption className="mt-4 border-t border-hairline pt-4">
                  <span className="font-display text-[1.0625rem] font-bold text-navy">
                    {c.city}
                  </span>
                  <span className="mt-1 block text-[0.8125rem] text-muted-foreground">
                    {c.country} · {c.lang}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
