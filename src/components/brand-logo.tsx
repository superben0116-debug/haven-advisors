import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  size = "md",
  variant = "dark",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
}) {
  const sizes = {
    sm: { en: "text-xl", cn: "text-[10px] tracking-[0.25em]" },
    md: { en: "text-2xl", cn: "text-[11px] tracking-[0.3em]" },
    lg: { en: "text-4xl", cn: "text-xs tracking-[0.4em]" },
  } as const;

  const colors = {
    dark: { en: "text-prussian-700", cn: "text-champagne-700" },
    light: { en: "text-cream-100", cn: "text-champagne-300" },
  } as const;

  return (
    <Link
      href="/"
      className={cn("inline-flex flex-col leading-none select-none group", className)}
      aria-label="栖美 Haven Advisors — 首页"
    >
      <span
        className={cn(
          "font-display font-semibold",
          sizes[size].en,
          colors[variant].en,
          "transition-colors group-hover:text-champagne-600"
        )}
      >
        Haven<span className="text-champagne-500">·</span>Advisors
      </span>
      <span
        className={cn(
          "mt-1 uppercase",
          sizes[size].cn,
          colors[variant].cn
        )}
      >
        栖 美 · 赴 美 顾 问
      </span>
    </Link>
  );
}
