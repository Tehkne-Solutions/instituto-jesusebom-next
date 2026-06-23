"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Copy, Heart, Mail, MessageCircle, ShieldCheck } from "lucide-react";

type DonationMode = "unica" | "mensal";
type DonationFormState = {
  mode: DonationMode;
  amount: string;
  anonymous: boolean;
  name: string;
  whatsapp: string;
  email: string;
  city: string;
  message: string;
};

const initialState: DonationFormState = {
  mode: "unica",
  amount: "50",
  anonymous: false,
  name: "",
  whatsapp: "",
  email: "",
  city: "",
  message: ""
};

const suggestedAmounts = ["30", "50", "100", "200"];
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_JEB_WHATSAPP_PHONE || "5521973468327";
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_JEB_DONATION_EMAIL || "contato@jesusebom.org";
const PIX_KEY = "contato@jesusebom.org";

function cleanCurrency(value: string) {
  return value.replace(/[^\d,\.]/g, "").replace(",", ".");
}

function formatMessage(state: DonationFormState) {
  const amount = cleanCurrency(state.amount || "0");
  const donationType = state.anonymous ? "doação anônima" : "doação";
  const identity = state.anonymous
    ? "Doação anônima"
    : `Nome: ${state.name || "não informado"}\nWhatsApp: ${state.whatsapp || "não informado"}\nE-mail: ${state.email || "não informado"}\nCidade: ${state.city || "não informado"}`;

  return [
    "Olá! Vim pela página de doação do Instituto Jesus é Bom.",
    `Quero prosseguir com uma ${donationType}.`,
    `Valor pretendido: R$ ${amount || "0"}.`,
    identity,
    state.message ? `Mensagem: ${state.message}` : "",
    "Aguardo orientação para finalizar a contribuição."
  ].filter(Boolean).join("\n");
}

export function DonationForm() {
  const [state, setState] = useState<DonationFormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [saving, setSaving] = useState(false);

  const message = useMemo(() => formatMessage(state), [state]);
  const whatsAppHref = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Nova intenção de doação — Instituto Jesus é Bom")}&body=${encodeURIComponent(message)}`;

  function update<K extends keyof DonationFormState>(key: K, value: DonationFormState[K]) {
    setState((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);

    try {
      await fetch("/api/donation-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...state,
          amount: cleanCurrency(state.amount),
          source: "lp-doacao",
          createdAt: new Date().toISOString()
        })
      });
    } catch {
      // O envio para planilha/webhook será ativado quando as credenciais forem definidas.
    } finally {
      setSaving(false);
      setSubmitted(true);
    }
  }

  async function copyPix() {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <form className="donationForm" onSubmit={handleSubmit}>
      <div className="donationModeTabs" role="tablist" aria-label="Tipo de doação">
        <button
          type="button"
          className={!state.anonymous ? "active" : ""}
          onClick={() => update("anonymous", false)}
        >
          Doar agora
        </button>
        <button
          type="button"
          className={state.anonymous ? "active" : ""}
          onClick={() => update("anonymous", true)}
        >
          Doação anônima
        </button>
      </div>

      <label className="formLabel" htmlFor="amount">Escolha ou informe o valor da sua doação</label>
      <div className="currencyInput">
        <span>R$</span>
        <input
          id="amount"
          inputMode="decimal"
          value={state.amount}
          onChange={(event) => update("amount", event.target.value)}
          placeholder="50,00"
          required
        />
      </div>

      <div className="amountGrid">
        {suggestedAmounts.map((amount) => (
          <button
            type="button"
            key={amount}
            className={cleanCurrency(state.amount) === amount ? "selected" : ""}
            onClick={() => update("amount", amount)}
          >
            R$ {amount}
          </button>
        ))}
      </div>

      {!state.anonymous && (
        <div className="donorFields">
          <label>
            Nome completo
            <input
              value={state.name}
              onChange={(event) => update("name", event.target.value)}
              placeholder="Seu nome"
              required={!state.anonymous}
            />
          </label>
          <label>
            WhatsApp
            <input
              value={state.whatsapp}
              onChange={(event) => update("whatsapp", event.target.value)}
              placeholder="(21) 00000-0000"
              required={!state.anonymous}
            />
          </label>
          <label>
            E-mail
            <input
              value={state.email}
              onChange={(event) => update("email", event.target.value)}
              placeholder="seuemail@exemplo.com"
              type="email"
            />
          </label>
          <label>
            Cidade / Estado
            <input
              value={state.city}
              onChange={(event) => update("city", event.target.value)}
              placeholder="Rio de Janeiro/RJ"
            />
          </label>
        </div>
      )}

      <label className="fullField">
        Mensagem opcional
        <textarea
          value={state.message}
          onChange={(event) => update("message", event.target.value)}
          placeholder="Conte como deseja apoiar ou deixe uma observação para a equipe."
          rows={3}
        />
      </label>

      <button className="donationSubmit" type="submit" disabled={saving}>
        <Heart size={18} />
        {saving ? "Preparando..." : "Quero transformar vidas"}
        <ArrowRight size={18} />
      </button>

      <div className="donationSecurity">
        <span><ShieldCheck size={15} /> Pagamento 100% seguro.</span>
        <span>Sua doação faz a diferença hoje.</span>
      </div>

      {submitted && (
        <div className="donationNextSteps" role="status">
          <CheckCircle2 size={22} />
          <div>
            <strong>Dados preparados para envio.</strong>
            <p>Enquanto o checkout oficial é configurado, você pode prosseguir pelo WhatsApp, e-mail ou copiar a chave PIX.</p>
            <div className="donationNextActions">
              <a href={whatsAppHref} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
              <a href={mailHref}><Mail size={16} /> E-mail</a>
              <button type="button" onClick={copyPix}><Copy size={16} /> {copied ? "PIX copiado" : "Copiar PIX"}</button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
