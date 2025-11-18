/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/programme-phoenix',
        destination: 'https://programme-phoenix.vercel.app',
      },
      {
        source: '/programme-phoenix/:path*',
        destination: 'https://programme-phoenix.vercel.app/:path*',
      },
    ]
  },
}

export default nextConfig
