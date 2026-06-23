import { Logo } from "./Logo";
import { navItems } from "@/data/siteContent";

export function Header() {
  return (
    <>
      <div className="topbar">
        <div className="container topbarInner">
          <span>Transformando vidas pelo amor de Cristo desde 2019.</span>
          <nav aria-label="Links institucionais">
            <a href="/transparencia">Transparência</a>
            <a href="/relatorios">Relatórios</a>
            <a href="/trabalhe-conosco">Trabalhe Conosco</a>
            <a href="/contato">Contato</a>
          </nav>
        </div>
      </div>

      <header className="siteHeader">
        <div className="container headerShell">
          <a href="/" className="logoLink" aria-label="Instituto Jesus é Bom">
            <Logo />
          </a>

          <nav className="desktopNav" aria-label="Menu principal">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className="headerActions">
            <a className="btn primary" href="/doacao">Doe Agora</a>
          </div>
        </div>
      </header>
    </>
  );
}
