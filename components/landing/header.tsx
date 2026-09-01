"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { CtaButton } from "@/components/landing/cta-button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border-strong bg-surface-2 text-sm font-black">
            <span className="text-gradient">{siteConfig.shortName}</span>
          </span>
          <span className="min-w-0 leading-none">
            <span className="block truncate text-[11px] font-semibold tracking-[0.28em] text-muted-foreground">
              TIKTOK
            </span>
            <span className="block truncate text-sm font-extrabold tracking-tight sm:text-base">
              MONETIZADO
            </span>
          </span>
        </Link>

        <CtaButton size="sm" href={siteConfig.checkoutUrl} className="shrink-0">
          QUERO COMEÇAR AGORA
        </CtaButton>
      </div>
    </header>
  );
}
