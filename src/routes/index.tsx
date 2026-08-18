import { createFileRoute } from "@tanstack/react-router";
import { Github } from "lucide-react";
import { GITHUB_REPO_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yandiswa Trendy — Trend-led style, built in the open" },
      {
        name: "description",
        content:
          "Yandiswa Trendy is an open-source style app built with TanStack Start, React and Tailwind CSS. Browse the source on GitHub.",
      },
      { property: "og:title", content: "Yandiswa Trendy — Trend-led style, built in the open" },
      {
        property: "og:description",
        content:
          "An open-source style app built with TanStack Start, React and Tailwind CSS. Browse the source on GitHub.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background px-6 py-20 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
        Yandiswa Trendy
      </p>
      <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
        Trend-led style, built in the open
      </h1>
      <p className="max-w-xl text-base text-muted-foreground">
        Everything here is open source. Read the code, fork it, or follow along as
        the app grows.
      </p>
      <a
        href={GITHUB_REPO_URL}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Github className="size-4" aria-hidden="true" />
        View the GitHub repo
      </a>
    </main>
  );
}
