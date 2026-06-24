"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Heart, ShieldCheck, X } from "lucide-react";

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

function cleanCurrency(value: string) {
  return value.replace(/[^\d,\.]/g, "").replace(",", ".");
}

function buildDonationPayload(state: DonationFormState) {
  const urlParams = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search)
    : new URLSearchParams();

  return {
    source: "lp_doacao",
    page: "/doacao",
    donationType: state.mode,
    anonymous: state.anonymous,
    amount: Number(cleanCurrency(state.amount || "0")) || null,
    donor: {
      name: state.anonymous ? null : state.name || null,
      whatsapp: state.anonymous ? null : state.whatsapp || null,
      email: state.anonymous ? null : state.email || null,
      city: state.anonymous ? null : state.city || null
    },
    message: state.message || null,
    consent: {
      privacyAccepted: true,
      communicationAccepted: false
    },
    metadata: {
      submittedAt: new Date().toISOString(),
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      referrer: typeof document !== "undefined" ? document.referrer || null : null,
      utmSource: urlParams.get("utm_source"),
      utmMedium: urlParams.get("utm_medium"),
      utmCampaign: urlParams.get("utm_campaign")
    }
  };
}

export function DonationForm() {
  const [state, setState] = useState<DonationFormState>(initialState);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  const payloadPreview = useMemo(() => buildDonationPayload(state), [state]);

  function update<K extends keyof DonationFormState>(key: K, value: DonationFormState[K]) {
    setState((current) => ({ ...current, [key]: value }));
  }

  function openDetailsStep(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDetailsOpen(true);
  }

  async function handlePayloadSubmit(event?: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    setSaving(true);

    const payload = buildDonationPayload(state);
    console.log("[DoacaoPayload]", payload);

    try {
      await fetch("/api/donation-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    } catch {
      // Payload já foi montado no frontend. A integração real será conectada depois.
    } finally {
      setSaving(false);
      setDetailsOpen(false);
      setSuccessOpen(true);
    }
  }

  return (
    <>
      <form className="donationForm donationFormCompact" onSubmit={openDetailsStep}>
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

        <button className="donationSubmit" type="submit">
          <Heart size={18} />
          Quero transformar vidas
          <ArrowRight size={18} />
        </button>

        <div className="donationSecurity">
          <span><ShieldCheck size={15} /> Pagamento 100% seguro</span>
          <span>Sua doação faz a diferença hoje.</span>
        </div>
      </form>

      {detailsOpen && (
        <div className="donationModalBackdrop" role="presentation">
          <div className="donationModal donationDetailsModal" role="dialog" aria-modal="true" aria-labelledby="donation-details-title">
            <button
              className="donationModalClose"
              type="button"
              onClick={() => setDetailsOpen(false)}
              aria-label="Fechar formulário"
            >
              <X size={18} />
            </button>

            <span className="donationModalIcon"><Heart size={30} fill="currentColor" /></span>
            <h2 id="donation-details-title">Complete sua intenção de doação</h2>
            <p>
              Por enquanto vamos apenas preparar o payload para a equipe finalizar a integração.
            </p>

            <form className="donationDetailsForm" onSubmit={handlePayloadSubmit}>
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
                {saving ? "Preparando payload..." : "Enviar informações"}
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      {successOpen && (
        <div className="donationModalBackdrop" role="presentation">
          <div className="donationModal" role="dialog" aria-modal="true" aria-labelledby="donation-modal-title">
            <button
              className="donationModalClose"
              type="button"
              onClick={() => setSuccessOpen(false)}
              aria-label="Fechar mensagem"
            >
              <X size={18} />
            </button>
            <span className="donationModalIcon"><Heart size={30} fill="currentColor" /></span>
            <h2 id="donation-modal-title">Recebemos suas informações.</h2>
            <p>Em breve nossa equipe dará continuidade.</p>
            <small>
              O payload da intenção de doação já foi preparado para a integração definitiva.
            </small>
            <button className="donationModalButton" type="button" onClick={() => setSuccessOpen(false)}>
              Entendi
            </button>
          </div>
        </div>
      )}
    </>
  );
}
