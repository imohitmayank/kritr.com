import type { Metadata } from "next";

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
    "MyLabStory helps people upload lab reports, understand biomarkers, and track health trends over time."
};

export default function MyLabStoryPage() {
  return (
    <>
      <Section className="pb-16 pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              MyLabStory
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-[var(--ink)] sm:text-6xl">
              Your health data,{" "}
              <span className="font-serif text-[color:var(--accent)]">
                finally understood.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-ink)]">
              Upload reports, track biomarkers, and get AI-assisted insight from
              a product designed to make lab history clearer and easier to use.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink
                href={siteConfig.downloadHref}
                label="Download App"
              />
              <ButtonLink
                href={siteConfig.contactHref}
                label="Contact"
                variant="secondary"
              />
            </div>
            <p className="mt-6 text-sm text-[var(--muted-ink)]">
              MyLabStory is not a medical device and does not provide medical
              advice.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 right-8 top-10 h-56 rounded-full bg-[color:rgba(15,118,110,0.18)] blur-3xl" />
            <div className="relative mx-auto max-w-md rounded-[2.5rem] border border-[color:rgba(255,255,255,0.6)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(230,241,242,0.92))] p-5 shadow-[0_30px_120px_rgba(15,23,42,0.12)]">
              <div className="rounded-[2rem] bg-[var(--ink)] p-5 text-white">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/55">
                  <span>Health timeline</span>
                  <span>Secure upload</span>
                </div>
                <div className="mt-6 rounded-[1.5rem] bg-white/10 p-5">
                  <p className="text-sm text-white/65">Latest report</p>
                  <p className="mt-2 text-2xl font-semibold">Comprehensive panel</p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-xs text-white/55">Biomarkers</p>
                      <p className="mt-2 text-xl font-semibold">32 extracted</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-xs text-white/55">Flagged</p>
                      <p className="mt-2 text-xl font-semibold">3 to review</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-[1.25rem] bg-white/10 p-4">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs text-white/55">Ferritin</p>
                        <p className="mt-2 text-lg font-semibold">Trending up</p>
                      </div>
                      <div className="flex gap-1">
                        <span className="h-6 w-2 rounded-full bg-[#55b5c8]" />
                        <span className="h-8 w-2 rounded-full bg-[#79c6d3]" />
                        <span className="h-10 w-2 rounded-full bg-white" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[1.25rem] bg-[var(--surface-strong)] p-4 text-[var(--ink)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                      AI summary
                    </p>
                    <p className="mt-3 text-sm leading-6">
                      Your lipid markers have remained stable, while iron markers
                      show the biggest shift since the last report.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Problem"
        title="Lab reports are important, but the experience around them is still fragmented."
        description="Important health information often arrives in formats that are hard to revisit, compare, or understand over time."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {myLabStoryProblemPoints.map((problem) => (
            <article
              key={problem}
              className="rounded-[1.75rem] border border-[var(--line)] bg-white/85 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Pain point
              </p>
              <p className="mt-6 text-xl leading-8 text-[var(--ink)]">
                {problem}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Solution"
        title="A clear flow from report upload to longitudinal understanding"
        description="MyLabStory helps turn disconnected reports into a clearer, more readable health history."
      >
        <div className="grid gap-5 lg:grid-cols-4">
          {myLabStorySolutionSteps.map((step, index) => (
            <article
              key={step}
              className="rounded-[1.75rem] border border-[var(--line)] bg-[color:rgba(255,255,255,0.82)] p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--ink)] text-sm font-semibold text-white">
                0{index + 1}
              </div>
              <p className="mt-6 text-base leading-7 text-[var(--ink)]">{step}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Features"
        title="Three product promises, kept simple"
        description="From upload to understanding to long-term tracking, the product is designed to make lab data easier to live with."
      >
        <div className="grid gap-6 lg:grid-cols-3">
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
        eyebrow="Product flow"
        title="A visual story that mirrors the app journey"
        description="From first upload to trend review, each step is designed to feel understandable and calm."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[var(--line)] bg-white/85 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <div className="mx-auto max-w-sm rounded-[2.25rem] bg-[var(--ink)] p-4 text-white">
              <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                  App preview
                </p>
                <div className="mt-5 space-y-3">
                  {myLabStoryScreenFlow.map((item, index) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 rounded-[1.25rem] bg-white/10 p-3"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-[var(--ink)]">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="text-xs text-white/65">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {myLabStoryScreenFlow.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-[var(--line)] bg-white/82 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Step 0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted-ink)]">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Trust"
        title="Trust matters more in health than in almost any other category"
        description="That means careful handling of data, clear boundaries, and language people can understand."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {myLabStoryTrustPoints.map((point) => (
            <article
              key={point}
              className="rounded-[1.75rem] border border-[var(--line)] bg-white/85 p-7"
            >
              <p className="text-base leading-8 text-[var(--ink)]">{point}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-[1.75rem] border border-amber-200 bg-amber-50 px-6 py-5 text-sm leading-7 text-amber-900">
          <strong>Disclaimer:</strong> MyLabStory is not a medical device and
          does not provide medical advice.
        </div>
      </Section>

      <CtaBand
        eyebrow="Get started"
        title="Start tracking your health story with a product that explains the data, not just stores it."
        description="Get in touch to learn more about MyLabStory or request access."
        primary={{ href: siteConfig.downloadHref, label: "Download App" }}
        secondary={{ href: siteConfig.contactHref, label: "Contact" }}
      />
    </>
  );
}
