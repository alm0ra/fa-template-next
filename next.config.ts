import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    // Both cut `next dev` RAM in the platform's live-preview pods (webpack
    // lane; Turbopack is never used there). Low-risk per Next docs; no effect
    // on the exported production build output.
    webpackMemoryOptimizations: true,
    preloadEntriesOnStart: false,
  },
};

export default nextConfig;
