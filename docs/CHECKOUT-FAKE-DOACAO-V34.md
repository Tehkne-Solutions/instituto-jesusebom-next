# Checkout fake de doação — v34

## Objetivo

Criar uma página de checkout demonstrativa para aprovação de UX antes da integração real de pagamento.

## Rotas

- `/doacao`
- `/doacao/checkout`

## Comportamento

### Doação anônima

Quando o usuário escolhe **Doação anônima** na LP e clica em **Quero transformar vidas**, ele é levado para:

```txt
/doacao/checkout?modo=anonimo&valor=<valor>&tipo=<unica|mensal>
```

A tela mostra:

- resumo do valor;
- QR Code demonstrativo;
- botão para copiar código PIX fake;
- botão para confirmar intenção anônima;
- envio do payload para `/api/donation-leads`.

### Doar agora

Quando o usuário escolhe **Doar agora**, ele é levado para:

```txt
/doacao/checkout?modo=dados&valor=<valor>&tipo=<unica|mensal>
```

A tela mostra:

- resumo da doação;
- formulário completo de dados;
- envio do payload para `/api/donation-leads`.

## Observação

Nenhum pagamento real é processado nesta versão. A tela é demonstrativa e preparada para integração futura com checkout real, WhatsApp, e-mail, webhook ou planilha.
