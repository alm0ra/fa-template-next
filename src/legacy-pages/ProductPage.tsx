"use client";

// ProductPage - single product page with SEO, breadcrumb, sharing, related, reviews
import { useParams } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { ProductDetail } from '@/components/shop/ProductDetail';
import { RelatedProducts } from '@/components/shop/RelatedProducts';
import { ProductReviews } from '@/components/shop/ProductReviews';
import { Breadcrumb } from '@/components/blog/Breadcrumb';
import { ShareBar } from '@/components/blog/ShareBar';
import { useProduct } from '@/hooks/use-product';

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const { product } = useProduct(slug);

  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  const breadcrumbItems = [
    { label: 'خانه', href: '/' },
    { label: 'فروشگاه', href: '/shop' },
    ...(product?.category ? [{ label: product.category }] : []),
    { label: product?.name || '...' },
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Breadcrumb items={breadcrumbItems} />

        <ProductDetail slug={slug} />

        {product && (
          <ShareBar url={pageUrl} title={product.name} />
        )}

        <Separator />

        {slug && <RelatedProducts slug={slug} />}

        <Separator />

        {slug && <ProductReviews slug={slug} />}
      </div>
    </div>
  );
}
