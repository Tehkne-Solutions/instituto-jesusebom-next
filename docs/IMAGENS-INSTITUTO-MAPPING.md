# Mapeamento de Imagens — Instituto Jesus é Bom

## Objetivo

Automatizar a preparação e organização das fotos reais do Instituto para uso no site Next.js. O script `scripts/prepare-instituto-images.ps1` realiza extração, organização, renomeação e geração de um registry TypeScript.

## Estrutura final

public/assets/instituto/
home/
doacao/
paginas/
programas/
historias/
needs-crop/
arquivo-original/

data/
institutoImages.ts

## Como funciona

1. Coloque o arquivo `Fotos.zip` em `_incoming/Fotos.zip` na raiz do projeto.
2. Rode no PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\prepare-instituto-images.ps1
```

O script irá:

- Extrair o ZIP para `_incoming/Fotos_extraidas/`.
- Copiar e renomear arquivos mapeados para `public/assets/instituto/...`.
- Enviar arquivos que começarem com `WhatsApp` para `public/assets/instituto/needs-crop/` com nomes `historia-print-vertical-01.ext`, etc.
- Copiar arquivos não mapeados para `public/assets/instituto/arquivo-original/`.
- Gerar `data/institutoImages.ts` com paths prontos para uso no Next.js.

## Mapeamento inicial (origem → destino)

DSC09432.jpg → public/assets/instituto/historias/crianca-acao-evento.jpg
Uso: histórias reais, crianças atendidas, ação social.

DSC09470.jpg → public/assets/instituto/paginas/comunidade-criancas-reunidas.jpg
Uso: impacto social, comunidade, histórias reais.

DSC09481.jpg → public/assets/instituto/paginas/acolhimento-crianca-adulta.jpg
Uso: acolhimento, cuidado, proteção da infância.

DSC09484.jpg → public/assets/instituto/arquivo-original/publico-evento-adultos.jpg
Uso: imagem secundária institucional.

DSC09492.jpg → public/assets/instituto/arquivo-original/equipe-evento-adultos.jpg
Uso: imagem secundária de equipe/evento.

DSC09503.jpg → public/assets/instituto/paginas/lideranca-interacao-crianca-validar-pablo.jpg
Uso: possível fundador/liderança; NÃO usar como Pablo sem validação.

DSC09531.jpg → public/assets/instituto/programas/esporte-recreacao-inflavel.jpg
Uso: esporte, recreação, convivência, desenvolvimento.

DSC09536.jpg → public/assets/instituto/doacao/doacoes-sacolas-cestas.jpg
Uso: doação, apoio às famílias, transparência.

DSC09546 (1).jpg → public/assets/instituto/home/comunidade-evento-coletivo.jpg
Uso: home, comunidade, impacto coletivo.

DSC09590.jpg → public/assets/instituto/doacao/voluntario-carregando-doacoes.jpg
Uso: voluntariado, Como ajudar, apoio social.

DSC09595.jpg → public/assets/instituto/doacao/voluntaria-mobilizacao-megafone.jpg
Uso: voluntariado, mobilização, chamada para ação.

DSC09610.jpg → public/assets/instituto/paginas/equipe-organizando-acao.jpg
Uso: equipe, bastidores, voluntariado.

DSC09639.jpg → public/assets/instituto/doacao/apoio-familias-entrega-acolhimento.jpg
Uso: apoio às famílias, doação, impacto humano.

DSC09652.jpg → public/assets/instituto/doacao/impacto-refeicao-comunidade.jpg
Uso: alimentação, cuidado prático, comunidade.

IMG_9357.PNG → public/assets/instituto/programas/cultura-educacao-infantil.jpg
Uso: cultura, educação infantil, aulas/eventos.

IMG_9358.PNG → public/assets/instituto/programas/educacao-sala-aula-criancas.jpg
Uso: educação, desenvolvimento, página O que fazemos.

IMG_9359.PNG → public/assets/instituto/programas/ensino-bilingue-hello-friends.jpg
Uso: ensino bilíngue/inglês.

IMG_9360.PNG → public/assets/instituto/paginas/acolhimento-abraco-coletivo.jpg
Uso: acolhimento, pertencimento, Quem Somos.

IMG_9361.PNG → public/assets/instituto/programas/educacao-professora-crianca.jpg
Uso: educação, estudo dirigido, sala de aula.

## Outros arquivos

- Arquivos que começam com `WhatsApp` serão movidos para `public/assets/instituto/needs-crop/` e renomeados como `historia-print-vertical-01.ext`, `historia-print-vertical-02.ext`, etc.
- Todos os demais arquivos não mapeados serão copiados para `public/assets/instituto/arquivo-original/`.

## Alertas e cuidados

- Não use imagens sensíveis (crianças) em hero principal sem crop/validação.
- A foto `paginas/lideranca-interacao-crianca-validar-pablo.jpg` precisa de validação antes de ser usada como imagem do Pablo/fundador.
- Prints do Instagram/WhatsApp em `needs-crop` devem ser recortados para remover interface antes do uso final.

## Exemplo de uso no Next.js

```ts
import { institutoImages } from '../data/institutoImages'

export default function Component(){
  return <img src={institutoImages.home.heroComunidade} alt="Comunidade" />
}
```

## Como contribuir / validação visual

1. Rode o script.
2. Verifique as imagens em `public/assets/instituto`.
3. Valide as imagens sensíveis com a equipe antes de usar em heros.
