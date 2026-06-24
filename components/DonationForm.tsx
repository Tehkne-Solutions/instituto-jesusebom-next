"use client";

import { useState } from "react";
import { ArrowRight, Heart, ShieldCheck } from "lucide-react";

type DonationMode = "unica" | "mensal";

type DonationFormState = {
  mode: DonationMode;
  amount: string;
  anonymous: boolean;
};

const initialState: DonationFormState = {
  mode: "unica",
  amount: "50",
  anonymous: false
};

const suggestedAmounts = ["30", "50", "100", "200"];

function cleanCurrency(value: string) {
  return value.replace(/[^\d,\.]/g, "").replace(",", ".");
}

export function DonationForm() {
  const [state, setState] = useState<DonationFormState>(initialState);

  function update<K extends keyof DonationFormState>(key: K, value: DonationFormState[K]) {
    setState((current) => ({ ...current, [key]: value }));
  }

  function goToFakeCheckout(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams({
      modo: state.anonymous ? "anonimo" : "dados",
      tipo: state.mode,
      valor: cleanCurrency(state.amount || "50") || "50"
    });

    window.location.href = `/doacao/checkout?${params.toString()}`;
  }

  return (
    <form className="donationForm donationFormCompact" onSubmit={goToFakeCheckout}>
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
        <span>
          {state.anonymous
            ? "Você seguirá para um QR Code demonstrativo."
            : "Você seguirá para completar os dados da doação."}
        </span>
      </div>
    </form>
  );
}
