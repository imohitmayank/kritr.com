import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { ProductCard } from "@/components/product-card";
import { Section } from "@/components/section";
import {
  philosophyPoints,
  products,
  siteConfig
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Kritr helps people make clearer decisions with AI, through products, applications, and collaboration."
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

        <div className="shell relative flex min-h-[min(100svh,56rem)] flex-col justify-end pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24">
          <div className="max-w-2xl">
            <p className="animate-hero-fade font-serif text-5xl tracking-tight text-[var(--ink)] sm:text-6xl lg:text-7xl">
              Kritr
            </p>
            <h1 className="animate-hero-fade-delay mt-5 max-w-xl text-2xl font-semibold leading-snug tracking-tight text-[var(--ink)] sm:text-3xl lg:text-4xl">
              We build AI that helps people decide.
            </h1>
            <p className="animate-hero-fade-delay-2 mt-5 max-w-lg text-base leading-7 text-[var(--muted-ink)] sm:text-lg sm:leading-8">
              Our first product is MyLabStory. If you have something to build,
              talk to us.
            </p>
            <div className="animate-hero-fade-delay-2 mt-9 flex flex-wrap gap-3">
              <ButtonLink
                href="/mylabstory"
                label="View MyLabStory"
                variant="accent"
                className="!rounded-lg"
              />
              <ButtonLink
                href={siteConfig.workHref}
                label="Work with us"
                variant="secondary"
                className="!rounded-lg border-[var(--ink)]/20 bg-white/70 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <Section
        tone="muted"
        eyebrow="Philosophy"
        title="Help people decide"
        description="Kritr exists to make complex information easier to act on. The form of the work follows the problem."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {philosophyPoints.map((point, index) => (
            <article
              key={point.title}
              className="panel animate-rise"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span className="step-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-6 font-serif text-2xl leading-snug text-[var(--ink)]">
                {point.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-[var(--muted-ink)]">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="In the world"
        title="MyLabStory"
        description="One place this aim shows up: scattered medical reports, turned into a health story you can follow."
      >
        <ProductCard product={featuredProduct} featured />
      </Section>

      <CtaBand
        eyebrow="Work with us"
        title="Building a product, an app, or something in between?"
        description="We are open to collaboration, consulting, and new work. Tell us what you are trying to decide. We will take it from there."
        primary={{ href: siteConfig.workHref, label: "Start a conversation" }}
      />
    </>
  );
}
