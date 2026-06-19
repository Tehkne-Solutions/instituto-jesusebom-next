import type { Metadata } from "next";
import "./globals.css";
import { FloatingActions } from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "Instituto Jesus é Bom — Home Oficial",
  description: "Homepage oficial em Next.js para o Instituto Jesus é Bom, com foco em impacto social, doação, formação integral, transparência e visão da escola cristã integral.",
  icons: {
    icon: [
      {
        url: "/favicon-Jesus-e-bom.webp",
        type: "image/webp",
        sizes: "100x100"
      },
      {
        url: "/favicon.ico",
        sizes: "any"
      }
    ],
    shortcut: "/favicon-Jesus-e-bom.webp",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}<FloatingActions /></body>
    </html>
  );
}
