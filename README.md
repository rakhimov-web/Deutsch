# Lernraum — Deutsch A1

Nemis tilini A1 darajasidan o'rganish uchun shaxsiy bilim bazasi. Backend yo'q — barcha ma'lumotlar loyiha ichida saqlanadi va React + Vite + Tailwind CSS asosida ishlaydi.

## Texnologiyalar

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- shadcn-uslubidagi komponentlar (`src/components/ui`)
- Framer Motion, Lucide ikonkalari

## Ishga tushirish

```bash
npm install
npm run dev
```

## Tuzilma

- `src/components/ui/sidebar-with-chrome-like-tabs.tsx` — asosiy ilova skeleti (sidebar + brauzer uslubidagi tablar)
- `src/pages/` — Darslar, Grammatika markazi, Lug'at ombori, Qo'llanma sahifalari
- `src/index.css` — dizayn tokenlari (ranglar, shriftlar)

## Dizayn tizimi

Interfeys butunlay qorong'i asosda qurilgan. Yagona funktsional rang qoidasi — nemis grammatik jinsi (`der` = ko'k, `die` = qizil, `das` = sariq). Sarlavhalar uchun **Space Grotesk**, asosiy matn uchun **IBM Plex Sans** ishlatiladi.

## Holat

- [x] Loyiha skeleti va dizayn tizimi
- [x] Lektion 1 manba ma'lumotlari qo'shildi (Darslar sahifasida)
- [ ] Grammatika markazi — interaktiv kartalar
- [ ] Lug'at ombori — rang-kodlangan so'zlar, talaffuz, mashqlar
