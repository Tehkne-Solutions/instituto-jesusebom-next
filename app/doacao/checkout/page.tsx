import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { DonationCheckoutClient } from "@/components/DonationCheckoutClient";

export const metadata: Metadata = {
  title: "Checkout de Doação — Instituto Jesus é Bom",
  description:
    "Checkout demonstrativo da página de doação do Instituto Jesus é Bom, preparado para payload e futura integração de pagamento."
};

export default function DonationCheckoutPage() {
  return (
    <>
      <DonationCheckoutClient />
      <Footer />
    </>
  );
}
