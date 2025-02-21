/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 't4.ftcdn.net', 'raw.githubusercontent.com'],
  },
  assetPrefix: isProd ? '/code-challenge-2025/' : '', // Important for GitHub Pages
  basePath: isProd ? '/code-challenge-2025' : '', // Ensure correct routing
  trailingSlash: true, // Ensure proper asset paths
};

module.exports = nextConfig;
