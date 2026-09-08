"use client";

import { Mail, MessageCircle } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { developer } from "@/lib/site";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function DeveloperCredit() {
  const whatsappHref = `https://wa.me/${developer.phoneDigits}`;

  return (
    <Dialog>
      <DialogTrigger
        className="text-[11px] text-muted-foreground/70 transition-colors hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
      >
        Site desenvolvido por{" "}
        <span className="underline underline-offset-2 decoration-muted-foreground/40 hover:decoration-cyan">
          {developer.name}
        </span>
      </DialogTrigger>

      <DialogContent className="gap-5 p-5 sm:max-w-xs">
        <DialogHeader className="gap-1.5 pr-8">
          <DialogTitle className="text-lg font-extrabold tracking-tight">
            {developer.name}
          </DialogTitle>
          <DialogDescription>
            Desenvolvedor web. Fale comigo para novos projetos.
          </DialogDescription>
        </DialogHeader>

        <ul className="space-y-3">
          <li>
            <a
              href={`mailto:${developer.email}`}
              className="group flex items-center gap-3 rounded-lg border border-border bg-surface/60 px-3 py-2.5 transition-colors hover:border-cyan/35 hover:bg-surface-2"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-md bg-surface-2 text-cyan">
                <Mail className="size-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                  Email
                </span>
                <span className="block truncate text-sm text-foreground group-hover:text-cyan">
                  {developer.email}
                </span>
              </span>
            </a>
          </li>

          <li>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-border bg-surface/60 px-3 py-2.5 transition-colors hover:border-cyan/35 hover:bg-surface-2"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-md bg-surface-2 text-cyan">
                <MessageCircle className="size-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                  WhatsApp
                </span>
                <span className="block truncate text-sm text-foreground group-hover:text-cyan">
                  {developer.phone}
                </span>
              </span>
            </a>
          </li>

          <li>
            <a
              href={developer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-border bg-surface/60 px-3 py-2.5 transition-colors hover:border-cyan/35 hover:bg-surface-2"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-md bg-surface-2 text-cyan">
                <LinkedInIcon className="size-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                  LinkedIn
                </span>
                <span className="block truncate text-sm text-foreground group-hover:text-cyan">
                  Ver perfil
                </span>
              </span>
            </a>
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  );
}
