import type { Metadata } from "next";

import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { ProductCard } from "@/components/product-card";
import { Section } from "@/components/section";
import {
  homepagePillars,
  philosophyPoints,
  products
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Kritr builds AI systems that turn complex data into clear decisions, starting with MyLabStory."
};

export default function HomePage() {
  const featuredProduct = products[0];

  return (
    <>
      <Section className="pb-16 pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              Kritr Platform
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-[var(--ink)] sm:text-6xl lg:text-7xl">
              We build AI systems that{" "}
              <span className="font-serif text-[color:var(--accent)]">
                turn data into decisions.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-ink)] sm:text-xl">
              Kritr creates intelligent products that simplify real-world
              complexity, starting with health.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/products" label="Explore Products" />
              <ButtonLink
                href="/mylabstory"
                label="View MyLabStory"
                variant="secondary"
              />
            </div>
            <p className="mt-6 text-sm text-[var(--muted-ink)]">
              Built for speed, clarity, and scalable product storytelling.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-x-10 top-6 h-48 rounded-full bg-[color:rgba(85,181,200,0.24)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-[color:rgba(255,255,255,0.6)] bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(230,241,242,0.82))] p-8 shadow-[0_28px_100px_rgba(15,23,42,0.08)]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-[var(--ink)] p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    Brand
                  </p>
                  <p className="mt-6 font-serif text-3xl">
                    Builder of intelligence
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-white/80 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    Product
                  </p>
                  <p className="mt-6 text-2xl font-semibold text-[var(--ink)]">
                    MyLabStory
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted-ink)]">
                    Health insights from lab reports, with a cleaner path from
                    report uploads to trend tracking.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-[var(--line)] bg-white/70 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-ink)]">
                    Trust
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--ink)]">
                    <li>Static, fast, and GitHub Pages compatible</li>
                    <li>Privacy and terms hosted under product routes</li>
                    <li>Conversion CTA paths ready for app links</li>
                  </ul>
                </div>
                <div className="rounded-[1.5rem] bg-[var(--surface-strong)] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    Structure
                  </p>
                  <p className="mt-5 text-sm leading-7 text-[var(--ink)]">
                    Homepage, products index, product landing page, and legal
                    pages on a reusable content and component system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="What we do"
        title="Three building blocks behind the Kritr platform"
        description="The homepage gives visitors a crisp view of what Kritr stands for and where MyLabStory fits inside that story."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {homepagePillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[1.75rem] border border-[var(--line)] bg-white/80 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
            >
              <h2 className="text-2xl font-semibold text-[var(--ink)]">
                {pillar.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted-ink)]">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Featured product"
        title="MyLabStory is the first proof point"
        description="The product narrative sits inside the Kritr brand story without feeling like a disconnected microsite."
        className="pt-0"
      >
        <ProductCard product={featuredProduct} featured />
      </Section>

      <Section
        eyebrow="Philosophy"
        title="A clear point of view"
        description="Kritr should feel precise, modern, and responsible. That philosophy shapes the brand and every product page."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {philosophyPoints.map((point) => (
            <article
              key={point}
              className="rounded-[1.75rem] bg-[var(--ink)] p-8 text-white shadow-[0_18px_60px_rgba(6,33,36,0.14)]"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-white/55">
                Principle
              </p>
              <p className="mt-8 font-serif text-3xl leading-tight">{point}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="Start with the product page that turns brand trust into intent."
        description="Use MyLabStory as the conversion funnel today, then add more products on the same structure later."
        primary={{ href: "/mylabstory", label: "View MyLabStory" }}
        secondary={{ href: "/products", label: "Explore Products" }}
        note={`Replace the current mailto CTA targets with your App Store, Play Store, or waitlist links when they are ready.`}
      />
    </>
  );
}
