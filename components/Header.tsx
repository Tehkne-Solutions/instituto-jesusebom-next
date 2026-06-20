import { Logo } from "./Logo";
import { navItems } from "@/data/siteContent";

export function Header() {
  return (
    <>
      <div className="topbar">
        <div className="container topbarInner">
          <span>Transformando vidas através da fé, educação e esperança.</span>
          <nav aria-label="Links institucionais">
            <a href="/transparencia">Transparência</a>
            <a href="/relatorios">Relatórios</a>
            <a href="/trabalhe-conosco">Trabalhe Conosco</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </div>

      <header className="siteHeader">
        <div className="container headerShell">
          <a href="/" className="logoLink">
            <Logo />
          </a>

          <nav className="desktopNav" aria-label="Menu principal">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className="headerActions">
            <a className="btn primary" href="#como-ajudar">Quero Doar</a>
          </div>
        </div>
      </header>
    </>
  );
}
