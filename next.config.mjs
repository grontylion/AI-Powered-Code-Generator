/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverComponentsExternalPackages: ["pino", "pino-pretty"],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'v0.dev',
        protocol: 'https',
      },
    ],
  },
};

export default withNextIntl(nextConfig)
