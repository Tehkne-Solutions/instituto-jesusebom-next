# Relatório — Hero da página Doação v33

## Fonte visual usada
Protótipo enviado pelo Rubens como referência pixel-perfect da landing page de doação.

## Problemas identificados na versão anterior

1. **Formulário pesado na primeira dobra**
   - O formulário estava exibindo campos de dados pessoais dentro da hero.
   - Isso deixava o bloco alto, poluído e diferente do protótipo.
   - No protótipo, o form inicial é simples: modo de doação, valor, valores sugeridos e CTA.

2. **Título fora da proporção**
   - O título estava mais alto e pesado do que o protótipo.
   - A quebra visual precisava permanecer em três blocos:
     - Sua doação hoje
     - transforma vidas
     - para sempre.

3. **Coluna esquerda sem alinhamento limpo**
   - O form precisava ficar abaixo do texto, com a mesma lógica de coluna.
   - A largura do form precisava acompanhar a coluna do título/subtítulo sem parecer um card solto.

4. **Vídeo não acompanhava o bloco esquerdo**
   - O card de vídeo precisava preencher a altura visual do bloco esquerdo.
   - O protótipo usa o vídeo como contraponto vertical forte, não como card pequeno deslocado.

## Ajustes aplicados

- Formulário da hero simplificado.
- Campos de dados pessoais movidos para uma segunda etapa em modal.
- Primeira etapa agora mantém apenas:
  - Doar agora / Doação anônima;
  - valor;
  - valores sugeridos;
  - CTA.
- Payload continua sendo montado e enviado para `/api/donation-leads`.
- Modal de dados coleta as informações necessárias para o payload.
- Hero ajustada para manter texto, form e vídeo com proporção mais próxima do protótipo.
- Vídeo configurado para preencher toda a altura visual da coluna direita.
- Título reduzido e travado em três linhas no desktop.

## Resultado esperado

A página `/doacao` fica mais fiel ao protótipo, com hero mais limpa, menos ruído visual, formulário mais leve e vídeo com presença equivalente ao bloco esquerdo.
