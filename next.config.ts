import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // static HTML export
  basePath: "/docs", // matches repo name
  assetPrefix: "/docs/", // for CDN assets
  images: {
    unoptimized: true, // required for static export
  },
  trailingSlash: true, // GitHub Pages needs this
};

export default nextConfig;
