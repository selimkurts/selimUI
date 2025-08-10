export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8 space-y-6 max-w-3xl">
      <h1 className="text-2xl font-semibold">Getting Started</h1>
      <ol className="list-decimal pl-5 space-y-3 opacity-90 text-sm">
        <li>
          Paketi yükleyin:
          <pre className="bg-black/20 p-3 rounded-md mt-2 overflow-x-auto"><code>pnpm add @selim-ui/react</code></pre>
        </li>
        <li>
          Global stilleri projeye ekleyin:
          <pre className="bg-black/20 p-3 rounded-md mt-2 overflow-x-auto"><code>{"import '@selim-ui/react/styles.css';"}</code></pre>
        </li>
        <li>
          İsteğe bağlı: CLI ile hızlı kurulum
          <pre className="bg-black/20 p-3 rounded-md mt-2 overflow-x-auto"><code>npx selimui init</code></pre>
        </li>
        <li>
          Bir bileşen kullanın:
          <pre className="bg-black/20 p-3 rounded-md mt-2 overflow-x-auto"><code>{`import { Button } from '@selim-ui/react';

export default function Page() {
  return <Button>Merhaba</Button>;
}`}</code></pre>
        </li>
      </ol>
    </main>
  );
}

