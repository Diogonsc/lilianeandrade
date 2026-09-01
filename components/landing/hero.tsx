import { Sparkles } from "lucide-react";

import { CtaButton } from "@/components/landing/cta-button";
import { PhoneMockup } from "@/components/landing/phone-mockup";
import { Reveal } from "@/components/landing/reveal";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div className="glow-blob top-[-10%] left-[-10%] h-[420px] w-[420px] bg-purple" />
      <div className="glow-blob top-[10%] right-[-5%] h-[380px] w-[380px] bg-cyan opacity-20" />
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--background)_100%,transparent))] opacity-60" />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-16 px-5 pt-14 pb-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-24 lg:pb-32">
        <div>
          <Reveal>
            <Badge
              variant="outline"
              className="h-auto gap-2 rounded-full border-border-strong bg-surface-2/70 px-4 py-2 text-[11px] font-semibold tracking-[0.16em] text-muted-foreground backdrop-blur"
            >
              <Sparkles className="size-3.5 text-cyan" aria-hidden="true" />
              TREINAMENTO 100% ONLINE E PRÁTICO
            </Badge>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-heading"
              className="mt-7 text-[2.15rem] leading-[1.08] font-extrabold sm:text-5xl lg:text-[3.6rem]"
            >
              Transforme seu <span className="text-gradient">TikTok</span> em uma estratégia de{" "}
              <span className="text-cyan">monetização</span>
              <span className="text-muted-foreground"> — mesmo começando do zero.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Aprenda a estruturar seu perfil, criar conteúdos estratégicos, conquistar seguidores e
              entender os caminhos para monetizar no TikTok.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton size="lg" className="w-full sm:w-auto">
                QUERO COMEÇAR AGORA
              </CtaButton>
              <CtaButton
                size="lg"
                variant="ghost"
                href="#modulos"
                className="w-full tracking-wide sm:w-auto"
              >
                VER O QUE VOU APRENDER
              </CtaButton>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-6 text-[13px] text-muted-foreground">
              Acesso online <span className="text-cyan">•</span> Conteúdo prático{" "}
              <span className="text-pink">•</span> Aprenda no seu ritmo
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pl-6">
          <PhoneMockup />
        </Reveal>
      </div>
    </section>
  );
}
