import {
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
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "O Que Fazemos", href: "#o-que-fazemos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Como Ajudar", href: "#como-ajudar" },
  { label: "Transparência", href: "#transparencia" },
  { label: "Contato", href: "#contato" }
];

export const impactNumbers = [
  {
    value: "573",
    suffix: "+",
    label: "alunos atendidos",
    description: "Crianças e adolescentes alcançados por projetos de educação, cuidado e formação.",
    icon: UsersRound
  },
  {
    value: "1.500",
    suffix: "+",
    label: "famílias impactadas",
    description: "Famílias da comunidade impactadas direta e indiretamente pelas ações do Instituto.",
    icon: HeartHandshake
  },
  {
    value: "100",
    suffix: "+",
    label: "atendimentos psicológicos",
    description: "Apoio, escuta e cuidado emocional dentro da rede de proteção e acolhimento.",
    icon: ShieldCheck
  },
  {
    value: "3.000",
    suffix: "+",
    label: "inscrições na Festa de Páscoa",
    description: "Grande mobilização comunitária em uma das ações sociais de maior alcance.",
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
    image: "/assets/foto-estudo-dirigido-real.jpg",
    icon: BookOpen
  },
  {
    title: "Ensino Bilíngue",
    category: "Educação",
    description: "Aprendizagem de inglês como ampliação de repertório, oportunidade e futuro.",
    image: "/assets/foto-ensino-bilingue-real.jpg",
    icon: GraduationCap
  },
  {
    title: "Robótica Educacional",
    category: "Educação",
    description: "Tecnologia, lógica e criatividade como ponte para novas possibilidades.",
    image: "/assets/foto-robotica-real.jpg",
    icon: Sparkles
  },
  {
    title: "Artes e Ballet",
    category: "Cultura",
    description: "Expressão, disciplina e desenvolvimento artístico dentro da formação integral.",
    image: "/assets/foto-ballet-real.jpg",
    icon: Music2
  },
  {
    title: "Esporte e Jiu-jítsu",
    category: "Esporte",
    description: "Disciplina, saúde, autocontrole e convivência através do esporte.",
    image: "/assets/foto-jiujitsu-real.jpg",
    icon: Volleyball
  },
  {
    title: "Acolhimento às famílias",
    category: "Desenvolvimento social",
    description: "Cuidado, escuta e apoio às famílias que caminham junto com as crianças.",
    image: "/assets/foto-apoio-familias-real.jpg",
    icon: HeartHandshake
  }
];

export const helpWays = [
  {
    title: "Doação via PIX",
    description: "Contribuição pontual para apoiar as ações do Instituto.",
    cta: "Ver dados de doação",
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
  { label: "Relatórios e prestação de contas", icon: FileText },
  { label: "Política de transparência", icon: ShieldCheck },
  { label: "Documentos institucionais", icon: Landmark },
  { label: "Parcerias e apoios", icon: HandHeart }
];

export const faqItems = [
  "Como posso doar para o Instituto Jesus é Bom?",
  "Onde o Instituto atua no Rio de Janeiro?",
  "Quais projetos atendem crianças e adolescentes?",
  "Como ser voluntário ou parceiro da instituição?",
  "O Instituto publica relatórios e prestação de contas?"
];

export const officialCopy = {
  heroTitle: "Transformando vidas através da fé, educação e esperança.",
  heroSubtitle:
    "Há mais de 5 anos, o Instituto Jesus é Bom atua na Comunidade César Maia, em Vargem Pequena/RJ, oferecendo oportunidades, acolhimento e cuidado para crianças, adolescentes e famílias.",
  location: "Comunidade César Maia, Vargem Pequena/RJ",
  founded: "Desde 2019",
  futureSchoolTitle: "Primeira escola cristã integral para a comunidade",
  futureSchoolText:
    "A visão de futuro do Instituto é criar uma estrutura educacional integral capaz de acolher, formar e desenvolver crianças e adolescentes com excelência, fé e cuidado contínuo."
};

export const Arrow = ArrowRight;
export const MailIcon = Mail;
export const SchoolIcon = School;
