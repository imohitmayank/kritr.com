"use client";

import { usePathname } from "next/navigation";

// Official black Cartesia Startups lockup.
// Source: https://www.cartesia.ai/brand/cartesia-startups-black.svg
const CARTESIA_STARTUPS_LOGO = "/cartesia-startups-black.svg";
const CARTESIA_STARTUPS_HREF = "https://www.cartesia.ai/startups";

export function PartnerStrip() {
  const pathname = usePathname();
  const normalized = pathname.replace(/\/$/, "") || "/";

  if (normalized !== "/mylabstory") {
    return null;
  }

  return (
    <div className="border-t border-[var(--line)]">
      <div className="shell flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-10">
        <p className="shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted-ink)]">
          Supported by
        </p>
        <ul className="flex min-w-0 flex-wrap items-center gap-x-10 gap-y-3">
          <li>
            <a
              href={CARTESIA_STARTUPS_HREF}
              target="_blank"
              rel="noopener"
              className="inline-flex"
            >
              {/* Native img: next/image forces height:auto on this SVG and collapses it. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CARTESIA_STARTUPS_LOGO}
                alt="Cartesia Startups"
                width={311}
                height={32}
                style={{ height: 26, width: "auto" }}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
