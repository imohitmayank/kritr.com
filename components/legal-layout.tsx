import { LegalSection } from "@/lib/content";

type LegalLayoutProps = {
  title: string;
  intro: string;
  effectiveDate: string;
  sections: LegalSection[];
};

export function LegalLayout({
  title,
  intro,
  effectiveDate,
  sections
}: LegalLayoutProps) {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--line)] bg-white/85 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm font-medium text-[var(--muted-ink)]">
            Effective date: {effectiveDate}
          </p>
          <p className="mt-6 text-lg leading-8 text-[var(--muted-ink)]">
            {intro}
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[1.75rem] border border-[var(--line)] bg-white/80 p-8"
            >
              <h2 className="text-2xl font-semibold text-[var(--ink)]">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-[var(--muted-ink)]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
