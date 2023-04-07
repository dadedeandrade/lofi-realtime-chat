/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_CLIENT_ID: "Iv1.6fd7b7c524ad7d0e",
    APP_ID: "282142",
    CLIENT_SECRET: "e4d3b8c31eb22c033ad873d0deb45c9412123da1",
    PRIVATE_KEY: "RJTOtqVqKDnpj8LypsXwUIi2d2iefaoy6hzAuKEd7aE",
  },
  images: {
    domains: ["picsum.photos", "github.com"],
  },
};

export default nextConfig;
