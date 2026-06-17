
## Home Completa Unificada — Opção 04

- Criada rota `/home-completa` unindo conteúdo e estratégia das três versões anteriores.
- Hero full width com imagem oficial, sem efeito gloss/spotlight do mouse.
- Header sticky preservado.
- Adicionados botões flutuantes: voltar ao topo e contato no canto direito.
- Adicionado botão fixo de Privacidade no canto esquerdo.
- Adicionada tarja de cookies na identidade visual do site, com aceitar, somente essenciais e link de política.
- Incluídas seções completas: impacto, o que fazemos, quem somos, jornada de formação, como ajudar, projetos, escola cristã integral, transparência, FAQ, newsletter, privacidade e CTA final.
- Build validado com `npm run build`.

# CHANGELOG

## Motion Premium — Instituto Jesus é Bom

- Adicionada camada de animações premium com Framer Motion.
- Criados componentes reutilizáveis de reveal, fade, stagger e spotlight.
- Aplicadas microinterações em cards, botões, hero, seções e CTAs.
- Adicionado efeito de mouse spotlight sutil no hero das 3 versões.
- Adicionados reveals suaves em títulos de seção e cards.
- Melhorados estados de hover de cards, botões, tabs e imagens.
- Mantida a copy oficial e a estrutura das 3 versões de home.
- Preservada compatibilidade com Next.js 14 e Vercel.
- Adicionado suporte a `prefers-reduced-motion`.

## Fix Vercel Build — StaggerContainer TypeScript

- Corrigido erro de TypeScript em `components/motion/StaggerContainer.tsx`.
- Removido uso de `HTMLAttributes<HTMLDivElement>` no wrapper de `motion.div`, evitando conflito entre `onDrag` do React e `onDrag` do Framer Motion.
- Mantidos `className`, `id`, `role`, `style`, `aria-label` e `aria-labelledby` como props seguras.
- Preservadas as correções anteriores de Vercel: ESLint 8.57.1, `eslint-config-next` 14.2.18 e Node `>=18.18.0`.

