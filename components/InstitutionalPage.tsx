
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { CSSProperties } from "react";
import type { ContentPage } from "@/data/pagesContent";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

function CtaButtons({ page }: { page: ContentPage }) {
  return (
    <div className="contentCtaRow">
      {page.primaryCta ? <a className="btn primary" href={page.primaryCta.href}>{page.primaryCta.label}</a> : null}
      {page.secondaryCta ? <a className="btn outline" href={page.secondaryCta.href}>{page.secondaryCta.label}</a> : null}
    </div>
  );
}

function CardGrid({ cards }: { cards?: NonNullable<ContentPage["sections"][number]["cards"]> }) {
  if (!cards?.length) return null;
  return (
    <div className="contentCards">
      {cards.map((card) => {
        const Icon = card.icon ?? CheckCircle2;
        return (
          <article className="contentCard" key={`${card.title}-${card.description}`}>
            <div className="contentCardIcon"><Icon size={22} /></div>
            <div>
              <h3>{card.title}</h3>
              {card.meta ? <span className="contentCardMeta">{card.meta}</span> : null}
              <p>{card.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function ImageFrame({ src, alt }: { src?: string; alt: string }) {
  if (!src) return null;
  return (
    <figure className="contentImageFrame">
      <img src={src} alt={alt} />
    </figure>
  );
}

export function InstitutionalPage({ page }: { page: ContentPage }) {
  return (
    <>
      <Header />
      <main className="contentPage">
        <section
          className="contentHero"
          style={page.heroImage ? { "--page-hero-image": `url(${page.heroImage})` } as CSSProperties : undefined}
        >
          <div className="container contentHeroInner">
            <div className="contentHeroCopy">
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>{page.title}</h1>
              <p>{page.subtitle}</p>
              <CtaButtons page={page} />
            </div>
          </div>
        </section>

        {page.stats?.length ? (
          <section className="contentStatsSection" id="numeros">
            <div className="container contentStatsGrid">
              {page.stats.map((stat) => {
                const Icon = stat.icon ?? CheckCircle2;
                return (
                  <article className="contentStatCard" key={stat.label}>
                    <div className="contentStatIcon"><Icon size={24} /></div>
                    <strong>{stat.value}</strong>
                    <h2>{stat.label}</h2>
                    <p>{stat.description}</p>
                  </article>
                );
              })}
            </div>
          </section>
        ) : null}

        {page.intro ? (
          <section className="section contentSplitSection">
            <div className="container contentSplit">
              <ImageFrame src={page.intro.image} alt={page.intro.title} />
              <div className="contentTextPanel">
                {page.intro.eyebrow ? <span className="eyebrow">{page.intro.eyebrow}</span> : null}
                <h2>{page.intro.title}</h2>
                {page.intro.text?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {page.intro.highlight ? <blockquote>{page.intro.highlight}</blockquote> : null}
              </div>
            </div>
          </section>
        ) : null}

        {page.suggestedValues?.length ? (
          <section className="section contentSuggestedValues">
            <div className="container">
              <div className="sectionHeader centered">
                <span>Valores sugeridos</span>
                <h2>Escolha uma forma de contribuir</h2>
                <p>Toda contribuição ajuda essa missão a continuar.</p>
              </div>
              <div className="contentValueGrid">
                {page.suggestedValues.map((value) => (
                  <article className="contentValueCard" key={value.title}>
                    <strong>{value.title}</strong>
                    <p>{value.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {page.contactChannels?.length ? (
          <section className="section contentContactChannels">
            <div className="container">
              <div className="sectionHeader centered">
                <span>Canais oficiais</span>
                <h2>Escolha o melhor canal</h2>
                <p>O WhatsApp da Secretaria é o principal canal de contato do Instituto.</p>
              </div>
              <div className="contentCards three">
                {page.contactChannels.map((channel) => {
                  const Icon = channel.icon ?? MessageCircle;
                  return (
                    <article className="contentCard contact" key={channel.title}>
                      <div className="contentCardIcon"><Icon size={22} /></div>
                      <h3>{channel.title}</h3>
                      <p>{channel.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}

        {page.timeline?.length ? (
          <section className="section contentTimelineSection">
            <div className="container">
              <div className="sectionHeader centered">
                <span>Evolução</span>
                <h2>Crescimento contínuo</h2>
                <p>Dados de evolução do atendimento, conforme o conteúdo institucional recebido.</p>
              </div>
              <div className="contentTimeline">
                {page.timeline.map((item) => (
                  <article key={item.title}>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {page.sections.map((section, index) => (
          <section className="section contentSection" key={`${section.title}-${index}`} id={index === 0 ? "projetos" : undefined}>
            <div className="container">
              <div className={section.image ? "contentSectionGrid" : "contentSectionBlock"}>
                <div className="contentSectionCopy">
                  {section.eyebrow ? <span className="eyebrow">{section.eyebrow}</span> : null}
                  <h2>{section.title}</h2>
                  {section.text?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.highlight ? <blockquote>{section.highlight}</blockquote> : null}
                </div>
                <ImageFrame src={section.image} alt={section.title} />
              </div>
              <CardGrid cards={section.cards} />
            </div>
          </section>
        ))}

        {page.formFields?.length ? (
          <section className="section contentFormSection" id="formulario">
            <div className="container contentFormShell">
              <div>
                <span className="eyebrow">{page.slug === "voluntariado" ? "Formulário" : "Mantenedor mensal"}</span>
                <h2>{page.slug === "voluntariado" ? "Quero ser voluntário" : "Campos sugeridos para formulário de mantenedor"}</h2>
                <p>
                  Esta estrutura prepara a próxima etapa de integração com formulário real. Por enquanto, o contato pode ser direcionado para WhatsApp ou e-mail oficial.
                </p>
                <a className="btn primary" href="/contato">
                  Falar com a equipe
                  <ArrowRight size={18} />
                </a>
              </div>
              <div className="contentFormMock">
                {page.formFields.map((field) => (
                  <label key={field}>
                    <span>{field}</span>
                    <div />
                  </label>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {page.finalCta ? (
          <section className="section contentFinalCta">
            <div className="container">
              <div className="contentFinalCard">
                <span className="eyebrow">Faça parte</span>
                <h2>{page.finalCta.title}</h2>
                <p>{page.finalCta.text}</p>
                <div className="contentCtaRow">
                  {page.finalCta.buttons.map((button) => (
                    <a
                      key={button.label}
                      className={`btn ${button.variant === "outline" ? "outline" : button.variant === "soft" ? "soft" : "primary"}`}
                      href={button.href}
                    >
                      {button.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
