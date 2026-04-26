"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

const storageKey = "kritr-cookie-consent";

function subscribe(onStoreChange: () => void) {
  const handleChange = () => onStoreChange();

  window.addEventListener("storage", handleChange);
  window.addEventListener("kritr-consent-change", handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener("kritr-consent-change", handleChange);
  };
}

function getSnapshot() {
  return window.localStorage.getItem(storageKey);
}

function getServerSnapshot() {
  return "accepted";
}

export function CookieBanner() {
  const pathname = usePathname();
  const consent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  const privacyHref = pathname.startsWith("/mylabstory")
    ? "/mylabstory/privacy"
    : "/privacy";

  if (consent) {
    return null;
  }

  const close = (value: "accepted" | "dismissed") => {
    window.localStorage.setItem(storageKey, value);
    window.dispatchEvent(new Event("kritr-consent-change"));
  };

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-[1.75rem] border border-[var(--line)] bg-white/95 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Cookie notice
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--muted-ink)]">
            We use essential storage to remember your privacy preferences.
            {" "}You can review more details in{" "}
            <Link
              href={privacyHref}
              className="font-semibold text-[var(--ink)] underline decoration-[var(--accent)] underline-offset-4"
            >
              our privacy policy
            </Link>
            .
          </p>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => close("dismissed")}
            className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--surface-strong)]"
          >
            Dismiss
          </button>
          <button
            type="button"
            onClick={() => close("accepted")}
            className="rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[color:rgba(6,33,36,0.92)]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
