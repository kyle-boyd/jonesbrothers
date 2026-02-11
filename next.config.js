/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  basePath: '/jonesbrothers',
  assetPrefix: '/jonesbrothers/',
};

module.exports = nextConfig;
