// Vercel Web Analytics Integration
// This script injects Vercel Web Analytics into the page

(function() {
  // Simple inject function for vanilla HTML projects
  // This replicates the @vercel/analytics inject functionality
  
  function inject() {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return;
    
    // Initialize the queue
    if (!window.va) {
      window.va = function() {
        (window.vaq = window.vaq || []).push(arguments);
      };
    }
    
    // Set mode to production (analytics only tracks in production)
    window.vam = 'production';
    
    // Check if script is already loaded
    var scriptSrc = '/_vercel/insights/script.js';
    if (document.head.querySelector('script[src*="' + scriptSrc + '"]')) {
      return;
    }
    
    // Create and inject the analytics script
    var script = document.createElement('script');
    script.src = scriptSrc;
    script.defer = true;
    script.setAttribute('data-sdkn', '@vercel/analytics');
    script.setAttribute('data-sdkv', '2.0.1');
    
    script.onerror = function() {
      console.log('[Vercel Web Analytics] Failed to load script. Enable Web Analytics in your Vercel dashboard.');
    };
    
    document.head.appendChild(script);
  }
  
  // Inject analytics when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
