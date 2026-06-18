# Hotfix Vercel — ERESOLVE ESLint

Correção aplicada:

- `eslint` alterado de `9.16.0` para `8.57.1`.
- Motivo: `eslint-config-next@14.2.18` declara peer dependency `eslint@^7.23.0 || ^8.0.0`.
- Adicionado `engines.node >=18.18.0`.

Validação recomendada:

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

Commit sugerido:

```bash
git add package.json VERCEL-FIX.md
git commit -m "fix: align eslint version with next config"
git push origin main
```

## Correção adicional — TypeScript + Framer Motion

Erro corrigido:

```txt
Type error: Type ... is not assignable to type 'Omit<HTMLMotionProps<"div">, "ref">'.
Types of property 'onDrag' are incompatible.
```

Causa:
`StaggerContainer` estendia `HTMLAttributes<HTMLDivElement>` e repassava `...props` para `motion.div`. Isso faz o TypeScript misturar eventos React, como `onDrag`, com a assinatura própria do Framer Motion.

Solução aplicada:
`StaggerContainerProps` agora aceita somente props seguras usadas no projeto:
`className`, `id`, `role`, `style`, `aria-label` e `aria-labelledby`.

Arquivo corrigido:
`components/motion/StaggerContainer.tsx`



## V6

Correções de Vercel preservadas nesta versão da Home Oficial.
