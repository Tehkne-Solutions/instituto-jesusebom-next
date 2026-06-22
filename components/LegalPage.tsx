import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { legalIndex, type LegalPageContent } from "@/data/legalContent";
import { ArrowRight, CalendarDays, FileText } from "lucide-react";

export function LegalPage({ page }: { page: LegalPageContent }) {
  return (
    <>
      <Header />
      <main className="legalPage">
        <section className="legalHero">
          <div className="container legalHeroInner">
            <span className="eyebrow">{page.eyebrow}</span>
            <h1>{page.title}</h1>
            <p>{page.description}</p>
            <div className="legalMeta">
              <span><CalendarDays size={18} /> Atualizado em {page.updatedAt}</span>
              <span><ShieldCheck size={18} /> Conteúdo institucional personalizado</span>
            </div>
          </div>
        </section>

        <section className="section legalBodySection">
          <div className="container legalGrid">
            <aside className="legalAside" aria-label="Páginas legais">
              <div className="legalAsideCard">
                <FileText size={22} />
                <h2>Documentos legais</h2>
                <p>Consulte políticas, termos e documentos de transparência do Instituto.</p>
                <nav>
                  {legalIndex.map((item) => (
                    <a key={item.slug} href={`/${item.slug}`}>
                      {item.title}
                      <ArrowRight size={15} />
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="legalArticle">
              {page.sections.map((section) => (
                <section className="legalArticleSection" key={section.title}>
                  <h2>{section.title}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
