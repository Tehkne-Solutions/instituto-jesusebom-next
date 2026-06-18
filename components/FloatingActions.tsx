"use client";

import { useEffect, useMemo, useRef, useState, type ElementType } from "react";
import {
  ArrowUp,
  Building2,
  FileText,
  Gift,
  Repeat2,
  Send,
  ShieldCheck,
  UserPlus,
  X
} from "lucide-react";

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_JEB_WHATSAPP_PHONE ?? "";
const AUTO_OPEN_STORAGE_KEY = "jeb-whatsapp-chat-opened";
const TYPING_DELAY_MS = 650;

type SupportOptionId = "pix" | "recorrente" | "voluntariado" | "parcerias" | "transparencia";
type ChatStep = "intro" | "option" | "done";

type SupportOption = {
  id: SupportOptionId;
  title: string;
  description: string;
  message: string;
  icon: ElementType;
};

const supportOptions: SupportOption[] = [
  {
    id: "pix",
    title: "Doação via PIX",
    description: "Quero receber orientação para uma contribuição pontual.",
    message: "Olá! Vim pelo site do Instituto Jesus é Bom e quero informações para fazer uma doação via PIX.",
    icon: Gift
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
  },
  {
    id: "transparencia",
    title: "Transparência",
    description: "Quero saber mais sobre relatórios e prestação de contas.",
    message: "Olá! Vim pelo site do Instituto Jesus é Bom e quero informações sobre transparência e prestação de contas.",
    icon: FileText
  }
];

function WhatsAppLogo({ size = 22 }: { size?: number }) {
  return (
    <svg
      className="whatsappSvg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.6 2.326A10.146 10.146 0 0 0 3.876 15.15L2 22l6.986-1.833a10.12 10.12 0 0 0 4.87 1.24h.004c5.599 0 10.146-4.548 10.146-10.146A10.14 10.14 0 0 0 13.6 2.326zm.264 17.38a8.44 8.44 0 0 1-4.305-1.183l-.307-.182-4.148 1.088 1.107-4.043-.2-.329a8.45 8.45 0 0 1-1.291-4.502c.003-4.667 3.801-8.463 8.473-8.463 2.262 0 4.387.882 5.99 2.485a8.418 8.418 0 0 1 2.482 5.991c-.002 4.668-3.8 8.468-8.47 8.468z" />
      <path d="M19.2 14.413c-.254-.127-1.5-.739-1.733-.823-.232-.084-.402-.127-.571.127-.168.254-.655.823-.803.992-.148.169-.296.19-.55.064-.254-.127-1.074-.396-2.045-1.263-.756-.674-1.267-1.506-1.415-1.76-.148-.254-.016-.391.111-.518.114-.114.254-.296.381-.444.127-.148.169-.254.254-.423.084-.169.042-.317-.022-.444-.064-.127-.57-1.376-.782-1.886-.206-.495-.415-.428-.57-.436l-.486-.008c-.169 0-.444.064-.677.317-.233.254-.888.867-.888 2.113s.91 2.451 1.037 2.62c.127.169 1.79 2.733 4.337 3.832.606.262 1.08.418 1.449.535.608.193 1.161.165 1.599.1.487-.073 1.5-.612 1.713-1.204.212-.592.212-1.1.148-1.205-.064-.106-.233-.169-.486-.296z" />
    </svg>
  );
}

