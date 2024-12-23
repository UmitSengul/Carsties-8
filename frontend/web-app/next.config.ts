import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
        {protocol: 'https', hostname: 'cdn.pixabay.com'}
    ]
}
  /* config options here */
};

export default nextConfig;