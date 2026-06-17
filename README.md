# Jesus é Bom — 4 opções de Home em Next.js

Projeto preparado pela Tehkné Solutions para apresentar **3 caminhos reais de homepage** ao cliente, no mesmo repositório, usando copy e estrutura baseadas no site oficial atual e no PDF institucional `Institucional_v2.pdf`.

## Rotas

- `/` — Hub de comparação das 4 opções.
- `/impacto-doacao` — Opção 01: foco em conversão, doação e prova social.
- `/formacao-integral` — Opção 02: foco em missão, formação integral e acolhimento.
- `/escola-parcerias` — Opção 03: foco em visão de futuro, escola cristã integral e parcerias.

## Como rodar

```bash
npm install
npm run dev
```

Depois acesse:

```txt
http://localhost:3000
```

## Validação

```bash
npm run build
```

## Fontes usadas

- Print do site oficial atual enviado no chat.
- PDF `Institucional_v2.pdf` enviado no chat.
- Assets recortados do print atual e páginas renderizadas do PDF como referências visuais reais.

## Importante

Não foram inventados telefones, parceiros, depoimentos reais, metas financeiras, CNPJ, chaves PIX ou links internos definitivos. Onde o conteúdo não estava confirmado, o texto foi tratado como CTA institucional ou caminho de navegação a validar.


## Hotfix Vercel

Este pacote já está com `eslint@8.57.1`, compatível com `eslint-config-next@14.2.18`.


## Fase 2 — Motion, Microinterações e UX Premium

Esta versão já inclui a camada de movimento premium para apresentação ao cliente:

- Framer Motion instalado;
- animação de entrada no hero;
- reveal on scroll em títulos de seção;
- entrada suave/stagger nos cards principais;
- mouse spotlight sutil nos heros;
- hover premium em cards, botões, tabs e imagens;
- respeito a `prefers-reduced-motion`;
- sem alteração da copy oficial, métricas, imagens ou estrutura das 3 homes.

Rotas mantidas:

- `/` — comparativo das 4 opções;
- `/impacto-doacao`;
- `/formacao-integral`;
- `/escola-parcerias`.

Validação recomendada:

```bash
npm install
npm run build
```


## Opção 04 — Home Completa Unificada

Rota:

```txt
/home-completa
```

Esta versão une a estratégia das três homes anteriores em uma única proposta mais completa para validação com o cliente.

Inclui:
- hero full width;
- header sticky;
- botão voltar ao topo;
- botão de contato flutuante abaixo do voltar ao topo;
- botão de privacidade no canto esquerdo;
- tarja de cookies na identidade visual do site;
- remoção do efeito gloss/spotlight do mouse na hero;
- seções completas de impacto, missão, projetos, como ajudar, escola cristã integral, transparência, FAQ, newsletter, privacidade e CTA final.

Validação executada:

```bash
npm run build
```
