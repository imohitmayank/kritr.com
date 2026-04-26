import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] pt-20">
      <div className="max-w-2xl rounded-[2rem] border border-[var(--line)] bg-white/85 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--ink)] sm:text-5xl">
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--muted-ink)]">
          Try heading back to Kritr or continue to MyLabStory.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/" label="Go Home" />
          <ButtonLink href="/mylabstory" label="View MyLabStory" variant="secondary" />
        </div>
      </div>
    </Section>
  );
}
