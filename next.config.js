/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 't4.ftcdn.net', 'raw.githubusercontent.com'],
  },
};

module.exports = nextConfig;
