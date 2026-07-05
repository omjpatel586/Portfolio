import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  images: {
    minimumCacheTTL: 2678400,
    qualities: [50, 75],
  },
};

export default nextConfig;
