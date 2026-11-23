"use client";

import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

// Official black Cartesia Startups lockup.
// Source: https://www.cartesia.ai/brand/cartesia-startups-black.svg
// The lockup already says "Cartesia Startups", so the label stays short:
//   /mylabstory/?label=recipient  → "Grant recipient"
//   /mylabstory/?label=supported  → "Supported by"
// Placement mockup: /mylabstory/?partners=above moves the strip above the footer.
const CARTESIA_STARTUPS_LOGO = "/cartesia-startups-black.svg";
const CARTESIA_STARTUPS_HREF = "https://www.cartesia.ai/startups";

type Placement = "footer" | "above";
type Label = "recipient" | "supported";

const labelCopy: Record<Label, string> = {
  recipient: "Grant recipient",
  supported: "Supported by"
};

function Strip({
  placement,
  label
}: {
  placement: Placement;
  label: Label;
}) {
  return (
    <div
      id="partner-strip"
      data-placement={placement}
      data-label={label}
      className={
        placement === "above"
          ? "border-t border-[var(--line)] bg-white/70"
          : "border-t border-[var(--line)]"
      }
    >
      <div className="shell flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-10">
        <p className="shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted-ink)]">
          {labelCopy[label]}
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

function readLabel(): Label {
  return new URLSearchParams(window.location.search).get("label") === "supported"
    ? "supported"
    : "recipient";
}

function usePartnerPlacement(): Placement {
  return useSyncExternalStore(subscribeToLocation, readPlacement, () => "footer");
}

function usePartnerLabel(): Label {
  return useSyncExternalStore(subscribeToLocation, readLabel, () => "recipient");
}

export function PartnerStrip({ placement }: { placement: Placement }) {
  const pathname = usePathname();
  const requested = usePartnerPlacement();
  const label = usePartnerLabel();
  const normalized = pathname.replace(/\/$/, "") || "/";

  if (normalized !== "/mylabstory" || requested !== placement) {
    return null;
  }

  return <Strip placement={placement} label={label} />;
}
