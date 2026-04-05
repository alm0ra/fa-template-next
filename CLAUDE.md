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
- Minimal v2 bootstrap for shared runtime + SQLite lane

## Commands
- `npm install`
- `npm run dev` (default port 8080)
- `npm run build`
- `npm run start`
- `npm run typecheck`

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
│   ├── platform.ts         # getPlatformContext()
│   └── cn.ts               # Tailwind class merge utility
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

## Environment Variables
- `NEXT_PUBLIC_SITE_URL`
- `PROJECT_ID`
- `VERSION`
- `RUNTIME_LANE`
- `DATABASE_PATH`

## Philosophy
- This template is intentionally minimal but polished.
- Landing page looks professional out of the box.
- No shop, blog, payment, auth, or CMS baked in.
- Agent builds project-specific features from this shell.
- Route handlers must stay compatible with v2 shared runtime.
- Do not reintroduce Supabase-specific code.
- Keep dependencies justified — every package earns its place.
