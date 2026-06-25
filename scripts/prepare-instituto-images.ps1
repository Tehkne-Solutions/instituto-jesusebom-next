param(
    [string]$ZipPath = ".\_incoming\Fotos.zip",
    [string]$ProjectRoot = "."
)

$ErrorActionPreference = "Stop"

function Ensure-Dir([string]$p){ if (-not (Test-Path $p)){ New-Item -ItemType Directory -Path $p | Out-Null } }

Write-Host "[prepare-instituto-images] ProjectRoot: $ProjectRoot"
Write-Host "[prepare-instituto-images] ZipPath: $ZipPath"

$root = Resolve-Path -Path $ProjectRoot
$incoming = Join-Path $root "_incoming"
$extracted = Join-Path $incoming "Fotos_extraidas"
$publicBase = Join-Path $root "public\assets\instituto"

# Desired folders
$folders = @(
    "home",
    "doacao",
    "paginas",
    "programas",
    "historias",
    "needs-crop",
    "arquivo-original"
)

foreach ($f in $folders){ Ensure-Dir (Join-Path $publicBase $f) }
Ensure-Dir $incoming

if (-not (Test-Path $ZipPath)){
    Write-Host "[prepare-instituto-images] Aviso: ZIP não encontrado em $ZipPath"
    Write-Host "[prepare-instituto-images] Criando estrutura de pastas vazias e gerando arquivo de registry vazio"
    Ensure-Dir $extracted
    # Generate institutoImages.ts placeholder
    $dataPath = Join-Path $root "data"
    Ensure-Dir $dataPath
    $outFile = Join-Path $dataPath "institutoImages.ts"
    $placeholder = @"
export const institutoImages = {
  home: {},
  doacao: {},
  paginas: {},
  programas: {},
  historias: {},
  needsCrop: {
    folder: "/assets/instituto/needs-crop",
    note: "Arquivos de WhatsApp/Instagram precisam de crop manual ou etapa automatizada antes de uso final."
  }
} as const;

export type InstitutoImages = typeof institutoImages;
"@
    $placeholder | Out-File -FilePath $outFile -Encoding utf8
    Write-Host "[prepare-instituto-images] Placeholder gerado em $outFile"
    Write-Host "Coloque o arquivo Fotos.zip em $incoming\Fotos.zip e rode o script novamente."
    exit 0
}

# Extract ZIP
Write-Host "[prepare-instituto-images] Extraindo ZIP..."
if (Test-Path $extracted) { Remove-Item -Recurse -Force $extracted }
Expand-Archive -LiteralPath $ZipPath -DestinationPath $extracted -Force
Write-Host "[prepare-instituto-images] Extraído para $extracted"

# Mapping known files
$mapping = @{}
$mapping["DSC09432"] = "historias/crianca-acao-evento.jpg"
$mapping["DSC09470"] = "paginas/comunidade-criancas-reunidas.jpg"
$mapping["DSC09481"] = "paginas/acolhimento-crianca-adulta.jpg"
$mapping["DSC09484"] = "arquivo-original/publico-evento-adultos.jpg"
$mapping["DSC09492"] = "arquivo-original/equipe-evento-adultos.jpg"
$mapping["DSC09503"] = "paginas/lideranca-interacao-crianca-validar-pablo.jpg"
$mapping["DSC09531"] = "programas/esporte-recreacao-inflavel.jpg"
$mapping["DSC09536"] = "doacao/doacoes-sacolas-cestas.jpg"
$mapping["DSC09546"] = "home/comunidade-evento-coletivo.jpg"
$mapping["DSC09590"] = "doacao/voluntario-carregando-doacoes.jpg"
$mapping["DSC09595"] = "doacao/voluntaria-mobilizacao-megafone.jpg"
$mapping["DSC09610"] = "paginas/equipe-organizando-acao.jpg"
$mapping["DSC09639"] = "doacao/apoio-familias-entrega-acolhimento.jpg"
$mapping["DSC09652"] = "doacao/impacto-refeicao-comunidade.jpg"
$mapping["IMG_9357"] = "programas/cultura-educacao-infantil.jpg"
$mapping["IMG_9358"] = "programas/educacao-sala-aula-criancas.jpg"
$mapping["IMG_9359"] = "programas/ensino-bilingue-hello-friends.jpg"
$mapping["IMG_9360"] = "paginas/acolhimento-abraco-coletivo.jpg"
$mapping["IMG_9361"] = "programas/educacao-professora-crianca.jpg"

# Counters for needs-crop
$needsCropCounter = 0

