import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "h-11 w-full rounded-xl border border-ink-200 bg-white/90 px-4 text-sm text-ink-900 placeholder:text-ink-500/70 transition focus:outline-none focus:ring-2 focus:ring-champagne-400 focus:border-champagne-400 disabled:opacity-60",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";
