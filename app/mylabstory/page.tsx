import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { FeatureCard } from "@/components/feature-card";
import { Section } from "@/components/section";
import {
  myLabStoryFeatures,
  myLabStoryProblemPoints,
  myLabStorySolutionSteps,
  myLabStoryTrustPoints,
  myLabStoryVisionPoints,
  siteConfig
} from "@/lib/content";

export const metadata: Metadata = {
  title: "MyLabStory",
  description:
    "MyLabStory turns scattered medical reports into a living health history you can search, understand, and keep."
};

export default function MyLabStoryPage() {
  return (
    <>
      <section className="relative min-h-[min(100svh,56rem)] overflow-hidden">
        <Image
          src="/hero-mylabstory.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-hero-image object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(26,23,48,0.82)_0%,rgba(26,23,48,0.55)_42%,rgba(26,23,48,0.28)_70%,rgba(26,23,48,0.18)_100%)]"
          aria-hidden
        />

        <div className="shell relative flex min-h-[min(100svh,56rem)] flex-col justify-end pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24">
          <div className="max-w-2xl">
            <p className="animate-hero-fade font-serif text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
              MyLabStory
            </p>
            <h1 className="animate-hero-fade-delay mt-5 max-w-xl text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
              Your health journey, decoded.
            </h1>
            <p className="animate-hero-fade-delay-2 mt-5 max-w-lg text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Your health is a story, not a stack of reports. Upload what you
              already have. We turn it into a history you can actually use.
            </p>
            <div className="animate-hero-fade-delay-2 mt-9 flex flex-wrap gap-3">
              <ButtonLink
                href={siteConfig.downloadHref}
                label="Download app (coming soon)"
                variant="light"
                className="!rounded-lg"
                disabled
              />
              <ButtonLink
                href={siteConfig.myLabStoryContactHref}
                label="Contact"
                variant="glass"
                className="!rounded-lg"
              />
            </div>
            <p className="animate-hero-fade-delay-2 mt-6 text-sm text-white/65">
              MyLabStory is not a medical device and does not provide medical
              advice.
            </p>
          </div>
        </div>
      </section>

      <Section
        tone="muted"
        eyebrow="The problem"
        title="Healthcare data does not add up on its own."
        description="Every checkup produces another PDF. Then it disappears into email, a chat thread, or a portal you will not open until someone asks."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {myLabStoryProblemPoints.map((problem, index) => (
            <article key={problem.title} className="panel">
              <span className="step-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[var(--ink)]">
                {problem.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted-ink)]">
                {problem.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="ink"
        eyebrow="How it works"
        title="Documents in. Understanding out."
        description="We are not building another storage app. Reports are the input. A living health history is the output."
      >
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {myLabStorySolutionSteps.map((step, index) => (
            <li key={step.title} className="panel-ink">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-serif text-2xl text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/75">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="In the app"
        title="What you can do today"
        description="Upload, search, track, ask. Built for people managing their own health, not for hospital software."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {myLabStoryFeatures.map((feature) => (
            <FeatureCard
              key={feature.title}
              eyebrow={feature.eyebrow}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Privacy"
        title="Health data is personal. We treat it that way."
        description="Ownership, care, and language that does not overpromise. You stay in control."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {myLabStoryTrustPoints.map((point, index) => (
            <article
              key={point.title}
              className="rounded-[1.25rem] border border-[var(--line)] border-l-4 border-l-[var(--accent-soft)] bg-white/70 p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-soft)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[var(--ink)]">
                {point.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted-ink)]">
                {point.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-amber-200/80 bg-amber-50 px-5 py-4 text-sm leading-7 text-amber-950">
          <strong>Disclaimer:</strong> MyLabStory is not a medical device and
          does not provide medical advice.
        </div>
      </Section>

      <Section
        eyebrow="Ahead"
        title="A longer story, over time"
        description="The product starts with reports. The direction is a personal health companion: family, medicines, wearables, and patterns that only show up across years."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {myLabStoryVisionPoints.map((point) => (
            <article key={point.title} className="panel">
              <h3 className="text-xl font-semibold text-[var(--ink)]">
                {point.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted-ink)]">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Coming soon"
        title="One home for your health history."
        description="The app is not public yet. Write if you want updates, or if you have questions about MyLabStory."
        primary={{
          href: siteConfig.downloadHref,
          label: "Download app (coming soon)",
          disabled: true
        }}
        secondary={{ href: siteConfig.myLabStoryContactHref, label: "Contact" }}
      />
    </>
  );
}
