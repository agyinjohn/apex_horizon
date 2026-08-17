import { ArrowUpRight } from "lucide-react";
import { AppLink } from "./AppLink";
import { useLang } from "@/lib/i18n";
import type { CaseStudy } from "@/data/case-studies";

/** Digital credential ("tombstone") card — rectangular, typographic, no photography. */
export function CaseCard({ item }: { item: CaseStudy }) {
  const { pick, t } = useLang();

  return (
    <AppLink
      to={`/case-studies/${item.slug}`}
      className="group flex h-full flex-col border border-hairline bg-background p-7 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-[var(--shadow-lift)] lg:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="eyebrow max-w-[15rem] text-primary">{pick(item.industry)}</span>
        <ArrowUpRight
          className="size-4 shrink-0 text-primary/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.8}
        />
      </div>

      <p className="mt-5 text-[0.6875rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        {pick(item.market)}
      </p>
      <p className="mt-2 font-display text-[1.0625rem] font-bold tracking-tight text-navy">
        {item.confidential ? t("cases.confidential") : pick(item.client)}
      </p>

      <p className="mt-5 flex-1 text-[0.9375rem] leading-relaxed text-foreground/80">
        {pick(item.headline)}
      </p>

      <div className="mt-8 flex items-end justify-between gap-4 border-t border-hairline pt-5">
        <span className="text-[0.75rem] leading-relaxed text-muted-foreground">
          {pick(item.services).join(" · ")}
        </span>
        <span className="font-display text-[0.9375rem] font-bold text-primary">{item.year}</span>
      </div>
    </AppLink>
  );
}
