# Script de verification simple
Write-Host "=== VERIFICATION NETLIFY MEETUP CONNECT ===" -ForegroundColor Green
Write-Host ""

# Verifier fichiers requis
$files = @("netlify.toml", "web_api\_redirects", "web_api\index.html", "web_api\views\HomePage.js")

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "OK: $file" -ForegroundColor Green
    } else {
        Write-Host "MANQUANT: $file" -ForegroundColor Red
    }
}

# Verifier HomePage.js export
$homePage = Get-Content "web_api\views\HomePage.js" -Raw
if ($homePage -match "export default") {
    Write-Host "OK: HomePage export default" -ForegroundColor Green
} else {
    Write-Host "ERREUR: HomePage sans export default" -ForegroundColor Red
}

# Verifier absence CDN Tailwind
$indexHtml = Get-Content "web_api\index.html" -Raw  
if ($indexHtml -notmatch "cdn.tailwindcss.com") {
    Write-Host "OK: CDN Tailwind supprime" -ForegroundColor Green
} else {
    Write-Host "ATTENTION: CDN Tailwind encore present" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Pret pour deploiement Netlify!" -ForegroundColor Green
Write-Host "URL: https://ephemeral-pastelito-2eff2a.netlify.app/" -ForegroundColor Cyan
