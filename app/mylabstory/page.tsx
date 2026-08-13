import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { FeatureCard } from "@/components/feature-card";
import { Section } from "@/components/section";
import {
  myLabStoryFeatures,
  myLabStoryProblemPoints,
  myLabStoryScreenFlow,
  myLabStorySolutionSteps,
  myLabStoryTrustPoints,
  siteConfig
} from "@/lib/content";

export const metadata: Metadata = {
  title: "MyLabStory",
  description:
    "Upload lab reports, understand biomarkers, and track health trends over time with MyLabStory."
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

        <div className="relative mx-auto flex min-h-[min(100svh,56rem)] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24">
          <div className="max-w-2xl">
            <p className="animate-hero-fade font-serif text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
              MyLabStory
            </p>
            <h1 className="animate-hero-fade-delay mt-5 max-w-xl text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
              Lab reports you can actually follow over time.
            </h1>
            <p className="animate-hero-fade-delay-2 mt-5 max-w-lg text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Upload a PDF or photo, pull out the markers, and keep a timeline —
              with short explanations instead of another unread file.
            </p>
            <div className="animate-hero-fade-delay-2 mt-9 flex flex-wrap gap-3">
              <ButtonLink
                href={siteConfig.downloadHref}
                label="Download app"
                variant="light"
                className="!rounded-lg"
              />
              <ButtonLink
                href={siteConfig.contactHref}
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
        eyebrow="The mess"
        title="Lab data is important. The way it arrives usually is not."
        description="Most people leave a visit with a PDF they will not open again until the next one."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {myLabStoryProblemPoints.map((problem, index) => (
            <article key={problem} className="panel">
              <span className="step-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-6 text-lg leading-8 text-[var(--ink)]">
                {problem}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="ink"
        eyebrow="The flow"
        title="From upload to a history you can skim"
        description="Four steps. No portal scavenger hunt."
      >
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {myLabStorySolutionSteps.map((step, index) => (
            <li key={step} className="panel-ink">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-5 text-base leading-7 text-white/85">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="Features"
        title="Capture, explain, track"
        description="The product stays narrow on purpose."
      >
        <div className="grid gap-5 lg:grid-cols-3">
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
        eyebrow="In the app"
        title="What the journey looks like"
        description="Upload → extract → review → insights → trends."
      >
        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[1.9rem] hidden h-px bg-[var(--line)] lg:block"
            aria-hidden
          />
          {myLabStoryScreenFlow.map((item, index) => (
            <article key={item.title} className="relative panel pt-6">
              <span className="relative z-[1] step-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted-ink)]">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Trust"
        title="Health data needs a shorter leash"
        description="Encryption, clear limits, and language that does not overpromise."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {myLabStoryTrustPoints.map((point, index) => (
            <article
              key={point}
              className="rounded-[1.25rem] border border-[var(--line)] border-l-4 border-l-[var(--accent-soft)] bg-white/70 p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-soft)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--ink)]">{point}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-amber-200/80 bg-amber-50 px-5 py-4 text-sm leading-7 text-amber-950">
          <strong>Disclaimer:</strong> MyLabStory is not a medical device and
          does not provide medical advice.
        </div>
      </Section>

      <CtaBand
        eyebrow="Get started"
        title="Start a health timeline you can actually reread."
        description="Ask for download access, or write if you have questions about MyLabStory."
        primary={{ href: siteConfig.downloadHref, label: "Download app" }}
        secondary={{ href: siteConfig.contactHref, label: "Contact" }}
      />
    </>
  );
}
