"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, CheckCircle2, Copy, Heart, QrCode, ShieldCheck, Sparkles, X } from "lucide-react";

type CheckoutMode = "dados" | "anonimo";
type DonationType = "unica" | "mensal";

type CheckoutFormState = {
  mode: CheckoutMode;
  donationType: DonationType;
  amount: string;
  name: string;
  whatsapp: string;
  email: string;
  document: string;
  city: string;
  message: string;
};

const initialState: CheckoutFormState = {
  mode: "dados",
  donationType: "unica",
  amount: "50",
  name: "",
  whatsapp: "",
  email: "",
  document: "",
  city: "",
  message: ""
};

const qrPattern = [
  1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,
  1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,
  1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,
  1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,
  1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,
  0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,
  1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,
  0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,
  1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,
  0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,
  1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,
  0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,
  1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,
  1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,
  1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,
  0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1
];

function parseAmount(value: string) {
  return Number(String(value).replace(/[^\d,\.]/g, "").replace(",", ".")) || null;
}

function money(value: string) {
  const numeric = parseAmount(value) || 0;
  return numeric.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function buildCheckoutPayload(state: CheckoutFormState) {
  const urlParams = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search)
    : new URLSearchParams();

  return {
    source: "checkout_doacao_fake",
    page: "/doacao/checkout",
    donationType: state.donationType,
    anonymous: state.mode === "anonimo",
    amount: parseAmount(state.amount),
    donor: {
      name: state.mode === "anonimo" ? null : state.name || null,
      whatsapp: state.mode === "anonimo" ? null : state.whatsapp || null,
      email: state.mode === "anonimo" ? null : state.email || null,
      document: state.mode === "anonimo" ? null : state.document || null,
      city: state.mode === "anonimo" ? null : state.city || null
    },
    message: state.message || null,
    checkout: {
      status: "fake_checkout_pending_configuration",
      method: state.mode === "anonimo" ? "fake_pix_qr" : "fake_form_payload",
      pixCopyPaste: state.mode === "anonimo" ? "00020101021226860014br.gov.bcb.pix2564checkout-fake-doacao-instituto-jesus-e-bom520400005303986540" : null
    },
    consent: {
      privacyAccepted: true,
      communicationAccepted: state.mode !== "anonimo"
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

export function DonationCheckoutClient() {
  const [state, setState] = useState<CheckoutFormState>(initialState);
  const [saving, setSaving] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("modo") === "anonimo" ? "anonimo" : "dados";
    const type = params.get("tipo") === "mensal" ? "mensal" : "unica";
    const amount = params.get("valor") || "50";

    setState((current) => ({
      ...current,
      mode,
      donationType: type,
      amount
    }));
  }, []);

  const payloadPreview = useMemo(() => buildCheckoutPayload(state), [state]);

  function update<K extends keyof CheckoutFormState>(key: K, value: CheckoutFormState[K]) {
    setState((current) => ({ ...current, [key]: value }));
  }

  async function submitPayload(event?: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    setSaving(true);

    const payload = buildCheckoutPayload(state);
    console.log("[DoacaoCheckoutPayload]", payload);

    try {
      await fetch("/api/donation-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    } catch {
      // A integração real será definida depois. O payload já fica disponível no console.
    } finally {
      setSaving(false);
      setSuccessOpen(true);
    }
  }

  async function copyFakePix() {
    const code = String(payloadPreview.checkout.pixCopyPaste || "PIX-DEMONSTRATIVO-INSTITUTO-JESUS-E-BOM");
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <main className="checkoutPage checkoutFakePage">
        <section className="checkoutHero section">
          <div className="container checkoutHeaderMini">
            <a className="checkoutBack" href="/doacao">
              <ArrowLeft size={18} />
              Voltar para doação
            </a>
            <span className="checkoutSafe">
              <ShieldCheck size={18} />
              Checkout demonstrativo
            </span>
          </div>

          <div className="container checkoutFakeShell">
            <div className="checkoutCopy">
              <span className="donationEyebrow">Doação</span>
              <h1>Finalize sua intenção de doação</h1>
              <p>
                Esta tela simula a experiência de checkout enquanto o método oficial de pagamento é configurado.
                O fluxo já prepara o payload para integração futura.
              </p>

              <div className="checkoutSummary">
                <div>
                  <small>Tipo</small>
                  <strong>{state.donationType === "mensal" ? "Doação mensal" : "Doação única"}</strong>
                </div>
                <div>
                  <small>Valor</small>
                  <strong>{money(state.amount)}</strong>
                </div>
                <div>
                  <small>Modo</small>
                  <strong>{state.mode === "anonimo" ? "Anônima" : "Com dados"}</strong>
                </div>
              </div>
            </div>

            <div className="checkoutFakeCard">
              <div className="checkoutModeTabs" role="tablist" aria-label="Escolha a forma de checkout">
                <button
                  type="button"
                  className={state.mode === "dados" ? "active" : ""}
                  onClick={() => update("mode", "dados")}
                >
                  Doar agora
                </button>
                <button
                  type="button"
                  className={state.mode === "anonimo" ? "active" : ""}
                  onClick={() => update("mode", "anonimo")}
                >
                  Doação anônima
                </button>
              </div>

              {state.mode === "anonimo" ? (
                <div className="fakeQrFlow">
                  <span className="checkoutIcon"><QrCode size={28} /></span>
                  <h2>QR Code da doação</h2>
                  <p>
                    Para doação anônima, mostramos somente o QR Code demonstrativo e o valor escolhido.
                  </p>

                  <div className="fakeQrBox" aria-label="QR Code demonstrativo">
                    {qrPattern.map((active, index) => (
                      <span key={index} className={active ? "on" : ""} />
                    ))}
                  </div>

                  <div className="fakePixInfo">
                    <strong>{money(state.amount)}</strong>
                    <span>QR Code demonstrativo para aprovação visual.</span>
                  </div>

                  <button className="donationSubmit" type="button" onClick={copyFakePix}>
                    <Copy size={18} />
                    {copied ? "Código copiado" : "Copiar código PIX"}
                  </button>

                  <button className="checkoutGhostButton" type="button" onClick={() => submitPayload()}>
                    Confirmar intenção anônima
                  </button>
                </div>
              ) : (
                <form className="checkoutFullForm" onSubmit={submitPayload}>
                  <span className="checkoutIcon"><Heart size={28} fill="currentColor" /></span>
                  <h2>Dados do doador</h2>
                  <p>
                    Preencha os dados para a equipe dar continuidade quando o checkout real for conectado.
                  </p>

                  <label>
                    Valor da doação
                    <div className="currencyInput">
                      <span>R$</span>
                      <input
                        inputMode="decimal"
                        value={state.amount}
                        onChange={(event) => update("amount", event.target.value)}
                        required
                      />
                    </div>
                  </label>

                  <div className="checkoutFieldGrid">
                    <label>
                      Nome completo
                      <input
                        value={state.name}
                        onChange={(event) => update("name", event.target.value)}
                        placeholder="Seu nome"
                        required
                      />
                    </label>
                    <label>
                      WhatsApp
                      <input
                        value={state.whatsapp}
                        onChange={(event) => update("whatsapp", event.target.value)}
                        placeholder="(21) 00000-0000"
                        required
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
                      CPF/CNPJ
                      <input
                        value={state.document}
                        onChange={(event) => update("document", event.target.value)}
                        placeholder="Opcional"
                      />
                    </label>
                  </div>

                  <label>
                    Cidade / Estado
                    <input
                      value={state.city}
                      onChange={(event) => update("city", event.target.value)}
                      placeholder="Rio de Janeiro/RJ"
                    />
                  </label>

                  <label>
                    Mensagem opcional
                    <textarea
                      value={state.message}
                      onChange={(event) => update("message", event.target.value)}
                      rows={3}
                      placeholder="Conte como deseja apoiar ou deixe uma observação para a equipe."
                    />
                  </label>

                  <button className="donationSubmit" type="submit" disabled={saving}>
                    <Heart size={18} />
                    {saving ? "Preparando payload..." : "Enviar intenção de doação"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {successOpen && (
        <div className="donationModalBackdrop" role="presentation">
          <div className="donationModal" role="dialog" aria-modal="true" aria-labelledby="checkout-success-title">
            <button
              className="donationModalClose"
              type="button"
              onClick={() => setSuccessOpen(false)}
              aria-label="Fechar mensagem"
            >
              <X size={18} />
            </button>
            <span className="donationModalIcon"><Sparkles size={30} /></span>
            <h2 id="checkout-success-title">Payload preparado.</h2>
            <p>Recebemos suas informações. Em breve nossa equipe dará continuidade.</p>
            <small>O checkout real será conectado depois com o método oficial definido pela equipe.</small>
            <button className="donationModalButton" type="button" onClick={() => setSuccessOpen(false)}>
              Entendi
            </button>
          </div>
        </div>
      )}
    </>
  );
}
