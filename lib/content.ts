import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BookOpen,
  Bot,
  Coins,
  Compass,
  EyeOff,
  Globe2,
  Hand,
  HelpCircle,
  Lock,
  Rocket,
  Settings2,
  ShoppingBag,
  Target,
  TrendingDown,
  UserPlus,
  Users,
} from "lucide-react";

export const problemas: {
  n: string;
  icon: LucideIcon;
  title: string;
  text: string;
}[] = [
  {
    n: "01",
    icon: EyeOff,
    title: "Posto com esforço, mas quase ninguém vê.",
    text: "O conteúdo sai, mas o alcance não acompanha o trabalho investido.",
  },
  {
    n: "02",
    icon: Lock,
    title: "Fico travado sem saber o que criar.",
    text: "Sem um processo de criação, cada vídeo vira uma decisão do zero.",
  },
  {
    n: "03",
    icon: TrendingDown,
    title: "Vejo outros perfis crescendo e o meu não.",
    text: "A comparação aumenta, mas a clareza sobre o que fazer continua baixa.",
  },
  {
    n: "04",
    icon: HelpCircle,
    title: "Não sei por onde começar para monetizar.",
    text: "Existem caminhos dentro da plataforma, mas falta entender cada um deles.",
  },
];

export const fluxo: { label: string; icon: LucideIcon }[] = [
  { label: "CONTEÚDO", icon: BookOpen },
  { label: "ESTRATÉGIA", icon: Target },
  { label: "AUDIÊNCIA", icon: Users },
  { label: "OPORTUNIDADES", icon: Coins },
];

export const pipeline = ["IDEIA", "ROTEIRO", "CTA", "CONTEÚDO", "PUBLICAÇÃO"] as const;

export const modulos: {
  n: string;
  icon: LucideIcon;
  title: string;
  text: string;
}[] = [
  {
    n: "MÓDULO 01",
    icon: UserPlus,
    title: "Criar um perfil do zero",
    text: "Como estruturar um perfil desde o início, com clareza de posicionamento.",
  },
  {
    n: "MÓDULO 02",
    icon: Settings2,
    title: "Aprender sobre as configurações do TikTok",
    text: "Entenda os ajustes da plataforma e o que cada configuração representa.",
  },
  {
    n: "MÓDULO 03",
    icon: Globe2,
    title: "Criar perfil no Brasil e na Gringa",
    text: "Diferenças de contexto e como organizar perfis para cada mercado.",
  },
  {
    n: "MÓDULO 04",
    icon: ShoppingBag,
    title: "Entender como ativar e utilizar o TikTok Shop",
    text: "O caminho para ativação e utilização da funcionalidade na prática.",
  },
  {
    n: "MÓDULO 05",
    icon: BadgeCheck,
    title: "Aprender estratégias para divulgar e vender suas contas de forma segura",
    text: "Boas práticas, cuidados e critérios para conduzir esse processo com segurança.",
  },
];

export const iaSteps = [
  "Digite seu nicho",
  "Gerar ideias",
  "Escolher conteúdo",
  "Criar roteiro",
  "Adicionar CTA",
] as const;

export const paraQuem: { icon: LucideIcon; text: string }[] = [
  { icon: Rocket, text: "Está começando no TikTok" },
  { icon: Compass, text: "Quer entender melhor a plataforma" },
  { icon: Target, text: "Quer aprender estratégias de conteúdo" },
  { icon: Coins, text: "Quer explorar possibilidades de monetização" },
  { icon: Bot, text: "Quer utilizar IA na criação de conteúdo" },
  { icon: Hand, text: "Quer aprender de maneira prática" },
];

export const oferta = {
  de: "499,00",
  aVista: "199,00",
  parcelas: 12,
  parcela: "20,58",
} as const;

export const inclui = [
  "Módulo 01 — Criar um perfil do zero",
  "Módulo 02 — Configurações do TikTok",
  "Módulo 03 — Perfil no Brasil e na Gringa",
  "Módulo 04 — Ativar e utilizar o TikTok Shop",
  "Módulo 05 — Divulgar e vender contas de forma segura",
  "Estratégias de conteúdo com apoio de IA",
] as const;

export const faq = [
  {
    q: "O que é o TikTok Monetizado?",
    a: "É um treinamento 100% online e prático que ensina como estruturar um perfil no TikTok, entender as configurações da plataforma e conhecer as possibilidades de monetização apresentadas nos módulos.",
  },
  {
    q: "Para quem é o curso?",
    a: "Para quem está começando no TikTok ou quer entender melhor a plataforma, aprender estratégias de conteúdo, explorar possibilidades de monetização e utilizar ferramentas de IA na criação.",
  },
  {
    q: "O curso é online?",
    a: "Sim. O treinamento é 100% online e você aprende no seu ritmo.",
  },
  {
    q: "O que será ensinado?",
    a: "Os cinco módulos do treinamento: criar um perfil do zero, configurações do TikTok, criar perfil no Brasil e na Gringa, como ativar e utilizar o TikTok Shop e estratégias para divulgar e vender contas de forma segura.",
  },
  {
    q: "Preciso ter experiência com TikTok?",
    a: "Não. O conteúdo começa pela criação de um perfil do zero, então também atende quem está iniciando.",
  },
] as const;
