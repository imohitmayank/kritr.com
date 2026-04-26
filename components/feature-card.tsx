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
    <article className="rounded-[1.75rem] border border-[var(--line)] bg-white/85 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h3 className="mt-4 text-2xl font-semibold text-[var(--ink)]">{title}</h3>
      <p className="mt-4 text-base leading-7 text-[var(--muted-ink)]">
        {description}
      </p>
    </article>
  );
}
