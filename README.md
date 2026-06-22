# Instituto Jesus é Bom — Home oficial v19

Versão com Home Completa principal, páginas institucionais, páginas legais, refinamento visual, fluxo de doação e consentimento de cookies atualizado.

## Rotas principais

- `/` — Home Completa oficial
- `/privacidade` — Política de Privacidade
- `/termos-de-uso` — Termos de Uso
- `/politica-de-cookies` — Política de Cookies
- `/transparencia` — Transparência
- `/relatorios` — Relatórios
- `/trabalhe-conosco` — Trabalhe Conosco e Voluntariado
- `/doacao/checkout` — Placeholder para futuro checkout de pagamento

## Cookies e privacidade

O botão flutuante do lado esquerdo abre a Central de Privacidade sem texto visível, apenas ícone. A tarja de cookies permite aceitar todos, manter somente essenciais ou personalizar categorias.

Categorias implementadas:

- Necessários
- Preferências
- Métricas
- Comunicação

## Vercel

O projeto deve continuar sem `node_modules` no Git. O fluxo configurado evita lockfile contaminado e usa registry público.

```json
{
  "installCommand": "npm install --no-audit --no-fund --no-package-lock",
  "buildCommand": "npm run build",
  "framework": "nextjs"
}
```


---

# Deploy Vercel — v15

Esta versão remove o `package-lock.json` porque o lockfile anterior foi gerado em ambiente de sandbox e continha URLs internas de registry. Na Vercel, use `npm install --no-audit --no-fund --no-package-lock` conforme `vercel.json`.

Não commitar `node_modules`, `.next` ou lockfile gerado localmente.

# Instituto Jesus é Bom — Home oficial em Next.js

Projeto preparado pela Tehkné Solutions para apresentar a **Home Completa vencedora** do Instituto Jesus é Bom.

Esta versão mantém apenas uma homepage principal em `/`, consolidando o melhor das versões anteriores:
impacto/doação, missão/formação integral, escola cristã integral, parcerias, transparência, privacidade e cookies.

## Rota

- `/` — Home Completa Oficial

## Ajustes Rubens — V6

- Mantida apenas a Home Completa.
- Hero em largura total.
- Header sticky preservado.
- Fundo da hero trocado por foto real sem texto sobreposto.
- Fonte global alterada para Montserrat via `next/font/google`.
- Logo trocado por recorte do logo oficial presente no PDF institucional.
- Ícone de busca removido do header.
- Card lateral da hero trocado por painel de ajuda via WhatsApp com opções de doação/voluntariado/parceria.
- Indicadores de impacto reorganizados com ícone acima do número.
- Imagens das seções e cards trocadas por fotos reais extraídas do material oficial/site atual.
- Botão flutuante de WhatsApp mantido no canto direito, abaixo do voltar ao topo.
- Botão de privacidade mantido no canto esquerdo.
- Tarja de cookies mantida na identidade visual do site.
- Efeito gloss/spotlight do mouse removido da hero.

## Como rodar

```bash
npm install
npm run dev
```

Acesse:

```txt
http://localhost:3000
```

## Validação

```bash
npm run build
```

## Fonte de conteúdo

- Site oficial atual/print enviado no chat.
- PDF `Institucional_v2.pdf`.
- Ajustes solicitados por Rubens em 18/06/2026.

## Importante

Não foram inventados telefones, PIX, CNPJ, parceiros, depoimentos reais, metas financeiras ou links definitivos. Onde o dado não estava confirmado, o CTA aponta para contato/validação institucional.

## V7 — Ajustes Rubens / Bubble WhatsApp

Esta versão mantém apenas a Home Completa como página principal e adiciona o bubble de WhatsApp personalizado com conteúdo oficial do Instituto.

### Logo oficial

O header usa a URL oficial enviada:

```txt
https://jesusebom.org/wp-content/uploads/2023/09/Logo-Jesus-e-bom-1024x401.png
```

### WhatsApp

O bubble funciona com conteúdo de atendimento para:

- Doação via PIX
- Doação recorrente
- Voluntariado
- Parcerias
- Transparência / prestação de contas

Por segurança, nenhum telefone foi inventado. Para ativar o link direto do WhatsApp, configure no ambiente:

```env
NEXT_PUBLIC_JEB_WHATSAPP_PHONE=55DDDNUMERO
```

Sem essa variável, o CTA final do atendimento aponta para `#contato`.



## V9 — Correção install Vercel

- Restaurado `package-lock.json` compatível com as dependências atuais.
- Alterado install command da Vercel para `npm ci --no-audit --no-fund`.
- Mantido Node 20.x.
- Motivo: evitar o erro intermitente do `npm install`: `Exit handler never called!`.


## V11 — Correção de instalação na Vercel

Esta versão remove o override de Node 20.x e volta a usar o Node configurado no projeto da Vercel, que nos logs estava como 24.x. O build anterior que chegou ao `next build` instalou dependências nesse ambiente; os erros recentes aconteceram depois da troca para Node 20.x/pnpm.

Comandos locais:

```bash
npm ci --no-audit --no-fund
npm run build
```


## V12 — Hotfix visual

Esta versão inclui:

- favicon oficial gerado em `public/favicon.ico`, `public/icon.png` e `public/apple-touch-icon.png`;
- ajuste de tipografia do H1 da hero para ficar mais próximo da hierarquia visual aprovada nas seções internas;
- correção do ícone do WhatsApp flutuante com SVG limpo e CSS com dimensões fixas;
- `.gitignore` para impedir que `node_modules/` e `.next/` sejam versionados.

### Importante para Git

Não use `git add .` se `node_modules/` aparecer no `git status`. Use:

```powershell
git rm -r --cached node_modules
```

Depois faça commit apenas dos arquivos reais do projeto.


## v14 — Favicon oficial

Esta versão parte da v12 e altera apenas os assets/metadados de favicon. Não altera dependências, scripts ou setup de build.


## V16 — Hotfix WhatsApp

Botão flutuante do WhatsApp ajustado para formato redondo, sem borda e com ícone centralizado.


## v18 — Páginas institucionais oficiais

Esta versão adiciona as páginas internas com conteúdo baseado no `Pacote de Conteúdo Principal do Site.docx` e na apresentação `Institucional_v3.pdf`.

Novas rotas:
- `/quem-somos`
- `/o-que-fazemos`
- `/impacto-social`
- `/como-ajudar`
- `/voluntariado`
- `/contato`

Também foi atualizada a navegação global, o footer e os contatos oficiais:
- WhatsApp Secretaria: 21 97346-8327
- E-mail: contato@jesusebom.org
- Instagram: @institutojesusebom

Importante: `node_modules/` e `package-lock.json` continuam ignorados para evitar instabilidade no deploy da Vercel.


## v19 — Refinamento visual

Esta versão reduz a escala dos títulos, remove fades pesados das páginas internas, reorganiza grids, aplica cards coloridos em azul/verde, ajusta o bloco flutuante para “Seja um doador” e cria a rota `/doacao/checkout` como placeholder para integração futura.

### v20 — Ajuste da hero da Home

A hero principal da Home não usa mais degradê sobre a imagem. A imagem termina naturalmente e a legibilidade do texto é preservada com sombra sutil no texto, sem fade visual.

### v21

Hero da Home corrigida sem degradê/fade: `.heroFullBg` usa apenas a imagem e `.heroFull::after` foi desativado.
