# Vercel Fix v10 — npm Exit handler never called

A Vercel falhou antes do `next build`, durante a instalação de dependências:

```txt
npm error Exit handler never called!
```

Esse erro ocorre dentro do próprio npm. Para contornar, esta versão usa pnpm com Corepack.

## Configuração aplicada

`package.json`:

```json
{
  "packageManager": "pnpm@9.15.4",
  "engines": {
    "node": "20.x"
  }
}
```

`vercel.json`:

```json
{
  "installCommand": "corepack enable && pnpm install --no-frozen-lockfile",
  "buildCommand": "pnpm run build",
  "framework": "nextjs"
}
```

## Deploy

1. Subir esta versão para o GitHub.
2. Na Vercel, acionar Redeploy com **Clear Build Cache**.
3. Conferir se o log passa da etapa de instalação e entra em `pnpm run build`.

## Local

```bash
corepack enable
pnpm install
pnpm run build
```

Se estiver no PowerShell bloqueado, usar:

```powershell
cmd /c corepack enable
cmd /c pnpm install
cmd /c pnpm run build
```
