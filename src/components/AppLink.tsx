import { Link } from "@tanstack/react-router";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  params?: Record<string, string>;
  activeProps?: Record<string, unknown>;
  children: ReactNode;
};

/**
 * Thin wrapper around TanStack <Link> that accepts plain string paths.
 * Keeps view code readable while the router resolves the concrete route.
 */
export function AppLink({ to, params, activeProps, ...rest }: Props) {
  const AnyLink = Link as unknown as React.ComponentType<Record<string, unknown>>;
  return <AnyLink to={to} params={params} activeProps={activeProps} {...rest} />;
}
