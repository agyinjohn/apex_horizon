import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitch({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const { lang, setLang, t } = useLang();

  const base =
    "min-h-11 px-1.5 text-[0.75rem] font-semibold tracking-[0.1em] transition-colors uppercase";

  return (
    <div
      role="group"
      aria-label={t("nav.language")}
      className={cn(
        "flex items-center",
        tone === "light" ? "text-white/60" : "text-muted-foreground",
      )}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          base,
          lang === "en"
            ? tone === "light"
              ? "text-white"
              : "text-primary"
            : "hover:text-foreground/80",
        )}
      >
        EN
      </button>
      <span aria-hidden="true" className="text-[0.75rem] opacity-50">
        |
      </span>
      <button
        type="button"
        onClick={() => setLang("fr")}
        aria-pressed={lang === "fr"}
        className={cn(
          base,
          lang === "fr"
            ? tone === "light"
              ? "text-white"
              : "text-primary"
            : "hover:text-foreground/80",
        )}
      >
        FR
      </button>
    </div>
  );
}
