import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children
}: SectionProps) {
  return (
    <section id={id} className={cn("py-24 lg:py-32", className)}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-5 text-lg leading-8 text-[var(--muted-ink)]">
                {description}
              </p>
            ) : null}
          </div>
        )}
        <div className={title || description ? "mt-12" : undefined}>
          {children}
        </div>
      </div>
    </section>
  );
}
