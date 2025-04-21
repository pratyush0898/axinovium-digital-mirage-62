
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export const SecurityHeaders = () => {
  useEffect(() => {
    // Set referrer policy programmatically
    document.querySelector('meta[name="referrer"]')?.remove();
    const meta = document.createElement('meta');
    meta.name = 'referrer';
    meta.content = 'strict-origin-when-cross-origin';
    document.head.appendChild(meta);
  }, []);

  return (
    <Helmet>
      {/* Content Security Policy */}
      <meta 
        http-equiv="Content-Security-Policy" 
        content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.youtube.com; frame-src https://www.youtube.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; connect-src 'self';" 
      />
      
      {/* X-Content-Type-Options */}
      <meta http-equiv="X-Content-Type-Options" content="nosniff" />
      
      {/* X-Frame-Options */}
      <meta http-equiv="X-Frame-Options" content="SAMEORIGIN" />
      
      {/* X-XSS-Protection */}
      <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Strict Transport Security */}
      <meta 
        http-equiv="Strict-Transport-Security" 
        content="max-age=31536000; includeSubDomains; preload" 
      />
      
      {/* Permissions Policy */}
      <meta 
        http-equiv="Permissions-Policy" 
        content="camera=(), microphone=(), geolocation=(), interest-cohort=()" 
      />
    </Helmet>
  );
};
