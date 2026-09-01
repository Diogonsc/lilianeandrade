import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, Bot, ShieldAlert, Sparkles } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fluxo, iaSteps, modulos, paraQuem, pipeline, problemas } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative px-5 py-20 sm:px-8 lg:py-28", className)}
    >
      <div className="relative mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <Badge
      variant="outline"
      className="h-auto gap-2 rounded-full border-border bg-surface-2/70 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-muted-foreground"
    >
      {children}
    </Badge>
  );
}

export function Hairline() {
  return (
    <div
      className="hairline mx-auto h-px w-full max-w-[1200px]"
      role="separator"
      aria-hidden="true"
    />
  );
}

export function Problema() {
  return (
    <Section id="problema" labelledBy="problema-heading">
      <header className="max-w-3xl">
        <Reveal>
          <SectionLabel>IDENTIFICAÇÃO</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="problema-heading"
            className="mt-6 text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.9rem]"
          >
            Você sente que está fazendo tudo certo, mas o perfil{" "}
            <span className="text-pink">não cresce?</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Você posta, tenta criar vídeos, acompanha outros perfis e mesmo assim sente que não
            sabe exatamente o que está fazendo.
          </p>
        </Reveal>
      </header>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {problemas.map((item, i) => (
          <Reveal key={item.n} delay={i * 90}>
            <article className="h-full">
            <Card className="surface-card h-full rounded-3xl py-0 ring-0">
              <CardHeader className="p-7 pb-0">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-border bg-background">
                  <item.icon className="size-5 text-cyan" aria-hidden="true" />
                </span>
                <CardAction className="text-2xl font-black text-muted-foreground/40">
                  {item.n}
                </CardAction>
                <CardTitle className="mt-6 font-heading text-lg leading-snug font-bold">
                  <h3>{item.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-7 pt-2.5">
                <CardDescription className="text-sm leading-relaxed">
                  {item.text}
                </CardDescription>
              </CardContent>
            </Card>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Virada() {
  return (
    <Section id="virada" labelledBy="virada-heading" className="overflow-hidden">
      <div className="glow-blob top-0 left-1/2 h-[360px] w-[360px] -translate-x-1/2 bg-purple opacity-20" />
      <div className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Reveal>
            <h2
              id="virada-heading"
              className="text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.9rem]"
            >
              O problema nem sempre é falta de esforço.
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-4 text-3xl font-extrabold sm:text-4xl">
              É <span className="text-gradient">falta de estratégia.</span>
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Ter um perfil no TikTok não significa apenas publicar vídeos. É preciso entender
              posicionamento, conteúdo, chamadas para ação, configuração do perfil e as
              possibilidades de monetização da plataforma.
            </p>
          </Reveal>
        </div>

        <Card className="rounded-3xl border-border bg-surface/60 py-7 backdrop-blur ring-0 sm:py-9">
          <CardContent className="px-7 sm:px-9">
            <ol className="space-y-2">
              {fluxo.map((item, i) => (
                <li key={item.label}>
                  <Reveal delay={i * 120}>
                    <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface-2/70 px-5 py-4">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-background">
                        <item.icon className="size-4 text-cyan" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 truncate text-sm font-bold tracking-[0.14em]">
                        {item.label}
                      </span>
                    </div>
                  </Reveal>
                  {i < fluxo.length - 1 && (
                    <Reveal delay={i * 120 + 60}>
                      <div className="flex justify-center py-1.5" aria-hidden="true">
                        <ArrowDown className="size-4 text-pink" />
                      </div>
                    </Reveal>
                  )}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

export function Oportunidade() {
  return (
    <Section id="oportunidade" labelledBy="oportunidade-heading">
      <header className="mx-auto max-w-3xl text-center">
        <Reveal>
          <SectionLabel>OPORTUNIDADE</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="oportunidade-heading"
            className="mt-6 text-3xl leading-tight font-extrabold sm:text-4xl"
          >
            E se você pudesse usar <span className="text-cyan">estratégia</span> e{" "}
            <span className="text-gradient">inteligência artificial</span> para acelerar esse
            processo?
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            O treinamento mostra como utilizar estratégias de conteúdo e ferramentas de
            inteligência artificial para tornar sua criação mais prática e intencional.
          </p>
        </Reveal>
      </header>

      <Reveal delay={200}>
        <Card className="mt-14 rounded-3xl border-border bg-surface/60 py-6 backdrop-blur ring-0 sm:py-10">
          <CardContent className="px-6 sm:px-10">
            <ol className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
              {pipeline.map((step, i) => (
                <li key={step} className="flex flex-1 items-center gap-3">
                  <div className="flex-1 rounded-2xl border border-border bg-surface-2/80 px-4 py-5 text-center">
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground">
                      ETAPA 0{i + 1}
                    </p>
                    <p className="mt-2 text-sm font-bold tracking-[0.1em]">{step}</p>
                  </div>
                  {i < pipeline.length - 1 && (
                    <ArrowRight
                      className="hidden size-4 shrink-0 text-cyan md:block"
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </Reveal>
    </Section>
  );
}

export function Modulos() {
  return (
    <Section id="modulos" labelledBy="modulos-heading">
      <header className="max-w-3xl">
        <Reveal>
          <SectionLabel>O TREINAMENTO</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="modulos-heading"
            className="mt-6 text-4xl font-black tracking-tight sm:text-5xl"
          >
            TIKTOK <span className="text-gradient">MONETIZADO</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Um treinamento 100% online e prático para quem quer entender como estruturar seu perfil
            e explorar as possibilidades de monetização no TikTok.
          </p>
        </Reveal>
      </header>

      <ol className="relative mt-14 space-y-4 md:pl-8">
        <div className="absolute top-2 left-0 hidden h-[calc(100%-1rem)] w-px bg-border md:block" />
        {modulos.map((modulo, i) => (
          <li key={modulo.n} className="relative">
            <Reveal delay={i * 80}>
              <div className="absolute top-9 -left-8 hidden size-2.5 rounded-full [background-image:var(--gradient-cta)] md:block" />
              <article>
              <Card className="surface-card grid grid-cols-[auto_minmax(0,1fr)] gap-5 rounded-3xl py-0 ring-0">
                <CardHeader className="col-span-2 grid grid-cols-[auto_minmax(0,1fr)] gap-5 p-6 sm:p-8">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-border bg-background">
                    <modulo.icon className="size-5 text-cyan" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold tracking-[0.24em] text-pink">{modulo.n}</p>
                    <CardTitle className="mt-2 font-heading text-lg leading-snug font-bold sm:text-xl">
                      <h3>{modulo.title}</h3>
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm leading-relaxed">
                      {modulo.text}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function IA() {
  return (
    <Section id="ia" labelledBy="ia-heading" className="overflow-hidden">
      <div className="glow-blob top-1/4 right-[-10%] h-[380px] w-[380px] bg-cyan opacity-20" />
      <div className="relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <SectionLabel>
              <Bot className="size-3.5 text-cyan" aria-hidden="true" />
              INTELIGÊNCIA ARTIFICIAL
            </SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="ia-heading" className="mt-6 text-3xl leading-tight font-extrabold sm:text-4xl">
              Use a inteligência artificial como sua{" "}
              <span className="text-gradient">aliada na criação</span> de conteúdo.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Aprenda como utilizar ferramentas de IA para acelerar ideias, roteiros e estratégias
              de conteúdo, sem depender da inspiração todos os dias.
            </p>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <Card className="rounded-3xl border-border bg-surface/70 p-2 py-2 ring-0 backdrop-blur">
            <CardHeader className="flex flex-row items-center gap-2 px-4 py-3">
              <span className="size-2.5 rounded-full bg-pink/70" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-cyan/70" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-purple/70" aria-hidden="true" />
              <span className="ml-2 text-[11px] tracking-[0.18em] text-muted-foreground">
                ASSISTENTE DE CONTEÚDO
              </span>
            </CardHeader>
            <CardContent className="rounded-[1.4rem] border border-border bg-background p-5 sm:p-7">
              <ol className="space-y-2.5">
                {iaSteps.map((step, i) => (
                  <li
                    key={step}
                    className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-surface-2/70 px-4 py-4"
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-background text-[11px] font-bold text-cyan">
                      {i + 1}
                    </span>
                    <span className="min-w-0 text-sm font-medium">{step}</span>
                    <Sparkles className="size-3.5 shrink-0 text-purple" aria-hidden="true" />
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                As ferramentas apoiam o seu processo de criação. Os resultados dependem da sua
                aplicação, consistência e das condições da plataforma.
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

export function ParaQuem() {
  return (
    <Section id="para-quem" labelledBy="para-quem-heading">
      <header className="max-w-2xl">
        <Reveal>
          <SectionLabel>PARA QUEM É</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="para-quem-heading"
            className="mt-6 text-3xl leading-tight font-extrabold sm:text-4xl"
          >
            Esse treinamento é <span className="text-cyan">para você</span> se...
          </h2>
        </Reveal>
      </header>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {paraQuem.map((item, i) => (
          <Reveal key={item.text} delay={i * 70}>
            <Card className="surface-card h-full rounded-2xl py-0 ring-0">
              <CardContent className="grid h-full grid-cols-[auto_minmax(0,1fr)] items-center gap-4 p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-background">
                  <item.icon className="size-[18px] text-cyan" aria-hidden="true" />
                </span>
                <p className="min-w-0 text-sm leading-snug font-semibold sm:text-base">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ParaQuemNao() {
  return (
    <Section id="nao-e" labelledBy="nao-e-heading">
      <Reveal>
        <Card className="relative overflow-hidden rounded-3xl border-border bg-surface/70 py-8 ring-0 sm:py-12">
          <div className="glow-blob top-0 right-0 h-52 w-52 bg-pink opacity-15" />
          <CardContent className="relative grid gap-6 px-8 md:grid-cols-[auto_minmax(0,1fr)] md:items-start sm:px-12">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-border bg-background">
              <ShieldAlert className="size-5 text-pink" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h2 id="nao-e-heading" className="text-2xl leading-tight font-extrabold sm:text-3xl">
                Este treinamento não é para quem procura dinheiro fácil ou resultados garantidos.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Não existem fórmulas mágicas. O objetivo é ensinar estratégia, processo e
                ferramentas para você construir seu próprio caminho.
              </p>
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </Section>
  );
}
