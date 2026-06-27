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
    // Serve images directly instead of via Vercel's Image Optimization.
    // The optimizer returns HTTP 402 once the plan's quota is exhausted, which
    // breaks every <Image>. Source images are pre-sized, so this is a no-op
    // visually but makes images reliable on any host/plan.
    unoptimized: true,
  },
  // Tree-shake icon imports so only used icons ship in the bundle.
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
