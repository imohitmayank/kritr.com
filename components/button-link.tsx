import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost" | "light" | "glass" | "accent";
  className?: string;
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-[var(--ink)] text-white hover:bg-[color:rgba(26,23,48,0.88)]",
  accent:
    "bg-[var(--accent)] text-white hover:bg-[color:rgba(196,138,26,0.9)]",
  secondary:
    "border border-[var(--line)] bg-white/75 text-[var(--ink)] hover:border-[var(--ink)] hover:bg-white",
  ghost: "text-[var(--ink)] hover:bg-white/70",
  light: "bg-white text-[var(--ink)] hover:bg-[color:rgba(255,255,255,0.92)]",
  glass:
    "border border-white/40 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25"
};

const disabledVariants = {
  primary: "bg-[var(--ink)]/45 text-white",
  accent: "bg-[var(--accent)]/45 text-white",
  secondary:
    "border border-[var(--line)] bg-white/50 text-[var(--muted-ink)]",
  ghost: "text-[var(--muted-ink)]",
  light: "bg-white/55 text-[var(--ink)]/55",
  glass: "border border-white/20 bg-white/10 text-white/55"
};

export function ButtonLink({
  href,
  label,
  variant = "primary",
  className,
  disabled = false
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition duration-200",
    disabled
      ? cn(disabledVariants[variant], "cursor-not-allowed")
      : variants[variant],
    className
  );

  if (disabled) {
    return (
      <span className={classes} aria-disabled="true" role="button">
        {label}
      </span>
    );
  }

  const isExternalHttp = href.startsWith("http");
  const isMailto = href.startsWith("mailto:");

  if (isExternalHttp || isMailto) {
    return (
      <a
        href={href}
        className={classes}
        target={isExternalHttp ? "_blank" : undefined}
        rel="noreferrer"
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}
