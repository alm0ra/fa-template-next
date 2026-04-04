"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Template error:", error);
  }, [error]);

  return (
    <div className="state-shell" dir="rtl">
      <div className="state-card">
        <p className="eyebrow">Runtime Error</p>
        <h2>در اجرای صفحه مشکلی رخ داد</h2>
        <p className="state-copy">خطا لاگ شده است. می‌توانی دوباره رندر را امتحان کنی.</p>
        <button className="primary-button" onClick={reset} type="button">
          تلاش مجدد
        </button>
      </div>
    </div>
  );
}
