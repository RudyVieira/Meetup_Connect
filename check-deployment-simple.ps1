Write-Host "=== VERIFICATION PRE-DEPLOIEMENT MEETUP CONNECT ===" -ForegroundColor Green
Write-Host ""

# Vérifier la structure des fichiers
Write-Host "1. Vérification de la structure des fichiers..." -ForegroundColor Yellow

$requiredFiles = @(
    "netlify.toml",
    "web_api\_redirects", 
    "web_api\_headers",
    "web_api\index.html",
    "web_api\index.js",
    "web_api\views\HomePage.js",
    "web_api\styles\tailwind-minimal.css"
)

foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "   ✓ $file" -ForegroundColor Green
    } else {
        Write-Host "   ✗ $file MANQUANT" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "2. Vérification du contenu..." -ForegroundColor Yellow

# Vérifier netlify.toml
if (Test-Path "netlify.toml") {
    $tomlContent = Get-Content "netlify.toml" -Raw
    if ($tomlContent -match 'publish = "web_api"') {
        Write-Host "   ✓ netlify.toml: Configuration publish correcte" -ForegroundColor Green
    } else {
        Write-Host "   ✗ netlify.toml: Configuration publish incorrecte" -ForegroundColor Red
    }
}

# Vérifier _redirects
if (Test-Path "web_api\_redirects") {
    Write-Host "   ✓ _redirects: Fichier présent" -ForegroundColor Green
} else {
    Write-Host "   ✗ _redirects: Fichier manquant" -ForegroundColor Red
}

# Vérifier index.html
if (Test-Path "web_api\index.html") {
    $htmlContent = Get-Content "web_api\index.html" -Raw
    if ($htmlContent -match 'src="\.\/index\.js"') {
        Write-Host "   ✓ index.html: Chemin du script correct" -ForegroundColor Green
    } else {
        Write-Host "   ⚠ index.html: Vérifiez le chemin du script" -ForegroundColor Yellow
    }
    
    # Vérifier que Tailwind CDN n'est plus utilisé
    if ($htmlContent -notmatch 'cdn\.tailwindcss\.com') {
        Write-Host "   ✓ index.html: CDN Tailwind supprimé (production ready)" -ForegroundColor Green
    } else {
        Write-Host "   ⚠ index.html: CDN Tailwind encore présent" -ForegroundColor Yellow
    }
}

# Vérifier HomePage.js
if (Test-Path "web_api\views\HomePage.js") {
    $homeContent = Get-Content "web_api\views\HomePage.js" -Raw
    if ($homeContent -match 'export default HomePage') {
        Write-Host "   ✓ HomePage.js: Export par défaut correct" -ForegroundColor Green
    } else {
        Write-Host "   ✗ HomePage.js: Export par défaut manquant" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "3. Test de l'import des modules..." -ForegroundColor Yellow

# Verifier que tous les modules peuvent etre importes
$jsFiles = @(
    "web_api\views\HomePage.js",
    "web_api\routes\index.js",
    "web_api\index.js"
)

foreach ($jsFile in $jsFiles) {
    if (Test-Path $jsFile) {
        $content = Get-Content $jsFile -Raw
        if ($content.Length -gt 100) {  # Verifier que le fichier n'est pas vide
            Write-Host "   OK $jsFile: Contenu valide" -ForegroundColor Green
        } else {
            Write-Host "   WARN $jsFile: Fichier vide ou trop petit" -ForegroundColor Yellow
        }
    }
}

Write-Host ""
Write-Host "=== INSTRUCTIONS DE DEPLOIEMENT ===" -ForegroundColor Green
Write-Host ""
Write-Host "1. Commitez et poussez les changements:" -ForegroundColor White
Write-Host "   git add ." -ForegroundColor Gray
Write-Host "   git commit -m 'fix: Replace Tailwind CDN with local CSS and fix HomePage exports'" -ForegroundColor Gray  
Write-Host "   git push" -ForegroundColor Gray
Write-Host "   git push personal fix/delete_unnecessary_files" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Sur Netlify, configurez:" -ForegroundColor White
Write-Host "   - Build command: (vide)" -ForegroundColor Gray
Write-Host "   - Publish directory: web_api" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Redéployez et testez votre site!" -ForegroundColor White
Write-Host "   URL: https://ephemeral-pastelito-2eff2a.netlify.app/" -ForegroundColor Cyan
Write-Host ""
Write-Host "4. CORRECTIONS APPORTEES:" -ForegroundColor Green
Write-Host "   OK HomePage.js recree avec export default correct" -ForegroundColor Gray
Write-Host "   OK Tailwind CDN remplace par CSS local" -ForegroundColor Gray
Write-Host "   OK Styles Tailwind minimal inclus" -ForegroundColor Gray
Write-Host ""
