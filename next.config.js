/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // target: 'serverless',
  compiler: {
    emotion: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  // productionBrowserSourceMaps: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  // webpack: (config, {isServer}) => {
  //   if (!isServer) {
  //     config.node = {
  //       fs: 'empty',
  //     };
  //   }
  //   return config;
  // },
});
