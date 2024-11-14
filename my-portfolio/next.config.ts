import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* other config options */
  nextRouterStateGenerator: "createNextAndSyncHistoryStateGenerator",
};

export default nextConfig;