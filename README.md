# react-starter

TanStack Start (SSR) app: Vite 8 + React 19 + TypeScript, with file-based routing and shadcn UI (Radix).

## Getting started

```sh
pnpm install
pnpm dev
```

The dev server runs on [http://localhost:3000](http://localhost:3000).

## Scripts

- `pnpm dev` — start the TanStack Start dev server (port 3000)
- `pnpm build` — production build (client + server, outputs to `dist/`)
- `pnpm preview` — preview the production build
- `pnpm lint` — lint and format via ESLint (`eslint .`)

## Structure

- `src/router.tsx` — creates the router and registers its types
- `src/routes/` — file-based routes (`__root.tsx` is the HTML shell)
- `src/components/ui/` — shadcn components (Radix UI)
- `src/styles/global.css` — Tailwind v4 theme
