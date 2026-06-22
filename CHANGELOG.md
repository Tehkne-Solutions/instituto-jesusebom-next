
## v20 — Remoção do degradê da hero da Home

- Removido o `linear-gradient` aplicado diretamente no background da hero principal da Home.
- Mantida a imagem da hero terminando de forma natural, sem fade/degradê visual.
- Adicionado apenas `text-shadow` leve para preservar legibilidade da copy sem degradê.

## v19 — Refinamento visual, doação e páginas internas

- Reduzida a escala tipográfica de títulos da home e páginas internas.
- Removidos fades/degradês pesados das heros das páginas internas.
- Páginas internas passam a usar padrão editorial: texto à esquerda e imagem à direita no topo.
- Indicadores com mais de 4 itens organizados em 3 colunas por 2 linhas.
- Removidos chips/tabs sem ação real na home.
- Cards de atuação e apoio recebem degradê diagonal azul → verde com textos e ícones brancos.
- Corrigida composição da seção “Quem somos” para evitar sobreposição entre imagem e texto.
- Seção “Quatro caminhos” mantém somente os 4 caminhos principais e remove dados privados de doação.
- Bloco flutuante deixa de ser “Atendimento” e passa a ser fluxo “Seja um doador”.
- Criada rota placeholder `/doacao/checkout` com o texto “Aqui vai o checkout de pagamento.”
- Corrigido import do ícone `ShieldCheck` em `LegalPage`.


## v17 — Páginas legais, footer funcional e consentimento 2026

- Mantida a Home Completa como versão principal.
- Criadas páginas legais: Política de Privacidade, Termos de Uso, Política de Cookies, Transparência, Relatórios e Trabalhe Conosco/Voluntariado.
- Atualizados links do footer, topbar e blocos de transparência para rotas reais.
- Botão flutuante de privacidade alterado para ícone-only.
- Tarja de cookies atualizada para padrão 2026 com opções: aceitar todos, somente essenciais e personalizar.
- Criado painel de preferências por categoria: necessários, preferências, métricas e comunicação.
- Preferências salvas em localStorage com chave `jeb_cookie_consent_2026`.
- Mantido WhatsApp flutuante redondo, sem borda, e sem alterar a lógica de atendimento.
- ZIP mantido sem `node_modules` e sem `package-lock.json`.



## V16 — Hotfix botão WhatsApp flutuante

- Ajustado botão flutuante do WhatsApp para formato redondo.
- Removida borda do botão de WhatsApp.
- Corrigido tamanho/centralização do SVG do WhatsApp para evitar deformação visual.
- Mantida a lógica do bubble de atendimento e conteúdo institucional.


## v15 — Clean Registry Install para Vercel

- Removido `package-lock.json` gerado em ambiente de sandbox para evitar URLs de registry internas no deploy.
- Ajustado `vercel.json` para usar `npm install --no-audit --no-fund --no-package-lock`.
- Fixado registry público em `.npmrc` com `registry=https://registry.npmjs.org/`.
- Mantido favicon oficial WebP e ajustes visuais da v14.
- ZIP segue sem `node_modules`.

# CHANGELOG

## V6 — Home Oficial / Ajustes Rubens

- Mantida apenas a Home Completa como rota principal `/`.
- Removidas as rotas de comparação: `/impacto-doacao`, `/formacao-integral`, `/escola-parcerias` e `/home-completa`.
- Hero em largura total preservada.
- Imagem da hero trocada por foto real sem texto sobreposto.
- Fonte global alterada para Montserrat com `next/font/google`.
- Header sticky preservado.
- Logo do header trocado por asset do logo oficial recortado do PDF institucional.
- Ícone de busca removido do header.
- Card lateral da hero substituído por painel de ajuda via WhatsApp com itens de doação, doação recorrente, voluntariado e parcerias.
- Indicadores de impacto ajustados com ícone acima do número para melhorar respiro visual.
- Imagens de cards, mosaico, campanha e seções trocadas por fotos reais extraídas do material oficial/site atual.
- Botão flutuante de WhatsApp mantido no lado direito, abaixo do botão voltar ao topo.
- Botão de privacidade mantido no lado esquerdo.
- Tarja de cookies preservada na identidade visual do site.
- Efeito gloss/spotlight do mouse removido da hero.
- Mantidas as correções anteriores de Vercel: ESLint 8.57.1, `eslint-config-next` 14.2.18 e typefix do Framer Motion.

## V5 — Home Completa Unificada

- Criada rota `/home-completa` unindo conteúdo e estratégia das três versões anteriores.
- Hero full width com imagem oficial, sem efeito gloss/spotlight do mouse.
- Header sticky preservado.
- Adicionados botões flutuantes: voltar ao topo e contato no canto direito.
- Adicionado botão fixo de Privacidade no canto esquerdo.
- Adicionada tarja de cookies na identidade visual do site.
- Incluídas seções completas: impacto, o que fazemos, quem somos, jornada de formação, como ajudar, projetos, escola cristã integral, transparência, FAQ, newsletter, privacidade e CTA final.

