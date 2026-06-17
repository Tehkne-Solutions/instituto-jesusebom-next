import type { CSSProperties } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatCard } from "@/components/StatCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { impactNumbers, pillars, projectCards, officialCopy } from "@/data/siteContent";
import { Play } from "lucide-react";

export const metadata = {
  title: "Missão e Formação Integral — Instituto Jesus é Bom",
  description: "Homepage com foco em missão, fé, educação, acolhimento e formação integral de crianças, adolescentes e famílias."
};

const journey = [
  {
    step: "01",
    title: "Acolher",
    text: "Crianças, adolescentes e famílias encontram presença, escuta, vínculo e cuidado."
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

export default function FormacaoIntegralPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container heroShell" style={{ "--hero-image": "url('/assets/site-quem-somos-real.jpg')" } as CSSProperties}>
            <div className="heroContent">
              <span className="eyebrow">Missão institucional</span>
              <h1>Fé, cuidado e formação para uma <strong>vida com futuro.</strong></h1>
              <p>{officialCopy.heroSubtitle}</p>
              <div className="heroActions">
                <a href="#quem-somos" className="btn lime">Conheça nossa missão</a>
                <a href="#projetos" className="btn ghost">Ver projetos</a>
              </div>
              <div className="trustRow">
                <span>Educação</span>
                <span>Esporte</span>
                <span>Cultura</span>
                <span>Formação cristã</span>
              </div>
            </div>
            <aside className="heroPanel">
              <div className="heroPanelImage" style={{ "--panel-image": "url('/assets/site-projeto-real.jpg')" } as CSSProperties}>
                <span className="playButton"><Play size={24} fill="currentColor" /></span>
              </div>
              <strong>Formação integral</strong>
              <p>Uma visão de cuidado que une desenvolvimento humano, espiritual e social.</p>
            </aside>
          </div>
        </section>

        <section className="impactBar">
          <div className="container impactGrid">
            {impactNumbers.map((item) => <StatCard key={item.label} {...item} />)}
          </div>
        </section>

        <section className="section" id="quem-somos">
          <div className="container storySplit">
            <div className="imageStack" aria-label="Fotos institucionais">
              <div className="stackMain" />
              <div className="stackSmall" />
            </div>
            <div>
              <SectionHeader
                eyebrow="Quem somos"
                title="Uma base de apoio, cuidado e transformação social"
                text="O Instituto Jesus é Bom nasceu para servir a comunidade com fé, acolhimento e oportunidades reais, criando caminhos de desenvolvimento para crianças, adolescentes e famílias."
              />
              <div className="timeline">
                {journey.map((item) => (
                  <article className="timelineItem" key={item.step}>
                    <span>{item.step}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="o-que-fazemos">
          <div className="container">
            <SectionHeader
              eyebrow="Frentes de atuação"
              title="Cuidado integral em várias dimensões"
              text="A missão se materializa em frentes conectadas, organizadas para apoiar o desenvolvimento completo de cada criança e adolescente."
              align="center"
            />
            <div className="carouselStrip" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {pillars.slice(0, 6).map(({ title, description, icon: Icon }) => (
                <article className="card donationBox" key={title}>
                  <Icon size={34} color="var(--green)" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projetos">
          <div className="container">
            <SectionHeader
              eyebrow="Projetos"
              title="Programas que ensinam, cuidam e desenvolvem"
              text="Nesta versão, os projetos são apresentados como parte de uma jornada de formação integral, não apenas como cards isolados."
            />
            <div className="tabs">
              <span className="active">Todos</span>
              <span>Educação</span>
              <span>Esporte</span>
              <span>Cultura</span>
              <span>Desenvolvimento Social</span>
            </div>
            <div className="carouselStrip" style={{ marginTop: 24 }}>
              {projectCards.slice(0, 3).map((item) => <ProjectCard key={item.title} {...item} />)}
            </div>
            <div className="carouselStrip" style={{ marginTop: 18 }}>
              {projectCards.slice(3, 6).map((item) => <ProjectCard key={item.title} {...item} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
