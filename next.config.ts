import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Export the app as a static site for GitHub Pages
  output: "export",
  // Only set basePath/assetPrefix in production so local dev uses '/'
  basePath: isProd ? "/ARCELIA" : undefined,
  assetPrefix: isProd ? "/ARCELIA" : undefined,
  images: {
    // Disable Next.js image optimization on static export
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
