import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/academy/bespoke")({
  beforeLoad: () => {
    throw redirect({ to: "/training/corporate" });
  },
});
