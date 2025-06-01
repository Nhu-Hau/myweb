// next.config.js hoặc next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com",
      "cdn.dummyjson.com",
    ],
  },
};

export default nextConfig;
