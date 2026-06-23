import { NextResponse } from "next/server";

type DonationLeadPayload = {
  mode?: string;
  amount?: string;
  anonymous?: boolean;
  name?: string;
  whatsapp?: string;
  email?: string;
  city?: string;
  message?: string;
  source?: string;
  createdAt?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as DonationLeadPayload;
  const webhookUrl = process.env.DONATION_LEADS_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      return NextResponse.json({
        ok: response.ok,
        configured: true,
        status: response.status
      });
    } catch (error) {
      return NextResponse.json({
        ok: false,
        configured: true,
        error: "Falha ao enviar lead para o webhook configurado."
      }, { status: 502 });
    }
  }

  return NextResponse.json({
    ok: true,
    configured: false,
    message: "Lead recebido no frontend. Configure DONATION_LEADS_WEBHOOK_URL para enviar a uma planilha, CRM ou automação."
  });
}
