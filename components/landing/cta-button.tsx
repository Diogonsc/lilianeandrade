import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  children: ReactNode;
  href?: string;
  size?: "sm" | "lg" | "xl";
  variant?: "primary" | "ghost";
  className?: string;
};

const sizes = {
  sm: "h-11 rounded-full px-5 text-sm font-semibold tracking-tight",
  lg: "h-14 rounded-full px-7 text-sm font-semibold tracking-tight sm:text-base",
  xl: "h-16 rounded-full px-9 text-base font-semibold tracking-tight sm:text-lg",
};

export function CtaButton({
  children,
  href = "#oferta",
  size = "lg",
  variant = "primary",
  className,
}: CtaButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <Button
      nativeButton={false}
      variant={variant === "primary" ? "cta" : "cta-ghost"}
      render={
        <a
          href={href}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        />
      }
      className={cn(sizes[size], className)}
    >
      {children}
    </Button>
  );
}
