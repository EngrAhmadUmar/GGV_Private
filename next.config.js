/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["stripe-camo.global.ssl.fastly.net"],
  },
  reactStrictMode: true,
  future: {
    webpack5: true,
  },

  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        path: false,
        os: false,
        child_process: false,
        tls: false,
      },
    };
    return config;
  },
};

module.exports = nextConfig;
