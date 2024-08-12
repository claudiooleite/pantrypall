/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'edamam-product-images.s3.amazonaws.com',
        pathname: '/**',
      },
      // Add more patterns if needed for other domains
    ],
  },
};

export default nextConfig;