function createWhatsAppHref(message: string): string {
  const phone = WHATSAPP_PHONE.replace(/[^\d]/g, "");
  if (!phone) return "#contato";
  const normalizedPhone = phone.startsWith("55") ? phone : `55${phone}`;
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [cookieVisible, setCookieVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SupportOption | null>(null);
  const [step, setStep] = useState<ChatStep>("intro");
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement | null>(null);

  const currentMessage = useMemo(() => {
    if (!selectedOption) {
      return "Olá! Vim pelo site do Instituto Jesus é Bom e quero atendimento.";
    }
    return selectedOption.message;
  }, [selectedOption]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const consent = window.localStorage.getItem("jeb_cookie_consent");
    if (!consent) {
      const timer = window.setTimeout(() => setCookieVisible(true), 650);
      return () => {
        window.clearTimeout(timer);
        window.removeEventListener("scroll", onScroll);
      };
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!chatOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setChatOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [chatOpen]);

  useEffect(() => {
    if (!chatOpen) return;
    const chatBody = chatBodyRef.current;
    if (!chatBody) return;
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
  }, [chatOpen, isTyping, selectedOption, step]);

  function acceptCookies() {
    window.localStorage.setItem("jeb_cookie_consent", "accepted");
    setCookieVisible(false);
  }

  function rejectCookies() {
    window.localStorage.setItem("jeb_cookie_consent", "essential");
    setCookieVisible(false);
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
          aria-label={chatOpen ? "Fechar atendimento pelo WhatsApp" : "Abrir atendimento pelo WhatsApp"}
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
            <span className="jebWhatsappHeadIcon"><WhatsAppLogo size={24} /></span>
            <div>
              <h2 id="jeb-whatsapp-title">Atendimento Jesus é Bom</h2>
              <p>Online para orientar sua forma de contribuição</p>
            </div>
          </header>

          <div className="jebWhatsappBody" ref={chatBodyRef}>
            <p className="jebChatBubble jebChatBubbleAgent">
              Olá! Como você quer apoiar o Instituto Jesus é Bom hoje?
            </p>

            {selectedOption ? (
              <p className="jebChatBubble jebChatBubbleUser">
                {selectedOption.title}
              </p>
            ) : null}

            {selectedOption ? (
              <p className="jebChatBubble jebChatBubbleAgent">
                Perfeito. Vou te direcionar para falar com a equipe sobre <strong>{selectedOption.title.toLowerCase()}</strong>.
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
            {!selectedOption ? (
              <div className="jebWhatsappOptions" aria-label="Escolha uma forma de ajuda">
                {supportOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button type="button" key={option.id} onClick={() => chooseOption(option)}>
                      <Icon size={18} />
                      <span>
                        <strong>{option.title}</strong>
                        <small>{option.description}</small>
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : null}

            {step === "done" ? (
              <div className="jebWhatsappFinal">
                <a
                  className="jebWhatsappStart"
                  href={createWhatsAppHref(currentMessage)}
                  target={WHATSAPP_PHONE ? "_blank" : undefined}
                  rel={WHATSAPP_PHONE ? "noopener noreferrer" : undefined}
                >
                  <Send size={17} />
                  {WHATSAPP_PHONE ? "Continuar no WhatsApp" : "Ir para contato"}
                </a>
                <button type="button" className="jebWhatsappRestart" onClick={restartChat}>
                  Escolher outra opção
                </button>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <a className="privacyFloat" href="#privacidade">
        <ShieldCheck size={18} />
        <span>Privacidade</span>
      </a>

      {cookieVisible && (
        <section className="cookieBanner" aria-label="Aviso de cookies">
          <button
            className="cookieClose"
            type="button"
            onClick={rejectCookies}
            aria-label="Fechar aviso de cookies"
          >
            <X size={18} />
          </button>

          <div className="cookieIcon">
            <ShieldCheck size={22} />
          </div>

          <div className="cookieText">
            <strong>Privacidade e cookies</strong>
            <p>
              Usamos cookies essenciais e recursos de navegação para melhorar sua experiência,
              analisar uso do site e manter a comunicação institucional mais segura.
            </p>
          </div>

          <div className="cookieActions">
            <a href="#privacidade">Ver política</a>
            <button type="button" onClick={rejectCookies}>Somente essenciais</button>
            <button type="button" className="accept" onClick={acceptCookies}>Aceitar cookies</button>
          </div>
        </section>
      )}
    </>
  );
}
