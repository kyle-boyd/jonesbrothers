/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/jonesbrothers' : '';
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: `${basePath}/`,
  images: {
    unoptimized: true, // required for static export (no image API on GitHub Pages)
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
