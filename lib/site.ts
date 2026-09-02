export const siteConfig = {
  name: "TikTok Monetizado",
  instructor: "Liliane Andrade e Jeferson Lucas",
  shortName: "TM",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lilianeandrade.com.br",
  checkoutUrl: "https://pay.kiwify.com.br/3Vh46ZV",
  locale: "pt_BR",
  title: "TikTok Monetizado | Treinamento online de estratégia no TikTok",
  description:
    "Treinamento 100% online e prático com Liliane Andrade: estruture seu perfil, crie conteúdos estratégicos e entenda as possibilidades de monetização no TikTok.",
  keywords: [
    "TikTok Monetizado",
    "Liliane Andrade",
    "curso TikTok",
    "monetização TikTok",
    "estratégia de conteúdo",
    "TikTok Shop",
    "treinamento online",
  ],
} as const;

export const instructors = [
  {
    name: "Liliane Andrade",
    role: "Instrutora",
    image: "/images/liliane-andrade.png",
    width: 1122,
    height: 1402,
  },
  {
    name: "Jeferson Lucas",
    role: "Instrutor",
    image: "/images/jeferson-lucas.jpeg",
    width: 439,
    height: 569,
  },
] as const;

export const legalPages = [
  { href: "/termos-de-uso", label: "Termos de Uso" },
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
] as const;
