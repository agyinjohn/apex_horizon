import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { AppLink } from "./AppLink";
import { cn } from "@/lib/utils";

export function SectionLabel({ children, tone = "brand" }: { children: ReactNode; tone?: "brand" | "light" }) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-3 before:h-px before:w-8 before:bg-current",
        tone === "light" ? "text-white/60" : "text-primary",
      )}
    >
      {children}
    </span>
  );
}

type ArrowLinkProps = {
  to: string;
  children: ReactNode;
  variant?: "text" | "solid" | "outline" | "outlineLight";
  className?: string;
};

export function ArrowLink({ to, children, variant = "text", className }: ArrowLinkProps) {
  const styles = {
    text: "text-primary hover:text-navy",
    solid:
      "border border-primary bg-primary px-6 py-4 text-primary-foreground hover:bg-navy hover:border-navy",
    outline:
      "border border-input px-6 py-4 text-foreground hover:border-primary hover:text-primary",
    outlineLight: "border border-white/40 px-6 py-4 text-white hover:bg-white hover:text-navy",
  }[variant];

  return (
    <AppLink
      to={to}
      className={cn(
        "group inline-flex items-center gap-2.5 text-[0.75rem] font-semibold tracking-[0.1em] uppercase transition-colors",
        styles,
        className,
      )}
    >
      {children}
      <ArrowRight
        className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={2}
      />
    </AppLink>
  );
}

export function Section({
  children,
  className,
  tone = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "surface" | "navy" | "pale";
  id?: string;
}) {
  const tones = {
    white: "bg-background",
    surface: "bg-surface",
    pale: "bg-brand-pale/45",
    navy: "bg-navy text-navy-foreground",
  }[tone];

  return (
    <section id={id} className={cn("py-20 lg:py-28", tones, className)}>
      <div className="container-apex">{children}</div>
    </section>
  );
}
