"use client";

// BlogPostPage - single post with SEO, TOC, reading progress, related posts
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowRight } from 'lucide-react';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { Breadcrumb } from '@/components/blog/Breadcrumb';
import { ReadingProgress } from '@/components/blog/ReadingProgress';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { PostDetail } from '@/components/blog/PostDetail';
import { ShareBar } from '@/components/blog/ShareBar';
import { CommentSection } from '@/components/blog/CommentSection';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { useBlogPost } from '@/hooks/use-blog-post';
import { useTableOfContents } from '@/hooks/use-table-of-contents';
import { processContent } from '@/lib/blog/sanitize';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { post, comments } = useBlogPost(slug);

  const processedContent = post?.content ? processContent(post.content) : '';
  const { headings, activeId } = useTableOfContents(processedContent);

  const breadcrumbItems = [
    { label: 'خانه', href: '/' },
    { label: 'بلاگ', href: '/blog' },
    ...(post?.category ? [{ label: post.category, href: `/blog?category=${encodeURIComponent(post.category)}` }] : []),
    ...(post ? [{ label: post.title }] : []),
  ];

  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <ReadingProgress />

      <BlogHeader />

      <div className="container mx-auto px-4 py-6">
        <div className="space-y-4 mb-6">
          <Breadcrumb items={breadcrumbItems} />
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5"
            onClick={() => navigate('/blog')}
          >
            <ArrowRight className="h-4 w-4" />
            بازگشت به بلاگ
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 max-w-3xl space-y-8">
            <PostDetail slug={slug} />

            {post && (
              <>
                <ShareBar url={pageUrl} title={post.title} />
                <Separator />
                <RelatedPosts
                  slug={slug!}
                  onPostClick={(p) => navigate(`/blog/${p.slug}`)}
                />
                <Separator />
                <CommentSection postId={post.id} comments={comments} />
              </>
            )}
          </div>

          {headings.length > 0 && (
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-20">
                <TableOfContents headings={headings} activeId={activeId} />
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
