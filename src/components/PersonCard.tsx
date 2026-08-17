import { ArrowRight, Linkedin } from "lucide-react";
import { AppLink } from "./AppLink";
import { useLang } from "@/lib/i18n";
import type { Person } from "@/data/people";

export function PersonCard({ person }: { person: Person }) {
  const { t, pick } = useLang();

  return (
    <article className="group">
      <AppLink to={`/people/${person.slug}`} className="block image-reveal overflow-hidden">
        <div className="aspect-4/5 overflow-hidden bg-surface">
          <img
            src={person.image}
            alt={pick(person.imageAlt)}
            loading="lazy"
            width={912}
            height={1104}
            className="size-full object-cover object-top"
          />
        </div>
      </AppLink>
      <div className="mt-5 border-t border-hairline pt-5">
        <h3 className="font-display text-[1.125rem] font-bold text-navy">
          <AppLink to={`/people/${person.slug}`} className="transition-colors hover:text-primary">
            {person.name}
          </AppLink>
        </h3>
        <p className="mt-1.5 text-[0.875rem] text-primary">{pick(person.role)}</p>
        <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted-foreground">
          {pick(person.focus).join(" · ")}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <AppLink
            to={`/people/${person.slug}`}
            className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.12em] text-navy uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100"
          >
            {t("people.viewProfile")}
            <ArrowRight className="size-3.5" strokeWidth={2} />
          </AppLink>
          <a
            href={person.linkedin}
            aria-label={`${person.name} — LinkedIn`}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="size-4" strokeWidth={1.6} />
          </a>
        </div>
      </div>
    </article>
  );
}
