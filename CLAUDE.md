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
│   ├── page.tsx            # Landing page (minimal — agent replaces this)
│   ├── globals.css         # Tailwind + design tokens + utility classes
│   ├── error.tsx           # Error boundary
│   ├── loading.tsx         # Loading state (Skeleton)
│   └── api/
│       ├── health/route.ts # Platform metadata endpoint
│       └── demo/route.ts   # Example CRUD endpoint
├── components/
│   ├── ui/                 # shadcn/ui components (20+)
│   ├── theme-provider.tsx  # next-themes wrapper
│   ├── theme-toggle.tsx    # Dark/light toggle button
│   └── query-provider.tsx  # React Query provider
├── hooks/
│   └── use-jalali-date.ts  # Persian date formatting
├── lib/
│   ├── db.ts               # Drizzle + libSQL client (lazy proxy)
│   ├── platform.ts         # getPlatformContext()
│   ├── cn.ts               # Tailwind class merge + toEnDigits()
│   ├── persian.ts          # Persian digits, dates, phone, bank card utils
│   └── validations/
│       └── index.ts        # Zod schemas: mobile, bank card, email, forms
├── db/
│   ├── schema.ts           # Drizzle table definitions (agent edits this)
│   └── migrations/         # Generated migration files
└── public/
```

---

## Theme System (Dark / Light)

Already configured. Works out of the box.

**How it works:**
- `next-themes` handles class toggling on `<html>`
- `ThemeProvider` wraps the app in `layout.tsx` (defaultTheme: `"light"`)
- `ThemeToggle` component provides the toggle button
- All colors use CSS variables in `globals.css` (light `:root`, dark `.dark`)

**Rules for the agent:**
- NEVER use hardcoded colors (`bg-white`, `text-black`, `bg-gray-100`, etc.)
- ALWAYS use semantic tokens: `bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`, `bg-primary`, etc.
- For custom backgrounds: use `hsl(var(--primary) / 0.1)` syntax, NOT hardcoded HSL
- Test: both light and dark must look good. If you add a section, check both.

**Adding the toggle to any header:**
```tsx
import { ThemeToggle } from "@/components/theme-toggle"
// Place <ThemeToggle /> in your header/navbar
```

---

## Bilingual Support (FA / EN)

There is NO heavy i18n library. Each project is either Persian or English (or both).

**When the user asks for a bilingual or English site:**

1. Change `layout.tsx`:
   - `lang="fa"` → `lang="en"` (or make it dynamic)
   - `dir="rtl"` → `dir="ltr"` (or make it dynamic)

2. For a fully bilingual site, create a simple locale system:

```tsx
// src/lib/locale.ts
export type Locale = "fa" | "en"

export function getLocale(): Locale {
  // Could read from cookie, URL param, or env
  return (process.env.NEXT_PUBLIC_LOCALE as Locale) || "fa"
}

export function t(fa: string, en: string): string {
  return getLocale() === "fa" ? fa : en
}
```

Usage:
```tsx
import { t } from "@/lib/locale"

