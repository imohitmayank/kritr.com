type FeatureCardProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function FeatureCard({
  eyebrow,
  title,
  description
}: FeatureCardProps) {
  return (
    <article className="panel group">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h3 className="mt-4 text-2xl font-semibold text-[var(--ink)] transition group-hover:text-[var(--accent)]">
        {title}
      </h3>
      <p className="mt-3 text-base leading-7 text-[var(--muted-ink)]">
        {description}
      </p>
    </article>
  );
}