## Motion Premium — Instituto Jesus é Bom

- Adicionada camada de animações premium com Framer Motion.
- Criados componentes reutilizáveis de reveal, fade, stagger e spotlight.
- Aplicadas microinterações em cards, botões, hero, seções e CTAs.
- Adicionado suporte a `prefers-reduced-motion`.

## Fix Vercel Build — StaggerContainer TypeScript

- Corrigido erro de TypeScript em `components/motion/StaggerContainer.tsx`.
- Removido uso de `HTMLAttributes<HTMLDivElement>` no wrapper de `motion.div`, evitando conflito entre `onDrag` do React e `onDrag` do Framer Motion.

## V7 — Logo oficial e bubble WhatsApp personalizado

- Mantida somente a Home Completa como rota principal.
- Logo do header passou a usar a URL oficial informada: `https://jesusebom.org/wp-content/uploads/2023/09/Logo-Jesus-e-bom-1024x401.png`.
- Bubble flutuante de atendimento inspirado no componente do projeto Savol Seminovos, personalizado para o Instituto Jesus é Bom.
- Conteúdo do atendimento adaptado para Doação via PIX, Doação recorrente, Voluntariado, Parcerias e Transparência.
- Painel direito da hero ajustado para simular atendimento WhatsApp com itens de doação.
- Sem telefone/wa.me fixo inventado: o componente usa `NEXT_PUBLIC_JEB_WHATSAPP_PHONE` quando configurado; sem essa variável, direciona para `#contato`.
- Ícone de busca permanece removido.
- Montserrat, header sticky, botão voltar ao topo, privacidade/cookies e remoção do spotlight/gloss da hero preservados.

## V7.1 — Montserrat sem next/font

- Removido `next/font/google` para evitar falha de build quando o ambiente não consegue buscar Google Fonts durante o build.
- Mantido uso de Montserrat via `<link>` no layout e fallback seguro no CSS.

## V8 — Correção npm/Vercel install

- Removido `package-lock.json` gerado em ambiente interno para evitar resolução por registry/cache não público.
- Adicionado `.npmrc` com `audit=false` e `fund=false` para instalação mais limpa na Vercel.
- Adicionado `vercel.json` com `installCommand` explícito: `npm install --no-audit --no-fund`.
- Fixado Node em `20.x` para evitar upgrade automático de major version na Vercel.
- Mantida a Home Completa oficial como rota principal `/`.



## V9 — Correção install Vercel

- Restaurado `package-lock.json` compatível com as dependências atuais.
- Alterado install command da Vercel para `npm ci --no-audit --no-fund`.
- Mantido Node 20.x.
- Motivo: evitar o erro intermitente do `npm install`: `Exit handler never called!`.

## V11 — Vercel Node padrão + npm ci

- Removido override de `engines.node` para permitir a Vercel usar o Node definido no Project Settings.
- Removido fluxo `pnpm`/Corepack após erro `ERR_INVALID_THIS` no fetch do registry.
- Restaurado fluxo `npm ci --no-audit --no-fund` com `package-lock.json`.
- Mantida a Home Completa oficial como rota principal.

## Hotfix visual — favicon, hero e WhatsApp

- Adicionado favicon e apple-touch-icon em `public/`.
- Configurados ícones no metadata do Next App Router.
- Refinada a tipografia do título da hero com Montserrat, `letter-spacing` menos agressivo e `line-height` mais legível.
- Corrigido o SVG e o CSS do botão flutuante de WhatsApp para evitar distorção/deformação.
- Adicionado `.gitignore` para impedir commit de `node_modules`, `.next` e arquivos locais.


## v14 — Favicon oficial sem alterações de build

- Aplicado `public/favicon-Jesus-e-bom.webp` como favicon principal.
- Mantida a base da v12, sem alterar `package.json`, lockfile ou configuração de instalação da Vercel.
- ZIP gerado sem `node_modules`.


## v18 — Páginas internas oficiais

- Criadas as páginas `/quem-somos`, `/o-que-fazemos`, `/impacto-social`, `/como-ajudar`, `/voluntariado` e `/contato`.
- Conteúdo estruturado com fidelidade ao Pacote de Conteúdo Principal do Site e ao Institucional_v3.
- Atualizada navegação principal para páginas reais.
- Atualizado footer com links globais e contatos oficiais.
- Atualizada página `/transparencia` com conteúdo institucional oficial.
- Removida nota de validação visível do componente LegalPage.
- WhatsApp passa a usar como fallback o número oficial da Secretaria: 21 97346-8327.
- Mantida configuração de deploy sem `node_modules` e sem `package-lock.json`.
