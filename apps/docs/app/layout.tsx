import type { Metadata } from 'next';
import '../styles/globals.css';
import '@selim-ui/react/styles.css';

export const metadata: Metadata = {
  title: 'SELIM UI Docs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <div className="mx-auto max-w-5xl p-6">
          <header className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">SELIM UI</h1>
              <p className="text-sm opacity-70">Modern, erişilebilir ve temalandırılabilir React UI kütüphanesi</p>
            </div>
            <nav className="text-sm opacity-80 flex gap-4">
              <a href="/getting-started" className="hover:underline">Getting Started</a>
              <a href="/theming" className="hover:underline">Theming</a>
              <a href="/components/button" className="hover:underline">Components</a>
            </nav>
          </header>
          {children}
          <footer className="mt-16 text-xs opacity-60">© {new Date().getFullYear()} SELIM UI</footer>
        </div>
      </body>
    </html>
  );
}
