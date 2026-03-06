$filePath = "src\App.jsx"
$content = Get-Content $filePath -Raw

# Substituir com as aspas simples
$content = $content -replace "'Space Mono',monospace'", "'Roboto Mono',monospace'"

Set-Content $filePath $content
Write-Host "Substituição concluída!"
