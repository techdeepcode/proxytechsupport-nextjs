import type { NextConfig } from "next";

/** For `output: 'export'`, server `redirects()` are ignored on GitHub Pages.
 * Moved-page SEO: rely on canonical URLs + `app/blog/[slug]/permanentRedirect` or
 * add a static `/blog/old-path/index.html` meta-refresh if truly needed later.
 */

const nextConfig: NextConfig = {
  /** Emit `out/` for GitHub Pages (static HTML — no Node server). */
  output: 'export',

  trailingSlash: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "proxytechsupport.com" },
    ],
  },
};

export default nextConfig;
