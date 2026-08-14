import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  tone?: "default" | "muted" | "ink";
  children: ReactNode;
};

const toneStyles = {
  default: "bg-transparent text-[var(--ink)]",
  muted:
    "bg-[linear-gradient(180deg,var(--surface-muted)_0%,#eef2f8_100%)] text-[var(--ink)]",
  ink: "bg-[var(--ink)] text-white"
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  tone = "default",
  children
}: SectionProps) {
  const isInk = tone === "ink";

  return (
    <section id={id} className={cn("py-20 lg:py-28", toneStyles[tone], className)}>
      <div className="shell">
        {(eyebrow || title || description) && (
          <div className="max-w-2xl">
            {eyebrow ? (
              <p
                className={cn(
                  "text-sm font-semibold tracking-wide",
                  isInk ? "text-[var(--accent)]" : "text-[var(--accent-soft)]"
                )}
              >
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2
                className={cn(
                  "mt-3 text-3xl font-semibold tracking-tight sm:text-4xl",
                  isInk ? "text-white" : "text-[var(--ink)]"
                )}
              >
                {title}
              </h2>
            ) : null}
            {description ? (
              <p
                className={cn(
                  "mt-4 text-lg leading-8",
                  isInk ? "text-white/70" : "text-[var(--muted-ink)]"
                )}
              >
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
