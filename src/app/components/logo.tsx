import React, { useEffect, useState } from 'react';

interface LogoProps {
  variant?: 'default' | 'white' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export default function Logo({ variant = 'default', size = 'md', showText = true }: LogoProps) {
  const [logoSrc, setLogoSrc] = useState<string | null>(null);

  useEffect(() => {
    try {
      // eager load asset URLs as strings using Vite's glob import (use absolute /src path)
      const modules = (import.meta as any).glob('/src/assets/*.{png,jpg,jpeg,svg}', {
        eager: true,
        query: '?url',
        import: 'default',
      }) as Record<string, string>;

      // DEBUG: log discovered module keys (paste this output if logo not visible)
      try {
        // eslint-disable-next-line no-console
        console.debug('[Logo] discovered assets:', Object.keys(modules));
      } catch {}

      // Logic to find the logo file
      const logoKey = Object.keys(modules).find((p) => p.toLowerCase().includes('logo'));
      const schoolKey = Object.keys(modules).find((p) => p.toLowerCase().includes('school'));

      if (logoKey) {
        setLogoSrc(modules[logoKey]);
        // eslint-disable-next-line no-console
        console.debug('[Logo] using logoKey', logoKey, modules[logoKey]);
      } else if (schoolKey) {
        setLogoSrc(modules[schoolKey]);
        // eslint-disable-next-line no-console
        console.debug('[Logo] using schoolKey', schoolKey, modules[schoolKey]);
      } else {
        const first = Object.keys(modules)[0];
        if (first) {
          setLogoSrc(modules[first]);
          // eslint-disable-next-line no-console
          console.debug('[Logo] using first asset', first, modules[first]);
        }
      }
    } catch (e) {
      console.error("Logo loading error:", e);
      // As a last-resort fallback, dynamically import the packaged school image
      // so the logo area never appears empty in the UI.
      try {
        (async () => {
          const mod = await import('/src/assets/school.jpeg?url');
          const url = (mod && (mod as any).default) || (mod as any);
          setLogoSrc(url as string);
          // eslint-disable-next-line no-console
          console.debug('[Logo] fallback import school.jpeg ->', url);
        })();
      } catch (err) {
        // swallow — no image available
      }
    }
  }, []);

  // Configuration for different sizes
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
  };

  const imageSizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-19 h-19',
    lg: 'w-32 h-32',
    xl: 'w-44 h-44',
  };

  const textSizeClasses = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-3xl',
    xl: 'text-5xl',
  };

  const isWhite = variant === 'white';

  return (
    <div className="flex items-center gap-3">
      <div className="relative group">
        {logoSrc ? (
          /* Render custom logo image if found */
          <div className={`relative flex items-center justify-center ${imageSizeClasses[size]}`}>
            <div className="w-full h-full rounded-full overflow-hidden bg-white/0 flex items-center justify-center">
              <img src={logoSrc} alt="Logo" className="w-full h-full object-cover" />
            </div>
          </div>
        ) : (
          /* Render fallback SVG logo */
          <>
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity ${sizeClasses[size]}`}></div>

            {/* Logo container */}
            <div className={`relative bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform ${sizeClasses[size]}`}>
              <div className="absolute inset-[2px] bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl opacity-50"></div>

              <div className="relative flex items-center justify-center">
                <svg viewBox="0 0 100 100" className={`${size === 'sm' ? 'w-6' : size === 'md' ? 'w-8' : size === 'lg' ? 'w-12' : 'w-20'} fill-white`}>
                  <path d="M 20 70 L 20 30 L 35 50 L 50 30 L 50 70" strokeWidth="6" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M 60 30 L 75 70 L 90 30" strokeWidth="6" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="35" cy="50" r="3" fill="white" opacity="0.6"/>
                  <circle cx="75" cy="50" r="3" fill="white" opacity="0.6"/>
                </svg>
              </div>

              <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full opacity-60"></div>
              <div className="absolute bottom-1 left-1 w-2 h-2 bg-white rounded-full opacity-60"></div>
            </div>
          </>
        )}
      </div>

      {showText && variant !== 'compact' && (
        <div>
          <h1 className={`${textSizeClasses[size]} ${isWhite ? 'text-white' : 'text-gray-900'} leading-tight tracking-tight`}>
            <span className="font-semibold">Mukbadhir Vidyamandir</span>
          </h1>
          {size !== 'sm' && (
            <p className={`text-xs ${isWhite ? 'text-white/80' : 'text-gray-500'} tracking-wide`}>
              Wardhamaneri
            </p>
          )}
        </div>
      )}
    </div>
  );
}