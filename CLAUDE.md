# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build
npm run lint      # ESLint
npm run preview   # Preview production build
```

No test runner is configured yet.

## Stack

- **React 19** with JSX (`.jsx` files, no TypeScript)
- **Vite 7** as bundler/dev server
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (imported in `src/index.css` as `@import "tailwindcss"`)

## Architecture

This is an early-stage React SPA. Currently just a scaffold:

- `src/main.jsx` — entry point, mounts `<App />` into `#root`
- `src/App.jsx` — root component (nearly empty)
- `src/index.css` — global styles, imports Tailwind

Tailwind v4 uses CSS-first configuration — there is no `tailwind.config.js`. Customize via CSS variables/`@theme` in `index.css`.

ESLint is configured for JS/JSX only (no TypeScript). Unused variable pattern exception: names matching `^[A-Z_]` are allowed.
