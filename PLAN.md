## SELIM UI — Yol Haritası ve Yapılacaklar

Bu belge, SELIM UI'ı Material UI ve shadcn/ui çizgisinde; modern, erişilebilir, tam responsive ve npm ile kurulabilir bir UI kütüphanesi olarak tasarlamak için planı ve iş listelerini içerir.

### Hedefler
- **Modern**: React + TypeScript, tree-shakeable ESM çıktıları, SSR uyumu
- **Erişilebilir**: WAI-ARIA, klavye navigasyonu, odak yönetimi, kontrast
- **Temalandırılabilir**: Design token tabanlı, light/dark ve custom temalar
- **Responsive**: Mobil-öncelikli, grid/breakpoint yardımcıları, fluid tipografi
- **Geliştirici Deneyimi**: Shadcn benzeri CLI ile proje içine bileşen ekleme veya paket olarak tüketim
- **Performans**: Sıfır/az bağımlılık, CSS değişkenleri, minimal JS

---

## Mimari Kararlar

- **Dil ve Framework**: React 18+, TypeScript strict
- **Stil Sistemi**: Tailwind CSS + CSS değişkenleri (design tokens) veya vanilla-extract; varsayılan: Tailwind + tokens
- **Erişilebilirlik Primitifleri**: Radix UI primitives üzerine hafif bir sarmalayıcı veya tamamen yerel A11y (ilk sürüm: Radix tabanlı kritik bileşenlerde)
- **Animasyon**: Opsiyonel `framer-motion` entegrasyonu (sadece gerektiğinde yüklenir)
- **İkonlar**: Lucide ikonlar (tree-shakeable), `@selim-ui/icons` adaptörü
- **Paketleme**: `tsup` veya `rollup` (CJS + ESM, types dahil). Varsayılan: tsup
- **Monorepo**: pnpm workspaces + changesets; yapılar: `packages/selim-ui`, `packages/cli`, `apps/docs`, `apps/playground`
- **Test**: Vitest + React Testing Library; görsel gerileme: Playwright
- **Linter/Format**: ESLint (typescript, react), Prettier, Stylelint (opsiyonel)
- **Docs**: Next.js ile dokümantasyon sitesi + Storybook (geliştirme)
- **Sürümleme**: SemVer + Changesets, otomatik CHANGELOG
- **CI/CD**: GitHub Actions: lint + test + build + canary/release publish

---

## Depo Yapısı (Öneri)

```
selimUI/
  packages/
    selim-ui/            # kütüphane kaynağı
    cli/                 # shadcn benzeri CLI
  apps/
    docs/                # dokümantasyon ve örnekler (Next.js)
    playground/          # manuel denemeler
  .github/workflows/     # CI
  .changeset/            # changesets
```

---

## Design Tokens ve Tema

- Renk paletleri (primary, secondary, success, warning, danger, neutral)
- Durum renkleri (hover, active, focus, disabled)
- Tipografi ölçekleri (fluid type önerisi)
- Aralık (spacing), radius, shadow, z-index, kestirme süreleri (easing/duration)
- CSS değişkenleri üzerinden light/dark ve kullanıcı temaları

---

## Bileşen Kapsamı

### Çekirdek (v0)
- [ ] Button, IconButton
- [ ] Input, Textarea, Label, HelperText
- [ ] Select (native + custom), Checkbox, Radio, Switch
- [ ] Badge, Chip, Avatar
- [ ] Alert, Callout
- [ ] Card
- [ ] Dialog/Modal, Drawer/Sheet, Popover, Tooltip
- [ ] Tabs, Accordion, Collapsible
- [ ] Breadcrumbs, Navbar, Sidebar
- [ ] Table (temel), Pagination
- [ ] Skeleton, Spinner, Progress
- [ ] Toast/Notifications
- [ ] Form bileşenleri (Field, FormControl, Error)

### Genişleme (v1)
- [ ] DatePicker/RangePicker
- [ ] Slider, Stepper
- [ ] DropdownMenu, Menubar, ContextMenu
- [ ] Command/Combobox, Autocomplete
- [ ] Segmented Control, Breadcrumb ekleri
- [ ] KBD, CodeBlock, Separator
- [ ] Responsive Grid helpers

---

## CLI (shadcn benzeri)

- [ ] `npx selimui init` — Tailwind config, tokenlar, temel tema kurulumu
- [ ] `npx selimui add <bilesen>` — Bileşen şablonlarını proje içine kopyala (opsiyonel varyantlar)
- [ ] `npx selimui upgrade` — Şablon güncellemelerini karşılaştır/yükselt
- [ ] Konfig: paket yerine kopyalama yaklaşımı veya doğrudan paket importu seçeneği

