import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost" | "light" | "glass" | "accent";
  className?: string;
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

export function ButtonLink({
  href,
  label,
  variant = "primary",
  className
}: ButtonLinkProps) {
  const isExternalHttp = href.startsWith("http");
  const isMailto = href.startsWith("mailto:");
  const classes = cn(
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition duration-200",
    variants[variant],
    className
  );

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
