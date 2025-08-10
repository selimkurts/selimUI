/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@selim-ui/react']
  },
  eslint: { ignoreDuringBuilds: true }
};

module.exports = nextConfig;
