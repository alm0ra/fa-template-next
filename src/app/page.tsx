import Link from "next/link";
import { getPlatformContext } from "@/lib/platform";

const capabilities = [
  "App Router با shell سبک و آماده برای توسعه",
  "Route handlerهای قابل استفاده در lane مشترک",
  "پایه تمیز برای ساخت سایت شرکتی، فروشگاه یا داشبورد",
];

const rules = [
  "از این shell شروع کن و فقط چیزهایی را اضافه کن که پروژه واقعا لازم دارد.",
  "منطق backend را داخل route handlerها و libهای کوچک نگه دار.",
  "از بازگرداندن dependencyهای سنگین و surfaceهای بلااستفاده خودداری کن.",
];

export default function HomePage() {
  const context = getPlatformContext();

  return (
    <main className="hero-shell">
      <section className="hero-panel">
        <p className="eyebrow">Version 2 Bootstrap</p>
        <h1>یک shell تمیز برای پروژه‌های فارسی با backend داینامیک</h1>
        <p className="lead">
          این template عمدا کوچک است تا ایجنت بتواند براساس نیاز واقعی پروژه ساختار را
          بسازد، نه اینکه با shop/blog/payment پیش‌فرض گیج شود.
        </p>

        <div className="hero-actions">
          <Link className="primary-link" href="/api/health">
            بررسی سلامت runtime
          </Link>
          <Link className="secondary-link" href="/api/demo">
            دیدن route نمونه
          </Link>
        </div>
      </section>

      <section className="info-grid">
        <article className="info-card">
          <h2>Context</h2>
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
        </article>

        <article className="info-card">
          <h2>Capabilities</h2>
          <ul className="bullet-list">
            {capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="info-card">
          <h2>Agent Rules</h2>
          <ul className="bullet-list">
            {rules.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
