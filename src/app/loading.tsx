import { Skeleton } from "@/components/ui/skeleton"

export default function RootLoading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-4" dir="rtl">
      <div className="w-full max-w-md space-y-4">
        <Skeleton className="mx-auto h-8 w-32" />
        <Skeleton className="mx-auto h-4 w-64" />
        <div className="pt-4 space-y-3">
          <Skeleton className="h-24 w-full rounded-xl" />
          <div className="grid grid-cols-3 gap-3">
            <Skeleton className="h-16 rounded-lg" />
            <Skeleton className="h-16 rounded-lg" />
            <Skeleton className="h-16 rounded-lg" />
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        در حال آماده‌سازی...
      </p>
    </div>
  )
}
