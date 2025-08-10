import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8 space-y-4 max-w-3xl">
      <h1 className="text-2xl font-semibold">Erişilebilirlik Kılavuzu</h1>
      <p className="opacity-80">SELIM UI bileşenleri WAI-ARIA prensiplerine uygun olacak şekilde geliştirilir.</p>
      <ul className="list-disc pl-5 space-y-2 opacity-90">
        <li>Label ve description ilişkilerini doğru kurun (aria-label, aria-labelledby, aria-describedby)</li>
        <li>Klavye navigasyonunu sağlayın (Tab, Shift+Tab, Escape, ok tuşları)</li>
        <li>Renk kontrastı ve <code>prefers-reduced-motion</code> desteğine dikkat edin</li>
        <li>Form kontrollerinde hata mesajlarını semantik olarak sağlayın</li>
      </ul>
      <p>Detaylı örnekler için <Link href="/components/alert" className="underline">bileşen sayfalarına</Link> göz atın.</p>
    </main>
  );
}
