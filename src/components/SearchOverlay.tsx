import { AppLink } from "./AppLink";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLang } from "@/lib/i18n";
import { expertise } from "@/data/expertise";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/case-studies";
import { insights } from "@/data/insights";
import { people } from "@/data/people";
import { programmes } from "@/data/programmes";
import { jobs } from "@/data/jobs";
import { cn } from "@/lib/utils";

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, pick } = useLang();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const index = useMemo(
    () => [
      ...expertise.map((e) => ({
        to: `/expertise/${e.slug}`,
        label: pick(e.title),
        group: t("nav.expertise"),
      })),
      ...industries.map((i) => ({
        to: `/industries/${i.slug}`,
        label: pick(i.name),
        group: t("nav.industries"),
      })),
      ...caseStudies.map((c) => ({
        to: `/case-studies/${c.slug}`,
        label: pick(c.headline),
        group: t("nav.cases"),
      })),
      ...insights.map((i) => ({
        to: `/insights/${i.slug}`,
        label: pick(i.title),
        group: t("nav.insights"),
      })),
      ...people.map((p) => ({ to: `/people/${p.slug}`, label: p.name, group: t("nav.people") })),
      ...programmes.map((p) => ({
        to: `/training/programmes/${p.slug}`,
        label: pick(p.title),
        group: pick({ en: "Training Programmes", fr: "Programmes de formation" }),
      })),
      ...jobs.map((j) => ({
        to: `/careers/${j.slug}`,
        label: pick(j.title),
        group: pick({ en: "Careers", fr: "Carrières" }),
      })),
      {
        to: "/training",
        label: pick({ en: "Training", fr: "Formation" }),
        group: pick({ en: "Pages", fr: "Pages" }),
      },
      {
        to: "/careers",
        label: pick({ en: "Careers", fr: "Carrières" }),
        group: pick({ en: "Pages", fr: "Pages" }),
      },
      {
        to: "/contact",
        label: pick({ en: "Contact", fr: "Contact" }),
        group: pick({ en: "Pages", fr: "Pages" }),
      },
      {
        to: "/rfp",
        label: pick({ en: "Submit an RFP", fr: "Soumettre un appel d'offres" }),
        group: pick({ en: "Pages", fr: "Pages" }),
      },
      {
        to: "/locations",
        label: pick({ en: "Locations", fr: "Implantations" }),
        group: pick({ en: "Pages", fr: "Pages" }),
      },
      {
        to: "/about",
        label: pick({ en: "About", fr: "À propos" }),
        group: pick({ en: "Pages", fr: "Pages" }),
      },
    ],
    [pick, t],
  );

  const results = query.trim().length > 1
    ? index.filter((r) => r.label.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 10)
    : [];

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] bg-navy/97 transition-opacity duration-300",
        open ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
    >
      <div className="container-apex pt-24">
        <div className="flex items-center justify-between">
          <span className="eyebrow text-white/50">{t("nav.search")}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label={t("nav.close")}
            className="flex min-h-11 min-w-11 items-center justify-center text-white/70 hover:text-white"
          >
            <X className="size-6" strokeWidth={1.5} />
          </button>
        </div>
        <div className="mt-8 flex items-center gap-4 border-b border-white/25 pb-4">
          <Search className="size-5 shrink-0 text-white/50" strokeWidth={1.6} />
          <input
            type="search"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("nav.searchPlaceholder")}
            aria-label={t("nav.search")}
            className="w-full bg-transparent font-display text-xl font-medium text-white placeholder:text-white/40 focus:outline-none sm:text-3xl"
          />
        </div>
        <ul className="mt-8 max-h-[50vh] space-y-0 overflow-y-auto">
          {results.map((r) => (
            <li key={r.to + r.label} className="border-b border-white/10">
              <AppLink
                to={r.to}
                onClick={onClose}
                className="flex flex-col gap-1 py-4 transition-colors hover:text-brand-mid sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="eyebrow w-40 shrink-0 text-white/45">{r.group}</span>
                <span className="text-white/90">{r.label}</span>
              </AppLink>
            </li>
          ))}
          {query.trim().length > 1 && results.length === 0 && (
            <li className="py-4 text-white/60">{t("nav.searchEmpty")}</li>
          )}
        </ul>
      </div>
    </div>
  );
}
