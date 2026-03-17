/** @type {import('next').NextConfig} */
const path = require('path');
process.env.CHOKIDAR_USEPOLLING = '1';
process.env.WATCHPACK_POLLING = '1';
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = isProd
  ? {
      output: 'export',
      images: { unoptimized: true },
    }
  : {
      images: { unoptimized: true },
      webpack: (config, { dev }) => {
        if (dev) {
          config.watchOptions = config.watchOptions || {};
          config.watchOptions.poll = 1000;
          config.watchOptions.ignored = [
            '**/node_modules/**',
            '**/.next/**',
            '**/docs/**',
            path.join(__dirname, 'docs'),
          ];
        }
        return config;
      },
    };

module.exports = nextConfig;
