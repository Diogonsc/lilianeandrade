import {
  Autoridade,
  CtaFinal,
  Faq,
  Oferta,
  SiteFooter,
} from "@/components/landing/closing";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { JsonLd } from "@/components/landing/json-ld";
import {
  Hairline,
  IA,
  Modulos,
  Oportunidade,
  ParaQuem,
  ParaQuemNao,
  Problema,
  Virada,
} from "@/components/landing/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Hairline />
        <Problema />
        <Virada />
        <Hairline />
        <Oportunidade />
        <Modulos />
        <Hairline />
        <IA />
        <ParaQuem />
        <ParaQuemNao />
        <Hairline />
        <Autoridade />
        <Hairline />
        <Oferta />
        <Faq />
        <CtaFinal />
      </main>
      <SiteFooter />
    </div>
  );
}
