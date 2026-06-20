export type LegalSection = {
  title: string;
  body: string[];
  bullets?: string[];
};

export type LegalPageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  updatedAt: string;
  sections: LegalSection[];
};

const baseUpdatedAt = "19 de junho de 2026";

export const legalPages: Record<string, LegalPageContent> = {
  privacidade: {
    slug: "privacidade",
    eyebrow: "Privacidade e proteção de dados",
    title: "Política de Privacidade",
    description:
      "Como o Instituto Jesus é Bom trata dados pessoais em seus canais digitais, formulários, contatos institucionais e ações de relacionamento.",
    updatedAt: baseUpdatedAt,
    sections: [
      {
        title: "1. Quem somos",
        body: [
          "O Instituto Jesus é Bom atua na Comunidade César Maia, em Vargem Pequena/RJ, com iniciativas voltadas à fé, educação, esperança, acolhimento, desenvolvimento social, formação cristã e apoio a crianças, adolescentes e famílias.",
          "Esta política explica, de forma clara, como os dados pessoais podem ser coletados e utilizados nos canais digitais do Instituto."
        ]
      },
      {
        title: "2. Quais dados podemos coletar",
        body: [
          "Podemos coletar dados informados voluntariamente por visitantes, doadores, voluntários, parceiros ou responsáveis que entram em contato pelos canais do site."
        ],
        bullets: [
          "Nome e dados de identificação enviados em formulários.",
          "E-mail, telefone ou WhatsApp para retorno de contato.",
          "Mensagem, assunto de interesse e forma de apoio desejada.",
          "Dados técnicos de navegação, como páginas acessadas, dispositivo, navegador e cookies, quando aplicável.",
          "Preferências de consentimento registradas na tarja de cookies."
        ]
      },
      {
        title: "3. Para quais finalidades usamos os dados",
        body: [
          "Os dados são usados para viabilizar relacionamento institucional, retorno de contato, organização de apoio, comunicação sobre projetos e melhoria dos canais digitais."
        ],
        bullets: [
          "Responder mensagens e solicitações enviadas pelo site.",
          "Orientar pessoas interessadas em doação, voluntariado, parcerias ou transparência.",
          "Enviar informações institucionais quando houver consentimento ou relação legítima.",
          "Melhorar a experiência de navegação, segurança e funcionamento do site.",
          "Cumprir obrigações legais, regulatórias ou solicitações de autoridades competentes."
        ]
      },
      {
        title: "4. Base legal e responsabilidade",
        body: [
          "O tratamento de dados observa a Lei Geral de Proteção de Dados Pessoais — LGPD. Dependendo do contexto, o tratamento pode se apoiar em consentimento, execução de procedimentos solicitados pelo titular, cumprimento de obrigação legal, legítimo interesse institucional ou proteção de direitos.",
          "Quando houver dados de crianças e adolescentes em processos específicos, o tratamento deve observar o melhor interesse da criança e do adolescente e as autorizações necessárias dos responsáveis."
        ]
      },
      {
        title: "5. Compartilhamento de dados",
        body: [
          "Os dados podem ser compartilhados apenas quando necessário para operação dos canais digitais, atendimento, segurança, obrigações legais ou execução de atividades institucionais."
        ],
        bullets: [
          "Prestadores de tecnologia, hospedagem, segurança e manutenção do site.",
          "Ferramentas de comunicação utilizadas para retorno de contato.",
          "Autoridades públicas, quando houver obrigação legal ou solicitação válida.",
          "Parceiros operacionais, quando indispensável para viabilizar uma ação institucional e sempre de forma proporcional."
        ]
      },
      {
        title: "6. Segurança e retenção",
        body: [
          "Aplicamos medidas técnicas e organizacionais compatíveis com a natureza do site para reduzir riscos de acesso indevido, perda, alteração ou uso inadequado de dados.",
          "Os dados são mantidos pelo tempo necessário para cumprir a finalidade informada, atender obrigações legais, preservar histórico de relacionamento ou proteger direitos."
        ]
      },
      {
        title: "7. Direitos dos titulares",
        body: [
          "Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso, correção, atualização, eliminação, portabilidade quando aplicável, informação sobre compartilhamento e revisão de consentimento."
        ],
        bullets: [
          "Para exercer seus direitos, use os canais oficiais de contato do Instituto disponíveis no site.",
          "A solicitação poderá exigir validação de identidade para proteger a segurança do titular."
        ]
      },
      {
        title: "8. Atualizações desta política",
        body: [
          "Esta política pode ser atualizada para refletir mudanças no site, nos canais de atendimento, em requisitos legais ou em práticas institucionais. A data de atualização ficará sempre indicada nesta página."
        ]
      }
    ]
  },
  termos: {
    slug: "termos-de-uso",
    eyebrow: "Regras de navegação",
    title: "Termos de Uso",
    description:
      "Condições gerais de acesso e uso do site institucional do Instituto Jesus é Bom.",
    updatedAt: baseUpdatedAt,
    sections: [
      {
        title: "1. Aceitação dos termos",
        body: [
          "Ao acessar este site, você declara estar ciente destes Termos de Uso e concorda em utilizar as páginas, formulários, links e conteúdos de forma ética, segura e compatível com a finalidade institucional do Instituto Jesus é Bom."
        ]
      },
      {
        title: "2. Finalidade do site",
        body: [
          "O site tem finalidade institucional e informativa. Ele apresenta a missão, áreas de atuação, projetos, formas de apoio, transparência, conteúdos de relacionamento e canais de contato do Instituto."
        ]
      },
      {
        title: "3. Uso permitido",
        body: [
          "O visitante deve utilizar o site de forma lícita, sem comprometer a disponibilidade, integridade, segurança ou reputação dos canais digitais do Instituto."
        ],
        bullets: [
          "Não tentar acessar áreas, sistemas, dados ou recursos sem autorização.",
          "Não inserir conteúdo falso, ofensivo, discriminatório, ilícito ou prejudicial em formulários.",
          "Não usar o site para envio de spam, ataques, varreduras automatizadas ou coleta indevida de dados.",
          "Não reproduzir conteúdos institucionais de forma que gere confusão, falsa associação ou uso comercial indevido."
        ]
      },
      {
        title: "4. Conteúdo institucional",
        body: [
          "Textos, imagens, identidade visual, organização de conteúdo e materiais institucionais são disponibilizados para informação e relacionamento. Qualquer uso fora do contexto de divulgação legítima deve respeitar autorização, créditos e integridade da mensagem."
        ]
      },
      {
        title: "5. Links externos",
        body: [
          "O site pode conter links para redes sociais, ferramentas de contato, meios de doação ou páginas de terceiros. O Instituto não controla integralmente ambientes externos e recomenda que o visitante consulte as políticas próprias desses serviços."
        ]
      },
      {
        title: "6. Doações, voluntariado e parcerias",
        body: [
          "Informações sobre doação, voluntariado e parcerias devem ser confirmadas pelos canais oficiais do Instituto. Nunca envie dados sensíveis, comprovantes ou valores para canais não verificados."
        ]
      },
      {
        title: "7. Disponibilidade do site",
        body: [
          "O Instituto poderá atualizar, suspender, corrigir ou remover conteúdos do site a qualquer momento para manutenção, melhoria, segurança, adequação institucional ou cumprimento legal."
        ]
      },
      {
        title: "8. Atualizações dos termos",
        body: [
          "Estes Termos de Uso podem ser atualizados periodicamente. A versão vigente será sempre aquela publicada nesta página."
        ]
      }
    ]
  },
  cookies: {
    slug: "politica-de-cookies",
    eyebrow: "Consentimento e preferências",
    title: "Política de Cookies",
    description:
      "Como usamos cookies essenciais, preferências, métricas e comunicação no site do Instituto Jesus é Bom.",
    updatedAt: baseUpdatedAt,
    sections: [
      {
        title: "1. O que são cookies",
        body: [
          "Cookies são pequenos arquivos ou registros técnicos usados pelo navegador para lembrar preferências, manter funcionalidades, melhorar segurança e compreender a navegação no site."
        ]
      },
      {
        title: "2. Categorias usadas no site",
        body: [
          "A tarja de cookies do site permite aceitar todos, manter apenas essenciais ou personalizar categorias. A qualquer momento, o visitante pode reabrir as preferências pelo botão flutuante de privacidade."
        ],
        bullets: [
          "Cookies necessários: essenciais para funcionamento, segurança, consentimento e navegação básica. Não podem ser desativados pelo painel.",
          "Cookies de preferências: ajudam a lembrar escolhas de navegação e exibição.",
          "Cookies de métricas: ajudam a entender uso geral do site de forma agregada, quando habilitados.",
          "Cookies de comunicação: podem apoiar campanhas, formulários, integrações e relacionamento, quando habilitados."
        ]
      },
      {
        title: "3. Como gerenciar o consentimento",
        body: [
          "No primeiro acesso, o site exibe uma tarja de consentimento. Você pode aceitar todos, rejeitar cookies não essenciais ou abrir o painel de preferências para escolher por categoria.",
          "As escolhas ficam salvas no navegador e podem ser revisadas pelo botão flutuante de privacidade no lado esquerdo da página."
        ]
      },
      {
        title: "4. Cookies de terceiros",
        body: [
          "Algumas funcionalidades podem depender de serviços externos, como hospedagem, segurança, vídeos, mapas, formulários, redes sociais ou WhatsApp. Esses serviços podem aplicar tecnologias próprias conforme suas respectivas políticas."
        ]
      },
      {
        title: "5. Alteração das preferências no navegador",
        body: [
          "Além do painel do site, você pode apagar ou bloquear cookies diretamente nas configurações do navegador. A remoção de cookies essenciais pode afetar algumas funcionalidades."
        ]
      },
      {
        title: "6. Atualizações",
        body: [
          "Esta política pode ser atualizada conforme novas ferramentas, integrações ou requisitos legais sejam adotados."
        ]
      }
    ]
  },
  transparencia: {
    slug: "transparencia",
    eyebrow: "Governança e confiança",
    title: "Transparência",
    description:
      "Espaço para reunir informações institucionais, documentos, prestação de contas e materiais de apoio à confiança pública.",
    updatedAt: baseUpdatedAt,
    sections: [
      {
        title: "1. Compromisso com cada doação",
        body: [
          "O Instituto Jesus é Bom valoriza clareza, responsabilidade e transparência no relacionamento com doadores, voluntários, parceiros, famílias atendidas e comunidade."
        ]
      },
      {
        title: "2. Informações institucionais",
        body: [
          "Esta página organiza o caminho para documentos institucionais, relatórios, prestação de contas, políticas e informações relevantes para quem deseja conhecer ou apoiar a missão."
        ],
        bullets: [
          "Política de Privacidade.",
          "Termos de Uso.",
          "Política de Cookies.",
          "Relatórios e documentos institucionais.",
          "Canais oficiais para dúvidas sobre doação, parcerias e voluntariado."
        ]
      },
      {
        title: "3. Relatórios e documentos",
        body: [
          "Os relatórios oficiais, documentos de prestação de contas e arquivos públicos devem ser adicionados conforme validação do Instituto. Enquanto os materiais finais não forem publicados, esta página funciona como estrutura institucional preparada para receber os arquivos."
        ]
      },
      {
        title: "4. Contato para transparência",
        body: [
          "Dúvidas sobre prestação de contas, documentos ou informações institucionais devem ser encaminhadas pelos canais oficiais disponíveis no site."
        ]
      }
    ]
  },
  relatorios: {
    slug: "relatorios",
    eyebrow: "Documentos institucionais",
    title: "Relatórios",
    description:
      "Área preparada para disponibilização de relatórios, documentos institucionais e materiais públicos do Instituto Jesus é Bom.",
    updatedAt: baseUpdatedAt,
    sections: [
      {
        title: "1. Relatórios oficiais",
        body: [
          "Esta página está preparada para receber relatórios oficiais do Instituto Jesus é Bom, incluindo materiais de prestação de contas, impacto social e documentação institucional."
        ]
      },
      {
        title: "2. Materiais previstos",
        body: [
          "Os documentos devem ser publicados somente após validação da equipe responsável."
        ],
        bullets: [
          "Relatório anual de atividades.",
          "Prestação de contas.",
          "Documentos institucionais.",
          "Materiais de apresentação para parceiros.",
          "Arquivos de campanhas e ações sociais."
        ]
      },
      {
        title: "3. Solicitação de informações",
        body: [
          "Caso o visitante deseje informações antes da publicação dos arquivos finais, deve entrar em contato pelos canais oficiais do Instituto."
        ]
      }
    ]
  },
  "trabalhe-conosco": {
    slug: "trabalhe-conosco",
    eyebrow: "Faça parte da missão",
    title: "Trabalhe Conosco e Voluntariado",
    description:
      "Caminhos para pessoas interessadas em servir, contribuir com tempo, talentos, presença, conhecimento ou apoio institucional.",
    updatedAt: baseUpdatedAt,
    sections: [
      {
        title: "1. Uma missão feita por pessoas",
        body: [
          "O Instituto Jesus é Bom conta com pessoas comprometidas com fé, cuidado, educação, esperança e transformação social para apoiar crianças, adolescentes e famílias."
        ]
      },
      {
        title: "2. Formas de participação",
        body: [
          "A participação pode acontecer por meio de voluntariado, parcerias, apoio técnico, atividades, doações de materiais, serviços, projetos educacionais, culturais, esportivos ou ações sociais."
        ],
        bullets: [
          "Voluntariado em ações e eventos.",
          "Apoio com habilidades profissionais.",
          "Parcerias com empresas, igrejas e instituições.",
          "Doação de materiais, alimentos, serviços ou recursos.",
          "Apoio em educação, esporte, cultura e desenvolvimento social."
        ]
      },
      {
        title: "3. Como demonstrar interesse",
        body: [
          "Use os canais oficiais do site para falar com a equipe, informar sua área de interesse e aguardar orientação sobre as possibilidades abertas no momento."
        ]
      }
    ]
  }
};

export const legalIndex = [
  legalPages.privacidade,
  legalPages.termos,
  legalPages.cookies,
  legalPages.transparencia,
  legalPages.relatorios,
  legalPages["trabalhe-conosco"]
];
