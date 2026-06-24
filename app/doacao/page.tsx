import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { DonationForm } from "@/components/DonationForm";
import {
  BookOpen,
  GraduationCap,
  HandHeart,
  Heart,
  HeartHandshake,
  Play,
  Sparkles,
  UsersRound,
  Volleyball
} from "lucide-react";

export const metadata: Metadata = {
  title: "Doação — Instituto Jesus é Bom",
  description:
    "Faça sua doação ao Instituto Jesus é Bom e ajude a manter projetos gratuitos de educação, alimentação, esporte, fé, cuidado emocional e proteção para crianças e famílias."
};

const impactStats = [
  { value: "627", label: "alunos atendidos", icon: GraduationCap },
  { value: "+1.500", label: "famílias impactadas", icon: UsersRound },
  { value: "100", label: "atendimentos psicológicos semanais", icon: HeartHandshake },
  { value: "12", label: "cursos e atividades", icon: Sparkles }
];

const actionCards = [
  { title: "Educação e desenvolvimento", text: "Estudo dirigido, matemática, inglês, robótica, artes e ensino bíblico.", icon: BookOpen },
  { title: "Esporte e convivência", text: "Natação, jiu-jítsu, ballet, recreação e experiências que fortalecem disciplina.", icon: Volleyball },
  { title: "Cuidado emocional", text: "Escuta, acolhimento, apoio psicológico e proteção para crianças e adolescentes.", icon: Heart },
  { title: "Ações sociais", text: "Alimentação, campanhas, eventos e apoio às famílias da comunidade.", icon: HandHeart }
];

const reasons = [
  {
    title: "Impacto direto",
    text: "Sua doação ajuda a manter projetos que alcançam crianças, adolescentes e famílias em situação de vulnerabilidade."
  },
  {
    title: "Continuidade",
    text: "Doações recorrentes ajudam o Instituto a planejar melhor aulas, refeições, materiais e atendimentos."
  },
  {
    title: "Missão com propósito",
    text: "Cada contribuição fortalece uma obra guiada pela fé, pelo amor ao próximo e pela esperança."
  }
];

const faqs = [
  {
    question: "Como posso contribuir para o Instituto Jesus é Bom?",
    answer: "Você pode preencher o formulário desta página e prosseguir pelo WhatsApp, e-mail ou PIX enquanto o checkout oficial é configurado."
  },
  {
    question: "Posso doar de forma anônima?",
    answer: "Sim. O formulário permite marcar a opção de doação anônima. A equipe usará apenas os dados necessários para orientar a contribuição."
  },
  {
    question: "Como minha doação será utilizada?",
    answer: "As contribuições apoiam projetos gratuitos de educação, alimentação, esporte, cuidado emocional, proteção da infância, ações sociais e formação cristã."
  },
  {
    question: "Existe valor mínimo?",
    answer: "Não. Toda contribuição é bem-vinda e ajuda a manter a missão viva."
  },
  {
    question: "Como acompanhar o impacto da doação?",
    answer: "O Instituto compartilha notícias, histórias, ações e informações institucionais por seus canais oficiais e área de transparência."
  }
];

