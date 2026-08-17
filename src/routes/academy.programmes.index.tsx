import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/academy/programmes/")({
  beforeLoad: () => {
    throw redirect({ to: "/training/programmes" });
  },
});
