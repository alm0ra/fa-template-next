import type { Metadata } from "next";
import "./globals.css";
import { getPlatformContext } from "@/lib/platform";

const { siteUrl } = getPlatformContext();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "قالب فارسی v2",
    template: "%s | قالب فارسی v2",
  },
  description: "قالب مینیمال Next.js برای lane مشترک v2 با backend داینامیک.",
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
      <body className="app-shell">
        <div className="page-chrome" />
        <div className="page-grid">{children}</div>
      </body>
    </html>
  );
}
