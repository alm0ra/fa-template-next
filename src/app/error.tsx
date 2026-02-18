"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] items-center justify-center px-4" dir="rtl">
      <div className="max-w-md space-y-4 text-center">
        <h2 className="text-xl font-semibold">مشکلی رخ داد</h2>
        <p className="text-sm text-muted-foreground">لطفا دوباره تلاش کنید.</p>
        <Button onClick={reset}>تلاش مجدد</Button>
      </div>
    </div>
  );
}
