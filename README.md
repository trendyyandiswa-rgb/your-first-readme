# Yandiswa Trendy

A modern web app built with Lovable, running on TanStack Start, React and Tailwind CSS.

**Repository:** https://github.com/yandiswa-trendy/yandiswa-trendy

## Overview

This repository contains the full source of the app: routes, UI components, styling
and server logic. Everything in Lovable is committed here, and anything pushed here
syncs back into Lovable.

## Tech stack

- **TanStack Start** (v1) — full-stack React framework with SSR and server functions
- **React 19** + **TypeScript**
- **Vite 7** — dev server and build tool
- **Tailwind CSS v4** — styling via `src/styles.css` design tokens
- **shadcn/ui** + Radix primitives — accessible UI components

## Getting started

Requires Node.js 20+ (or Bun).

```sh
git clone <this-repository-url>
cd <repository-name>
npm install
npm run dev
```

The dev server runs at http://localhost:8080.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## Project structure

```text
src/
  routes/        File-based routes (index.tsx is the home page)
  components/    Reusable UI components
  hooks/         Custom React hooks
  lib/           Utilities and shared helpers
  styles.css     Design system: colors, tokens, Tailwind theme
```

Routing is file-based: a new file in `src/routes` becomes a new page.
`src/routeTree.gen.ts` is generated — never edit it by hand.

## Design system

All colors, gradients and radii are defined as semantic tokens in `src/styles.css`.
Components use those tokens (`bg-background`, `text-primary`, …) instead of hardcoded
color classes, so theming stays consistent.

## Editing this project

- **In Lovable** — open the project and describe the changes you want.
- **Locally** — clone, edit, push. Changes sync back into Lovable automatically.
- **On GitHub** — edit files directly or via pull requests.

## Deployment

Publish from the Lovable editor (Share → Publish). A custom domain can be connected
in project settings. The code is standard open source tooling, so it can also be
hosted anywhere that supports a Node or edge runtime.

## License

Private project. All rights reserved.
