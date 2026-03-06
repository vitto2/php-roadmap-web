# Script para substituir Space Mono por Roboto Mono
$filePath = "src\App.jsx"
$content = Get-Content $filePath -Raw
$content = $content -replace "'Space Mono','monospace'", "'Roboto Mono','monospace'"
$content | Set-Content $filePath
Write-Host "Substituição concluída!"