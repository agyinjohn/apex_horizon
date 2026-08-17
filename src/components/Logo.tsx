import { AppLink } from "./AppLink";
import { cn } from "@/lib/utils";

type Props = { tone?: "dark" | "light"; className?: string; onNavigate?: () => void };

/** Typography-led wordmark. No emblem, no icon. */
export function Logo({ tone = "dark", className, onNavigate }: Props) {
  return (
    <AppLink
      to="/"
      onClick={onNavigate}
      aria-label="gthink advisory consult — home"
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span
        className={cn(
          "font-display text-[1.35rem] font-extrabold tracking-[0.14em] transition-colors sm:text-[1.5rem]",
          tone === "light" ? "text-white" : "text-navy",
        )}
      >
        APEX
      </span>
      <span
        className={cn(
          "mt-1 text-[0.5rem] font-semibold tracking-[0.28em] sm:text-[0.5625rem]",
          tone === "light" ? "text-white/70" : "text-primary",
        )}
      >
        ADVISORY GROUP
      </span>
    </AppLink>
  );
}
