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
        "overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[linear-gradient(145deg,#ffffff_0%,var(--surface-muted)_100%)] p-8 sm:p-10",
        featured && "lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:items-center"
      )}
    >
      <div>
        <span className="inline-flex rounded-md bg-[var(--accent-green)] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white">
          {product.status}
        </span>

        <h3 className="mt-5 text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
          {product.name}
        </h3>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted-ink)]">
          {product.description}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-6 rounded-2xl bg-[var(--ink)] p-6 text-white lg:mt-0">
        <p className="font-serif text-2xl leading-snug">{product.tagline}</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink
            href={product.href}
            label="View product"
            variant="accent"
            className="!rounded-lg"
          />
          <ButtonLink
            href={siteConfig.contactHref}
            label="Contact"
            variant="glass"
            className="!rounded-lg"
          />
        </div>
      </div>
    </article>
  );
}
