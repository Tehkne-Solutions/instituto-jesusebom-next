
import {
  Baby,
  BookOpen,
  Building2,
  CalendarDays,
  Church,
  ClipboardList,
  Cookie,
  FileText,
  Gift,
  GraduationCap,
  HandHeart,
  Heart,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  Repeat2,
  School,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserPlus,
  UsersRound,
  Volleyball
} from "lucide-react";
import type { ElementType } from "react";

export type ContentCard = {
  title: string;
  description: string;
  icon?: ElementType;
  meta?: string;
};

export type ContentStat = {
  value: string;
  label: string;
  description: string;
  icon?: ElementType;
};

export type ContentSection = {
  eyebrow?: string;
  title: string;
  text?: string[];
  highlight?: string;
  image?: string;
  cards?: ContentCard[];
};

export type ContentPage = {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  intro?: ContentSection;
  stats?: ContentStat[];
  sections: ContentSection[];
  timeline?: ContentCard[];
  suggestedValues?: ContentCard[];
  contactChannels?: ContentCard[];
  formFields?: string[];
  finalCta?: {
    title: string;
    text: string;
    buttons: { label: string; href: string; variant?: "primary" | "outline" | "soft" }[];
  };
};

export const officialContact = {
  whatsapp: "21 97346-8327",
  whatsappHref: "https://wa.me/5521973468327",
  email: "contato@jesusebom.org",
  mailto: "mailto:contato@jesusebom.org",
  instagram: "@institutojesusebom",
  instagramHref: "https://www.instagram.com/institutojesusebom/",
  site: "www.jesusebom.org",
  location: "Comunidade César Maia • Vargem Pequena/RJ"
};

