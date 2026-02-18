import type { Metadata } from "next";
import ProductPageView from "@/legacy-pages/ProductPage";
import { getProduct } from "@/lib/shop/service";

type SlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const product = await getProduct(slug);
    const title = product.seo_title || product.name;
    const description = product.seo_description || product.description?.slice(0, 160) || "جزئیات محصول";

    return {
      title,
      description,
      keywords: product.meta_keywords,
      alternates: { canonical: `/shop/${slug}` },
      openGraph: {
        title,
        description,
        type: "website",
        url: `/shop/${slug}`,
        images: product.images?.[0] ? [product.images[0]] : undefined
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: product.images?.[0] ? [product.images[0]] : undefined
      }
    };
  } catch {
    return {
      title: "محصول",
      description: "جزئیات محصول"
    };
  }
}

export default function ProductPage() {
  return <ProductPageView />;
}