---

## Paketleme ve Yayın

- [ ] `packages/selim-ui` için tsup yapılandırması (ESM, CJS, d.ts)HYBN
- [ ] Side-effects belirtimi, tree-shaking uygunluğu
- [ ] React peerDependencies
- [ ] CSS export stratejisi (global tokens + per-component minimal stiller)
- [ ] SSR uyumu (Next.js checks)
- [ ] `@selim-ui/react`, `@selim-ui/icons`, `@selim-ui/tokens` ayrımı (ileriki aşama)
- [x] NPM yayın pipeline (changesets + release workflow)

---

## Erişilebilirlik (A11y)

- [x] WAI-ARIA patternlerini benimseme (başlangıç)
- [x] Klavye navigasyonu, odak tuzakları (Dialog/Drawer)
- [ ] Renk/kontrast kontrolü, `prefers-reduced-motion` desteği
- [ ] Screen reader friendly label/description/aria-* kullanım kılavuzu

---

## Performans ve Kalite

- [ ] Paket boyutu bütçeleri, bundle analiz
- [x] E2E/görsel gerileme test altyapısı (Playwright) — CI entegrasyonu
- [x] Unit + Integre testler (Vitest + RTL) — temel kurulum
- [ ] Lint/format pre-commit hook (husky, lint-staged)
  - [x] Kuruldu (.husky/pre-commit + lint-staged)

---

## Dokümantasyon ve Örnekler

- [ ] Next.js tabanlı docs: bileşen sayfaları, canlı örnekler, kod parçaları
- [ ] Tema değiştirici (light/dark/system)
- [ ] Kılavuzlar: Kurulum (paket ve CLI), Temalandırma, Erişilebilirlik, SSR, Performans
- [ ] Storybook ile bileşenlerin izolasyonda geliştirilmesi

---

## Yol Haritası ve Milestone'lar

### M0 — Altyapı (1-2 hafta)
- [x] Monorepo (pnpm), Typescript, ESLint/Prettier, tsconfig
- [x] tsup yapılandırması, temel tokens, Tailwind tema entegrasyonu
- [ ] CI (lint, test, build), Changesets

### M1 — Çekirdek Bileşenler (2-4 hafta)
- [x] Button, Input
- [x] Select, Radio
- [x] Checkbox, Switch
- [x] Tooltip, Popover, Dialog, Drawer
- [x] Alert, Badge, Avatar, Card
- [x] Toast, Spinner, Skeleton, Progress
- [x] Table (temel) + Pagination

### M2 — CLI ve Dokümanlar (2-3 hafta)
- [x] CLI `init` komutu (temel)
- [x] Docs site MVP + örnekler
- [x] CLI `add` komutu (ilk şablonlar: button, input)
- [ ] Görsel testler ve temasal kılavuz

### M3 — Genişleme ve Stabilizasyon (3-4 hafta)
- [ ] DatePicker, Slider, Menüler
- [ ] Performans optimizasyonları ve a11y denetimi
- [ ] 1.0.0 hazırlığı (API dondurma, dokümantasyon tamamlama)

---

## Kabul Kriterleri (v0)

- [ ] Tüm çekirdek bileşenler responsive ve a11y uyumlu
- [ ] Paket ESM/CJS + types ile yayınlanıyor, SSR uyumlu
- [ ] CLI ile en az 10 bileşen kopyalanabiliyor/eklenebiliyor
- [ ] Doküman sitesi ve örnekler tamamlandı
- [ ] Temalar arası geçiş ve token özelleştirme dokümante edildi

---

## Açık Sorular / Kararlar

- [ ] Radix bağımlılığını minimumda tutma vs tamamen kendi primitives yazımı
- [ ] Tailwind zorunlu mu? Paket importunda vanilla CSS opsiyonu sunma
- [ ] Motion varsayılan mı opsiyonel mi? (Reduced motion desteği zorunlu)

---

## İlk Sprint İçin Net Görevler

- [x] pnpm monorepo kurulumu ve temel skeleton (packages/apps)
- [x] `packages/selim-ui`: tokens, theme, Button + Input MVP
- [x] `apps/docs`: Next.js boot, tema switcher, örnek sayfa
- [x] CLI: `init` komutu (temel)
- [x] CI: build akışı
- [ ] README ve katkı rehberi taslağı

