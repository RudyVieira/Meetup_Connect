# Script de diagnostic Netlify
Write-Host "=== DIAGNOSTIC CONFIGURATION NETLIFY ===" -ForegroundColor Green
Write-Host ""

# Verifier la structure des dossiers
Write-Host "Structure des fichiers:" -ForegroundColor Yellow
Write-Host "Racine du projet:" -ForegroundColor White
Get-ChildItem . -Name | ForEach-Object { Write-Host "  $_" -ForegroundColor Gray }

Write-Host ""
Write-Host "Contenu web_api:" -ForegroundColor White  
Get-ChildItem web_api -Name | ForEach-Object { Write-Host "  $_" -ForegroundColor Gray }

Write-Host ""
Write-Host "Configuration netlify.toml:" -ForegroundColor Yellow
if (Test-Path "netlify.toml") {
    Get-Content "netlify.toml" | Select-Object -First 10
} else {
    Write-Host "netlify.toml MANQUANT" -ForegroundColor Red
}

Write-Host ""
Write-Host "Fichier _redirects:" -ForegroundColor Yellow
if (Test-Path "web_api\_redirects") {
    Get-Content "web_api\_redirects"
} else {
    Write-Host "_redirects MANQUANT" -ForegroundColor Red
}

Write-Host ""
Write-Host "INSTRUCTIONS:" -ForegroundColor Green
Write-Host "1. Assurez-vous que 'publish = web_api' est dans netlify.toml" -ForegroundColor White
Write-Host "2. Le fichier _redirects doit etre dans le dossier web_api" -ForegroundColor White  
Write-Host "3. Redéployez sur Netlify après avoir push ces changements" -ForegroundColor White
Write-Host ""
Write-Host "URLs a tester apres deploiement:" -ForegroundColor Cyan
Write-Host "  https://ephemeral-pastelito-2eff2a.netlify.app/" -ForegroundColor Blue
Write-Host "  https://ephemeral-pastelito-2eff2a.netlify.app/home" -ForegroundColor Blue
