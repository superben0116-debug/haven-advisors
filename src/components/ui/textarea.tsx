import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-28 w-full rounded-xl border border-ink-200 bg-white/90 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/70 transition focus:outline-none focus:ring-2 focus:ring-champagne-400 focus:border-champagne-400 disabled:opacity-60 resize-y",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
