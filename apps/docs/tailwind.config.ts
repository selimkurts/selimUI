import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    '../../packages/selim-ui/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--su-color-background)',
        foreground: 'var(--su-color-foreground)',
        primary: 'var(--su-color-primary)'
      },
      borderRadius: {
        md: 'var(--su-radius-md)'
      }
    },
  },
  plugins: [],
};

export default config;
