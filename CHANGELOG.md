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

