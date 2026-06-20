import { Logo } from "./Logo";

const columns = [
  {
    title: "Instituto",
    links: [
      { label: "Quem Somos", href: "/#quem-somos" },
      { label: "Nossa História", href: "/#quem-somos" },
      { label: "Missão e Visão", href: "/#o-que-fazemos" },
      { label: "Transparência", href: "/transparencia" },
      { label: "Relatórios", href: "/relatorios" }
    ]
  },
  {
    title: "O que fazemos",
    links: [
      { label: "Educação", href: "/#o-que-fazemos" },
      { label: "Esporte", href: "/#o-que-fazemos" },
      { label: "Cultura", href: "/#o-que-fazemos" },
      { label: "Desenvolvimento Social", href: "/#o-que-fazemos" },
      { label: "Formação Cristã", href: "/#o-que-fazemos" }
    ]
  },
  {
    title: "Projetos",
    links: [
      { label: "Todos os Projetos", href: "/#projetos" },
      { label: "Projeto Escola", href: "/#escola-crista" },
      { label: "Eventos", href: "/#projetos" },
      { label: "Campanhas", href: "/#como-ajudar" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Política de Privacidade", href: "/privacidade" },
      { label: "Termos de Uso", href: "/termos-de-uso" },
      { label: "Política de Cookies", href: "/politica-de-cookies" },
      { label: "Trabalhe Conosco", href: "/trabalhe-conosco" }
    ]
  },
  {
    title: "Contato",
    links: [
      { label: "Comunidade César Maia", href: "/#contato" },
      { label: "Vargem Pequena/RJ", href: "/#contato" },
      { label: "Contato pelo site oficial", href: "/#contato" },
      { label: "jesusebom.org", href: "/" }
    ]
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
            <a href="/#contato">Instagram</a>
            <a href="/#contato">YouTube</a>
            <a href="/#contato">WhatsApp</a>
          </div>
        </div>

        {columns.map((column) => (
          <div className="footerColumn" key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}
          </div>
        ))}

        <div className="footerCta">
          <strong>Precisa de ajuda ou quer contribuir?</strong>
          <a href="/#como-ajudar" className="btn light">Fale Conosco</a>
        </div>
      </div>

      <div className="container footerBottom">
        <span>© Instituto Jesus é Bom. Transformando vidas através da fé, educação e esperança.</span>
        <span>
          <a href="/privacidade">Política de Privacidade</a> · <a href="/termos-de-uso">Termos de Uso</a> · <a href="/politica-de-cookies">Cookies</a>
        </span>
      </div>
    </footer>
  );
}
