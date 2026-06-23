import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatCard } from "@/components/StatCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { StaggerItem } from "@/components/motion/StaggerItem";
import {
  impactNumbers,
  pillars,
  projectCards,
  helpWays,
  transparencyLinks,
  faqItems,
  officialCopy
} from "@/data/siteContent";
import {
  ArrowRight,
  HandHeart,
  Heart,
  School,
  ShieldCheck,
  Sparkles,
  UsersRound
} from "lucide-react";

export const metadata = {
  title: "Instituto Jesus é Bom — Home Oficial",
  description:
    "Homepage oficial do Instituto Jesus é Bom com impacto social, formação integral, doação, transparência e visão da escola cristã integral."
};

const journey = [
  {
    step: "01",
    title: "Acolher",
    text: "Crianças, adolescentes e famílias encontram presença, vínculo, escuta e cuidado."
  },
  {
    step: "02",
    title: "Ensinar",
    text: "Educação, estudo dirigido, ensino bilíngue e robótica ampliam repertório e futuro."
  },
  {
    step: "03",
    title: "Desenvolver",
    text: "Esporte, cultura e convivência fortalecem disciplina, autoestima e pertencimento."
  },
  {
    step: "04",
    title: "Formar",
    text: "A formação cristã integra valores, fé, responsabilidade e esperança."
  }
];


