/** @type {import('next').NextConfig} */
module.exports = {
  // target: 'serverless',
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com']
  },
  exportPathMap: async function (
    defaultPathMap,
    {dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/projects': { page: '/projects' },
      '/blog': { page: '/blog' },
      '/blog': { page: '/blog', query: { title: 'google-gke-cleanup' } },
    }
  }
}
