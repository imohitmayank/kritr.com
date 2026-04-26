import type { Metadata } from "next";

import { ProductCard } from "@/components/product-card";
import { Section } from "@/components/section";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Kritr products, starting with MyLabStory and a structure built for future launches."
};

export default function ProductsPage() {
  return (
    <>
      <Section className="pb-10 pt-16 sm:pt-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            Products
          </p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-[var(--ink)] sm:text-6xl">
            A scalable home for every Kritr product.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--muted-ink)]">
            This page is intentionally simple in the MVP: one reusable product
            card now, a pattern that can expand cleanly later.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="space-y-6">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} featured />
          ))}
        </div>
      </Section>
    </>
  );
}
