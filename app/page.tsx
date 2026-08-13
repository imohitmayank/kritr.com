import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { ProductCard } from "@/components/product-card";
import { Section } from "@/components/section";
import {
  homepagePillars,
  philosophyPoints,
  products,
  siteConfig
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Kritr builds focused AI products for decisions that matter. First up: MyLabStory."
};

export default function HomePage() {
  const featuredProduct = products[0];

  return (
    <>
      <section className="relative min-h-[min(100svh,56rem)] overflow-hidden">
        <Image
          src="/hero-kritr.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-hero-image object-cover object-[center_40%]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(238,242,248,0.88)_0%,rgba(238,242,248,0.62)_38%,rgba(238,242,248,0.18)_68%,rgba(238,242,248,0.05)_100%)]"
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[min(100svh,56rem)] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24">
          <div className="max-w-2xl">
            <p className="animate-hero-fade font-serif text-5xl tracking-tight text-[var(--ink)] sm:text-6xl lg:text-7xl">
              Kritr
            </p>
            <h1 className="animate-hero-fade-delay mt-5 max-w-xl text-2xl font-semibold leading-snug tracking-tight text-[var(--ink)] sm:text-3xl lg:text-4xl">
              We build AI that helps people decide.
            </h1>
            <p className="animate-hero-fade-delay-2 mt-5 max-w-lg text-base leading-7 text-[var(--muted-ink)] sm:text-lg sm:leading-8">
              Focused AI products for decisions that matter. First up:
              MyLabStory.
            </p>
            <div className="animate-hero-fade-delay-2 mt-9 flex flex-wrap gap-3">
              <ButtonLink
                href="/mylabstory"
                label="View MyLabStory"
                variant="accent"
                className="!rounded-lg"
              />
              <ButtonLink
                href={siteConfig.contactHref}
                label="Contact"
                variant="secondary"
                className="!rounded-lg border-[var(--ink)]/20 bg-white/70 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <Section
        tone="muted"
        eyebrow="What we do"
        title="Three things we actually ship"
        description="Applied AI, structured data, and product craft — aimed at decisions people already need to make."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {homepagePillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="panel animate-rise"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span className="step-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-6 text-xl font-semibold text-[var(--ink)]">
                {pillar.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-[var(--muted-ink)]">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Product"
        title="MyLabStory"
        description="Our first product helps people make sense of lab history — upload, extract, track."
      >
        <ProductCard product={featuredProduct} featured />
      </Section>

      <Section
        tone="ink"
        eyebrow="How we work"
        title="A few rules we keep"
        description="Useful AI should feel calm and honest — especially when the stakes are real."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {philosophyPoints.map((point, index) => (
            <article key={point} className="panel-ink">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-6 font-serif text-2xl leading-snug text-white">
                {point}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Next"
        title="See the approach in a product people can use today."
        description="MyLabStory turns lab reports into a history you can read and compare."
        primary={{ href: "/mylabstory", label: "View MyLabStory" }}
        secondary={{ href: siteConfig.contactHref, label: "Contact" }}
      />
    </>
  );
}
