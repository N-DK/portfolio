import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  skipTrailingSlashRedirect: true,

  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["6frwwnj7-3000.asse.devtunnels.ms"],
    },
  },
  images: {
    qualities: [60, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
