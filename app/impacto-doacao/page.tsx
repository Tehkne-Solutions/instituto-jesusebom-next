import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatCard } from "@/components/StatCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import {
  impactNumbers,
  projectCards,
  helpWays,
  transparencyLinks,
  faqItems,
  officialCopy
} from "@/data/siteContent";
import { Play, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Impacto e Doação — Instituto Jesus é Bom",
  description: "Homepage com foco em doação, impacto social, transparência e apoio ao Instituto Jesus é Bom."
};

export default function ImpactoDoacaoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container heroShell">
            <div className="heroContent">
              <span className="eyebrow">Instituto Jesus é Bom · desde 2019</span>
              <h1>Transformando vidas através da <strong>fé, educação e esperança.</strong></h1>
              <p>{officialCopy.heroSubtitle}</p>
              <div className="heroActions">
                <a href="#como-ajudar" className="btn lime">Quero Fazer a Diferença</a>
                <a href="#quem-somos" className="btn ghost">Conheça o Instituto</a>
              </div>
              <div className="trustRow">
                <span>100% transparente</span>
                <span>Apoio seguro</span>
                <span>Impacto real</span>
              </div>
            </div>
            <aside className="heroPanel">
              <div className="heroPanelImage">
                <span className="playButton"><Play size={24} fill="currentColor" /></span>
              </div>
              <strong>Nossa missão em ação</strong>
              <p>Educação, acolhimento e cuidado caminhando juntos na Comunidade César Maia.</p>
            </aside>
          </div>
        </section>

        <section className="impactBar">
          <div className="container impactGrid">
            {impactNumbers.map((item) => <StatCard key={item.label} {...item} />)}
          </div>
        </section>

        <section className="section" id="como-ajudar">
          <div className="container donationLayout">
            <aside className="card donationBox">
              <span className="cardEyebrow">Como ajudar</span>
              <h3>Sua ajuda fortalece projetos que já transformam vidas.</h3>
              <p>
                O apoio pode acontecer de várias formas: contribuição pontual, doação recorrente,
                voluntariado ou parcerias com empresas e organizações.
              </p>
              <div className="helpList">
                {helpWays.map(({ title, description, icon: Icon }) => (
                  <div className="helpItem" key={title}>
                    <Icon size={24} />
                    <div>
                      <strong>{title}</strong>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#contato" className="btn primary">Quero ajudar agora</a>
            </aside>

            <div>
              <SectionHeader
                eyebrow="O que fazemos"
                title="Cuidado integral que transforma vidas"
                text="A atuação do Instituto combina educação, esporte, cultura, desenvolvimento social, formação cristã e proteção da infância."
              />
              <div className="tabs">
                <span className="active">Educação</span>
                <span>Esporte</span>
                <span>Cultura</span>
                <span>Desenvolvimento Social</span>
                <span>Formação Cristã</span>
              </div>
              <div className="carouselStrip" style={{ marginTop: 22 }}>
                {projectCards.slice(0, 3).map((item) => <ProjectCard key={item.title} {...item} />)}
              </div>
            </div>
          </div>
        </section>

        <section className="section compact">
          <div className="container newsletter">
            <div>
              <h2>Fique por dentro das nossas ações</h2>
              <p>Receba novidades, histórias e convites para transformar vidas com a gente.</p>
            </div>
            <form>
              <input placeholder="Seu melhor e-mail" aria-label="Seu melhor e-mail" />
              <button className="btn lime" type="button">Quero receber</button>
            </form>
          </div>
        </section>

        <section className="section" id="transparencia">
          <div className="container donationLayout">
            <div>
              <SectionHeader
                eyebrow="Transparência"
                title="Compromisso com cada doação"
                text="A confiança precisa estar visível. Esta área organiza relatórios, documentos e políticas para parceiros, famílias e doadores."
              />
              <div className="helpList">
                {transparencyLinks.map(({ label, icon: Icon }) => (
                  <div className="helpItem" key={label}>
                    <Icon size={22} />
                    <strong>{label}</strong>
                  </div>
                ))}
              </div>
            </div>
            <aside className="card donationBox">
              <ShieldCheck color="var(--green)" size={42} />
              <h3>Doe com clareza. Acompanhe com confiança.</h3>
              <p>
                A página final pode receber relatórios, documentos e links oficiais assim que forem validados
                com a gestão do Instituto.
              </p>
              <a className="btn dark" href="#contato">Ver relatórios</a>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
