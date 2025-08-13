/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.onlineradiobox.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
