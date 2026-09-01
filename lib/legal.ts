import { siteConfig } from "@/lib/site";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  closing?: string[];
};

export type LegalDocument = {
  title: string;
  description: string;
  path: string;
  updatedAt: string;
  sections: LegalSection[];
};

const updatedAt = "1 de setembro de 2026";

export const termosDeUso: LegalDocument = {
  title: "Termos de Uso",
  description: `Termos de uso do treinamento ${siteConfig.name}, conduzido por ${siteConfig.instructor}.`,
  path: "/termos-de-uso",
  updatedAt,
  sections: [
    {
      heading: "1. Quem somos",
      paragraphs: [
        `Este site e o treinamento online ${siteConfig.name} são oferecidos por ${siteConfig.instructor} (“nós”, “nosso” ou “fornecedor”), no endereço ${siteConfig.url}.`,
        "O TikTok Monetizado é um produto educacional independente. Não há vínculo, parceria, patrocínio ou afiliação com o TikTok, a ByteDance ou empresas do mesmo grupo.",
      ],
    },
    {
      heading: "2. Objeto",
      paragraphs: [
        "Estes Termos regulam o acesso a este site e a compra do treinamento 100% online e prático sobre estruturação de perfil, estratégia de conteúdo e possibilidades de monetização no TikTok.",
        "Ao navegar no site ou concluir a compra, você declara ter lido e concordado com estes Termos e com a Política de Privacidade.",
      ],
    },
    {
      heading: "3. O que está incluído",
      paragraphs: [
        "A compra dá direito de acesso ao conteúdo digital do treinamento, conforme descrito na página de oferta no momento da contratação. O acesso é pessoal, intransferível e destinado ao uso individual do aluno.",
        "Salvo indicação expressa na oferta, não estão incluídos mentoria individual, gestão de contas de terceiros, abertura de empresa, suporte jurídico ou qualquer resultado financeiro mínimo.",
      ],
    },
    {
      heading: "4. Compra e pagamento",
      paragraphs: [
        `O pagamento é processado pela Kiwify, plataforma de checkout independente, no endereço ${siteConfig.checkoutUrl}. Dados de cartão e demais informações financeiras são tratados pela Kiwify, de acordo com os termos e a política de privacidade dela.`,
        "O preço à vista e as condições de parcelamento vigentes são os exibidos na página de oferta no momento da compra. Impostos, taxas da operadora de cartão e regras de parcelamento seguem o que a Kiwify e a instituição financeira apresentarem no checkout.",
      ],
    },
    {
      heading: "5. Direito de arrependimento",
      paragraphs: [
        "Nas compras feitas pela internet, o Código de Defesa do Consumidor assegura o direito de desistir em até 7 (sete) dias, contados do recebimento do acesso ao conteúdo.",
        "Pedidos de cancelamento e reembolso nesse prazo devem ser feitos pelos canais da Kiwify utilizados na compra. Após esse período, a política de reembolso segue as regras informadas no checkout, quando houver.",
      ],
    },
    {
      heading: "6. Propriedade intelectual",
      paragraphs: [
        `O nome ${siteConfig.name}, a identidade visual, os módulos, roteiros, vídeos, textos e demais materiais do treinamento pertencem a ${siteConfig.instructor} ou a seus licenciadores.`,
        "É vedado copiar, gravar, republicar, revender, sublicenciar, compartilhar logins ou usar o conteúdo para criar produto concorrente, sem autorização prévia e por escrito.",
      ],
    },
    {
      heading: "7. Conduta do aluno",
      paragraphs: [
        "Você se compromete a informar dados verdadeiros na compra, a manter a confidencialidade do seu acesso e a usar o conteúdo apenas para fins lícitos, em conformidade com as regras da plataforma TikTok e com a legislação brasileira.",
        "O treinamento aborda estratégias de divulgação e de comercialização de contas. A aplicação prática é de sua responsabilidade. Práticas fraudulentas, spam, violação de direitos de terceiros ou descumprimento das políticas do TikTok são de sua exclusiva conta.",
      ],
    },
    {
      heading: "8. Resultados e isenção de responsabilidade",
      paragraphs: [
        "O treinamento ensina processos, configurações e caminhos de monetização. Resultados dependem de aplicação, consistência, experiência, nicho, investimento e das regras da plataforma, que podem mudar a qualquer momento.",
        "Não garantimos seguidores, faturamento, aprovação em programas do TikTok ou êxito em TikTok Shop. O conteúdo tem natureza educacional e não constitui aconselhamento financeiro, jurídico ou de investimentos.",
      ],
    },
    {
      heading: "9. Disponibilidade do site e do acesso",
      paragraphs: [
        "Envidamos esforços razoáveis para manter o site e o acesso ao treinamento disponíveis, mas podem ocorrer interrupções por manutenção, falha de terceiros (hospedagem, Kiwify ou plataforma de aulas) ou caso fortuito.",
        "Não nos responsabilizamos por indisponibilidade do TikTok, alterações de algoritmo, bloqueio de contas ou decisões da própria plataforma.",
      ],
    },
    {
      heading: "10. Alterações",
      paragraphs: [
        "Estes Termos podem ser atualizados para refletir mudanças no produto, na legislação ou na operação. A versão vigente é a publicada nesta página, com a data de atualização indicada no topo.",
      ],
    },
    {
      heading: "11. Lei aplicável e foro",
      paragraphs: [
        "Aplica-se a legislação brasileira, em especial o Código de Defesa do Consumidor e a Lei Geral de Proteção de Dados. Eventuais controvérsias serão resolvidas no foro do domicílio do consumidor, quando a relação for de consumo.",
      ],
    },
  ],
};

