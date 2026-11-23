"use client";

import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

// Official black Cartesia Startups lockup.
// Source: https://www.cartesia.ai/brand/cartesia-startups-black.svg
// Mockup toggle: the strip sits inside the footer unless the page is opened
// as /mylabstory/?partners=above, which moves it to a band just above the footer.
const CARTESIA_STARTUPS_LOGO = "/cartesia-startups-black.svg";
const CARTESIA_STARTUPS_HREF = "https://www.cartesia.ai/startups";

type Placement = "footer" | "above";

function Strip({ placement }: { placement: Placement }) {
  return (
    <div
      id="backed-by"
      data-placement={placement}
      className={
        placement === "above"
          ? "border-t border-[var(--line)] bg-white/70"
          : "border-t border-[var(--line)]"
      }
    >
      <div className="shell flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-10">
        <p className="shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted-ink)]">
          Backed by
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

function subscribeToLocation(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  return () => window.removeEventListener("popstate", onStoreChange);
}

function readPlacement(): Placement {
  return new URLSearchParams(window.location.search).get("partners") === "above"
    ? "above"
    : "footer";
}

function usePartnerPlacement(): Placement {
  return useSyncExternalStore(subscribeToLocation, readPlacement, () => "footer");
}

export function PartnerStrip({ placement }: { placement: Placement }) {
  const pathname = usePathname();
  const requested = usePartnerPlacement();
  const normalized = pathname.replace(/\/$/, "") || "/";

  if (normalized !== "/mylabstory" || requested !== placement) {
    return null;
  }

  return <Strip placement={placement} />;
}
