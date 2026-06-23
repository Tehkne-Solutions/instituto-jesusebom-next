# Vercel Fix — fluxo atual estabilizado

## Diagnóstico

O projeto apresentou falhas de instalação quando `npm ci` e lockfiles gerados fora da Vercel foram usados. A estratégia atual mantém o deploy sem `package-lock.json`, força o registry público do npm e usa `npm install` sem gerar lockfile.

## Configuração atual

`.npmrc`:

```txt
registry=https://registry.npmjs.org/
fund=false
audit=false
```

`vercel.json`:

```json
{
  "installCommand": "npm install --no-audit --no-fund --no-package-lock",
  "buildCommand": "npm run build",
  "framework": "nextjs"
}
```

## Regras

- Não commitar `node_modules/`.
- Não commitar `package-lock.json`.
- Não trocar para `npm ci` sem nova validação.
- Usar redeploy com **Clear Build Cache** quando houver alteração de dependências ou configuração de install.

## Comandos recomendados

```powershell
git rm -r --cached --ignore-unmatch node_modules
git rm --cached --ignore-unmatch package-lock.json

npm.cmd install --no-audit --no-fund --no-package-lock
npm.cmd run build
```

## V25 — Doação

A rota `/doacao` foi criada com formulário preparado para WhatsApp, e-mail e futura integração via webhook/planilha com `DONATION_LEADS_WEBHOOK_URL`.