export const politicaDePrivacidade: LegalDocument = {
  title: "Política de Privacidade",
  description: `Como o ${siteConfig.name} trata dados pessoais, em conformidade com a LGPD.`,
  path: "/politica-de-privacidade",
  updatedAt,
  sections: [
    {
      heading: "1. Controlador",
      paragraphs: [
        `O controlador dos dados pessoais tratados neste site é ${siteConfig.instructor}, responsável pelo treinamento ${siteConfig.name}, disponível em ${siteConfig.url}.`,
        "Para exercer seus direitos ou esclarecer dúvidas sobre esta política, utilize os canais de contato indicados no site ou os canais da compra na Kiwify.",
      ],
    },
    {
      heading: "2. Quais dados tratamos",
      paragraphs: [
        "O site de apresentação é informativo. Na navegação, podemos registrar dados técnicos automaticamente, como endereço IP, data e hora de acesso, páginas visitadas, tipo de dispositivo e identificadores de cookies estritamente necessários ao funcionamento das páginas.",
        "Na compra do treinamento, a Kiwify coleta e processa dados cadastrais e de pagamento, que podem incluir nome, e-mail, documento, endereço, telefone e dados do meio de pagamento. Esses dados são necessários para concluir a transação, emitir comprovantes e liberar o acesso.",
      ],
    },
    {
      heading: "3. Para que usamos os dados",
      paragraphs: ["Tratamos dados pessoais para as finalidades abaixo, com base na LGPD:"],
      bullets: [
        "Exibir o site e garantir segurança, estabilidade e prevenção a fraudes (legítimo interesse e cumprimento de obrigação legal).",
        "Executar o contrato de compra do treinamento, incluindo pagamento, acesso ao conteúdo e comunicação operacional sobre a matrícula (execução de contrato).",
        "Cumprir obrigações legais, fiscais e de defesa em processos (obrigação legal).",
        "Responder a solicitações e exercer direitos seus ou nossos (legítimo interesse e exercício de direitos).",
      ],
    },
    {
      heading: "4. Compartilhamento",
      paragraphs: [
        "Não vendemos seus dados. Compartilhamos informações apenas com quem precisa delas para a operação:",
      ],
      bullets: [
        "Kiwify, para checkout, pagamento, reembolso e gestão da compra.",
        "Provedores de hospedagem e infraestrutura do site.",
        "Autoridades públicas, quando houver obrigação legal ou ordem válida.",
      ],
      closing: [
        "Cada um desses agentes trata os dados segundo suas próprias políticas, no que couber. Recomendamos a leitura da política de privacidade da Kiwify no ambiente de checkout.",
      ],
    },
    {
      heading: "5. Cookies",
      paragraphs: [
        "Utilizamos cookies e tecnologias semelhantes necessários para o funcionamento do site (por exemplo, preferências de sessão e segurança). Não utilizamos cookies de publicidade de terceiros neste site, salvo se isso for informado de forma específica no futuro.",
        "Você pode bloquear cookies no navegador; algumas funções da página podem deixar de funcionar corretamente.",
      ],
    },
    {
      heading: "6. Retenção",
      paragraphs: [
        "Dados de navegação são mantidos pelo tempo necessário à segurança e à operação do site. Dados de compra são retidos pelo prazo exigido pela legislação fiscal e consumerista, e depois eliminados ou anonimizados, salvo se houver outra base legal para conservá-los.",
      ],
    },
    {
      heading: "7. Seus direitos",
      paragraphs: [
        "Nos termos da LGPD, você pode solicitar confirmação do tratamento, acesso, correção, anonimização, portabilidade, informação sobre compartilhamentos, revogação do consentimento quando essa for a base legal, e oposição em hipóteses previstas na lei.",
        "Para exercer esses direitos, entre em contato pelos canais do site ou da Kiwify, conforme o dado em questão. Também é possível apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).",
      ],
    },
    {
      heading: "8. Segurança e menores",
      paragraphs: [
        "Adotamos medidas técnicas e organizacionais compatíveis com a natureza deste site e da venda digital. Nenhum ambiente online é totalmente isento de riscos.",
        "O treinamento não se destina a crianças. Não coletamos de forma intencional dados de menores de 18 anos sem a devida representação.",
      ],
    },
    {
      heading: "9. Alterações",
      paragraphs: [
        "Esta política pode ser atualizada. A versão vigente é a publicada nesta página, com a data de atualização no topo. O uso continuado do site após a alteração indica ciência da nova versão, quando a lei não exigir consentimento específico.",
      ],
    },
  ],
};
