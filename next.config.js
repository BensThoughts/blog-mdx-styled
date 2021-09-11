/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // target: 'serverless',
  reactStrictMode: true,
  // productionBrowserSourceMaps: true,
  images: {
    domains: ['res.cloudinary.com']
  },
  // exportPathMap: async function (
  //   defaultPathMap,
  //   {dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  //     '/projects': { page: '/projects' },
  //     '/blog': { page: '/blog' },
  //     '/blog': { page: '/blog', query: { title: 'google-gke-cleanup' } },
  //   }
  // }
});
