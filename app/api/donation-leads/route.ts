import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  return NextResponse.json({
    ok: true,
    configured: false,
    message: "Payload de doação recebido. Integração com WhatsApp, e-mail, planilha ou checkout será configurada depois.",
    payload
  });
}
