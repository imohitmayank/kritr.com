import { Product, siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

import { ButtonLink } from "./button-link";

type ProductCardProps = {
  product: Product;
  featured?: boolean;
};

export function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <article
      className={cn(
        "rounded-[2rem] border border-[var(--line)] bg-white/85 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]",
        featured && "lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-10"
      )}
    >
      <div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            {product.status}
          </span>
        </div>

        <h3 className="mt-6 text-3xl font-semibold text-[var(--ink)]">
          {product.name}
        </h3>
        <p className="mt-3 max-w-2xl text-lg leading-8 text-[var(--muted-ink)]">
          {product.description}
        </p>
      </div>

      <div className="mt-8 flex flex-col justify-between gap-6 lg:mt-0">
        <div className="rounded-[1.75rem] bg-[var(--surface-strong)] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Why it matters
          </p>
          <p className="mt-4 text-base leading-7 text-[var(--ink)]">
            {product.tagline}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={product.href} label="View Product" />
          <ButtonLink href={siteConfig.contactHref} label="Contact" variant="secondary" />
        </div>
      </div>
    </article>
  );
}
