"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks, siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

import { ButtonLink } from "./button-link";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[color:rgba(244,247,248,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--ink)] text-sm font-bold text-white shadow-[0_10px_30px_rgba(6,33,36,0.14)]">
            K
          </span>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted-ink)]">
              Kritr
            </div>
            <div className="font-serif text-lg text-[var(--ink)] transition group-hover:text-[var(--accent)]">
              Intelligence, made useful.
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  active
                    ? "bg-white text-[var(--ink)] shadow-[0_8px_30px_rgba(6,33,36,0.06)]"
                    : "text-[var(--muted-ink)] hover:bg-white/80 hover:text-[var(--ink)]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={siteConfig.waitlistHref} label="Join Waitlist" />
        </div>
      </div>
    </header>
  );
}
