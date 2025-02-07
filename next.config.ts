import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  experimental: {
    serverActions: {
      allowedOrigins: ["127.0.0.1:3000", "43.203.200.233"],
    },
  },
};

export default nextConfig;
