"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/lib/content";

export function Footer() {
  const pathname = usePathname();
  const isMyLabStoryContext = pathname.startsWith("/mylabstory");
  const privacyHref = isMyLabStoryContext ? "/mylabstory/privacy" : "/privacy";
  const termsHref = isMyLabStoryContext ? "/mylabstory/terms" : "/terms";

  const contactEmail = isMyLabStoryContext ? siteConfig.myLabStorySupportEmail : siteConfig.supportEmail;

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
            Kritr builds intelligent products that make complex information
            easier to understand, starting with health.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-[var(--muted-ink)]">
          <Link href="/mylabstory" className="transition hover:text-[var(--ink)]">
            MyLabStory
          </Link>
          <Link href={privacyHref} className="transition hover:text-[var(--ink)]">
            Privacy
          </Link>
          <Link href={termsHref} className="transition hover:text-[var(--ink)]">
            Terms
          </Link>
          <a
            href={`mailto:${contactEmail}`}
            className="transition hover:text-[var(--ink)]"
          >
            {contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
