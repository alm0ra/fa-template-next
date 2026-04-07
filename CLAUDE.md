# fa-template-next

## Stack
- Next.js 15 (App Router, standalone output)
- React 19 + TypeScript
- Tailwind CSS 3.4 + shadcn/ui (20+ components)
- Radix UI primitives (via shadcn)
- lucide-react icons
- React Hook Form + Zod (form validation)
- @tanstack/react-query (server state)
- date-fns + date-fns-jalali (Persian calendar)
- next-themes (dark mode)
- sonner (toast notifications)
- Route handlers for dynamic backend
- **Drizzle ORM + libSQL** (`@libsql/client` + `drizzle-orm`)
- Minimal v2 bootstrap for shared runtime + libSQL lane

## Commands
- `npm install`
- `npm run dev` (default port 8080)
- `npm run build`
- `npm run start`
- `npm run typecheck`
- `npm run db:generate` — generate migration files from schema changes
- `npm run db:push` — apply schema directly to live DB (dev only)
- `npm run db:studio` — open Drizzle Studio

## Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout (RTL, Vazirmatn font, providers)
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Tailwind + shadcn CSS variables
│   ├── error.tsx           # Error boundary
│   ├── loading.tsx         # Loading state (Skeleton)
│   └── api/
│       ├── health/route.ts # Platform metadata endpoint
│       └── demo/route.ts   # Example CRUD endpoint
├── components/
│   ├── ui/                 # shadcn/ui components (20+)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── tabs.tsx
│   │   └── ... (badge, sheet, skeleton, tooltip, etc.)
│   ├── theme-provider.tsx  # next-themes wrapper
│   ├── theme-toggle.tsx    # Dark/light toggle
│   └── query-provider.tsx  # React Query provider
├── hooks/
│   └── use-jalali-date.ts  # Persian date formatting
├── lib/
│   ├── db.ts               # Drizzle + libSQL client (lazy proxy)
│   ├── platform.ts         # getPlatformContext()
│   └── cn.ts               # Tailwind class merge utility
├── db/
│   ├── schema.ts           # Drizzle table definitions (agent edits this)
│   └── migrations/         # Generated migration files
└── public/
```

## Design System
- **Palette**: Warm brown/cream (earthy tones) — HSL variables in globals.css
- **Dark mode**: Supported via CSS class strategy + next-themes
- **Font**: Vazirmatn (Google Fonts, self-optimized via next/font)
- **Direction**: RTL default (dir="rtl", lang="fa")
- **Components**: shadcn/ui — copy-paste, Tailwind-based, accessible
- **Icons**: lucide-react

## UI Rules for Agent
- Use shadcn/ui components from `@/components/ui/`
- Use Tailwind CSS utility classes for all styling
- RTL-first: prefer logical properties (`ms-`, `me-`, `ps-`, `pe-`, `text-start`, `text-end`)
- Use Vazirmatn font (already configured)
- Mobile-first responsive design (`sm:`, `md:`, `lg:` breakpoints)
- Use React Hook Form + Zod for forms (`@/components/ui/form`)
- Use @tanstack/react-query for server state management
- Use sonner for toast notifications (`@/components/ui/sonner`)
- Dark mode: use `bg-background`, `text-foreground`, etc. (not hardcoded colors)

## Database (Drizzle + libSQL)

- Schema lives in `src/db/schema.ts` — define tables with `sqliteTable` from `drizzle-orm/sqlite-core`
- Import `db` from `@/lib/db` in route handlers and server code
- Never hardcode `DATABASE_URL` or `DATABASE_AUTH_TOKEN` — the platform injects them at runtime
- After editing schema: `npm run db:generate` to create a migration, `npm run db:push` to apply locally
- The deployer auto-applies migrations to the project's libSQL namespace on every deploy

Example:
```ts
// src/db/schema.ts
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  price: integer("price").notNull(),
});
```

```ts
// src/app/api/products/route.ts
import { db } from "@/lib/db";
import { products } from "@/db/schema";

export async function GET() {
  const all = await db.select().from(products);
  return Response.json(all);
}
```

## Environment Variables
- `NEXT_PUBLIC_SITE_URL`
- `PROJECT_ID`
- `VERSION`
- `RUNTIME_LANE`
- `DATABASE_URL` — libSQL URL (injected by platform)
- `DATABASE_AUTH_TOKEN` — JWT for libSQL (injected by platform)

## Philosophy
- This template is intentionally minimal but polished.
- Landing page looks professional out of the box.
- No shop, blog, payment, auth, or CMS baked in.
- Agent builds project-specific features from this shell.
- Route handlers must stay compatible with v2 shared runtime.
- Do not reintroduce Supabase-specific code.
- Keep dependencies justified — every package earns its place.
