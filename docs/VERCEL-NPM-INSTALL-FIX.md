# Correção Vercel — npm Exit handler never called

O erro `npm error Exit handler never called!` é uma falha do próprio npm durante a instalação, não um erro de TypeScript/Next do projeto.

Ajustes aplicados nesta versão:

- Removido `package-lock.json` para a Vercel resolver dependências diretamente do registry público.
- Adicionado `.npmrc`:
  - `fund=false`
  - `audit=false`
  - `legacy-peer-deps=false`
- Adicionado `vercel.json`:
  - `installCommand`: `npm install --no-audit --no-fund`
  - `buildCommand`: `npm run build`
- Fixado Node em `20.x` no `package.json`.

Após subir no GitHub, fazer redeploy na Vercel com **Clear Build Cache**.

Comandos locais recomendados:

```bash
rm -rf node_modules .next package-lock.json
npm install --no-audit --no-fund
npm run build
```
