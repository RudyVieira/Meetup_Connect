// Version simplifiée de URLUtils sans dépendances externes
export function buildUrl(path) {
  // Détecter l'environnement directement
  const isNetlify = window.location.hostname.includes('netlify.app') || 
                   window.location.hostname.includes('netlify.com') ||
                   window.location.hostname.includes('netlify') ||
                   window.location.hostname.includes('pastelito');
                   
  const baseUrl = isNetlify ? '' : '/web_api';
  
  // Enlever le slash initial si présent dans le path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Si baseUrl est vide (Netlify), retourner juste le chemin avec un slash
  if (!baseUrl) {
    return `/${cleanPath}`;
  }
  
  // Pour les environnements locaux, utiliser le baseUrl complet
  return `${baseUrl}/${cleanPath}`;
}

export function navigate(path) {
  const url = buildUrl(path);
  window.location.href = url;
}

export function isCurrentPage(path) {
  const currentPath = window.location.pathname;
  const targetUrl = buildUrl(path);
  return currentPath === targetUrl || currentPath === targetUrl + '/' || currentPath + '/' === targetUrl;
}

export function getBaseUrl() {
  const isNetlify = window.location.hostname.includes('netlify.app') || 
                   window.location.hostname.includes('netlify.com') ||
                   window.location.hostname.includes('netlify') ||
                   window.location.hostname.includes('pastelito');
  return isNetlify ? '' : '/web_api';
}

// Export par défaut pour la compatibilité
export default {
  buildUrl,
  navigate,
  isCurrentPage,
  getBaseUrl
};
