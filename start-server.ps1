# Script PowerShell pour démarrer le serveur de développement
Write-Host "Démarrage du serveur local..." -ForegroundColor Green

# Aller dans le répertoire web_api
Set-Location "c:\wamp64\www\Meetup_Connect-merge\Meetup_Connect\web_api"

# Démarrer un serveur HTTP simple avec Python (si disponible)
if (Get-Command python -ErrorAction SilentlyContinue) {
    Write-Host "Démarrage avec Python..." -ForegroundColor Yellow
    python -m http.server 8000
} elseif (Get-Command python3 -ErrorAction SilentlyContinue) {
    Write-Host "Démarrage avec Python3..." -ForegroundColor Yellow
    python3 -m http.server 8000
} elseif (Get-Command node -ErrorAction SilentlyContinue) {
    Write-Host "Démarrage avec Node.js..." -ForegroundColor Yellow
    npx http-server -p 8000 -c-1
} else {
    Write-Host "Erreur: Python ou Node.js requis pour démarrer le serveur" -ForegroundColor Red
    Write-Host "Installez Python (python.org) ou Node.js (nodejs.org)" -ForegroundColor Yellow
    pause
}
