/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/aws-labs',
  images: {
    unoptimized: true,
  },
  // Add this line:
  trailingSlash: true,
}

module.exports = nextConfig