export const pagesContent: Record<string, ContentPage> = {
  "quem-somos": {
    slug: "quem-somos",
    eyebrow: "Quem Somos",
    title: "Uma missão que transforma vidas através da fé, educação e esperança",
    subtitle:
      "Desde 2019, o Instituto Jesus é Bom acolhe crianças, adolescentes e famílias da Comunidade César Maia com projetos gratuitos que unem cuidado, formação, proteção e amor ao próximo.",
    heroImage: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=85",
    primaryCta: { label: "Conheça nossa missão", href: "#missao" },
    secondaryCta: { label: "Quero apoiar", href: "/como-ajudar" },
    intro: {
      eyebrow: "Nossa história",
      title: "Nascemos para cuidar de vidas",
      text: [
        "O Instituto Jesus é Bom nasceu no coração da Comunidade César Maia com o propósito de ser presença, cuidado e oportunidade para crianças e famílias.",
        "Ao longo dos anos, a missão cresceu. O que começou com o desejo de ajudar passou a se tornar uma rede de projetos, atendimentos, ações sociais, atividades educacionais, esportivas, culturais e espirituais.",
        "Hoje, o Instituto segue de portas abertas para acolher, ensinar, alimentar, proteger e inspirar crianças e adolescentes, sempre guiado pelo amor de Cristo e pelo compromisso com a transformação de vidas."
      ],
      highlight: "Não somos apenas uma instituição. Somos uma missão em movimento.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80"
    },
    sections: [
      {
        eyebrow: "Missão",
        title: "Nossa missão",
        text: [
          "Transformar vidas através do amor de Cristo, promovendo cuidado, educação, dignidade e esperança, enquanto anunciamos a Palavra de Deus e formamos uma geração fortalecida pela fé, pelos valores cristãos e pelo propósito."
        ],
        cards: [
          { title: "Cuidado", description: "Acolhimento, escuta e atenção para cada criança e família.", icon: HeartHandshake },
          { title: "Educação", description: "Projetos gratuitos que fortalecem aprendizagem, futuro e dignidade.", icon: BookOpen },
          { title: "Esperança", description: "Uma missão guiada pela fé e pelo amor de Cristo.", icon: Sparkles }
        ]
      },
      {
        eyebrow: "Visão",
        title: "Nossa visão",
        text: [
          "Ser referência em transformação social e educação cristã, avançando com responsabilidade e sonhando com a criação de uma escola cristã gratuita de ensino integral, capaz de atender crianças e adolescentes com excelência, cuidado, valores e propósito."
        ],
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=85"
      },
      {
        eyebrow: "Pilares",
        title: "Os pilares que sustentam nossa missão",
        cards: [
          { title: "Centralidade em Deus", description: "Tudo é feito com base na fé, na dependência de Deus e no desejo de servir com amor.", icon: Church },
          { title: "Palavra como fundamento", description: "A Palavra de Deus orienta nossos valores, decisões e a forma como cuidamos de cada vida.", icon: BookOpen },
          { title: "Amor ao próximo", description: "Cuidado, respeito, acolhimento e dignidade para cada criança, família e pessoa atendida.", icon: Heart },
          { title: "Formação integral", description: "Desenvolvimento espiritual, emocional, social, físico, educacional e cultural.", icon: GraduationCap },
          { title: "Comunidade e unidade", description: "Uma missão construída com apoio, parceria, voluntariado e compromisso coletivo.", icon: UsersRound },
          { title: "Propósito e transformação", description: "Acreditamos que cada criança carrega valor, potencial e um propósito dado por Deus.", icon: Sparkles }
        ]
      },
      {
        eyebrow: "Onde estamos",
        title: "No coração da Comunidade César Maia",
        text: [
          "O Instituto Jesus é Bom atua na Comunidade César Maia, no Rio de Janeiro, alcançando crianças, adolescentes e famílias por meio de projetos gratuitos e ações sociais contínuas.",
          "Nossa presença na comunidade nasce do compromisso de estar perto, ouvir necessidades reais e construir caminhos de cuidado, educação e esperança."
        ],
        cards: [
          { title: "Quem atendemos", description: "Crianças, adolescentes e famílias que encontram no Instituto acolhimento, aprendizagem, convivência, proteção, fé e desenvolvimento.", icon: UsersRound },
          { title: "Equipe organizada", description: "Direção, coordenação, equipe técnica, colaboradores, voluntários e parceiros atuam de forma integrada para servir melhor.", icon: ClipboardList }
        ]
      },
      {
        eyebrow: "Estrutura",
        title: "Uma equipe organizada para servir melhor",
        image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80",
        cards: [
          { title: "Direção e Coordenação", description: "Gestão institucional, planejamento, organização e acompanhamento das ações.", icon: Landmark },
          { title: "Educação", description: "Estudo Dirigido, Matemática, Estudo Bilíngue, Ensino Bíblico, Artes e Robótica.", icon: BookOpen },
          { title: "Esporte e Cultura", description: "Natação, Jiu-Jitsu, Ballet, Hidroginástica, Recreação e atividades de convivência.", icon: Volleyball },
          { title: "Social e Saúde", description: "Assistência Social, Psicologia, Psicopedagogia, entrevistas sociais e acompanhamento de famílias.", icon: HeartHandshake },
          { title: "Operação e Apoio", description: "Secretaria, cozinha, serviços gerais, apoio às turmas e organização da rotina.", icon: Building2 },
          { title: "Comunicação, Mídia e Tecnologia", description: "Registros, divulgação, mídias sociais, programação e apoio à presença digital do Instituto.", icon: MessageCircle }
        ],
        highlight: "Cada pessoa servindo com amor fortalece nossa missão."
      }
    ],
    finalCta: {
      title: "Faça parte dessa história",
      text: "O Instituto Jesus é Bom segue crescendo porque pessoas escolhem caminhar conosco. A sua ajuda pode manter essa missão viva e alcançar ainda mais crianças.",
      buttons: [
        { label: "Doe Agora", href: "/como-ajudar" },
        { label: "Quero Apoiar", href: "/contato", variant: "outline" }
      ]
    }
  },

  "o-que-fazemos": {
    slug: "o-que-fazemos",
    eyebrow: "O que fazemos",
    title: "Projetos que cuidam da criança por inteiro",
    subtitle:
      "Educação, esporte, cultura, cuidado emocional, alimentação, proteção, fé e oportunidades para crianças e adolescentes da Comunidade César Maia.",
    heroImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
    primaryCta: { label: "Conheça os projetos", href: "#projetos" },
    secondaryCta: { label: "Como ajudar", href: "/como-ajudar" },
    intro: {
      eyebrow: "Introdução",
      title: "Mais do que atividades, oferecemos caminhos de transformação",
      text: [
        "Cada projeto do Instituto Jesus é Bom foi pensado para responder a necessidades reais das crianças e famílias atendidas.",
        "Alguns projetos fortalecem a aprendizagem. Outros desenvolvem disciplina, autoestima e convivência. Outros oferecem escuta, proteção, alimentação e acolhimento. Juntos, eles formam uma rede de cuidado integral."
      ],
      highlight: "Cada projeto é uma porta. Cada criança é uma história. Cada oportunidade pode mudar um futuro.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80"
    },
    sections: [
      {
        eyebrow: "Educação e Desenvolvimento",
        title: "Educar é abrir caminhos para um futuro com dignidade, propósito e esperança",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
        cards: [
          { title: "Estudo Dirigido", description: "Apoio para aprender, criar rotina de estudo e fortalecer a confiança das crianças.", icon: BookOpen },
          { title: "Matemática", description: "Aulas com professora especialista para desenvolver raciocínio, segurança e aprendizagem.", icon: GraduationCap },
          { title: "Estudo Bilíngue", description: "Contato com a língua inglesa e ampliação de oportunidades para o futuro.", icon: BookOpen },
          { title: "Robótica", description: "Criatividade, tecnologia, raciocínio lógico, trabalho em equipe e inovação.", icon: Sparkles },
          { title: "Artes", description: "Expressão, criatividade, sensibilidade e desenvolvimento emocional.", icon: Music2 },
          { title: "Ensino Bíblico", description: "Valores, propósito, fé e formação espiritual.", icon: Church }
        ]
      },
      {
        eyebrow: "Esporte, Cultura e Convivência",
        title: "Cuidar também é oferecer experiências, disciplina, autoestima e oportunidades",
        image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=80",
        cards: [
          { title: "Natação", description: "Desenvolvimento físico, segurança, disciplina, saúde e superação.", icon: Volleyball },
          { title: "Jiu-Jitsu", description: "Respeito, disciplina, autocontrole e fortalecimento emocional.", icon: Trophy },
          { title: "Ballet", description: "Expressão, sensibilidade, autoestima e desenvolvimento artístico.", icon: Music2 },
          { title: "Recreação e Convivência", description: "Socialização, acolhimento, brincadeiras e construção de vínculos saudáveis.", icon: UsersRound },
          { title: "Hidroginástica", description: "Atividade física, saúde, convivência e bem-estar para adultas da comunidade.", icon: HeartHandshake }
        ]
      },
      {
        eyebrow: "Cuidado, Acolhimento e Proteção",
        title: "Cada criança merece ser vista, ouvida, protegida e amada",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
        cards: [
          { title: "Atendimento Psicológico", description: "Escuta, acolhimento e cuidado emocional para crianças e adolescentes.", icon: HeartHandshake },
          { title: "Apoio Psicopedagógico", description: "Acompanhamento das dificuldades de aprendizagem e fortalecimento do desenvolvimento.", icon: BookOpen },
          { title: "Assistência Social", description: "Entrevistas, orientação, acompanhamento e apoio às famílias.", icon: UsersRound },
          { title: "Proteção da Infância", description: "Ações de conscientização, prevenção, acolhimento e cuidado com crianças e famílias.", icon: ShieldCheck }
        ]
      },
      {
        eyebrow: "Alimentação e Ações Sociais",
        title: "Cuidado também se serve à mesa",
        image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=85",
        cards: [
          { title: "Alimentação diária", description: "Lanches, refeições e acolhimento com cuidado, carinho e responsabilidade.", icon: HandHeart },
          { title: "Campanhas sociais", description: "Distribuição de cestas, kits, alimentos, brinquedos, materiais e apoio em momentos especiais.", icon: Gift },
          { title: "Eventos comunitários", description: "Ações que reúnem fé, alegria, alimentação, cuidado, voluntariado e transformação.", icon: CalendarDays }
        ]
      }
    ],
    finalCta: {
      title: "Apoie projetos que transformam histórias",
      text: "Ao apoiar o Instituto Jesus é Bom, você ajuda a manter projetos que alcançam crianças em diferentes áreas da vida.",
      buttons: [
        { label: "Doe Agora", href: "/como-ajudar" },
        { label: "Conheça Como Ajudar", href: "/como-ajudar", variant: "outline" }
      ]
    }
  },

  "impacto-social": {
    slug: "impacto-social",
    eyebrow: "Impacto Social",
    title: "Cada número representa uma vida alcançada",
    subtitle:
      "O impacto do Instituto Jesus é Bom é medido em dados, mas também em histórias, famílias, sorrisos, refeições, atendimentos e oportunidades reais.",
    heroImage: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=85",
    primaryCta: { label: "Ver números", href: "#numeros" },
    secondaryCta: { label: "Quero apoiar", href: "/como-ajudar" },
    stats: [
      { value: "627", label: "alunos atendidos", description: "Crianças e adolescentes alcançados pelos projetos do Instituto.", icon: UsersRound },
      { value: "+1.500", label: "famílias impactadas", description: "Famílias acompanhadas, acolhidas ou alcançadas por ações e eventos.", icon: HeartHandshake },
      { value: "100", label: "atendimentos psicológicos semanalmente", description: "Cuidado emocional contínuo para crianças e adolescentes.", icon: ShieldCheck },
      { value: "153", label: "entrevistas sociais realizadas", description: "Escuta, orientação e acompanhamento de famílias em 2026.", icon: ClipboardList },
      { value: "+3.000", label: "inscrições na Festa de Páscoa", description: "Uma das maiores ações sociais realizadas pelo Instituto.", icon: CalendarDays },
      { value: "12", label: "cursos e atividades", description: "Projetos educacionais, esportivos, sociais, culturais e espirituais.", icon: BookOpen }
    ],
    sections: [
      {
        eyebrow: "Crescimento",
        title: "Uma obra em crescimento contínuo",
        text: [
          "O Instituto Jesus é Bom tem vivido um período de crescimento importante. O aumento no número de alunos atendidos mostra a força da missão, mas também revela uma responsabilidade cada vez maior.",
          "Mais crianças atendidas significam mais aulas, mais alimentação, mais materiais, mais organização, mais profissionais, mais voluntários e mais cuidado diário."
        ],
        highlight: "A obra cresceu. A responsabilidade também.",
        image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=85"
      },
      {
        eyebrow: "Festa de Páscoa",
        title: "Festa de Páscoa 2026: fé, cuidado e mobilização social",
        text: [
          "A Festa de Páscoa é uma das grandes ações sociais do Instituto Jesus é Bom. Mais do que um evento, ela representa um movimento de fé, alegria, cuidado, alimentação e amor para milhares de vidas."
        ],
        image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=85",
        cards: [
          { title: "500 cestas básicas distribuídas", description: "Ação direta de cuidado e apoio às famílias.", icon: Gift },
          { title: "3 mil kits de Páscoa entregues", description: "Kits entregues em uma grande mobilização comunitária.", icon: HandHeart },
          { title: "+8 mil refeições servidas", description: "Alimentação e acolhimento em ações e eventos.", icon: HeartHandshake },
          { title: "+2 mil crianças impactadas", description: "Crianças alcançadas por fé, alegria, cuidado e amor.", icon: Baby }
        ],
        highlight: "Mais do que uma festa, realizamos um movimento de amor, cuidado e transformação."
      },
      {
        eyebrow: "Alcance",
        title: "Onde o impacto acontece",
        cards: [
          { title: "Na comunidade", description: "Atuação direta na Comunidade César Maia e entorno.", icon: MapPin },
          { title: "Nas famílias", description: "Acolhimento, orientação, entrevistas sociais, alimentação e acompanhamento.", icon: UsersRound },
          { title: "Na aprendizagem", description: "Projetos que fortalecem educação, leitura, raciocínio, disciplina e oportunidades.", icon: BookOpen },
          { title: "Na saúde emocional", description: "Atendimentos psicológicos e apoio ao desenvolvimento das crianças.", icon: HeartHandshake },
          { title: "Na convivência", description: "Esporte, cultura, recreação, respeito, disciplina e vínculos saudáveis.", icon: Volleyball },
          { title: "Na fé e nos valores", description: "Ensino bíblico, propósito, esperança e formação do coração.", icon: Church }
        ]
      }
    ],
    timeline: [
      { title: "2025", description: "80 alunos antes da sede" },
      { title: "Jan/2026", description: "423 alunos" },
      { title: "Fev/2026", description: "395 alunos" },
      { title: "Mar/2026", description: "400 alunos" },
      { title: "Abr/2026", description: "444 alunos" },
      { title: "Mai/2026", description: "573 alunos" },
      { title: "Jun/2026", description: "627 alunos" },
      { title: "Visão", description: "750 alunos até o final de 2026" }
    ],
    finalCta: {
      title: "Ajude esse impacto a continuar",
      text: "Uma criança não precisa apenas de uma oportunidade. Ela precisa que essa oportunidade continue existindo.",
      buttons: [
        { label: "Doe Agora", href: "/como-ajudar" },
        { label: "Seja Mantenedor", href: "/como-ajudar#mantenedor", variant: "outline" }
      ]
    }
  },

  "como-ajudar": {
    slug: "como-ajudar",
    eyebrow: "Como Ajudar",
    title: "A sua doação não termina no PIX. Ela continua na vida de uma criança.",
    subtitle:
      "Sua contribuição ajuda o Instituto Jesus é Bom a manter projetos gratuitos de educação, alimentação, esporte, fé, cuidado emocional, proteção e desenvolvimento.",
    heroImage: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=85",
    primaryCta: { label: "Doe agora via PIX", href: "#pix" },
    secondaryCta: { label: "Falar pelo WhatsApp", href: "https://wa.me/5521973468327" },
    suggestedValues: [
      { title: "R$ 30", description: "Ajuda a manter materiais, atividades e pequenas necessidades da rotina." },
      { title: "R$ 50", description: "Apoia alimentação, cuidado e acolhimento das crianças." },
      { title: "R$ 100", description: "Fortalece projetos educacionais, esportivos e sociais." },
      { title: "R$ 200", description: "Ajuda a sustentar atendimentos, estrutura, materiais e expansão." },
      { title: "Outro valor", description: "Toda contribuição ajuda essa missão a continuar." }
    ],
    sections: [
      {
        eyebrow: "Doação via PIX",
        title: "Doe agora via PIX",
        text: [
          "A forma mais simples e direta de apoiar o Instituto Jesus é Bom é por meio do PIX. Toda contribuição ajuda a manter os projetos funcionando e a ampliar o cuidado oferecido às crianças e famílias.",
          "Chave PIX: contato@jesusebom.org",
          "Após realizar sua doação, você pode enviar o comprovante pelo WhatsApp oficial do Instituto."
        ],
        cards: [
          { title: "Copiar Chave PIX", description: "contato@jesusebom.org", icon: Gift },
          { title: "Enviar comprovante", description: "Envie pelo WhatsApp oficial após realizar sua contribuição.", icon: MessageCircle }
        ],
        image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=85"
      },
      {
        eyebrow: "Mantenedor mensal",
        title: "Seja um mantenedor dessa missão",
        text: [
          "Doações recorrentes ajudam o Instituto a planejar melhor suas ações, manter atendimentos, organizar projetos e garantir continuidade no cuidado oferecido às crianças.",
          "Quem se torna mantenedor ajuda a transformar generosidade em rotina, presença e oportunidade."
        ],
        highlight: "Mantenedores não apenas doam. Eles sustentam caminhos.",
        cards: [
          { title: "Continuidade", description: "Ajuda a manter projetos funcionando mês após mês.", icon: Repeat2 },
          { title: "Planejamento", description: "Permite organizar melhor ações, atendimentos e campanhas.", icon: ClipboardList },
          { title: "Impacto real", description: "Sustenta caminhos de cuidado para crianças e famílias.", icon: HeartHandshake }
        ]
      },
      {
        eyebrow: "Materiais e serviços",
        title: "Doe materiais, alimentos ou serviços",
        text: [
          "Também é possível apoiar o Instituto com alimentos, materiais escolares, uniformes, equipamentos, livros, brinquedos, itens para eventos, serviços profissionais e outros recursos importantes para a rotina dos projetos."
        ],
        cards: [
          { title: "Alimentos", description: "Apoio para lanches, refeições, campanhas e eventos.", icon: HandHeart },
          { title: "Materiais escolares", description: "Itens para atividades, oficinas e rotina educacional.", icon: BookOpen },
          { title: "Serviços profissionais", description: "Conhecimento, orientação e suporte especializado.", icon: UserPlus }
        ]
      },
      {
        eyebrow: "Parcerias",
        title: "Sua empresa ou grupo pode apoiar uma transformação real",
        text: [
          "Empresas, grupos, profissionais e parceiros podem contribuir com projetos, campanhas, eventos, estrutura, serviços, alimentos, materiais e ações de impacto social.",
          "Mais do que uma ação pontual, apoiar o Instituto é ajudar a manter viva uma missão que alcança crianças, famílias e futuros."
        ],
        cards: [
          { title: "Empresas", description: "Apoio institucional, estrutura, materiais e campanhas.", icon: Building2 },
          { title: "Grupos e igrejas", description: "Mobilização coletiva para ações sociais e voluntariado.", icon: Church },
          { title: "Profissionais", description: "Serviços, oficinas, orientação técnica e apoio especializado.", icon: UsersRound }
        ]
      }
    ],
    formFields: ["Nome completo", "WhatsApp", "E-mail", "Valor mensal pretendido", "Melhor forma de contato", "Mensagem opcional"],
    finalCta: {
      title: "Faça parte do que Deus está construindo aqui",
      text: "Ainda há muitas crianças esperando por cuidado, oportunidade e esperança. A sua ajuda pode manter essa porta aberta.",
      buttons: [
        { label: "Doe Agora", href: "#pix" },
        { label: "Faça Parte dessa Missão", href: "/contato", variant: "outline" }
      ]
    }
  },

  "voluntariado": {
    slug: "voluntariado",
    eyebrow: "Voluntariado",
    title: "Doe tempo, talento e presença",
    subtitle:
      "Ser voluntário no Instituto Jesus é Bom é colocar amor em movimento e ajudar a transformar vidas de forma prática.",
    heroImage: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80",
    primaryCta: { label: "Quero ser voluntário", href: "#formulario" },
    secondaryCta: { label: "Falar com o Instituto", href: "/contato" },
    intro: {
      eyebrow: "Por que ser voluntário",
      title: "Toda missão precisa de pessoas dispostas a servir",
      text: [
        "O Instituto Jesus é Bom cresce com o apoio de pessoas que acreditam que uma criança merece cuidado, oportunidade, escuta, alimento, ensino, fé e esperança.",
        "Ser voluntário é participar dessa transformação com aquilo que você tem: tempo, talento, conhecimento, experiência, disposição e amor ao próximo."
      ],
      highlight: "Existe uma forma de servir que combina com você.",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=85"
    },
    sections: [
      {
        eyebrow: "Áreas de voluntariado",
        title: "Como você pode ajudar",
        cards: [
          { title: "Apoio em eventos", description: "Organização, recepção, apoio às crianças, alimentação, brincadeiras e estrutura.", icon: CalendarDays },
          { title: "Apoio pedagógico", description: "Auxílio em atividades educacionais, leitura, reforço, oficinas e acompanhamento.", icon: BookOpen },
          { title: "Ações sociais", description: "Campanhas, distribuição, organização de doações, acolhimento e apoio às famílias.", icon: HandHeart },
          { title: "Oficinas e atividades", description: "Arte, música, tecnologia, esportes, criatividade, cultura e desenvolvimento.", icon: Sparkles },
          { title: "Comunicação e registros", description: "Fotos, vídeos, redes sociais, textos, design, cobertura de eventos e apoio institucional.", icon: MessageCircle },
          { title: "Apoio profissional especializado", description: "Profissionais que desejam contribuir com conhecimento técnico, orientação ou serviços.", icon: UserPlus }
        ]
      }
    ],
    formFields: ["Nome completo", "WhatsApp", "E-mail", "Área de interesse", "Disponibilidade", "Experiência ou habilidade que deseja oferecer", "Mensagem"],
    finalCta: {
      title: "Servir também transforma quem serve",
      text: "Quando você doa tempo, presença e amor, ajuda a construir uma história maior do que você. E cada vida alcançada também deixa marcas em quem escolheu servir.",
      buttons: [{ label: "Quero fazer parte", href: "/contato" }]
    }
  },

  "transparencia": {
    slug: "transparencia",
    eyebrow: "Transparência",
    title: "Transparência e prestação de contas",
    subtitle:
      "Confiança também se constrói com clareza, responsabilidade e compromisso com cada vida alcançada.",
    heroImage: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=85",
    primaryCta: { label: "Falar com o Instituto", href: "/contato" },
    secondaryCta: { label: "Ver relatórios", href: "/relatorios" },
    sections: [
      {
        eyebrow: "Área em organização",
        title: "Estamos organizando esta área",
        text: [
          "O Instituto Jesus é Bom entende que a confiança de doadores, parceiros, voluntários e famílias precisa ser cuidada com seriedade.",
          "Por isso, estamos estruturando esta área para reunir documentos institucionais, relatórios, registros de ações, dados de impacto e informações importantes sobre a atuação do Instituto.",
          "Enquanto esta página é organizada, nossa equipe permanece disponível para compartilhar informações e esclarecer dúvidas pelos canais oficiais."
        ],
        highlight: "Esta área está em organização para oferecer ainda mais clareza a quem caminha conosco."
      },
      {
        eyebrow: "Em breve nesta página",
        title: "Documentos, relatórios e registros",
        cards: [
          { title: "Documentos institucionais", description: "Informações formais sobre o Instituto Jesus é Bom.", icon: FileText },
          { title: "Relatórios de impacto", description: "Dados, números e registros das ações realizadas.", icon: ClipboardList },
          { title: "Prestação de contas", description: "Informações organizadas sobre campanhas, doações e utilização de recursos.", icon: ShieldCheck },
          { title: "Registros de campanhas", description: "Fotos, resultados e detalhes de ações sociais e eventos.", icon: CalendarDays },
          { title: "Parceiros e apoiadores", description: "Reconhecimento a quem caminha conosco nessa missão.", icon: HandHeart },
          { title: "Perguntas frequentes", description: "Respostas para dúvidas comuns de doadores, voluntários e parceiros.", icon: MessageCircle }
        ]
      }
    ],
    finalCta: {
      title: "Quer saber mais sobre o Instituto?",
      text: "Nossa equipe está à disposição para conversar, esclarecer dúvidas e compartilhar informações institucionais.",
      buttons: [
        { label: "Falar pelo WhatsApp", href: "https://wa.me/5521973468327" },
        { label: "Enviar e-mail", href: "mailto:contato@jesusebom.org", variant: "outline" }
      ]
    }
  },

  "contato": {
    slug: "contato",
    eyebrow: "Contato",
    title: "Fale com o Instituto Jesus é Bom",
    subtitle:
      "Nossa equipe está pronta para orientar famílias, receber parceiros, acolher voluntários, esclarecer dúvidas e conversar com quem deseja fazer parte dessa missão.",
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=85",
    primaryCta: { label: "Falar pelo WhatsApp", href: "https://wa.me/5521973468327" },
    secondaryCta: { label: "Enviar e-mail", href: "mailto:contato@jesusebom.org" },
    contactChannels: [
      { title: "WhatsApp Secretaria", description: "21 97346-8327", icon: Phone },
      { title: "E-mail", description: "contato@jesusebom.org", icon: Mail },
      { title: "Instagram", description: "@institutojesusebom", icon: MessageCircle }
    ],
    sections: [
      {
        eyebrow: "Canais oficiais",
        title: "Escolha o melhor canal",
        text: [
          "O WhatsApp da Secretaria é o principal canal de contato do Instituto. A partir dele, nossa equipe direciona cada assunto internamente conforme a necessidade."
        ],
        cards: [
          { title: "Famílias", description: "Informações sobre projetos, horários, inscrições, documentos e atendimento.", icon: UsersRound },
          { title: "Doadores", description: "Informações sobre PIX, doação recorrente, envio de comprovantes e formas de contribuir.", icon: Gift },
          { title: "Parceiros", description: "Contato para propostas, apoio institucional, doações de materiais e ações conjuntas.", icon: Building2 },
          { title: "Voluntários", description: "Orientações para quem deseja doar tempo, talento, conhecimento ou presença.", icon: UserPlus },
          { title: "Imprensa e comunicação", description: "Contato para informações institucionais, registros, entrevistas e materiais de divulgação.", icon: MessageCircle }
        ]
      }
    ],
    finalCta: {
      title: "Será uma alegria caminhar com você nessa missão",
      text: "Seja para doar, servir, apoiar, conhecer ou tirar dúvidas, o Instituto Jesus é Bom está de portas abertas para conversar.",
      buttons: [
        { label: "Falar com a Secretaria", href: "https://wa.me/5521973468327" },
        { label: "Faça Parte dessa Missão", href: "/como-ajudar", variant: "outline" }
      ]
    }
  }
};