<h1>{t("سلام دنیا", "Hello World")}</h1>
<Button>{t("ثبت‌نام", "Sign Up")}</Button>
```

3. For direction-aware layout: use Tailwind logical properties (`ms-`, `me-`, `ps-`, `pe-`, `text-start`, `text-end`, `start-0`, `end-0`). These automatically flip for RTL/LTR.

**Do NOT use `ml-`, `mr-`, `pl-`, `pr-`, `left-`, `right-` in bilingual sites.** They break in RTL.

---

## Design System & Visual Utilities

The template comes with a rich set of design utilities in `globals.css` and `tailwind.config.ts`. The agent MUST use these to produce visually polished output.

### Color Palette

All colors are CSS variables. To change the entire look of a site, the agent only needs to edit the HSL values in `globals.css`:

```css
:root {
  --primary: 20 68% 37%;        /* Main brand color */
  --gradient-from: 20 68% 37%;  /* Gradient start */
  --gradient-to: 28 80% 52%;    /* Gradient end */
}
```

Different project = different values. A medical site might use blue (`210 80% 45%`), a restaurant might use red (`0 72% 45%`).

### Available Utility Classes

| Class | What it does | Use for |
|-------|-------------|---------|
| `gradient-primary` | Solid gradient from `--gradient-from` to `--gradient-to` | CTA buttons, badges, highlights |
| `gradient-primary-soft` | Same but very subtle (8% opacity) | Card backgrounds, section fills |
| `gradient-hero` | Full-section directional gradient | Hero section background |
| `gradient-radial` | Radial glow from top-right corner | Stats section, decorative |
| `gradient-text` | Gradient clipped to text | Headlines, emphasis words |
| `glass` | Frosted glass (blur + semi-transparent) | Floating headers, overlays |
| `glass-strong` | Heavier frosted glass | Sticky navbars |
| `hover-lift` | translateY(-4px) + shadow on hover | Cards, clickable items |
| `icon-box` | Rounded container with subtle border | Icon wrappers in features |
| `blob-primary` | Large blurred circle (decorative) | Hero backgrounds |
| `blob-secondary` | Same, secondary color | Opposite corner decoration |
| `divider-gradient` | Gradient fade-out line | Section separators |
| `shimmer` | Animated loading skeleton | Placeholder while loading |
| `section-spacing` | `py-20 sm:py-28` | Consistent section padding |
| `section-spacing-sm` | `py-12 sm:py-16` | Compact section padding |
| `stagger-1` to `stagger-6` | Animation delays (0.1s–0.6s) | List/grid entrance animations |

### Available Animations

| Class | Effect |
|-------|--------|
| `animate-fade-in` | Fade + slight translateY (0.5s) |
| `animate-fade-in-up` | Fade + larger translateY (0.6s) |
| `animate-slide-in-right` | Fade + translateX |
| `animate-scale-in` | Fade + scale from 0.95 |
| `animate-float` | Infinite gentle float (3s loop) |
| `animate-pulse-soft` | Infinite gentle opacity pulse |
| `animate-shimmer` | Infinite loading shimmer |

### Shadow System

| Class | Depth | Use for |
|-------|-------|---------|
| `shadow-depth` | Light (1-layer) | Default cards |
| `shadow-depth-md` | Medium (2-layer) | Hover state, important cards |
| `shadow-depth-lg` | Deep (3-layer + ring) | Modals, floating elements |
| `shadow-glow` | Primary color halo | CTA buttons |
| `shadow-glow-lg` | Larger halo | Hover state of CTA |

### Design Rules for the Agent

**MUST DO:**
- Use `gradient-primary` on the main CTA button (not plain `bg-primary`)
- Use `hover-lift` on cards that are clickable
- Use `icon-box` for feature/service icon containers (not plain `bg-primary/10 rounded`)
- Use `gradient-hero` or `gradient-radial` on the hero section background
- Use `animate-fade-in-up` with `stagger-N` on grid items for entrance animation
- Use `divider-gradient` between major sections (not `<Separator>` or plain `border-b`)
- Use `glass` or `glass-strong` on sticky headers
- Use `shadow-depth` on cards (not plain `shadow-sm`)
- Change `--gradient-from` and `--gradient-to` to match the project's brand color

**MUST NOT DO:**
- Hardcode colors (`bg-blue-500`, `text-gray-600`)
- Use flat backgrounds with no depth or gradient
- Make all sections the same background color
- Skip hover effects on interactive elements
- Use only `<Separator>` for visual breaks between sections
- Leave hero sections plain/flat with no gradient or decorative elements

---

## Persian Utilities (`lib/persian.ts`)

Ready-to-use helpers for Farsi projects. Agent should use these instead of reinventing:

| Function | What it does | Example |
|----------|-------------|---------|
| `toPersianDigits(v)` | `"123"` → `"۱۲۳"` | Prices, dates, counters |
| `toEnglishDigits(v)` | `"۱۲۳"` → `"123"` | Before sending to API |
| `formatPersianNumber(n)` | `50000` → `"۵۰,۰۰۰"` | Prices, stats |
| `formatPrice(n, unit?)` | `50000` → `"۵۰,۰۰۰ تومان"` | Price display |
| `formatPersianDate(d)` | Jalali full date: `"۱۵ فروردین ۱۴۰۴"` | Blog posts, orders |
| `formatPersianDateTime(d)` | With time: `"۱۵ فروردین ۱۴۰۴، ساعت ۱۴:۳۰"` | Order details |
| `formatPersianDateShort(d)` | `"۱۴۰۴/۰۱/۱۵"` | Compact tables |
| `formatRelativeTime(d)` | `"۳ دقیقه پیش"` | Comments, chat |
| `validateIranianMobile(p)` | Validates `09xx xxx xxxx` | Phone input |
| `formatIranianMobile(p)` | `"09121234567"` → `"۰۹۱۲ ۱۲۳ ۴۵۶۷"` | Display |
| `validateBankCard(c)` | Luhn algorithm on 16-digit card | Payment forms |
| `formatBankCard(c)` | `"6037xxxx..."` → `"۶۰۳۷ xxxx xxxx xxxx"` | Display |

Import:
```tsx
import { formatPersianNumber, formatPersianDate, toPersianDigits } from "@/lib/persian"
```

## Zod Validation Schemas (`lib/validations/`)

Pre-built schemas with Persian error messages:

| Schema | Use for |
|--------|---------|
| `persianMobileSchema` | Phone input (validates Iranian mobile) |
| `bankCardSchema` | Bank card input (Luhn + 16 digits) |
| `emailSchema` | Email field |
| `nameSchema` | Name field (2-50 chars) |
| `passwordSchema` | Password field (8-100 chars) |
| `loginSchema` | Login form (phone) |
| `signupSchema` | Signup form (name + phone) |
| `contactSchema` | Contact form (name + email + subject + message) |

Usage with React Hook Form:
```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema, type ContactFormData } from "@/lib/validations"

