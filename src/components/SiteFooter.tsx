import { Linkedin, Youtube } from "lucide-react";
import { AppLink } from "./AppLink";
import { Logo } from "./Logo";
import { LanguageSwitch } from "./LanguageSwitch";
import { useLang } from "@/lib/i18n";
import { expertise } from "@/data/expertise";
import { industries } from "@/data/industries";

function Column({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h3 className="eyebrow text-white/45">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.to + l.label}>
            <AppLink
              to={l.to}
              className="text-[0.8125rem] leading-relaxed text-white/75 transition-colors hover:text-white"
            >
              {l.label}
            </AppLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const { t, pick } = useLang();

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-apex py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_2.6fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-white/70">
              {t("footer.tagline")}
            </p>
            <div className="mt-8">
              <span className="eyebrow text-white/45">{t("footer.social")}</span>
              <div className="mt-3 flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/"
                  aria-label="gthink advisory consult on LinkedIn"
                  className="flex min-h-11 min-w-11 items-center justify-center border border-white/20 text-white/75 transition-colors hover:border-white hover:text-white"
                >
                  <Linkedin className="size-4" strokeWidth={1.6} />
                </a>
                <a
                  href="https://www.youtube.com/"
                  aria-label="gthink advisory consult on YouTube"
                  className="flex min-h-11 min-w-11 items-center justify-center border border-white/20 text-white/75 transition-colors hover:border-white hover:text-white"
                >
                  <Youtube className="size-4" strokeWidth={1.6} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Column
              title="Apex"
              links={[
                { to: "/about", label: t("nav.about") },
                { to: "/people", label: t("nav.ourPeople") },
                { to: "/locations", label: t("nav.locations") },
                { to: "/careers", label: t("nav.careers") },
              ]}
            />
            <Column
              title={t("footer.expertise")}
              links={[
                ...expertise.map((e) => ({
                  to: `/expertise/${e.slug}`,
                  label: pick(e.title),
                })),
                { to: "/case-studies", label: pick({ en: "Our Work", fr: "Nos réalisations" }) },
              ]}
            />
            <Column
              title={t("footer.industries")}
              links={industries.map((i) => ({
                to: `/industries/${i.slug}`,
                label: pick(i.name),
              }))}
            />
            <Column
              title={t("nav.training")}
              links={[
                {
                  to: "/training/programmes",
                  label: pick({ en: "Upcoming Programmes", fr: "Prochaines formations" }),
                },
                {
                  to: "/training/corporate",
                  label: pick({ en: "Corporate Training", fr: "Formations sur mesure" }),
                },
                {
                  to: "/training/programmes",
                  label: pick({ en: "Virtual Training", fr: "Formations à distance" }),
                },
              ]}
            />
            <Column
              title={t("footer.insights")}
              links={[
                { to: "/insights", label: t("footer.latest") },
                { to: "/insights", label: t("footer.news") },
                { to: "/insights", label: t("footer.reports") },
              ]}
            />
            <Column
              title={t("nav.contact")}
              links={[
                { to: "/contact", label: t("nav.talkAdviser") },
                { to: "/rfp", label: t("nav.talkRfp") },
                { to: "/request-proposal", label: t("nav.talkProposal") },
                { to: "/locations", label: "Accra" },
                { to: "/locations", label: "Abidjan" },
              ]}
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="eyebrow text-white/45">{t("footer.locations")}</span>
            <p className="mt-2 text-[0.9375rem] text-white/80">Accra · Abidjan</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="eyebrow text-white/45">{t("footer.language")}</span>
            <LanguageSwitch tone="light" />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/12 pt-8 text-[0.75rem] text-white/55 lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { to: "/privacy", label: t("footer.privacy") },
              { to: "/cookie-policy", label: t("footer.cookies") },
              { to: "/terms", label: t("footer.terms") },
              { to: "/accessibility", label: t("footer.accessibility") },
              { to: "/sitemap", label: t("footer.sitemap") },
            ].map((l) => (
              <li key={l.to}>
                <AppLink to={l.to} className="transition-colors hover:text-white">
                  {l.label}
                </AppLink>
              </li>
            ))}
          </ul>
          <p>{t("footer.copyright")}</p>
        </div>

        <div className="mt-8 border-t border-white/12 pt-8">
          <p className="font-display text-[0.75rem] font-semibold tracking-[0.2em] text-white/70 uppercase">
            {t("footer.trustLine")}
          </p>
          <p className="mt-3 max-w-xl text-[0.8125rem] leading-relaxed text-white/55">
            {t("footer.trustBody")}
          </p>
          <p className="mt-3 text-[0.6875rem] text-white/35 italic">{t("standards.note")}</p>
        </div>

        <p className="mt-6 max-w-3xl text-[0.6875rem] leading-relaxed text-white/35">
          {t("footer.disclaimer")}
        </p>
      </div>
    </footer>
  );
}
