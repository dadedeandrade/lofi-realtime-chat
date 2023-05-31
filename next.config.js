/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["picsum.photos", "github.com"],
  },
};

export default nextConfig;
