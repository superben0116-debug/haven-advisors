import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-prussian-500 text-cream-100 hover:bg-prussian-600 shadow-[0_6px_20px_rgba(27,54,93,0.25)] hover:shadow-[0_10px_28px_rgba(27,54,93,0.35)]",
        secondary:
          "bg-champagne-500 text-prussian-700 hover:bg-champagne-400 shadow-[0_6px_20px_rgba(201,169,97,0.28)]",
        outline:
          "border border-prussian-500 text-prussian-600 hover:bg-prussian-500 hover:text-cream-100",
        ghost:
          "text-prussian-600 hover:bg-prussian-50",
        link:
          "text-prussian-600 underline-offset-4 hover:underline px-0",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
