import type { Metadata } from "next";
import "./globals.css";
import { FloatingActions } from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "Instituto Jesus é Bom — Opções de Home",
  description: "Quatro propostas de homepage em Next.js para o Instituto Jesus é Bom, com foco em doação, formação integral, parcerias e uma versão completa unificada."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}<FloatingActions /></body>
    </html>
  );
}
