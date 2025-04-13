/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  staticPageGenerationTimeout: 0,
};

module.exports = nextConfig;
