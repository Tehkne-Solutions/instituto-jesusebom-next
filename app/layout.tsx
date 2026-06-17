import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Instituto Jesus é Bom — Opções de Home",
  description: "Três propostas de homepage em Next.js para o Instituto Jesus é Bom, com foco em doação, formação integral e parcerias."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
