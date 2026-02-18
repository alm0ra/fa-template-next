import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog/service";
import { getProducts } from "@/lib/shop/service";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:8080";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    }
  ];

  try {
    const [posts, products] = await Promise.all([
      getPosts({ page: 1, limit: 200 }),
      getProducts({ page: 1, limit: 200 })
    ]);

    routes.push(
      ...posts.data.map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: post.published_at
          ? new Date(post.published_at)
          : post.created_at
            ? new Date(post.created_at)
            : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7
      }))
    );

    routes.push(
      ...products.data.map((product) => ({
        url: `${siteUrl}/shop/${product.slug}`,
        lastModified: product.created_at ? new Date(product.created_at) : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7
      }))
    );
  } catch {
    // Keep static routes even when remote APIs are unavailable.
  }

  return routes;
}
