# Relatório — Hero da LP de Doação v31

## Referência usada

A imagem do protótipo enviada pelo Rubens foi tratada como fonte de verdade visual da hero da rota `/doacao`.

## Problemas identificados na versão anterior

1. O título estava maior que o protótipo e quebrava em linhas demais.
2. A estrutura do H1 forçava blocos de texto que não respeitavam a leitura visual do protótipo.
3. O vídeo/card da direita estava alto e deslocado, gerando sensação de que a imagem estava fora do enquadro.
4. A hero ficava mais pesada e vertical do que a referência.
5. O formulário estava correto abaixo do texto, mas precisava acompanhar a nova escala do título.

## Correções aplicadas

1. Título ajustado para leitura em três linhas no desktop:
   - “Sua doação hoje”
   - “transforma vidas”
   - “para sempre.”

2. Redução da escala tipográfica:
   - fonte máxima reduzida;
   - `line-height` suavizado;
   - `letter-spacing` menos agressivo.

3. Card de vídeo:
   - largura reduzida para proporção mais próxima do protótipo;
   - altura controlada;
   - `object-position: center top`;
   - overlay interno preservado apenas para leitura do texto do vídeo.

4. Hero:
   - altura total reduzida;
   - grid centralizado;
   - espaçamento entre coluna esquerda e vídeo ajustado.

5. Formulário:
   - preservado abaixo do texto;
   - largura e espaçamentos mantidos compactos;
   - payload e modal preservados.

## Arquivo principal alterado

- `app/globals.css`

## Observação

A correção evita mexer em lógica, API, payload, rotas, Header/Footer globais ou demais seções da página.
