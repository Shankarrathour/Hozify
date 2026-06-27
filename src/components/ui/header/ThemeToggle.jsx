import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Check local storage or system preference on load
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-all hover:bg-white/10 hover:text-white"
      title="Toggle Theme"
      aria-label="Toggle Theme"
    >
      <div className="relative h-5 w-5 overflow-hidden">
        {/* Simple CSS animation for sun/moon transition */}
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${isDark ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        >
          <Sun size={20} />
        </div>
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${!isDark ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
        >
          <Moon size={20} />
        </div>
      </div>
    </button>
  );
}
