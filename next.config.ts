import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export the app as a static site for GitHub Pages
  output: "export",
  // Serve the site from the repository path: /ARCELIA
  basePath: "/ARCELIA",
  assetPrefix: "/ARCELIA",
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
