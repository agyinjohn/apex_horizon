import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./ui-apex";

export function PageHero({
  label,
  title,
  body,
  children,
}: {
  label?: string;
  title: ReactNode;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-hairline bg-surface pt-36 pb-16 lg:pt-44 lg:pb-20">
      <div className="container-apex">
        {label && (
          <Reveal>
            <SectionLabel>{label}</SectionLabel>
          </Reveal>
        )}
        <Reveal delay={80}>
          <h1 className="display-1 mt-8 max-w-4xl text-navy">{title}</h1>
        </Reveal>
        {body && (
          <Reveal delay={140}>
            <p className="lead mt-8 max-w-2xl">{body}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
