/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: '',
        pathname: ''
      },
    ],
  },
};

module.exports = nextConfig
