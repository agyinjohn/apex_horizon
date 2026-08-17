import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { AppLink } from "./AppLink";

const KEY = "apex-cookie-consent";

type Prefs = { analytics: boolean; marketing: boolean };

export function CookieConsent() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({ analytics: true, marketing: false });

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(KEY)) setVisible(true);
    } catch {
      /* ignore */
    }
  }, []);

  const persist = (value: Prefs | "all" | "essential") => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify({ value, at: new Date().toISOString() }));
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={t("cookie.title")}
      className="fixed inset-x-0 bottom-0 z-[65] border-t border-hairline bg-background/98 backdrop-blur"
    >
      <div className="container-apex py-6">
        {!managing ? (
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-[1.0625rem] font-bold text-navy">
                {t("cookie.title")}
              </h2>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">
                {t("cookie.body")}{" "}
                <AppLink to="/privacy" className="text-primary underline underline-offset-4">
                  {t("footer.privacy")}
                </AppLink>
                {" "}&middot;{" "}
                <AppLink to="/cookie-policy" className="text-primary underline underline-offset-4">
                  {t("footer.cookies")}
                </AppLink>
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => persist("all")}
                className="min-h-11 border border-primary bg-primary px-6 text-[0.75rem] font-semibold tracking-[0.08em] text-primary-foreground uppercase transition-colors hover:border-navy hover:bg-navy"
              >
                {t("cookie.accept")}
              </button>
              <button
                type="button"
                onClick={() => persist("essential")}
                className="min-h-11 border border-input px-6 text-[0.75rem] font-semibold tracking-[0.08em] text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
              >
                {t("cookie.essential")}
              </button>
              <button
                type="button"
                onClick={() => setManaging(true)}
                className="min-h-11 px-2 text-[0.75rem] font-semibold tracking-[0.08em] text-primary uppercase underline underline-offset-4"
              >
                {t("cookie.manage")}
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl">
            <h2 className="font-display text-[1.0625rem] font-bold text-navy">
              {t("cookie.prefTitle")}
            </h2>
            <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">
              {t("cookie.prefBody")}
            </p>
            <ul className="mt-5 divide-y divide-border border-y border-border">
              <li className="flex items-start justify-between gap-6 py-4">
                <div>
                  <p className="text-[0.875rem] font-semibold text-navy">
                    {t("cookie.essentialTitle")}
                  </p>
                  <p className="mt-1 text-[0.8125rem] text-muted-foreground">
                    {t("cookie.essentialDesc")}
                  </p>
                </div>
                <span className="eyebrow shrink-0 pt-1 text-primary">Always on</span>
              </li>
              {(
                [
                  ["analytics", "cookie.analyticsTitle", "cookie.analyticsDesc"],
                  ["marketing", "cookie.marketingTitle", "cookie.marketingDesc"],
                ] as const
              ).map(([key, titleKey, descKey]) => (
                <li key={key} className="flex items-start justify-between gap-6 py-4">
                  <div>
                    <label
                      htmlFor={`cookie-${key}`}
                      className="text-[0.875rem] font-semibold text-navy"
                    >
                      {t(titleKey)}
                    </label>
                    <p className="mt-1 text-[0.8125rem] text-muted-foreground">{t(descKey)}</p>
                  </div>
                  <input
                    id={`cookie-${key}`}
                    type="checkbox"
                    checked={prefs[key]}
                    onChange={(e) => setPrefs((p) => ({ ...p, [key]: e.target.checked }))}
                    className="mt-1 size-5 shrink-0 accent-[var(--brand)]"
                  />
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => persist(prefs)}
                className="min-h-11 border border-primary bg-primary px-6 text-[0.75rem] font-semibold tracking-[0.08em] text-primary-foreground uppercase transition-colors hover:border-navy hover:bg-navy"
              >
                {t("cookie.save")}
              </button>
              <button
                type="button"
                onClick={() => persist("all")}
                className="min-h-11 border border-input px-6 text-[0.75rem] font-semibold tracking-[0.08em] text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
              >
                {t("cookie.accept")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
