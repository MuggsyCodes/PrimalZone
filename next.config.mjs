/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.primalzone.com",
      },
    ],
  },
};

export default nextConfig;
