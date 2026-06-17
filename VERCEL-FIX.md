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
