import type { Metadata } from "next";
import { Suspense } from "react";
import BlogPageView from "@/legacy-pages/BlogPage";

export const metadata: Metadata = {
  title: "بلاگ",
  description: "آخرین مطالب و مقالات",
  alternates: { canonical: "/blog" }
};

export const dynamic = "force-dynamic";

export default function BlogPage() {
  return (
    <Suspense fallback={null}>
      <BlogPageView />
    </Suspense>
  );
}
