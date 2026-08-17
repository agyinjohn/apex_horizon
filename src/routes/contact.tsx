import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { offices } from "@/data/markets";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — gthink advisory consult" },
      {
        name: "description",
        content:
          "Speak with gthink advisory consult in Accra or Abidjan about strategy, transactions, risk or market intelligence.",
      },
      { property: "og:title", content: "Contact — gthink advisory consult" },
      { property: "og:description", content: "Tell us what you're working on." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const interests = [
  "contact.interest.strategy",
  "contact.interest.transaction",
  "contact.interest.financial",
  "contact.interest.risk",
  "contact.interest.technology",
  "contact.interest.research",
  "contact.interest.media",
  "contact.interest.careers",
  "contact.interest.other",
] as const;

function ContactPage() {
  const { t, pick } = useLang();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("consent")) return setError(t("contact.errorConsent"));
    if (!data.get("firstName") || !data.get("lastName") || !data.get("email")) {
      return setError(t("contact.errorRequired"));
    }
    setError(null);
    setSent(true);
  };

  const field =
    "mt-2 min-h-11 w-full border border-input bg-background px-4 py-3 text-[0.9375rem] text-foreground transition-colors focus:border-primary focus:outline-none";
  const label = "text-[0.6875rem] font-semibold tracking-[0.16em] text-navy uppercase";

  return (
    <>
      <PageHero label={t("nav.contact")} title={t("contact.title")} body={t("contact.subtitle")} />

      <section className="py-16 lg:py-24">
        <div className="container-apex grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal>
            {sent ? (
              <div className="border border-primary/40 bg-brand-pale/25 p-8">
                <h2 className="display-3 text-navy">{t("contact.successTitle")}</h2>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {t("contact.successBody")}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
                {(
                  [
                    ["firstName", "contact.firstName", true],
                    ["lastName", "contact.lastName", true],
                    ["organisation", "contact.organisation", false],
                    ["email", "contact.email", true],
                    ["telephone", "contact.telephone", false],
                    ["country", "contact.country", false],
                  ] as const
                ).map(([name, key, required]) => (
                  <div key={name}>
                    <label htmlFor={name} className={label}>
                      {t(key)}{" "}
                      <span className="font-normal tracking-normal text-muted-foreground normal-case">
                        ({required ? t("contact.required") : t("contact.optional")})
                      </span>
                    </label>
                    <input
                      id={name}
                      name={name}
                      type={name === "email" ? "email" : "text"}
                      required={required}
                      className={field}
                    />
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label htmlFor="interest" className={label}>
                    {t("contact.interest")}
                  </label>
                  <select id="interest" name="interest" className={field} defaultValue="">
                    <option value="" disabled>
                      {t("contact.interestPlaceholder")}
                    </option>
                    {interests.map((k) => (
                      <option key={k} value={k}>
                        {t(k)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className={label}>
                    {t("contact.message")}
                  </label>
                  <textarea id="message" name="message" rows={6} className={field} />
                </div>

                <div className="flex items-start gap-3 sm:col-span-2">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    className="mt-1 size-5 shrink-0 accent-[var(--brand)]"
                  />
                  <label htmlFor="consent" className="text-[0.8125rem] leading-relaxed text-muted-foreground">
                    {t("contact.consent")}
                  </label>
                </div>

                {error && (
                  <p role="alert" className="text-[0.875rem] text-destructive sm:col-span-2">
                    {error}
                  </p>
                )}

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="min-h-11 border border-primary bg-primary px-8 py-4 text-[0.75rem] font-semibold tracking-[0.1em] text-primary-foreground uppercase transition-colors hover:border-navy hover:bg-navy"
                  >
                    {t("contact.submit")}
                  </button>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={120}>
            <ul className="space-y-10">
              {offices.map((o) => (
                <li key={o.key} className="border-t border-navy/20 pt-6">
                  <h2 className="font-display text-2xl font-bold text-navy">{pick(o.city)}</h2>
                  <p className="mt-1 text-[0.875rem] text-primary">{pick(o.country)}</p>
                  <address className="mt-4 space-y-1 text-[0.9375rem] leading-relaxed text-muted-foreground not-italic">
                    {pick(o.address).map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                    <a href={`tel:${o.phone.replace(/[^+\d]/g, "")}`} className="mt-3 block text-navy hover:text-primary">
                      {o.phone}
                    </a>
                    <a href={`mailto:${o.email}`} className="block text-navy hover:text-primary">
                      {o.email}
                    </a>
                  </address>
                  <p className="mt-4 text-[0.8125rem] text-muted-foreground">
                    {t("locations.hours")}: {t("locations.hoursValue")}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
