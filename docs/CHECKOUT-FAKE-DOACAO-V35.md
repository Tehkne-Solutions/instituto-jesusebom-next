# Checkout fake de Doação — v35

## Objetivo

Ajustar a página `/doacao/checkout` para seguir o design da página `/doacao`, evitando aparência genérica ou fundo desconectado da identidade do Instituto Jesus é Bom.

## Ajustes aplicados

- Título principal reduzido.
- Fundo da página ajustado para hero escuro institucional.
- Overlay e imagem de fundo coerentes com a LP de doação.
- Card de checkout mantido limpo e com largura controlada.
- QR Code fake preservado para doação anônima.
- Formulário completo preservado para doação com dados.
- Payload continua sendo enviado para `/api/donation-leads`.
- Nenhum pagamento real é processado.

## Estados

### Doação anônima

Mostra:
- resumo do valor;
- QR Code demonstrativo;
- botão de copiar código PIX fake;
- confirmação de intenção anônima.

### Doar agora

Mostra:
- formulário completo;
- envio de payload;
- modal de sucesso.

## Observação

Quando o método real de pagamento for definido, substituir o bloco demonstrativo pelo provedor oficial ou webhook configurado.
