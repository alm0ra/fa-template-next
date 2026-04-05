import { format } from "date-fns-jalali"
import { useMemo } from "react"

/**
 * Format a date to Jalali (Persian) calendar string.
 * Uses date-fns-jalali under the hood.
 */
export function formatJalali(
  date: Date | number | string,
  pattern: string = "yyyy/MM/dd"
): string {
  return format(new Date(date), pattern)
}

/**
 * React hook that returns a formatted Jalali date string.
 * Re-computes only when date or pattern changes.
 */
export function useJalaliDate(
  date: Date | number | string,
  pattern: string = "yyyy/MM/dd"
): string {
  return useMemo(() => formatJalali(date, pattern), [date, pattern])
}
