import { Logo } from "./Logo";

const columns = [
  {
    title: "Instituto",
    links: ["Quem Somos", "Nossa História", "Missão e Visão", "Transparência", "Relatórios"]
  },
  {
    title: "O que fazemos",
    links: ["Educação", "Esporte", "Cultura", "Desenvolvimento Social", "Formação Cristã"]
  },
  {
    title: "Projetos",
    links: ["Todos os Projetos", "Projeto Escola", "Eventos", "Campanhas"]
  },
  {
    title: "Contato",
    links: ["Comunidade César Maia", "Vargem Pequena/RJ", "Contato pelo site oficial", "jesusebom.org"]
  }
];

export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container footerGrid">
        <div className="footerBrand">
          <Logo />
          <p>
            O Instituto Jesus é Bom transforma vidas através da fé, educação e esperança,
            atuando na Comunidade César Maia, em Vargem Pequena/RJ.
          </p>
          <div className="socialRow" aria-label="Redes sociais">
            <span>Instagram</span>
            <span>YouTube</span>
            <span>WhatsApp</span>
          </div>
        </div>

        {columns.map((column) => (
          <div className="footerColumn" key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => <a href="#" key={link}>{link}</a>)}
          </div>
        ))}

        <div className="footerCta">
          <strong>Precisa de ajuda ou quer contribuir?</strong>
          <a href="#como-ajudar" className="btn light">Fale Conosco</a>
        </div>
      </div>

      <div className="container footerBottom">
        <span>© Instituto Jesus é Bom. Conteúdo para validação visual e institucional.</span>
        <span>Política de Privacidade · Termos de Uso</span>
      </div>
    </footer>
  );
}
