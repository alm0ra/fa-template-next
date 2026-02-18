# fa-template-next

## Stack
- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS + shadcn/ui
- TanStack Query
- Supabase JS client

## Commands
- `npm install`
- `npm run dev` (default project port is 8080)
- `npm run build`
- `npm run start`

## Project Structure
- `src/app/`: Next.js routes, metadata, sitemap, robots
- `src/legacy-pages/`: client page implementations (migration layer)
- `src/components/`: shared UI and feature components
- `src/lib/`: services, payment/shop/blog utilities, router compat
- `src/hooks/`: reusable React hooks
- `public/`: static assets and manifest/icons

## Routing
Routes are defined by `src/app/**/page.tsx`.
Key routes:
- `/`
- `/shop`
- `/shop/[slug]`
- `/blog`
- `/blog/[slug]`
- `/checkout`
- `/order`
- `/order/[orderNumber]`
- `/payment/callback`

## Environment Variables
Public env vars only:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_PROJECT_ID`
- `NEXT_PUBLIC_SITE_URL`

Example is in `.env.example`.

## SEO
- Page metadata uses `metadata` / `generateMetadata` in `src/app`
- `src/app/sitemap.ts` generates dynamic sitemap
- `src/app/robots.ts` configures indexing rules

## Notes
- Payment callback and blog listing routes are dynamic by design.
- Legacy pages are client components and are progressively being migrated to richer server components.
