import Link from "next/link";

export default function NotFound() {
  return (
    <div className="state-shell" dir="rtl">
      <div className="state-card">
        <p className="eyebrow">404</p>
        <h2>این صفحه پیدا نشد</h2>
        <p className="state-copy">
          مسیر موردنظر در این shell تعریف نشده است. از صفحه اصلی یا route handlerهای موجود شروع کن.
        </p>
        <Link className="primary-link" href="/">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
