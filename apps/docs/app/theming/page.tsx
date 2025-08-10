export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8 space-y-6 max-w-3xl">
      <h1 className="text-2xl font-semibold">Temalandırma</h1>
      <p className="opacity-80">SELIM UI, CSS değişkenleri (design tokens) ile temalandırılır. Varsayılan tokenlar <code>@selim-ui/react/styles.css</code> ile gelir.</p>

      <h2 className="text-lg font-semibold">1) Tokenları Override Etme</h2>
      <pre className="bg-black/20 p-4 rounded-md overflow-x-auto text-sm"><code>{`:root {
  --su-color-primary: #0ea5e9;
  --su-color-primary-hover: #0284c7;
  --su-radius-md: 10px;
}`}</code></pre>

      <h2 className="text-lg font-semibold">2) Light/Dark Tema</h2>
      <p className="opacity-80">Dokümandaki tema anahtarlayıcısı <code>data-theme</code> özniteliğini değiştirir. Kendi temanız için sınıf veya data özniteliği kullanabilirsiniz.</p>
      <pre className="bg-black/20 p-4 rounded-md overflow-x-auto text-sm"><code>{`[data-theme="brand"] {
  --su-color-background: #0b1220;
  --su-color-foreground: #e6edf3;
  --su-color-primary: #22c55e;
  --su-color-primary-hover: #16a34a;
}`}</code></pre>

      <h2 className="text-lg font-semibold">3) Tailwind ile Kullanım</h2>
      <p className="opacity-80">Tailwind konfigünde renkleri tokenlara bağlayın ve projede <code>styles/selimui.css</code> dosyasını import edin.</p>
      <pre className="bg-black/20 p-4 rounded-md overflow-x-auto text-sm"><code>{`// tailwind.config.ts
theme: {
  extend: {
    colors: {
      background: 'var(--su-color-background)',
      foreground: 'var(--su-color-foreground)',
      primary: 'var(--su-color-primary)'
    }
  }
}`}</code></pre>
      <h2 className="text-lg font-semibold">4) React ThemeProvider</h2>
      <p className="opacity-80">İsteğe bağlı sağlayıcı ile kullanıcı teması hafızada tutulur.</p>
      <pre className="bg-black/20 p-4 rounded-md overflow-x-auto text-sm"><code>{`import { ThemeProvider, ThemeScript } from '@selim-ui/react';

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head><ThemeScript /></head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}</code></pre>
    </main>
  );
}

