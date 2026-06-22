import {
  ClipboardList,
  BookOpen,
  HeartHandshake,
  ShieldCheck,
  UsersRound,
  GraduationCap,
  Volleyball,
  Music2,
  HandHeart,
  Church,
  Baby,
  FileText,
  Landmark,
  Sparkles,
  ArrowRight,
  School,
  Mail,
  Gift,
  Repeat2,
  UserPlus,
  Building2
} from "lucide-react";

export const navItems = [
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "O Que Fazemos", href: "/o-que-fazemos" },
  { label: "Impacto Social", href: "/impacto-social" },
  { label: "Como Ajudar", href: "/como-ajudar" },
  { label: "Voluntariado", href: "/voluntariado" },
  { label: "Transparência", href: "/transparencia" },
  { label: "Contato", href: "/contato" }
];

export const impactNumbers = [
  {
    value: "627",
    suffix: "",
    label: "alunos atendidos",
    description: "Crianças e adolescentes participando de projetos gratuitos de educação, esporte, fé, cultura e cuidado.",
    icon: UsersRound
  },
  {
    value: "1.500",
    suffix: "+",
    label: "famílias impactadas",
    description: "Famílias alcançadas por ações sociais, atendimentos, eventos, entrevistas e acompanhamento.",
    icon: HeartHandshake
  },
  {
    value: "100",
    suffix: "",
    label: "atendimentos psicológicos semanalmente",
    description: "Cuidado emocional, escuta e acolhimento para crianças e adolescentes.",
    icon: ShieldCheck
  },
  {
    value: "153",
    suffix: "",
    label: "entrevistas sociais realizadas",
    description: "Acompanhamento de famílias e identificação de necessidades reais da comunidade.",
    icon: ClipboardList
  },
  {
    value: "12",
    suffix: "",
    label: "cursos e atividades",
    description: "Projetos que fortalecem educação, esporte, cultura, valores, convivência e desenvolvimento.",
    icon: Sparkles
  }
];

export const pillars = [
  {
    title: "Educação",
    description: "Estudo dirigido, acompanhamento pedagógico, ensino bilíngue e robótica educacional.",
    icon: GraduationCap
  },
  {
    title: "Esporte",
    description: "Atividades que desenvolvem disciplina, saúde, convivência e autoestima.",
    icon: Volleyball
  },
  {
    title: "Cultura",
    description: "Ballet, expressão artística e experiências que ampliam repertório e pertencimento.",
    icon: Music2
  },
  {
    title: "Desenvolvimento social",
    description: "Acolhimento, orientação, cuidado com famílias e fortalecimento da comunidade.",
    icon: HandHeart
  },
  {
    title: "Formação cristã",
    description: "Valores, fé, esperança e formação humana para crianças, adolescentes e famílias.",
    icon: Church
  },
  {
    title: "Proteção da infância",
    description: "Ações de cuidado, escuta, prevenção e ambiente seguro para crescer com dignidade.",
    icon: Baby
  }
];

export const projectCards = [
  {
    title: "Estudo Dirigido",
    category: "Educação",
    description: "Rotina de estudos, acompanhamento pedagógico e suporte para crianças e adolescentes.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
    icon: BookOpen
  },
  {
    title: "Ensino Bilíngue",
    category: "Educação",
    description: "Aprendizagem de inglês como ampliação de repertório, oportunidade e futuro.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    icon: GraduationCap
  },
  {
    title: "Robótica Educacional",
    category: "Educação",
    description: "Tecnologia, lógica e criatividade como ponte para novas possibilidades.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    icon: Sparkles
  },
  {
    title: "Artes e Ballet",
    category: "Cultura",
    description: "Expressão, disciplina e desenvolvimento artístico dentro da formação integral.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    icon: Music2
  },
  {
    title: "Esporte e Jiu-jítsu",
    category: "Esporte",
    description: "Disciplina, saúde, autocontrole e convivência através do esporte.",
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=80",
    icon: Volleyball
  },
  {
    title: "Acolhimento às famílias",
    category: "Desenvolvimento social",
    description: "Cuidado, escuta e apoio às famílias que caminham junto com as crianças.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
    icon: HeartHandshake
  }
];

export const helpWays = [
  {
    title: "Doação via PIX",
    description: "Contribuição pontual para apoiar as ações do Instituto.",
    cta: "Prosseguir",
    icon: Gift
  },
  {
    title: "Doação recorrente",
    description: "Apoio mensal para dar continuidade aos projetos durante todo o ano.",
    cta: "Quero apoiar mensalmente",
    icon: Repeat2
  },
  {
    title: "Voluntariado",
    description: "Tempo, presença, talento e serviço em ações com a comunidade.",
    cta: "Quero ser voluntário",
    icon: UserPlus
  },
  {
    title: "Parcerias",
    description: "Empresas, igrejas e organizações podem fortalecer a missão com recursos e serviços.",
    cta: "Falar sobre parceria",
    icon: Building2
  }
];

export const transparencyLinks = [
  { label: "Relatórios e prestação de contas", href: "/relatorios", icon: FileText },
  { label: "Política de transparência", href: "/transparencia", icon: ShieldCheck },
  { label: "Documentos institucionais", href: "/relatorios", icon: Landmark },
  { label: "Parcerias e apoios", href: "/#como-ajudar", icon: HandHeart }
];

export const faqItems = [
  "Como posso doar para o Instituto Jesus é Bom?",
  "Onde o Instituto atua no Rio de Janeiro?",
  "Quais projetos atendem crianças e adolescentes?",
  "Como ser voluntário ou parceiro da instituição?",
  "O Instituto publica relatórios e prestação de contas?"
];

export const officialCopy = {
  heroTitle: "Transformando vidas pelo amor de Cristo",
  heroSubtitle:
    "Fé, educação e esperança para crianças, adolescentes e famílias da Comunidade César Maia.",
  location: "Comunidade César Maia, Vargem Pequena/RJ",
  founded: "Desde 2019",
  futureSchoolTitle: "Primeira escola cristã integral para a comunidade",
  futureSchoolText:
    "A visão de futuro do Instituto é criar uma estrutura educacional integral capaz de acolher, formar e desenvolver crianças e adolescentes com excelência, fé e cuidado contínuo."
};

export const Arrow = ArrowRight;
export const MailIcon = Mail;
export const SchoolIcon = School;
