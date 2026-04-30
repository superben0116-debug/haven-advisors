"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/site";
import { BrandLogo } from "@/components/brand-logo";
import { buttonVariants } from "@/components/ui/button";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "backdrop-blur-lg bg-cream-100/85 border-b border-ink-200/60 shadow-[0_1px_0_rgba(20,25,33,0.03)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <BrandLogo size="md" />

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-prussian-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/consultation"
            className={buttonVariants({ variant: "primary", size: "md" })}
          >
            预约付费咨询
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-prussian-700 transition hover:bg-prussian-50 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mx-6 mb-6 rounded-3xl border border-ink-200 bg-cream-50/95 shadow-[0_12px_40px_rgba(27,54,93,0.18)] backdrop-blur md:hidden">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-ink-700 transition hover:bg-prussian-50 hover:text-prussian-600"
              >
                {item.label}
              </Link>
            ))}
            <div className="p-3">
              <Link
                href="/consultation"
                onClick={() => setMobileOpen(false)}
                className={buttonVariants({ variant: "primary", size: "md", className: "w-full" })}
              >
                预约付费咨询
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
