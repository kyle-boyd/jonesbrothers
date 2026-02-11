/** @type {import('next').NextConfig} */
const basePath = '/jonesbrothers';
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
