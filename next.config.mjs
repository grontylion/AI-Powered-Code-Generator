/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverComponentsExternalPackages: ["pino", "pino-pretty"],
  },
};

export default nextConfig;
