/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// const withMdx = require('@next/mdx')();

module.exports =
      withBundleAnalyzer({
        // target: 'serverless',
        // compiler: {
        //   emotion: true,
        // },
        swcMinify: true,
        reactStrictMode: true,
        // productionBrowserSourceMaps: true,
        images: {
          domains: ['res.cloudinary.com'],
        },
        // webpack5: true,
        // webpack: (config) => {
        //   config.resolve.fallback = {fs: false};
        //   return config;
        // },
        // webpack: (config, {isServer}) => {
        //   if (!isServer) {
        //     config.node = {
        //       fs: 'empty',
        //     };
        //   }
        //   return config;
        // },
      });
