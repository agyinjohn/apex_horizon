import { AppLink } from "./AppLink";
import { useLang } from "@/lib/i18n";
import type { Insight } from "@/data/insights";

export function InsightCard({ item, withImage = false }: { item: Insight; withImage?: boolean }) {
  const { pick } = useLang();

  return (
    <article className="group">
      <AppLink to={`/insights/${item.slug}`} className="block">
        {withImage && (
          <div className="image-reveal mb-6 aspect-16/10 overflow-hidden bg-surface">
            <img
              src={item.image}
              alt={pick(item.imageAlt)}
              loading="lazy"
              width={1600}
              height={912}
              className="size-full object-cover"
            />
          </div>
        )}
        <div className="border-t border-hairline pt-5">
          <h3 className="font-display text-[1.1875rem] leading-snug font-bold text-navy transition-colors group-hover:text-primary">
            {pick(item.title)}
          </h3>
          <p className="mt-4 text-[0.6875rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            {pick(item.category)} · {pick(item.readTime)}
          </p>
        </div>
      </AppLink>
    </article>
  );
}
