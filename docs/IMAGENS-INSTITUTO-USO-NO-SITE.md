## Auditoria final

Resumo da auditoria de uso de imagens institucionais no site:

- Sem imagens repetidas dentro da mesma página.
- Sem uso direto de `/assets/instituto/...` fora de `data/institutoImages.ts`.
- Imagens em `needs-crop` permanecem fora de produção até crop/validação.
- A imagem `paginas/lideranca-interacao-crianca-validar-pablo.jpg` (registry: `institutoImages.paginas.liderancaValidarPablo`) NÃO pode ser usada como foto/thumbnail do Pablo sem validação explícita do Rubens.
- Thumb/vídeo do Pablo está em placeholder pendente de frame oficial validado.

Instruções finais:

1. Sempre use `data/institutoImages.ts` para referenciar imagens institucionais no código.
2. Não use caminhos literais `/assets/instituto/...` em componentes de produção (exceto para placeholders documentados com TODO).
3. Valide imagens sensíveis (crianças, prints, rosto de fundador) antes de usá-las em heros/miniaturas.
4. Mantenha `needs-crop` fora do deploy até o processamento de crop e revisão visual.

Documentado por: Automação de auditoria — scripts/reportagem
