## SELIM UI

React + TypeScript bileşen kütüphanesi. Monorepo yapısı:

```
packages/
  selim-ui/   # kütüphane
  cli/        # shadcn benzeri CLI
apps/
  docs/       # Next.js ile doküman sitesi
```

### Kurulum (paket olarak)

```
pnpm add @selim-ui/react
```

Global stilleri ekleyin:

```ts
import '@selim-ui/react/styles.css';
```

### CLI

```
npx selimui init
npx selimui add button
```

### Hızlı Başlangıç (Next.js)

1. `npx selimui init` çalıştırın
2. `app/layout.tsx` içinde `import './styles/selimui.css'` ekleyin
3. Bir sayfada komponentleri kullanın:

```tsx
import { Button } from '@selim-ui/react';

export default function Page() {
  return <Button>Merhaba</Button>;
}
```

### Temalandırma

CSS değişkenleri ile gelir. `:root` için tokenlar `@selim-ui/react/styles.css` ile yüklenir. Karanlık/aydınlık tema geçişi için `data-theme="dark"`/`light` kullanabilirsiniz.

### Geliştirme

```
pnpm -r run build
pnpm -F @selim-ui/react run test
```
# selimUI