const form = useForm<ContactFormData>({
  resolver: zodResolver(contactSchema),
})
```

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
- `NEXT_PUBLIC_LOCALE` — `"fa"` or `"en"` (optional, default `"fa"`)
- `PROJECT_ID`
- `VERSION`
- `RUNTIME_LANE`
- `DATABASE_URL` — libSQL URL (injected by platform)
- `DATABASE_AUTH_TOKEN` — JWT for libSQL (injected by platform)

## Philosophy
- This template is intentionally minimal but polished.
- page.tsx is a placeholder — agent replaces it entirely per project.
- No shop, blog, payment, auth, or CMS baked in.
- Agent builds project-specific features from this shell.
- Design quality comes from the utility classes, not from pre-built sections.
- Route handlers must stay compatible with Deno isolation runtime.

## API Route Handler Rules (CRITICAL)

API routes run inside isolated Deno subprocesses. Follow these rules strictly:

### DO:
- Use `Response.json()` for JSON responses (Web Standard API)
- Use `@/lib/db` for database access (Drizzle + libSQL via HTTP)
- Use `fetch()` for external API calls (payment gateways, webhooks, etc.)
- Use `crypto.randomUUID()` for IDs (Web Standard)
- Use `zod` for validation (pure JS)
- Use `@/lib/platform` for platform context
- Return `Response` objects from handlers

### DON'T:
- Never use `NextResponse` or import from `next/server` — use `Response.json()` instead
- Never use `sharp` or any native C++ npm modules
- Never use `fs`, `child_process`, or `net` directly
- Never use `bcrypt` — use `bcryptjs` (pure JS) instead
- Never use `better-sqlite3` — use `@libsql/client` (HTTP mode)
- Never rely on `global` state between requests (each request may run in a fresh isolate)
- Never use `process.exit()` or modify `process.env` directly

### Handler Signature:
```ts
// Correct ✅
export async function GET(request: Request) {
  return Response.json({ ok: true });
}

export async function POST(request: Request) {
  const body = await request.json();
  return Response.json({ created: true }, { status: 201 });
}

// Wrong ❌
import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ ok: true });
}
```
- Do not reintroduce Supabase-specific code.
- Keep dependencies justified — every package earns its place.
