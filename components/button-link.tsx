import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost" | "light" | "glass";
  className?: string;
};

const variants = {
  primary:
    "bg-[var(--ink)] text-white shadow-[0_12px_40px_rgba(6,33,36,0.16)] hover:-translate-y-0.5 hover:bg-[color:rgba(6,33,36,0.92)]",
  secondary:
    "border border-[var(--line)] bg-white/80 text-[var(--ink)] hover:-translate-y-0.5 hover:border-[var(--ink)] hover:bg-white",
  ghost:
    "text-[var(--ink)] hover:bg-white/70",
  light:
    "bg-white text-[var(--ink)] shadow-[0_12px_40px_rgba(6,33,36,0.16)] hover:-translate-y-0.5 hover:bg-[color:rgba(255,255,255,0.92)]",
  glass:
    "border border-white/30 bg-white/10 text-white hover:-translate-y-0.5 hover:bg-white/15"
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
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200",
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
    <Link
      href={href}
      className={classes}
    >
      {label}
    </Link>
  );
}
