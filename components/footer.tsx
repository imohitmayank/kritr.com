import Link from "next/link";

import { siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            Kritr
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--ink)]">
            The builder of intelligence. MyLabStory is the proof of it.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted-ink)]">
            Designed for GitHub Pages deployment, scalable for future products,
            and ready for legal review and app-store linking.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-[var(--muted-ink)]">
          <Link href="/products" className="transition hover:text-[var(--ink)]">
            Products
          </Link>
          <Link href="/mylabstory" className="transition hover:text-[var(--ink)]">
            MyLabStory
          </Link>
          <Link
            href="/mylabstory/privacy"
            className="transition hover:text-[var(--ink)]"
          >
            Privacy
          </Link>
          <Link
            href="/mylabstory/terms"
            className="transition hover:text-[var(--ink)]"
          >
            Terms
          </Link>
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="transition hover:text-[var(--ink)]"
          >
            {siteConfig.supportEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
