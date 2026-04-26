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
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.25rem] border border-[color:rgba(255,255,255,0.55)] bg-[linear-gradient(135deg,#062124_0%,#0f4f58_50%,#55b5c8_100%)] px-8 py-10 text-white shadow-[0_28px_100px_rgba(6,33,36,0.22)] sm:px-12 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
            {eyebrow}
          </p>
          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                {title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/80">
                {description}
              </p>
              {note ? <p className="mt-4 text-sm text-white/70">{note}</p> : null}
            </div>

            <div className="flex flex-wrap gap-3">
              <ButtonLink href={primary.href} label={primary.label} variant="light" />
              {secondary ? (
                <ButtonLink
                  href={secondary.href}
                  label={secondary.label}
                  variant="glass"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
