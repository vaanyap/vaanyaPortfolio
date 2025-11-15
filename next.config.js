/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: false, // disable Turbopack for Tailwind compatibility
  },
};

module.exports = nextConfig;
