import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  // Pin the workspace root — there are multiple lockfiles on this machine and
  // Next would otherwise infer the wrong one.
  turbopack: {
    root: __dirname,
  },
  images: {
    // Prefer modern formats; AVIF first for best compression.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  // Tree-shake icon imports so only used icons ship in the bundle.
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
