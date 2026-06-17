"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, ShieldCheck, X } from "lucide-react";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [cookieVisible, setCookieVisible] = useState(false);

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
        <a
          className="floatingAction contactFloat"
          href="#contato"
          aria-label="Entrar em contato"
        >
          <MessageCircle size={21} />
        </a>
      </div>

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