export default function DonationPage() {
  return (
    <>
      <main className="donationPage donationPrototypePage">
        <section className="donationHero donationHeroPixel">
          <div className="donationHeroOverlay" />
          <div className="container donationLpHeader">
            <a href="/" className="donationLpLogo" aria-label="Instituto Jesus é Bom">
              <Logo />
            </a>
            <nav className="donationLpNav" aria-label="Navegação da página de doação">
              <a href="#impacto">Impacto</a>
              <a href="#como-atuamos">Como Atuamos</a>
              <a href="#quem-somos">Quem Somos</a>
              <a href="#faq">FAQ</a>
            </nav>
            <a className="donationLpDonate" href="#doar">Doar agora</a>
          </div>

          <div className="container donationHeroPixelGrid">
            <div className="donationHeroLeft">
              <div className="donationHeroCopy">
                <span className="donationEyebrow">Unidos em Cristo</span>
                <h1>
                  <span>Sua doação hoje</span>
                  <strong>transforma vidas</strong>
                  <span>para sempre.</span>
                </h1>
                <p>
                  No Instituto Jesus é Bom, educamos, protegemos e levamos esperança para crianças,
                  adolescentes e famílias da Comunidade César Maia.
                </p>
              </div>

              <div className="donationHeroFormCard" id="doar">
                <DonationForm />
              </div>
            </div>

            <div className="donationVideoCard" aria-label="Vídeo institucional demonstrativo">
              <img
                src="/assets/doacao-hero-video-pablo-prototipo.jpg"
                alt="Thumbnail do vídeo do Pablo, fundador, baseada no protótipo aprovado"
              />
              <div className="videoOverlay">
                <span className="playCircle"><Play size={34} fill="currentColor" /></span>
                <strong>Pablo, fundador</strong>
                <small>Vídeo institucional / mensagem</small>
              </div>
            </div>
          </div>
        </section>

        <section className="donationStories section" id="impacto">
          <div className="container">
            <div className="sectionHeader center">
              <span>Nosso impacto</span>
              <h2>Histórias reais de transformação</h2>
              <p>Assista, compartilhe e veja como cada apoio ajuda a construir destinos todos os dias.</p>
            </div>
            <div className="storyVideoGrid">
              {[
                "Professora de inglês",
                "Famílias acolhidas",
                "Ações durante a pandemia",
                "Juventude e fé"
              ].map((label, index) => (
                <article className="storyVideoCard" key={label}>
                  <img
                    src={`https://images.unsplash.com/photo-${[
                      "1509062522246-3755977927d7",
                      "1529156069898-49953e39b3ac",
                      "1491438590914-bc09fcaaf77a",
                      "1503454537195-1dcabb73ffb9"
                    ][index]}?auto=format&fit=crop&w=600&q=85`}
                    alt={label}
                  />
                  <span className="playMini"><Play size={20} fill="currentColor" /></span>
                  <strong>{label}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section className="section donationFounder" id="pablo-fundador">
          <div className="container donationFounderGrid">
            <div className="donationFounderVideo" aria-label="Mensagem em vídeo do Pablo, fundador">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1100&q=85"
                alt="Capa demonstrativa para o vídeo do Pablo, fundador"
              />
              <span className="playCircle"><Play size={30} fill="currentColor" /></span>
              <div>
                <strong>Mensagem do Pablo</strong>
                <small>Fundador do Instituto Jesus é Bom</small>
              </div>
            </div>
            <div className="donationFounderCopy">
              <span className="donationEyebrow">Fundador</span>
              <h2>Pablo e a missão que move o Instituto</h2>
              <p>
                Uma seção dedicada ao fundador para apresentar, em vídeo, a visão humana por trás do Instituto
                Jesus é Bom e aproximar doadores da história real de cuidado, fé, educação e esperança.
              </p>
              <p>
                O vídeo oficial do Pablo será conectado aqui assim que o material final for enviado pela equipe.
              </p>
              <a className="btn lime" href="#doar">Quero apoiar essa missão</a>
            </div>
          </div>
        </section>

        <section className="donationImpact section compact">
          <div className="container donationImpactGrid">
            <div>
              <span className="donationEyebrow">Hoje crescemos juntos</span>
              <h2>Nosso impacto em números</h2>
              <p>
                A cada dia, mais vidas são alcançadas com amor, cuidado e propósito.
              </p>
              <div className="donationStatsGrid">
                {impactStats.map(({ value, label, icon: Icon }) => (
                  <div className="donationStat" key={label}>
                    <Icon size={28} />
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1000&q=85"
              alt="Grupo de voluntários reunidos"
            />
          </div>
        </section>

        <section className="section donationHow" id="como-atuamos">
          <div className="container">
            <div className="sectionHeader center">
              <span>Como atuamos</span>
              <h2>Como o Instituto Jesus é Bom transforma vidas</h2>
            </div>
            <div className="donationActionGrid">
              {actionCards.map(({ title, text, icon: Icon }) => (
                <article key={title} className="donationActionCard">
                  <Icon size={32} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="donationReasons section compact">
          <div className="container">
            <div className="sectionHeader center">
              <span>Por que sua doação é essencial</span>
              <h2>Por que apoiar o Instituto Jesus é Bom?</h2>
            </div>
            <div className="donationReasonGrid">
              {reasons.map((reason, index) => (
                <article key={reason.title} className="donationReasonCard">
                  <span>{index + 1}</span>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section donationAbout" id="quem-somos">
          <div className="container donationAboutGrid">
            <div>
              <span className="donationEyebrow">Sobre o Instituto</span>
              <h2>Conheça mais sobre o Instituto Jesus é Bom</h2>
              <p>
                Explore a história e os impactos do Instituto Jesus é Bom, onde cada doação se transforma
                em educação, proteção, acolhimento e esperança em Cristo Jesus para crianças e famílias.
              </p>
              <a className="btn lime" href="/quem-somos">Conheça nossa história</a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=85"
              alt="Criança recebendo cuidado e acolhimento"
            />
          </div>
        </section>

        <section className="donationFaq section compact" id="faq">
          <div className="container donationFaqBox">
            <div className="sectionHeader center">
              <span>Dúvidas frequentes</span>
              <h2>FAQ</h2>
            </div>
            <div className="faqList">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
