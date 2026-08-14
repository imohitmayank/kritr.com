import { ActionLink } from "@/lib/content";

import { ButtonLink } from "./button-link";

type CtaBandProps = {
  eyebrow: string;
  title: string;
  description: string;
  primary: ActionLink;
  secondary?: ActionLink;
  note?: string;
};

export function CtaBand({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  note
}: CtaBandProps) {
  return (
    <section className="py-20 lg:py-24">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-[var(--ink)] px-8 py-12 text-white sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute -right-10 top-0 h-72 w-72 rounded-full bg-[var(--accent)]/30 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-[var(--accent-soft)]/35 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 right-1/3 h-40 w-40 rounded-full bg-[var(--accent-green)]/25 blur-3xl"
            aria-hidden
          />

          <div className="relative">
            <p className="text-sm font-semibold tracking-wide text-[var(--accent)]">
              {eyebrow}
            </p>
            <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                  {title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/75">
                  {description}
                </p>
                {note ? (
                  <p className="mt-4 text-sm text-white/60">{note}</p>
                ) : null}
              </div>

              <div className="flex flex-wrap gap-3">
                <ButtonLink
                  href={primary.href}
                  label={primary.label}
                  variant="accent"
                  className="!rounded-lg"
                  disabled={primary.disabled}
                />
                {secondary ? (
                  <ButtonLink
                    href={secondary.href}
                    label={secondary.label}
                    variant="glass"
                    className="!rounded-lg"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