Get-ChildItem -Path $extracted -File -Recurse | ForEach-Object {
    $file = $_
    $base = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
    $ext = $file.Extension
    $targetRel = $null

    # WhatsApp / prints
    if ($file.Name -like "WhatsApp*" -or $base -like "WhatsApp*"){
        $needsCropCounter++
        $newName = "historia-print-vertical-{0:D2}{1}" -f $needsCropCounter, $ext
        $targetRel = "needs-crop/$newName"
        Write-Host "[prepare-instituto-images] (needs-crop) $($file.Name) -> $targetRel"
    }
    else {
        # try mapping by base start
        $found = $false
        foreach ($k in $mapping.Keys){
            if ($base -like "$k*"){
                $targetRel = $mapping[$k]
                $found = $true
                Write-Host "[prepare-instituto-images] Mapeado: $($file.Name) -> $targetRel"
                break
            }
        }
        if (-not $found){
            # If filename starts with IMG or DSC but not in mapping, fallback to arquivo-original
            if ($base -like "IMG_*" -or $base -like "IMG*" -or $base -like "DSC*"){
                $targetRel = "arquivo-original/$($file.Name)"
                Write-Host "[prepare-instituto-images] Não mapeado (arquivo-original): $($file.Name)"
            } else {
                # generic fallback
                $targetRel = "arquivo-original/$($file.Name)"
                Write-Host "[prepare-instituto-images] Fallback arquivo-original: $($file.Name)"
            }
        }
    }

    # Copy to destination
    $dest = Join-Path $publicBase $targetRel
    $destDir = Split-Path $dest -Parent
    Ensure-Dir $destDir
    Copy-Item -Path $file.FullName -Destination $dest -Force
}

# If there are any remaining files directly in the ZIP root (not captured above), copy them to arquivo-original
Get-ChildItem -Path $extracted -File | Where-Object { $_.DirectoryName -eq $extracted } | ForEach-Object {
    $file = $_
    $dest = Join-Path $publicBase "arquivo-original\$($file.Name)"
    Ensure-Dir (Split-Path $dest -Parent)
    Copy-Item -Path $file.FullName -Destination $dest -Force
}

# Generate data/institutoImages.ts
Write-Host "[prepare-instituto-images] Gerando data/institutoImages.ts"
$dataDir = Join-Path $root "data"
Ensure-Dir $dataDir
$out = Join-Path $dataDir "institutoImages.ts"
$ts = @"
export const institutoImages = {
  home: {
    heroComunidade: "/assets/instituto/home/comunidade-evento-coletivo.jpg",
  },

  doacao: {
    sacolasCestas: "/assets/instituto/doacao/doacoes-sacolas-cestas.jpg",
    voluntarioDoacoes: "/assets/instituto/doacao/voluntario-carregando-doacoes.jpg",
    voluntariaMobilizacao: "/assets/instituto/doacao/voluntaria-mobilizacao-megafone.jpg",
    apoioFamilias: "/assets/instituto/doacao/apoio-familias-entrega-acolhimento.jpg",
    refeicaoComunidade: "/assets/instituto/doacao/impacto-refeicao-comunidade.jpg",
  },

  paginas: {
    comunidadeCriancas: "/assets/instituto/paginas/comunidade-criancas-reunidas.jpg",
    acolhimentoCrianca: "/assets/instituto/paginas/acolhimento-crianca-adulta.jpg",
    liderancaValidarPablo: "/assets/instituto/paginas/lideranca-interacao-crianca-validar-pablo.jpg",
    equipeOrganizando: "/assets/instituto/paginas/equipe-organizando-acao.jpg",
    acolhimentoAbraco: "/assets/instituto/paginas/acolhimento-abraco-coletivo.jpg",
  },

  programas: {
    esporteRecreacao: "/assets/instituto/programas/esporte-recreacao-inflavel.jpg",
    culturaEducacao: "/assets/instituto/programas/cultura-educacao-infantil.jpg",
    educacaoSala: "/assets/instituto/programas/educacao-sala-aula-criancas.jpg",
    ensinoBilingue: "/assets/instituto/programas/ensino-bilingue-hello-friends.jpg",
    educacaoProfessora: "/assets/instituto/programas/educacao-professora-crianca.jpg",
  },

  historias: {
    criancaAcaoEvento: "/assets/instituto/historias/crianca-acao-evento.jpg",
  },

  needsCrop: {
    folder: "/assets/instituto/needs-crop",
    note: "Arquivos de WhatsApp/Instagram precisam de crop manual ou etapa automatizada antes de uso final."
  }
} as const;

export type InstitutoImages = typeof institutoImages;
"@

$ts | Out-File -FilePath $out -Encoding utf8
Write-Host "[prepare-instituto-images] Registro gerado: $out"

Write-Host "[prepare-instituto-images] Concluído. Verifique public/assets/instituto e data/institutoImages.ts"
