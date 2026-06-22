"use client";

import { useEffect, useRef, useState, type ElementType } from "react";
import {
  ArrowUp,
  Building2,
  Cookie,
  Heart,
  Repeat2,
  ShieldCheck,
  SlidersHorizontal,
  UserPlus,
  X
} from "lucide-react";

const AUTO_OPEN_STORAGE_KEY = "jeb-whatsapp-chat-opened";
const TYPING_DELAY_MS = 650;
const COOKIE_STORAGE_KEY = "jeb_cookie_consent_2026";

type SupportOptionId = "pix" | "recorrente" | "voluntariado" | "parcerias";
type ChatStep = "intro" | "option" | "done";

type SupportOption = {
  id: SupportOptionId;
  title: string;
  description: string;
  message: string;
  icon: ElementType;
};

type CookiePreferences = {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  communication: boolean;
  updatedAt: string;
};

const defaultPreferences: CookiePreferences = {
  necessary: true,
  preferences: false,
  analytics: false,
  communication: false,
  updatedAt: ""
};

const supportOptions: SupportOption[] = [
  {
    id: "pix",
    title: "Doação via PIX",
    description: "Quero receber orientação para uma contribuição pontual.",
    message: "Olá! Vim pelo site do Instituto Jesus é Bom e quero informações para fazer uma doação via PIX.",
    icon: Heart
  },
  {
    id: "recorrente",
    title: "Doação recorrente",
    description: "Quero apoiar mensalmente os projetos do Instituto.",
    message: "Olá! Vim pelo site do Instituto Jesus é Bom e quero saber como fazer uma doação recorrente.",
    icon: Repeat2
  },
  {
    id: "voluntariado",
    title: "Voluntariado",
    description: "Quero doar tempo, presença ou habilidades para a missão.",
    message: "Olá! Vim pelo site do Instituto Jesus é Bom e quero conversar sobre voluntariado.",
    icon: UserPlus
  },
  {
    id: "parcerias",
    title: "Parcerias",
    description: "Quero falar sobre apoio institucional, empresa ou igreja.",
    message: "Olá! Vim pelo site do Instituto Jesus é Bom e quero conversar sobre parceria.",
    icon: Building2
  }
];

const cookieCategories = [
  {
    key: "necessary" as const,
    title: "Necessários",
    description: "Mantêm o site funcionando, preservam segurança, navegação básica e o registro do consentimento.",
    locked: true
  },
  {
    key: "preferences" as const,
    title: "Preferências",
    description: "Guardam escolhas de experiência, como preferências visuais e funcionamento da interface.",
    locked: false
  },
  {
    key: "analytics" as const,
    title: "Métricas",
    description: "Ajudam a entender uso geral do site de forma agregada para melhorar conteúdo e navegação.",
    locked: false
  },
  {
    key: "communication" as const,
    title: "Comunicação",
    description: "Apoiam recursos de relacionamento, campanhas, formulários, WhatsApp e comunicação institucional.",
    locked: false
  }
];

function WhatsAppLogo({ size = 22 }: { size?: number }) {
  return (
    <svg
      className="whatsappSvg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M13.601 2.326A7.85 7.85 0 0 0 8.003 0C3.584 0 0 3.584 0 8.003c0 1.41.368 2.79 1.066 4.005L0 16l4.09-1.053A7.98 7.98 0 0 0 8.003 16C12.42 16 16 12.416 16 7.997a7.95 7.95 0 0 0-2.399-5.671ZM8.003 14.65a6.63 6.63 0 0 1-3.38-.924l-.242-.143-2.424.625.647-2.365-.158-.249a6.62 6.62 0 0 1-1.02-3.591c0-3.63 2.95-6.581 6.577-6.581a6.55 6.55 0 0 1 4.663 1.936 6.53 6.53 0 0 1 1.913 4.64c0 3.628-2.95 6.652-6.576 6.652Z" />
      <path d="M11.574 9.64c-.195-.098-1.155-.57-1.334-.635-.179-.065-.31-.098-.44.098-.13.195-.504.635-.618.765-.114.13-.228.147-.423.049-.195-.098-.824-.303-1.57-.967-.58-.517-.972-1.155-1.086-1.35-.114-.196-.012-.302.086-.4.088-.087.195-.228.293-.342.098-.114.13-.195.195-.325.065-.13.033-.244-.016-.342-.049-.098-.44-1.06-.603-1.45-.159-.382-.32-.33-.44-.336l-.375-.007c-.13 0-.342.049-.52.244-.18.195-.684.668-.684 1.63s.7 1.89.798 2.02c.098.13 1.377 2.102 3.337 2.948.466.201.83.321 1.114.411.468.149.894.128 1.23.077.375-.056 1.155-.472 1.318-.928.163-.456.163-.847.114-.928-.049-.081-.179-.13-.374-.228Z" />
    </svg>
  );
}

function loadPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;

  const stored = window.localStorage.getItem(COOKIE_STORAGE_KEY);
  if (!stored) return null;

  try {
    const parsed = JSON.parse(stored) as Partial<CookiePreferences>;
    return {
      necessary: true,
      preferences: Boolean(parsed.preferences),
      analytics: Boolean(parsed.analytics),
      communication: Boolean(parsed.communication),
      updatedAt: parsed.updatedAt || ""
    };
  } catch {
    return null;
  }
}

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [cookieVisible, setCookieVisible] = useState(false);
  const [cookiePanelOpen, setCookiePanelOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SupportOption | null>(null);
  const [step, setStep] = useState<ChatStep>("intro");
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const storedConsent = loadPreferences();
    if (storedConsent) {
      setPreferences(storedConsent);
    } else {
      const timer = window.setTimeout(() => setCookieVisible(true), 650);
      return () => {
        window.clearTimeout(timer);
        window.removeEventListener("scroll", onScroll);
      };
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!chatOpen && !cookiePanelOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setChatOpen(false);
        setCookiePanelOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [chatOpen, cookiePanelOpen]);

  useEffect(() => {
    if (!chatOpen) return;
    const chatBody = chatBodyRef.current;
    if (!chatBody) return;
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
  }, [chatOpen, isTyping, selectedOption, step]);

  function savePreferences(next: CookiePreferences) {
    const payload = { ...next, necessary: true as const, updatedAt: new Date().toISOString() };
    window.localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(payload));
    setPreferences(payload);
    setCookieVisible(false);
    setCookiePanelOpen(false);
  }

  function acceptAllCookies() {
    savePreferences({
      necessary: true,
      preferences: true,
      analytics: true,
      communication: true,
      updatedAt: ""
    });
  }

  function rejectCookies() {
    savePreferences({
      necessary: true,
      preferences: false,
      analytics: false,
      communication: false,
      updatedAt: ""
    });
  }

  function togglePreference(key: keyof CookiePreferences) {
    if (key === "necessary" || key === "updatedAt") return;
    setPreferences((current) => ({
      ...current,
      [key]: !current[key]
    }));
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleChat() {
    setChatOpen((current) => {
      const next = !current;
      if (next && typeof window !== "undefined") {
        window.sessionStorage.setItem(AUTO_OPEN_STORAGE_KEY, "true");
      }
      return next;
    });
  }

  function chooseOption(option: SupportOption) {
    setSelectedOption(option);
    setStep("option");
    setIsTyping(true);
    window.setTimeout(() => {
      setIsTyping(false);
      setStep("done");
    }, TYPING_DELAY_MS);
  }

  function restartChat() {
    setSelectedOption(null);
    setStep("intro");
    setIsTyping(false);
  }

  return (
    <>
      <div className="floatingRight" aria-label="Ações rápidas">
        <button
          className={`floatingAction toTop ${showTop ? "isVisible" : ""}`}
          type="button"
          onClick={scrollTop}
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} />
        </button>
        <button
          className={`floatingAction contactFloat ${chatOpen ? "isOpen" : ""}`}
          type="button"
          onClick={toggleChat}
          aria-label={chatOpen ? "Fechar opções de doação" : "Abrir opções de doação"}
        >
          {chatOpen ? <X size={22} /> : <WhatsAppLogo size={24} />}
        </button>
      </div>

      {chatOpen ? (
        <section className="jebWhatsappModal" aria-modal="false" role="dialog" aria-labelledby="jeb-whatsapp-title">
          <button type="button" className="jebWhatsappClose" aria-label="Fechar atendimento" onClick={() => setChatOpen(false)}>
            <X size={16} />
          </button>

          <header className="jebWhatsappHead">
            <span className="jebWhatsappHeadIcon"><Heart size={24} /></span>
            <div>
              <h2 id="jeb-whatsapp-title">Seja um doador</h2>
              <p>Escolha uma forma de contribuição para apoiar essa missão</p>
            </div>
          </header>

          <div className="jebWhatsappBody" ref={chatBodyRef}>
            <p className="jebChatBubble jebChatBubbleAgent">
              Como você deseja contribuir hoje?
            </p>

            {selectedOption ? (
              <p className="jebChatBubble jebChatBubbleUser">
                {selectedOption.title}
              </p>
            ) : null}

            {selectedOption ? (
              <p className="jebChatBubble jebChatBubbleAgent">
                Perfeito. A opção <strong>{selectedOption.title.toLowerCase()}</strong> foi selecionada. Clique em prosseguir para continuar.
              </p>
            ) : null}

            {isTyping ? (
              <p className="jebChatBubble jebChatBubbleAgent jebChatTyping" aria-label="Atendimento digitando">
                <span />
                <span />
                <span />
              </p>
            ) : null}
          </div>

          <div className="jebWhatsappControls">
            <div className="jebWhatsappOptions" aria-label="Escolha uma forma de doação">
                {supportOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button type="button" key={option.id} onClick={() => chooseOption(option)} className={selectedOption?.id === option.id ? "isSelected" : ""}>
                      <Icon size={18} />
                      <span>
                        <strong>{option.title}</strong>
                        <small>{option.description}</small>
                      </span>
                    </button>
                  );
                })}
              </div>

            {step === "done" ? (
              <div className="jebWhatsappFinal">
                <a className="jebWhatsappStart" href="/doacao/checkout">
                  <Heart size={17} />
                  Prosseguir
                </a>
                <button type="button" className="jebWhatsappRestart" onClick={restartChat}>
                  Alterar opção
                </button>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <button
        className="privacyFloat"
        type="button"
        onClick={() => setCookiePanelOpen(true)}
        aria-label="Abrir preferências de privacidade e cookies"
        title="Privacidade e cookies"
      >
        <ShieldCheck size={20} />
      </button>

      {cookieVisible && (
        <section className="cookieBanner cookieBanner2026" aria-label="Aviso de cookies">
          <button
            className="cookieClose"
            type="button"
            onClick={rejectCookies}
            aria-label="Fechar aviso de cookies e manter somente essenciais"
          >
            <X size={18} />
          </button>

          <div className="cookieIcon">
            <Cookie size={23} />
          </div>

          <div className="cookieText">
            <strong>Privacidade e cookies</strong>
            <p>
              Usamos cookies necessários para o funcionamento do site. Com seu consentimento,
              também podemos usar preferências, métricas e recursos de comunicação para melhorar sua experiência.
            </p>
          </div>

          <div className="cookieActions">
            <button type="button" onClick={() => setCookiePanelOpen(true)}>
              <SlidersHorizontal size={15} />
              Personalizar
            </button>
            <button type="button" onClick={rejectCookies}>Somente essenciais</button>
            <button type="button" className="accept" onClick={acceptAllCookies}>Aceitar todos</button>
          </div>
        </section>
      )}

      {cookiePanelOpen && (
        <section className="cookiePreferencesOverlay" role="dialog" aria-modal="true" aria-labelledby="cookie-preferences-title">
          <div className="cookiePreferencesPanel">
            <button type="button" className="cookiePreferencesClose" onClick={() => setCookiePanelOpen(false)} aria-label="Fechar preferências">
              <X size={18} />
            </button>

            <header>
              <span className="cookiePreferencesIcon"><ShieldCheck size={24} /></span>
              <div>
                <span className="eyebrow">Central de privacidade</span>
                <h2 id="cookie-preferences-title">Preferências de cookies</h2>
                <p>
                  Escolha quais categorias deseja permitir. Cookies necessários permanecem ativos para segurança, navegação e registro do consentimento.
                </p>
              </div>
            </header>

            <div className="cookieCategoryList">
              {cookieCategories.map((category) => {
                const enabled = category.key === "necessary" ? true : Boolean(preferences[category.key]);

                return (
                  <div className="cookieCategory" key={category.key}>
                    <div>
                      <strong>{category.title}</strong>
                      <p>{category.description}</p>
                    </div>
                    <button
                      type="button"
                      className={`cookieToggle ${enabled ? "isEnabled" : ""}`}
                      onClick={() => togglePreference(category.key)}
                      aria-pressed={enabled}
                      disabled={category.locked}
                    >
                      <span />
                      {category.locked ? "Obrigatório" : enabled ? "Ativo" : "Inativo"}
                    </button>
                  </div>
                );
              })}
            </div>

            <footer className="cookiePreferencesFooter">
              <a href="/politica-de-cookies">Ler política de cookies</a>
              <div>
                <button type="button" onClick={rejectCookies}>Somente essenciais</button>
                <button type="button" onClick={() => savePreferences(preferences)}>Salvar escolhas</button>
                <button type="button" className="accept" onClick={acceptAllCookies}>Aceitar todos</button>
              </div>
            </footer>
          </div>
        </section>
      )}
    </>
  );
}
