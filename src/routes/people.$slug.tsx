import { createFileRoute, notFound } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowLink } from "@/components/ui-apex";
import { CtaSection } from "@/components/sections/CtaSection";
import { useLang } from "@/lib/i18n";
import { personBySlug } from "@/data/people";

export const Route = createFileRoute("/people/$slug")({
  loader: ({ params }) => {
    const person = personBySlug(params.slug);
    if (!person) throw notFound();
    return { name: person.name, role: person.role.en };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Not found — Apex Advisory Group" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.name} — Apex Advisory Group`;
    const description = `${loaderData.name}, ${loaderData.role} at Apex Advisory Group.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `/people/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/people/${params.slug}` }],
    };
  },
  component: PersonDetail,
});

function PersonDetail() {
  const { slug } = Route.useParams();
  const { t, pick } = useLang();
  const person = personBySlug(slug)!;

  const lists = [
    ["people.expertiseAreas", person.expertiseAreas],
    ["people.sectors", person.sectors],
    ["people.education", person.education],
    ["people.memberships", person.memberships],
    ["people.engagements", person.engagements],
  ] as const;

  return (
    <>
      <PageHero label={pick(person.office)} title={person.name} body={pick(person.role)} />

      <section className="py-16 lg:py-24">
        <div className="container-apex grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <figure className="image-reveal overflow-hidden">
              <div className="aspect-4/5 overflow-hidden bg-surface">
                <img
                  src={person.image}
                  alt={pick(person.imageAlt)}
                  width={912}
                  height={1104}
                  className="size-full object-cover object-top"
                />
              </div>
            </figure>
            <a
              href={person.linkedin}
              className="mt-6 inline-flex items-center gap-2 text-[0.75rem] font-semibold tracking-[0.1em] text-primary uppercase hover:text-navy"
            >
              <Linkedin className="size-4" strokeWidth={1.7} />
              {t("people.linkedin")}
            </a>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="eyebrow text-primary">{t("people.bio")}</h2>
              <div className="mt-5 space-y-5">
                {pick(person.bio).map((p) => (
                  <p key={p.slice(0, 24)} className="text-[1.0625rem] leading-relaxed text-foreground/85">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              {lists.map(([key, value], i) => (
                <Reveal key={key} delay={i * 60}>
                  <h3 className="eyebrow text-muted-foreground">{t(key)}</h3>
                  <ul className="mt-4 border-t border-hairline">
                    {pick(value).map((v) => (
                      <li
                        key={v}
                        className="border-b border-hairline py-3 text-[0.9375rem] text-foreground/85"
                      >
                        {v}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <div className="mt-12">
              <ArrowLink to="/people">{t("people.back")}</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
