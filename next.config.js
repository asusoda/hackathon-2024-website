/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/hackathon-2024-website',
  assetPrefix: '/hackathon-2024-website/',
  images: {
    domains: ['res.cloudinary.com', 't4.ftcdn.net', 'raw.githubusercontent.com'],
  }
}

module.exports = nextConfig
