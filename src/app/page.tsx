import Link from "next/link";
import {
  ArrowLeft,
  LayoutDashboard,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Store,
} from "lucide-react";
import { LandingTabs } from "@/components/landing-tabs";
import { Button } from "@/components/ui/button";
import { Surface } from "@/components/ui/surface";
import { getPlatformContext } from "@/lib/platform";

const highlights = [
  {
    icon: Sparkles,
    title: "Landing حرفه‌ای",
    text: "یک پایه بصری بهتر تا agent مجبور نباشد هر بار از صفر ظاهر محصول را بسازد.",
  },
  {
    icon: RadioTower,
    title: "Shared Runtime Ready",
    text: "Route handlerها برای lane مشترک، build ساده‌تر و deployment تمیزتر آماده‌اند.",
  },
  {
    icon: ShieldCheck,
    title: "Lean اما قابل توسعه",
    text: "عمدا سبک نگه داشته شده تا surface بلااستفاده وارد context و prompt نشود.",
  },
];

export default function HomePage() {
  const context = getPlatformContext();

  return (
    <main className="hero-shell">
      <section className="hero-ribbon">
        <span>Version 2 Bootstrap</span>
        <span>Radix-ready</span>
        <span>Shared Runtime</span>
      </section>

      <Surface className="hero-panel" tone="spotlight">
        <div className="hero-copy">
          <p className="eyebrow">Persian Next.js Foundation</p>
          <h1>یک bootstrap حرفه‌ای‌تر برای سایت‌ها و اپ‌های فارسی</h1>
          <p className="lead">
            این template دیگر فقط یک shell ساده نیست. پایه UI تمیزتر، blockهای بهتر و
            design system سبک‌تری دارد تا خروجی اولیه agent از همان ابتدا دلنشین‌تر
            باشد.
          </p>

          <div className="hero-actions">
            <Button asChild size="lg">
              <Link href="/api/health">
                بررسی سلامت runtime
                <ArrowLeft size={16} />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/api/demo">دیدن route نمونه</Link>
            </Button>
          </div>
        </div>

        <div className="hero-stack">
          <Surface className="mini-panel">
            <div className="stat-kicker">Build Surface</div>
            <strong>Next + SQLite + Shared Runtime</strong>
            <p>
              Bootstrap مناسب برای landing, dashboard, catalog و فرم‌های داینامیک.
            </p>
          </Surface>
          <Surface className="mini-panel mini-panel-accent">
            <Store size={20} />
            <div>
              <strong>Store / SaaS / Corporate</strong>
              <p>شروع حرفه‌ای‌تر بدون preload کردن پیچیدگی بی‌دلیل.</p>
            </div>
          </Surface>
        </div>
      </Surface>

      <section className="feature-grid">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <Surface key={item.title} className="feature-card">
              <div className="feature-icon">
                <Icon size={18} />
              </div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </Surface>
          );
        })}
      </section>

      <section className="bento-grid">
        <Surface className="bento-card bento-card-wide">
          <div className="section-heading">
            <LayoutDashboard size={18} />
            <span>Platform Context</span>
          </div>
          <dl className="meta-list">
            <div>
              <dt>Project ID</dt>
              <dd>{context.projectId}</dd>
            </div>
            <div>
              <dt>Version</dt>
              <dd>{context.version}</dd>
            </div>
            <div>
              <dt>Runtime Lane</dt>
              <dd>{context.runtimeLane}</dd>
            </div>
            <div>
              <dt>Database Path</dt>
              <dd>{context.databasePath}</dd>
            </div>
          </dl>
        </Surface>

        <Surface className="bento-card">
          <div className="metric-value">V2</div>
          <p className="metric-copy">
            route handlerها، فرانت بهتر، و پایه‌ای که agent را از شروع خراب نمی‌کند.
          </p>
        </Surface>

        <Surface className="bento-card">
          <div className="metric-value">Radix</div>
          <p className="metric-copy">
            design system سبک برای componentهای پایه بدون بازگشت به templateهای سنگین.
          </p>
        </Surface>
      </section>

      <Surface className="tabs-panel">
        <div className="tabs-header">
          <p className="eyebrow">Bootstrap Rules</p>
          <h2>پایه‌ای که به agent جهت می‌دهد، نه اینکه گیجش کند</h2>
        </div>
        <LandingTabs />
      </Surface>
    </main>
  );
}
