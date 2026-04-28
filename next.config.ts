import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/:slug/",
        destination: "/:slug/",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/:slug/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "proxytechsupport.com" },
    ],
  },
};

export default nextConfig;
