import type { MetadataRoute } from "next";
import { getPlatformContext } from "@/lib/platform";

export default function robots(): MetadataRoute.Robots {
  const { siteUrl } = getPlatformContext();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
