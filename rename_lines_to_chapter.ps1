param(
  [Parameter(Mandatory = $false)]
  [int]$Chapter = 0,
  [Parameter(Mandatory = $false)]
  [string]$Directory = "public",
  [switch]$WhatIf
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

try {
  $resolvedDir = Resolve-Path -Path $Directory -ErrorAction Stop
} catch {
  Write-Error "Directory not found: $Directory"
  exit 1
}

$range = 0..19

foreach ($i in $range) {
  $sourcePath = Join-Path -Path $resolvedDir -ChildPath ("line{0}.mp3" -f $i)
  $targetName = ("chapter{0}line{1}.mp3" -f $Chapter, $i)
  $targetPath = Join-Path -Path $resolvedDir -ChildPath $targetName

  if (-not (Test-Path -LiteralPath $sourcePath)) {
    Write-Host ("Missing: {0}" -f $sourcePath) -ForegroundColor Yellow
    continue
  }

  if (Test-Path -LiteralPath $targetPath) {
    Write-Host ("Skip: target exists {0}" -f $targetPath) -ForegroundColor Cyan
    continue
  }

  if ($WhatIf.IsPresent) {
    Write-Host ("Would rename '{0}' -> '{1}'" -f $sourcePath, $targetPath)
  } else {
    Rename-Item -LiteralPath $sourcePath -NewName $targetName
    Write-Host ("Renamed '{0}' -> '{1}'" -f $sourcePath, $targetPath) -ForegroundColor Green
  }
}

Write-Host "Done." -ForegroundColor Green


