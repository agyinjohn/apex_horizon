import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowLink, Section } from "@/components/ui-apex";
import { JobApplicationForm } from "@/components/JobApplicationForm";
import { useLang } from "@/lib/i18n";
import { jobs } from "@/data/jobs";

export const Route = createFileRoute("/careers/$slug")({
  loader: ({ params }) => {
    const job = jobs.find((j) => j.slug === params.slug);
    if (!job) throw notFound();
    return { slug: job.slug, title: job.title.en, overview: job.overview.en };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Not found — gthink advisory consult" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.title} — gthink advisory consult`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.overview },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.overview },
        { property: "og:url", content: `/careers/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/careers/${params.slug}` }],
    };
  },
  component: JobDetail,
});

function JobDetail() {
  const { slug } = Route.useParams();
  const { pick } = useLang();
  const job = jobs.find((j) => j.slug === slug)!;

  return (
    <>
      <PageHero label={pick({ en: "Careers", fr: "Carrières" })} title={pick(job.title)}>
        <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-3 text-[0.8125rem] text-muted-foreground">
          <span>
            <span className="font-semibold text-navy">{pick({ en: "Location", fr: "Lieu" })}: </span>
            {pick(job.location)}
          </span>
          <span>
            <span className="font-semibold text-navy">
              {pick({ en: "Employment type", fr: "Type de contrat" })}:{" "}
            </span>
            {pick(job.employmentType)}
          </span>
        </div>
        <div className="mt-10">
          <ArrowLink to="#apply" variant="solid">
            {pick({ en: "Apply", fr: "Postuler" })}
          </ArrowLink>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="space-y-14">
            <Reveal>
              <h2 className="eyebrow text-primary">{pick({ en: "Role overview", fr: "Aperçu du poste" })}</h2>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-foreground/85">
                {pick(job.overview)}
              </p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="eyebrow text-primary">
                {pick({ en: "Responsibilities", fr: "Responsabilités" })}
              </h2>
              <ul className="mt-6 border-t border-hairline">
                {pick(job.responsibilities).map((r) => (
                  <li key={r} className="border-b border-hairline py-4 text-[0.9375rem] text-foreground/85">
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="eyebrow text-primary">
                {pick({ en: "Experience / qualifications", fr: "Expérience / qualifications" })}
              </h2>
              <ul className="mt-6 border-t border-hairline">
                {pick(job.qualifications).map((q) => (
                  <li key={q} className="border-b border-hairline py-4 text-[0.9375rem] text-foreground/85">
                    {q}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={180}>
              <h2 className="eyebrow text-primary">
                {pick({ en: "What we look for", fr: "Ce que nous recherchons" })}
              </h2>
              <ul className="mt-6 border-t border-hairline">
                {pick(job.whatWeLookFor).map((w) => (
                  <li key={w} className="border-b border-hairline py-4 text-[0.9375rem] text-foreground/85">
                    {w}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="border border-hairline bg-surface p-8 lg:sticky lg:top-28">
              <h3 className="font-display text-[1.0625rem] font-bold text-navy">
                {pick({ en: "At a glance", fr: "En bref" })}
              </h3>
              <dl className="mt-6 space-y-4 border-t border-hairline pt-6 text-[0.875rem]">
                <div>
                  <dt className="text-[0.6875rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    {pick({ en: "Location", fr: "Lieu" })}
                  </dt>
                  <dd className="mt-1 text-foreground/85">{pick(job.location)}</dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    {pick({ en: "Employment type", fr: "Type de contrat" })}
                  </dt>
                  <dd className="mt-1 text-foreground/85">{pick(job.employmentType)}</dd>
                </div>
              </dl>
              <div className="mt-8">
                <ArrowLink to="#apply">{pick({ en: "Apply", fr: "Postuler" })}</ArrowLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="apply" tone="surface">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="display-3 text-navy">
              {pick({ en: "Apply for this role", fr: "Postuler à ce poste" })}
            </h2>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {pick({
                en: "Tell us about yourself and attach your CV. We review every application.",
                fr: "Parlez-nous de vous et joignez votre CV. Nous examinons chaque candidature.",
              })}
            </p>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <JobApplicationForm roleLabel={pick(job.title)} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
