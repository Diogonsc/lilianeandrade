import Link from "next/link";
import { Check } from "lucide-react";

import { CtaButton } from "@/components/landing/cta-button";
import { InstructorCarousel } from "@/components/landing/instructor-carousel";
import { OfferPrice } from "@/components/landing/offer-price";
import { Reveal } from "@/components/landing/reveal";
import { Section, SectionLabel } from "@/components/landing/sections";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { faq, inclui } from "@/lib/content";
import { legalPages, siteConfig } from "@/lib/site";

export function Autoridade() {
  return (
    <Section id="instrutora" labelledBy="instrutora-heading" className="overflow-hidden">
      <div className="glow-blob top-1/3 left-[-8%] h-[360px] w-[360px] bg-purple opacity-20" />
      <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <InstructorCarousel />
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel>AUTORIDADE</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="instrutora-heading"
              className="mt-6 text-3xl leading-tight font-extrabold sm:text-4xl"
            >
              Quem está <span className="text-gradient">por trás</span> do treinamento?
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {siteConfig.instructor} conduzem o treinamento {siteConfig.name}: um curso 100% online
              e prático para estruturar o perfil, criar conteúdos estratégicos e entender as
              possibilidades de monetização no TikTok.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function Oferta() {
  return (
    <Section id="oferta" labelledBy="oferta-heading" className="overflow-hidden">
      <div className="glow-blob top-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 bg-cyan opacity-20" />
      <header className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <SectionLabel>OFERTA</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="oferta-heading"
            className="mt-6 text-3xl leading-tight font-extrabold sm:text-4xl"
          >
            Comece agora o seu <span className="text-gradient">próximo passo</span> no TikTok.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tudo o que você precisa para começar a estruturar seu perfil e entender as
            possibilidades de monetização.
          </p>
        </Reveal>
      </header>

      <Reveal delay={200}>
        <div className="relative mx-auto mt-12 max-w-4xl rounded-[2rem] p-[1px] [background-image:var(--gradient-cta)]">
          <Card className="rounded-[calc(2rem-1px)] bg-background py-7 ring-0 sm:py-10">
            <CardContent className="grid gap-10 px-7 md:grid-cols-[1.05fr_0.95fr] md:gap-12 sm:px-10">
              <div>
                <p className="text-[11px] font-bold tracking-[0.24em] text-cyan">
                  O QUE ESTÁ INCLUÍDO
                </p>
                <ul className="mt-6 space-y-3.5">
                  {inclui.map((item) => (
                    <li key={item} className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-border bg-surface-2">
                        <Check className="size-3 text-cyan" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 text-sm leading-relaxed text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="rounded-3xl border-border bg-surface/70 py-0 text-center ring-0">
                <OfferPrice />
                <CardContent className="p-7 pt-8">
                  <CtaButton size="lg" href={siteConfig.checkoutUrl} className="w-full">
                    QUERO ACESSAR O CURSO
                  </CtaButton>
                  <p className="mt-5 text-sm text-muted-foreground">
                    Acesso ao treinamento online.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </Reveal>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq" labelledBy="faq-heading">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <header className="text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 id="faq-heading" className="mt-6 text-3xl leading-tight font-extrabold sm:text-4xl">
              Perguntas <span className="text-cyan">frequentes</span>
            </h2>
          </header>
        </Reveal>

        <Reveal delay={120}>
          <Accordion className="mt-12 gap-3">
            {faq.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-surface/60 px-6 not-last:border-b-0 data-open:border-cyan/30"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}

export function CtaFinal() {
  return (
    <Section id="cta-final" labelledBy="cta-final-heading" className="overflow-hidden">
      <div className="glow-blob top-1/4 left-1/2 h-[460px] w-[460px] -translate-x-1/2 bg-purple opacity-25" />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2
            id="cta-final-heading"
            className="text-3xl leading-[1.15] font-extrabold sm:text-5xl"
          >
            Você pode continuar tentando sozinho.
            <br />
            <span className="text-gradient">Ou pode começar com uma estratégia.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Aprenda o processo, coloque em prática e construa sua presença no TikTok.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <CtaButton size="xl" href={siteConfig.checkoutUrl}  className="mt-10 w-full sm:w-auto">
            QUERO ACESSAR O TIKTOK MONETIZADO
          </CtaButton>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 text-[13px] text-muted-foreground">
            Treinamento online <span className="text-cyan">•</span> Conteúdo prático
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
        <div className="min-w-0">
          <p className="text-sm font-extrabold tracking-tight">{siteConfig.name}</p>
          <p className="mt-4 max-w-xl text-xs leading-relaxed text-muted-foreground">
            Resultados podem variar de acordo com aplicação, consistência, experiência e condições
            da plataforma.
          </p>
        </div>
        <nav aria-label="Links institucionais" className="flex flex-wrap gap-x-7 gap-y-3">
          {legalPages.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-[1200px] text-[11px] text-muted-foreground/70">
        © {year} {siteConfig.name}. Este produto não possui vínculo com o TikTok.
      </p>
    </footer>
  );
}
