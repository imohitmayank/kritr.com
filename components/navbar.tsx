"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks, siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

import { ButtonLink } from "./button-link";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isDarkHero = pathname === "/mylabstory";
  const isOverlay = isHome || isDarkHero;

  return (
    <header
      className={cn(
        "z-50 transition",
        isOverlay ? "fixed inset-x-0 top-0" : "sticky top-0",
        isDarkHero ? "nav-glass-dark" : "nav-glass"
      )}
    >
      <div className="shell flex items-center justify-between py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]",
              isDarkHero
                ? "bg-white/90 text-[var(--ink)] backdrop-blur-md"
                : "bg-[var(--ink)]/90 text-white backdrop-blur-md"
            )}
          >
            K
          </span>
          <div>
            <div
              className={cn(
                "text-sm font-semibold tracking-[0.08em]",
                isDarkHero ? "text-white" : "text-[var(--ink)]"
              )}
            >
              Kritr
            </div>
            <div
              className={cn(
                "text-xs transition",
                isDarkHero
                  ? "text-white/70 group-hover:text-white"
                  : "text-[var(--muted-ink)] group-hover:text-[var(--accent)]"
              )}
            >
              AI for clearer decisions
            </div>
          </div>
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-1 rounded-full p-1 md:flex",
            isDarkHero
              ? "bg-white/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
              : "bg-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]"
          )}
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition",
                  isDarkHero
                    ? active
                      ? "bg-white/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                    : active
                      ? "bg-white/70 text-[var(--ink)] shadow-[0_1px_8px_rgba(26,23,48,0.06),inset_0_1px_0_rgba(255,255,255,0.8)]"
                      : "text-[var(--muted-ink)] hover:bg-white/40 hover:text-[var(--ink)]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href={siteConfig.contactHref}
            label="Contact"
            variant={isDarkHero ? "light" : "primary"}
            className="!rounded-full !px-4 !py-2.5"
          />
        </div>
      </div>
    </header>
  );
}
