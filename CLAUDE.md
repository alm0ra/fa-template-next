# fa-template-next

## Stack
- Next.js 15 (App Router)
- React 19 + TypeScript
- Plain CSS + lightweight design system primitives
- Radix UI primitives for composable interactive pieces
- Route handlers for dynamic backend
- Minimal v2 bootstrap for the shared runtime + SQLite lane

## Commands
- `npm install`
- `npm run dev` (default project port is 8080)
- `npm run build`
- `npm run start`
- `npm run typecheck`

## Project Structure
- `src/app/`: pages, route handlers, metadata, sitemap, robots
- `src/lib/`: small helpers for project/runtime metadata
- `src/components/`: lightweight UI and landing primitives
- `public/`: static assets and manifest/icons

## Philosophy
- This template is intentionally small.
- The landing should feel polished enough for a first deploy, not like a raw scaffold.
- There is no shop, blog, payment, auth, or CMS kit baked in.
- The coding agent should build project-specific features from this shell instead of inheriting a heavy starter.
- Route handlers must stay compatible with the v2 shared runtime path.

## Environment Variables
- `NEXT_PUBLIC_SITE_URL`
- `PROJECT_ID`
- `VERSION`
- `RUNTIME_LANE`
- `DATABASE_PATH`

Example is in `.env.example`.

## Dynamic Backend
- `src/app/api/health/route.ts` exposes platform/runtime metadata.
- `src/app/api/demo/route.ts` is a small JSON handler example with validation.
- These files are the base for dynamic backend work in v2.

## Notes
- Keep dependencies light.
- Prefer the built-in UI primitives before inventing a new visual language from scratch.
- Prefer adding domain code only when the project really needs it.
- Do not reintroduce Supabase-specific code into this template.
