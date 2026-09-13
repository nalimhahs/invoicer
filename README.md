# Invoicer

A Vite + React + TypeScript workspace for a calm invoicing UI (shadcn/ui, Tailwind 4, pnpm).

## Prerequisites

- Node.js `^20.19 || >=22.12`
- [pnpm](https://pnpm.io) `10` (Corepack: `corepack enable`)

## Setup

```bash
pnpm install
pnpm dev
```

| Script                              | Purpose                                        |
| ----------------------------------- | ---------------------------------------------- |
| `pnpm dev`                          | Local Vite server                              |
| `pnpm build`                        | Typecheck (`tsc -b`) and production bundle     |
| `pnpm preview`                      | Serve `dist/` locally (not production hosting) |
| `pnpm lint`                         | ESLint                                         |
| `pnpm typecheck`                    | Project-references typecheck                   |
| `pnpm test`                         | Vitest                                         |
| `pnpm format` / `pnpm format:check` | Prettier                                       |
| `pnpm check`                        | Lint, typecheck, test, and build               |

Deploy the contents of `dist/` as a static SPA. Set Vite `base` if you host on a subdirectory.

## Environment

Copy `.env.example` if you add client config. Vite exposes only `VITE_*` keys to the browser — never put secrets in those variables, and do not commit `.env` files.

## UI components

```bash
pnpm dlx shadcn@4.19.1 add button
```

Components land in `src/components/ui`.
