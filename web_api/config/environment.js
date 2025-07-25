// Configuration d'environnement pour le déploiement
export const ENV_CONFIG = {
  // Détecter l'environnement de déploiement
  isNetlify: () => {
    return window.location.hostname.includes('netlify.app') || 
           window.location.hostname.includes('netlify.com') ||
           window.location.hostname.includes('netlify') ||
           window.location.hostname.includes('pastelito');
  },
  
  isVercel: () => {
    return window.location.hostname.includes('vercel.app') || 
           window.location.hostname.includes('vercel.com');
  },
  
  isLocal: () => {
    return window.location.hostname === 'localhost' || 
           window.location.hostname === '127.0.0.1' ||
           window.location.hostname.includes('wamp') ||
           window.location.hostname.includes('xampp');
  },
  
  isProduction: () => {
    return ENV_CONFIG.isNetlify() || ENV_CONFIG.isVercel();
  },
  
  // Obtenir le baseUrl approprié selon l'environnement
  getBaseUrl: () => {
    if (ENV_CONFIG.isProduction()) {
      return ''; // Pas de baseUrl pour les déploiements en production
    }
    return '/web_api'; // BaseUrl pour le développement local
  }
};

export default ENV_CONFIG;
