import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel deployment: keep server features available for future checkout/admin APIs.
  images: { remotePatterns: [] }
};

export default nextConfig;
