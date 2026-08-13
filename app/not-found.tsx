import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] pt-20">
      <div className="max-w-2xl border-t border-[var(--line)] pt-10">
        <p className="text-sm font-semibold tracking-wide text-[var(--accent)]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--ink)] sm:text-5xl">
          That page is not here.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted-ink)]">
          Head home, or go to MyLabStory.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/" label="Go home" className="!rounded-lg" />
          <ButtonLink
            href="/mylabstory"
            label="View MyLabStory"
            variant="secondary"
            className="!rounded-lg"
          />
        </div>
      </div>
    </Section>
  );
}
