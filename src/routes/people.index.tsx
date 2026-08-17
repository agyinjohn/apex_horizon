import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PersonCard } from "@/components/PersonCard";
import { CharterSection } from "@/components/sections/CharterSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { useLang } from "@/lib/i18n";
import { people } from "@/data/people";

export const Route = createFileRoute("/people/")({
  head: () => ({
    meta: [
      { title: "People — gthink advisory consult" },
      {
        name: "description",
        content:
          "Meet the senior advisers of gthink advisory consult across Accra and Abidjan — strategy, transactions, risk and technology leadership.",
      },
      { property: "og:title", content: "People — gthink advisory consult" },
      { property: "og:description", content: "Expertise begins with people." },
      { property: "og:url", content: "/people" },
    ],
    links: [{ rel: "canonical", href: "/people" }],
  }),
  component: PeoplePage,
});

function PeoplePage() {
  const { t } = useLang();

  return (
    <>
      <PageHero label={t("people.label")} title={t("people.title")} body={t("people.body")} />
      <section className="py-16 lg:py-24">
        <div className="container-apex">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {people.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 4) * 80}>
                <PersonCard person={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CharterSection tone="surface" />
      <CtaSection />
    </>
  );
}
