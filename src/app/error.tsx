"use client"

import { useEffect } from "react"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Template error:", error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center p-4" dir="rtl">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="h-6 w-6 text-destructive" />
          </div>
          <CardTitle>خطایی رخ داد</CardTitle>
          <CardDescription>
            در اجرای صفحه مشکلی پیش آمد. خطا لاگ شده است.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error.digest && (
            <p className="font-mono text-xs text-muted-foreground">
              کد خطا: {error.digest}
            </p>
          )}
        </CardContent>
        <CardFooter className="justify-center">
          <Button onClick={reset}>تلاش مجدد</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
