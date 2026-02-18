import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
      "react-router-dom": path.resolve(__dirname, "src/lib/next-router-compat.tsx"),
    };
    return config;
  },
};

export default nextConfig;
