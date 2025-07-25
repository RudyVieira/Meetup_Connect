// Configuration simple pour éviter les dépendances circulaires
export const getBaseUrl = () => {
  const isNetlify = window.location.hostname.includes('netlify.app') || 
                   window.location.hostname.includes('netlify.com') ||
                   window.location.hostname.includes('netlify') ||
                   window.location.hostname.includes('pastelito');
  
  // Sur Netlify, pas de prefix car publish="web_api" sert le contenu à la racine
  // En local, on utilise /web_api comme prefix
  return isNetlify ? '' : '/web_api';
};

export const isProduction = () => {
  return window.location.hostname.includes('netlify.app') || 
         window.location.hostname.includes('netlify.com') ||
         window.location.hostname.includes('netlify') ||
         window.location.hostname.includes('pastelito');
};
