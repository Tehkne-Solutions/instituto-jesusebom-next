import type { CSSProperties } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatCard } from "@/components/StatCard";
import { SectionHeader } from "@/components/SectionHeader";
import {
  impactNumbers,
  transparencyLinks,
  faqItems,
  officialCopy,
  SchoolIcon
} from "@/data/siteContent";
import { Building2, HandHeart, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Escola Cristã e Parcerias — Instituto Jesus é Bom",
  description: "Homepage com foco em visão de futuro, escola cristã integral, transparência e parcerias institucionais."
};

const roadmap = [
  {
    step: "01",
    title: "Atuação atual",
    text: "O Instituto já atende crianças, adolescentes e famílias por meio de projetos educacionais, sociais, culturais, esportivos e cristãos."
  },
  {
    step: "02",
    title: "Impacto comprovado",
    text: "573 alunos, mais de 1.500 famílias impactadas e 100+ atendimentos psicológicos demonstram consistência."
  },
  {
    step: "03",
    title: "Projeto escola",
    text: "A visão de futuro é estruturar a primeira escola cristã integral para a comunidade."
  },
  {
    step: "04",
    title: "Parcerias",
    text: "Empresas, igrejas, doadores e voluntários podem fortalecer esta construção de longo prazo."
  }
];

export default function EscolaParceriasPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container heroShell partnerHero">
            <div className="heroContent">
              <span className="eyebrow">Visão de futuro</span>
              <h1>A primeira escola cristã integral da <strong>Comunidade César Maia.</strong></h1>
              <p>
                A próxima etapa da missão é ampliar a estrutura de cuidado, educação e formação
                para acolher crianças e adolescentes com excelência, fé e continuidade.
              </p>
              <div className="heroActions">
                <a href="#parcerias" className="btn lime">Quero apoiar este projeto</a>
                <a href="#transparencia" className="btn ghost">Ver transparência</a>
              </div>
              <div className="trustRow">
                <span>Projeto de futuro</span>
                <span>Impacto social</span>
                <span>Parcerias institucionais</span>
              </div>
            </div>
            <aside className="heroPanel">
              <div className="heroPanelImage" style={{ "--panel-image": "url('/assets/page-01.png')" } as CSSProperties}>
                <SchoolIcon size={54} />
              </div>
              <strong>{officialCopy.futureSchoolTitle}</strong>
              <p>{officialCopy.futureSchoolText}</p>
            </aside>
          </div>
        </section>

        <section className="impactBar">
          <div className="container impactGrid">
            {impactNumbers.map((item) => <StatCard key={item.label} {...item} />)}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Roadmap institucional"
              title="Da atuação atual à escola cristã integral"
              text="Esta versão organiza a home como uma narrativa de crescimento para apresentar a visão a empresas, parceiros e apoiadores."
              align="center"
            />
            <div className="roadmap">
              {roadmap.map((item) => (
                <article className="roadmapCard" key={item.step}>
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="parcerias">
          <div className="container partnerGrid">
            <div className="partnerPanel">
              <Building2 size={40} color="var(--green)" />
              <h3>Por que empresas e parceiros devem apoiar?</h3>
              <p>
                Porque o Instituto já possui atuação comunitária, dados de impacto e uma visão clara
                de expansão. O apoio pode acelerar a construção de um ambiente educacional integral,
                seguro e transformador.
              </p>
              <ul>
                <li>Fortalecimento de crianças, adolescentes e famílias.</li>
                <li>Contribuição com educação, cultura, esporte e desenvolvimento social.</li>
                <li>Participação em um projeto de longo prazo com impacto local.</li>
              </ul>
              <a href="#contato" className="btn primary">Conversar sobre parceria</a>
            </div>
            <div className="documentPreview" aria-label="Prévia visual da apresentação institucional" />
          </div>
        </section>

        <section className="section" id="transparencia">
          <div className="container partnerGrid">
            <div className="partnerPanel">
              <ShieldCheck size={40} color="var(--green)" />
              <h3>Transparência para avançar com confiança</h3>
              <p>
                O site pode reunir relatórios, documentos institucionais, política de transparência e materiais
                para empresas e doadores conhecerem melhor a missão.
              </p>
              <div className="helpList">
                {transparencyLinks.map(({ label, icon: Icon }) => (
                  <div className="helpItem" key={label}>
                    <Icon size={22} />
                    <strong>{label}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="partnerPanel">
              <HandHeart size={40} color="var(--green)" />
              <h3>FAQ para doadores e parceiros</h3>
              <div className="helpList">
                {faqItems.map((item) => (
                  <div className="helpItem" key={item}>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
