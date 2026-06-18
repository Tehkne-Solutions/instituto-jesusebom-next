# Vercel Fix — V11

## Diagnóstico

Os últimos logs mostram que o deploy morre antes do `next build`, ainda na instalação de dependências.

- `npm install`/`npm ci` com Node 20: `npm error Exit handler never called!`
- `pnpm` com Corepack: `ERR_INVALID_THIS` ao buscar pacotes no registry

O primeiro build que chegou a compilar o Next instalou dependências quando o projeto ainda estava no Node padrão da Vercel, indicado nos logs como `24.x`.

## Correção aplicada

- Removido `engines.node` do `package.json`.
- Removido `packageManager: pnpm`.
- Mantido `package-lock.json`.
- `vercel.json` usa:

```json
{
  "installCommand": "npm ci --no-audit --no-fund",
  "buildCommand": "npm run build",
  "framework": "nextjs"
}
```

## Vercel

1. Subir esta versão no GitHub.
2. Em Vercel, manter Node.js Version em Project Settings como `24.x`.
3. Rodar redeploy com **Clear Build Cache**.

## Local

```bash
rm -rf node_modules .next
npm ci --no-audit --no-fund
npm run build
```
