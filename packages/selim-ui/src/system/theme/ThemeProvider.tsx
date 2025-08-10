"use client";
import React from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextValue {
  theme: ThemeMode;
  resolvedTheme: 'light' | 'dark';
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

function getSystemPrefer(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children, defaultTheme = 'system' }: { children: React.ReactNode; defaultTheme?: ThemeMode }) {
  const [theme, setThemeState] = React.useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    return (localStorage.getItem('su-theme') as ThemeMode) || defaultTheme;
  });

  const resolvedTheme = theme === 'system' ? getSystemPrefer() : theme;

  const setTheme = React.useCallback((mode: ThemeMode) => {
    setThemeState(mode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('su-theme', mode);
    }
  }, []);

  React.useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.dataset.theme = resolvedTheme;
  }, [resolvedTheme]);

  const value = React.useMemo<ThemeContextValue>(() => ({ theme, resolvedTheme, setTheme }), [theme, resolvedTheme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within <ThemeProvider />');
  return ctx;
}

// SSR inline script to avoid flash on first paint
export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('su-theme')||'system';var m=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';var r=t==='system'?m:t;document.documentElement.dataset.theme=r;}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

