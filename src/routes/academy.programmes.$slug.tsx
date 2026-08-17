import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/academy/programmes/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/training/programmes/$slug", params: { slug: params.slug } });
  },
});
