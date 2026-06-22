import { Logo } from "./Logo";

const columns = [
  {
    title: "Instituto",
    links: [
      { label: "Início", href: "/" },
      { label: "Quem Somos", href: "/quem-somos" },
      { label: "O Que Fazemos", href: "/o-que-fazemos" },
      { label: "Impacto Social", href: "/impacto-social" }
    ]
  },
  {
    title: "Como participar",
    links: [
      { label: "Como Ajudar", href: "/como-ajudar" },
      { label: "Voluntariado", href: "/voluntariado" },
      { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
      { label: "Contato", href: "/contato" }
    ]
  },
  {
    title: "Transparência",
    links: [
      { label: "Transparência", href: "/transparencia" },
      { label: "Relatórios", href: "/relatorios" },
      { label: "Política de Privacidade", href: "/privacidade" },
      { label: "Termos de Uso", href: "/termos-de-uso" },
      { label: "Política de Cookies", href: "/politica-de-cookies" }
    ]
  },
  {
    title: "Contato",
    links: [
      { label: "WhatsApp Secretaria: 21 97346-8327", href: "https://wa.me/5521973468327" },
      { label: "contato@jesusebom.org", href: "mailto:contato@jesusebom.org" },
      { label: "Instagram: @institutojesusebom", href: "https://www.instagram.com/institutojesusebom/" },
      { label: "www.jesusebom.org", href: "/" }
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
            Instituto Jesus é Bom. Transformando vidas pelo amor de Cristo desde 2019.
          </p>
          <p className="footerLocation">Comunidade César Maia • Vargem Pequena/RJ</p>
          <div className="socialRow" aria-label="Redes sociais">
            <a href="https://www.instagram.com/institutojesusebom/">Instagram</a>
            <a href="https://wa.me/5521973468327">WhatsApp</a>
            <a href="mailto:contato@jesusebom.org">E-mail</a>
          </div>
        </div>

        {columns.map((column) => (
          <div className="footerColumn" key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}
          </div>
        ))}

        <div className="footerCta">
          <strong>Mais que projetos, construímos futuros.</strong>
          <a href="/como-ajudar" className="btn light">Doe Agora</a>
        </div>
      </div>

      <div className="container footerBottom">
        <span>© Instituto Jesus é Bom. Transformando vidas pelo amor de Cristo.</span>
        <span>
          <a href="/privacidade">Política de Privacidade</a> · <a href="/termos-de-uso">Termos de Uso</a> · <a href="/politica-de-cookies">Cookies</a>
        </span>
      </div>
    </footer>
  );
}
