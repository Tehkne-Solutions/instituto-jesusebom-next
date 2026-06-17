import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ComparisonCard } from "@/components/ComparisonCard";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { FadeIn } from "@/components/motion/FadeIn";

export default function Home() {
  return (
    <>
      <Header />
      <main className="homeHub">
        <div className="container">
          <FadeIn className="hubHero">
            <span className="eyebrow">Jesus é Bom · Next.js</span>
            <h1>3 opções de home para apresentar ao cliente.</h1>
            <p>
              As três versões usam a mesma base oficial de conteúdo, mas com estratégias diferentes:
              conversão por doação, narrativa institucional e mobilização por parcerias.
            </p>
          </FadeIn>

          <StaggerContainer className="comparisonGrid" aria-label="Opções de home">
            <ComparisonCard
              href="/impacto-doacao"
              tag="Opção 01"
              title="Impacto e Doação"
              description="A versão mais direta para captação: abre forte, prova impacto e orienta o visitante para doar, ser voluntário ou apoiar."
              bullets={["Maior foco em CTA", "Social proof logo no topo", "UX clara para doadores"]}
            />
            <ComparisonCard
              href="/formacao-integral"
              tag="Opção 02"
              title="Missão e Formação Integral"
              description="A versão mais humana e editorial, explicando a missão cristã, o cuidado integral e a jornada de transformação."
              bullets={["Storytelling institucional", "Formação integral", "Mais conexão emocional"]}
            />
            <ComparisonCard
              href="/escola-parcerias"
              tag="Opção 03"
              title="Escola Cristã e Parcerias"
              description="A versão para gerente, empresas e parceiros: posiciona a escola cristã integral como visão de futuro e campanha principal."
              bullets={["Parcerias e empresas", "Transparência", "Projeto de futuro"]}
            />
          </StaggerContainer>
        </div>
      </main>
      <Footer />
    </>
  );
}
