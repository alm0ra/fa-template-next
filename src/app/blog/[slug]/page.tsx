import type { Metadata } from "next";
import BlogPostPageView from "@/legacy-pages/BlogPostPage";
import { getPost } from "@/lib/blog/service";

type SlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const { post } = await getPost(slug);
    const title = post.seo_title || post.title;
    const description = post.seo_description || post.excerpt || "مطالعه مقاله";

    return {
      title,
      description,
      keywords: post.meta_keywords,
      alternates: { canonical: `/blog/${slug}` },
      openGraph: {
        title,
        description,
        type: "article",
        url: `/blog/${slug}`,
        images: post.cover_image ? [post.cover_image] : undefined
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: post.cover_image ? [post.cover_image] : undefined
      }
    };
  } catch {
    return {
      title: "مقاله",
      description: "مطالعه مقاله"
    };
  }
}

export default function BlogPostPage() {
  return <BlogPostPageView />;
}
