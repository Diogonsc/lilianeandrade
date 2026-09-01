import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Bot,
  Coins,
  Compass,
  EyeOff,
  Flame,
  Globe2,
  Hand,
  HelpCircle,
  Lock,
  MessageCircle,
  Rocket,
  ShoppingBag,
  Target,
  TrendingDown,
  UserPlus,
  Users,
  Video,
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
    n: "01",
    icon: UserPlus,
    title: "Como criar e configurar a sua conta",
    text: "Do perfil inicial aos ajustes da plataforma para começar com a estrutura certa.",
  },
  {
    n: "02",
    icon: Flame,
    title: "Como aquecer a sua conta",
    text: "O processo para preparar o perfil e reduzir o risco de travar o crescimento no início.",
  },
  {
    n: "03",
    icon: Video,
    title: "Ferramentas para Criação de vídeos",
    text: "Recursos práticos para produzir conteúdo com mais agilidade no dia a dia.",
  },
  {
    n: "04",
    icon: Bot,
    title: "Criação com IA (Brasil)",
    text: "Como usar IA para gerar ideias, roteiros e conteúdos pensados para o mercado brasileiro.",
  },
  {
    n: "05",
    icon: Globe2,
    title: "Criação com IA (Na gringa)",
    text: "Aplicação da mesma lógica de criação com IA para perfis voltados ao público internacional.",
  },
  {
    n: "06",
    icon: Compass,
    title: "Outros Nichos",
    text: "Caminhos e exemplos para adaptar a estratégia a diferentes tipos de conteúdo.",
  },
  {
    n: "07",
    icon: ShoppingBag,
    title: "Como vender sua conta",
    text: "Boas práticas e cuidados para divulgar e negociar contas com mais segurança.",
  },
  {
    n: "08",
    icon: Users,
    title: "Grupo para Divulgar e comprar",
    text: "Acesso ao grupo para divulgar, encontrar oportunidades e acompanhar o mercado.",
  },
  {
    n: "09",
    icon: MessageCircle,
    title: "Suporte exclusivo no WhatsApp",
    text: "Canal direto para tirar dúvidas durante o treinamento.",
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
  "Como criar e configurar a sua conta",
  "Como aquecer a sua conta",
  "Ferramentas para Criação de vídeos",
  "Criação com IA (Brasil)",
  "Criação com IA (Na gringa)",
  "Outros Nichos",
  "Como vender sua conta",
  "Grupo para Divulgar e comprar",
  "Suporte exclusivo no WhatsApp",
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
    a: "O treinamento inclui: como criar e configurar a conta, aquecimento, ferramentas para criação de vídeos, criação com IA no Brasil e na gringa, outros nichos, como vender a conta, grupo para divulgar e comprar, e suporte exclusivo no WhatsApp.",
  },
  {
    q: "Preciso ter experiência com TikTok?",
    a: "Não. O conteúdo começa pela criação de um perfil do zero, então também atende quem está iniciando.",
  },
] as const;
