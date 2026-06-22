import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Heart, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Doação — Instituto Jesus é Bom",
  description: "Página preparada para receber o checkout de doação do Instituto Jesus é Bom."
};

export default function DonationCheckoutPage() {
  return (
    <>
      <Header />
      <main className="checkoutPage">
        <section className="section">
          <div className="container checkoutShell">
            <div className="checkoutIntro">
              <span className="eyebrow">Doação</span>
              <h1>Seja um doador</h1>
              <p>
                Aqui vai o checkout de pagamento.
              </p>
              <div className="checkoutNotice">
                <Heart size={22} />
                <strong>Aqui vai o checkout de pagamento.</strong>
              </div>
            </div>
            <aside className="checkoutAside">
              <ShieldCheck size={26} />
              <h2>Doação com propósito</h2>
              <p>
                Sua contribuição ajuda a manter projetos gratuitos de educação, alimentação,
                esporte, fé, cuidado emocional, proteção e desenvolvimento para crianças,
                adolescentes e famílias da Comunidade César Maia.
              </p>
              <a className="btn primary" href="/como-ajudar">Ver outras formas de ajudar</a>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
