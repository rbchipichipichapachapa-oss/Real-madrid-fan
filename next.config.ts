import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Real-madrid-fan',
  assetPrefix: '/Real-madrid-fan/',
};

export default nextConfig;
