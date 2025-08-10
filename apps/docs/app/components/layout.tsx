import Link from 'next/link';

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <nav className="mb-6 flex gap-4 text-sm opacity-80 flex-wrap">
        <Link href="/">Home</Link>
        <Link href="/theming">Theming</Link>
        <Link href="/components/button">Button</Link>
        <Link href="/components/input">Input</Link>
        <Link href="/components/select">Select</Link>
        <Link href="/components/checkbox">Checkbox</Link>
        <Link href="/components/radio">Radio</Link>
        <Link href="/components/switch">Switch</Link>
        <Link href="/components/alert">Alert</Link>
        <Link href="/components/card">Card</Link>
        <Link href="/components/table">Table</Link>
        <Link href="/components/tabs">Tabs</Link>
        <Link href="/components/accordion">Accordion</Link>
        <Link href="/components/collapsible">Collapsible</Link>
      </nav>
      {children}
    </main>
  );
}