export default function HomeCompletaPage() {
  return (
    <>
      <Header />
      <main>
        <section className="heroFull">
          <div className="heroFullBg" />
          <div className="container heroFullInner">
            <FadeIn className="heroContent heroFullContent" y={28}>
              <span className="eyebrow">Instituto Jesus é Bom · desde 2019</span>
              <h1>Transformando vidas através da <strong>fé, educação e esperança.</strong></h1>
              <p>{officialCopy.heroSubtitle}</p>
              <div className="heroActions">
                <a href="/doacao" className="btn lime">Quero Fazer a Diferença</a>
                <a href="#quem-somos" className="btn ghost">Conheça o Instituto</a>
              </div>
              <div className="trustRow">
                <span><ShieldCheck size={16} /> 100% transparente</span>
                <span><HandHeart size={16} /> Apoio seguro</span>
                <span><UsersRound size={16} /> Impacto real</span>
              </div>
            </FadeIn>

            <FadeIn className="heroPanel heroFullPanel whatsappDonationPanel whatsappHeroChat" delay={0.18} y={26}>
              <div className="whatsappChatMockHeader">
                <span className="whatsappIcon"><Heart size={24} /></span>
                <div>
                  <strong>Seja um doador</strong>
                  <p>Escolha uma forma de contribuição para apoiar essa missão.</p>
                </div>
              </div>

              <div className="whatsappChatMockBody" aria-label="Opções de doação">
                <p className="whatsappMockBubble agent">Como você deseja contribuir hoje?</p>
                {helpWays.slice(0, 4).map(({ title, description, icon: Icon }) => (
                  <a href="/doacao" key={title} className="whatsappDonationItem">
                    <Icon size={18} />
                    <span>
                      <strong>{title}</strong>
                      <small>{description}</small>
                    </span>
                    <ArrowRight size={16} />
                  </a>
                ))}
              </div>

              <a className="btn primary whatsappPanelCta" href="/doacao">
                <Heart size={18} />
                Prosseguir
              </a>
            </FadeIn>
          </div>
        </section>

        <section className="impactBar">
          <StaggerContainer className="container impactGrid impactGridComplete" aria-label="Indicadores de impacto">
            {impactNumbers.map((item) => <StatCard key={item.label} {...item} />)}
            <StaggerItem className="motionCard">
              <article className="statCard">
                <div className="statIcon"><Sparkles size={24} /></div>
                <div>
                  <strong>5<span>+</span></strong>
                  <h3>anos de atuação</h3>
                  <p>Missão iniciada em 2019 com presença contínua na comunidade.</p>
                </div>
              </article>
            </StaggerItem>
          </StaggerContainer>
        </section>

        <section className="section" id="o-que-fazemos">
          <div className="container">
            <div className="sectionSplitHeader">
              <SectionHeader
                eyebrow="O que fazemos"
                title="Cuidado integral que transforma vidas"
                text="Unimos educação, esporte, cultura, desenvolvimento social, proteção da infância e formação cristã em uma atuação organizada para gerar futuro."
              />
            </div>

            <StaggerContainer className="pillarGridComplete" aria-label="Frentes de atuação">
              {pillars.map(({ title, description, icon: Icon }) => (
                <StaggerItem className="motionCard" key={title}>
                  <article className="pillarCardComplete">
                    <div className="pillarIcon"><Icon size={24} /></div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="section sectionSoft" id="quem-somos">
          <div className="container storySplitComplete">
            <FadeIn className="imageMosaic" y={26}>
              <div className="mosaicMain" />
              <div className="mosaicCard">
                <strong>{officialCopy.location}</strong>
                <span>{officialCopy.founded}</span>
              </div>
              <div className="mosaicSmall" />
            </FadeIn>

            <div>
              <SectionHeader
                eyebrow="Quem somos"
                title="Uma base de apoio, cuidado e transformação social"
                text="O Instituto Jesus é Bom nasceu para servir a comunidade com fé, acolhimento e oportunidades reais, fortalecendo crianças, adolescentes e famílias com presença contínua."
              />
              <StaggerContainer className="journeyGrid" aria-label="Jornada de formação integral">
                {journey.map((item) => (
                  <StaggerItem className="motionCard" key={item.step}>
                    <article className="journeyCard">
                      <span>{item.step}</span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        <section className="section" id="como-ajudar">
          <div className="container">
            <SectionHeader
              eyebrow="Como ajudar"
              title="Quatro caminhos para fortalecer essa missão"
              text="Escolha uma forma de participar da missão: doação, apoio recorrente, voluntariado ou parcerias institucionais."
              align="center"
            />

            <StaggerContainer className="helpGridComplete" aria-label="Formas de ajudar">
              {helpWays.map(({ title, description, cta, icon: Icon }) => (
                <StaggerItem className="motionCard" key={title}>
                  <article className="helpCardComplete">
                    <div className="helpIcon"><Icon size={24} /></div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    {title === "Doação via PIX" ? null : <a href={title.includes("Doação") ? "/doacao" : title === "Voluntariado" ? "/voluntariado" : "/contato"}>{cta} <ArrowRight size={16} /></a>}
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="section sectionSoft" id="projetos">
          <div className="container">
            <div className="sectionSplitHeader">
              <SectionHeader
                eyebrow="Projetos"
                title="Programas desenhados para cuidar, ensinar e desenvolver"
                text="Cards preparados para páginas internas, SEO por frente de atuação e navegação clara para doadores, voluntários e parceiros."
              />
            </div>

            <StaggerContainer className="projectGridComplete" aria-label="Projetos do Instituto">
              {projectCards.map((project) => <ProjectCard key={project.title} {...project} />)}
            </StaggerContainer>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <FadeIn className="schoolCampaign" y={28}>
              <div className="schoolCampaignContent">
                <span className="eyebrow">Visão de futuro</span>
                <h2>Apoie a construção da primeira escola cristã integral da comunidade.</h2>
                <p>
                  {officialCopy.futureSchoolText} A campanha deve mobilizar doadores, empresas,
                  igrejas, voluntários e parceiros em torno de um projeto de alto impacto social e educacional.
                </p>
                <div className="heroActions">
                  <a href="#contato" className="btn light">Quero apoiar este projeto</a>
                  <a href="#transparencia" className="btn ghost">Ver transparência</a>
                </div>
              </div>
              <div className="schoolCampaignImage">
                <div className="schoolBadge">
                  <School size={24} />
                  <strong>Projeto Escola Cristã Integral</strong>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="section sectionSoft" id="transparencia">
          <div className="container transparencyComplete">
            <div>
              <SectionHeader
                eyebrow="Transparência"
                title="Confiança, clareza e governança para cada doação"
                text="A transparência reduz objeções, fortalece relacionamento com doadores e prepara o site para comunicação institucional contínua."
              />
              <StaggerContainer className="transparencyListComplete" aria-label="Itens de transparência">
                {transparencyLinks.map(({ label, href, icon: Icon }) => (
                  <StaggerItem className="motionCard" key={label}>
                    <a href={href} className="transparencyItemComplete">
                      <Icon size={20} />
                      <span>{label}</span>
                    </a>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <FadeIn className="faqPanelComplete" y={26}>
              <span className="eyebrow">FAQ estratégico</span>
              <h2>Perguntas frequentes</h2>
              <div className="faqListComplete">
                {faqItems.map((item) => (
                  <details key={item}>
                    <summary>{item}</summary>
                    <p>Nossa equipe está disponível para orientar doadores, voluntários, parceiros e famílias pelos canais oficiais do Instituto.</p>
                  </details>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="section compact">
          <div className="container">
            <div className="newsletter newsletterComplete">
              <div>
                <h2>Fique por dentro das ações do Instituto</h2>
                <p>Receba novidades, histórias, campanhas e convites para transformar vidas com a gente.</p>
              </div>
              <form>
                <input type="email" placeholder="Seu melhor e-mail" aria-label="Seu melhor e-mail" />
                <button className="btn lime" type="submit">Quero receber</button>
              </form>
            </div>
          </div>
        </section>

        <section className="section compact" id="privacidade">
          <div className="container">
            <FadeIn className="privacySection" y={24}>
              <ShieldCheck size={26} />
              <div>
                <span className="eyebrow">Privacidade e cookies</span>
                <h2>Comunicação responsável e dados protegidos</h2>
                <p>
                  A área de privacidade fica preparada para política oficial, preferências de cookies,
                  transparência sobre formulários e adequação antes da publicação final.
                </p>
              </div>
              <a className="btn outline" href="/privacidade">Ver Política de Privacidade</a>
            </FadeIn>
          </div>
        </section>

        <section className="section ctaFinalComplete">
          <div className="container">
            <FadeIn className="finalCtaCard" y={26}>
              <div>
                <span className="eyebrow">Próximo passo</span>
                <h2>Pronto para apoiar essa missão?</h2>
                <p>Doe, seja voluntário, torne-se parceiro ou entre em contato para conhecer o Instituto Jesus é Bom.</p>
              </div>
              <div className="finalCtaActions">
                <a className="btn lime" href="/doacao">Quero Doar</a>
                <a className="btn outline" href="#contato">Falar com a Equipe</a>
                <a className="btn soft" href="#projetos">Ver Projetos</a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
