import { Eye, Heart, MessageCircle, Play, Share2, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

import instructorPhoto from "@/public/images/image.png";
import { siteConfig } from "@/lib/site";

function Bar({ height, delay }: { height: number; delay: number }) {
  return (
    <div
      className="w-full rounded-t-[3px] [background-image:var(--gradient-cta)]"
      style={{ height: `${height}%`, opacity: 0.35 + delay / 700 }}
    />
  );
}

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[330px] sm:max-w-[360px]">
      <div className="glow-blob -left-10 top-16 h-56 w-56 bg-cyan" />
      <div className="glow-blob -right-8 bottom-10 h-56 w-56 bg-pink" />

      <div className="relative rounded-[2.4rem] border border-border-strong bg-surface p-2 shadow-[var(--shadow-elev)]">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-background">
          <div className="absolute top-2 left-1/2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-surface-2" />

          <div className="relative aspect-[9/17]">
            <Image
              src={instructorPhoto}
              alt={siteConfig.instructor}
              fill
              priority
              sizes="(max-width: 640px) 330px, 360px"
              className="object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 z-10 [background-image:linear-gradient(transparent_0,transparent_60%,color-mix(in_oklab,var(--background)_92%,transparent))]" />

            <div className="absolute right-3 bottom-14 z-10 flex flex-col items-center gap-4 text-[10px] text-muted-foreground">
              <div className="flex flex-col items-center gap-1">
                <span className="grid size-9 place-items-center rounded-full border border-border bg-surface-2">
                  <Heart className="size-4 text-pink" aria-hidden="true" />
                </span>
                <span>18,4K</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="grid size-9 place-items-center rounded-full border border-border bg-surface-2">
                  <MessageCircle className="size-4 text-cyan" aria-hidden="true" />
                </span>
                <span>942</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="grid size-9 place-items-center rounded-full border border-border bg-surface-2">
                  <Share2 className="size-4 text-purple" aria-hidden="true" />
                </span>
                <span>326</span>
              </div>
            </div>

            <div className="absolute inset-x-3 bottom-4 z-10">
              <p className="text-xs font-semibold">@seu.perfil</p>
              <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                Estrutura de perfil + roteiro estratégico #conteudo
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-2/3 rounded-full [background-image:var(--gradient-cta)]" />
                </div>
                <span className="text-[10px] text-muted-foreground">0:24</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="floaty absolute top-24 -left-4 rounded-2xl border border-border bg-surface-2/90 p-3 backdrop-blur sm:-left-12">
        <div className="flex items-center gap-2">
          <Eye className="size-4 text-cyan" aria-hidden="true" />
          <div>
            <p className="text-[10px] tracking-widest text-muted-foreground uppercase">Views</p>
            <p className="text-sm font-bold">124.8K</p>
          </div>
        </div>
      </div>

      <div
        className="floaty absolute top-1/2 -right-3 rounded-2xl border border-border bg-surface-2/90 p-3 backdrop-blur sm:-right-10"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="flex items-center gap-2">
          <Users className="size-4 text-pink" aria-hidden="true" />
          <div>
            <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
              Seguidores
            </p>
            <p className="text-sm font-bold">+3.412</p>
          </div>
        </div>
      </div>

      <div
        className="floaty absolute -bottom-6 left-2 z-30 w-40 rounded-2xl border border-border bg-surface-2/90 p-3 backdrop-blur sm:-left-8"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="flex items-center justify-between">
          <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
            Crescimento
          </p>
          <TrendingUp className="size-3.5 text-cyan" aria-hidden="true" />
        </div>
        <div className="mt-2 flex h-10 items-end gap-1" aria-hidden="true">
          {[22, 34, 28, 48, 40, 62, 55, 78, 92].map((height, i) => (
            <Bar key={i} height={height} delay={i * 60} />
          ))}
        </div>
      </div>
    </div>
  );
}
