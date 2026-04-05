import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { QueryProvider } from "@/components/query-provider"
import { Toaster } from "@/components/ui/sonner"
import { getPlatformContext } from "@/lib/platform"

const vazirmatn = localFont({
  src: [
    { path: "../../public/fonts/vazirmatn-arabic-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/vazirmatn-arabic-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/vazirmatn-arabic-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/vazirmatn-arabic-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
})

const { siteUrl } = getPlatformContext()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "نقطه - وبسایت حرفه‌ای خودت رو بساز",
    template: "%s | نقطه",
  },
  description:
    "با هوش مصنوعی، وبسایت و اپلیکیشن حرفه‌ای خودت رو بدون کدنویسی بساز.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={vazirmatn.variable}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            {children}
            <Toaster />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
