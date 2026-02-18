import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/components/common/AppProviders";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:8080";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "نقطه",
    template: "%s | نقطه",
  },
  description: "قالب فارسی فروشگاه و بلاگ با Next.js",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png" }]
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
