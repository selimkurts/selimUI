"use client";
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const isDark = document.documentElement.dataset.theme === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(isDark);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);
  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="px-3 py-2 rounded-md border"
    >
      {dark ? 'Dark' : 'Light'}
    </button>
  );
}

