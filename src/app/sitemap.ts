import type { MetadataRoute } from "next";
import { getPlatformContext } from "@/lib/platform";

export default function sitemap(): MetadataRoute.Sitemap {
  const { siteUrl } = getPlatformContext();

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/api/health`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    },
  ];
}
