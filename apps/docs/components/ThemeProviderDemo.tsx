"use client";
import React from 'react';
import { ThemeProvider, useTheme } from '@selim-ui/react';

function ButtonInner() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="opacity-70">Theme: {theme} (resolved: {resolvedTheme})</span>
      <button className="px-3 py-2 border rounded-md" onClick={() => setTheme('light')}>Light</button>
      <button className="px-3 py-2 border rounded-md" onClick={() => setTheme('dark')}>Dark</button>
      <button className="px-3 py-2 border rounded-md" onClick={() => setTheme('system')}>System</button>
    </div>
  );
}

export function ThemeProviderDemo() {
  return (
    <ThemeProvider>
      <ButtonInner />
    </ThemeProvider>
  );
}

