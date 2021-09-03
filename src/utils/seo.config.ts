const seoConfig = {
  title: "BensThoughts Blog",
  description: "My personal developer blog.",
  openGraph: {
    url: 'https://bensthoughts.netlify.app',
    title: 'BensThoughts Developer Blog',
    description: 'My (Benjamin Blumenfeld-Jones) personal dev blog.',
    images: [
      {
        url: 'https://res.cloudinary.com/bensthoughts/image/upload/v1630627039/blog/articles-headers/ultimate-blog_l4jwdw.jpg',
        width: 1200,
        height: 627,
        alt: 'Blog Header Image'
      }
    ],
    site_name: 'BensThoughts Blog'
  },
  twitter: {
    handle: '@bensthoughts',
    site: '@bensthoughts',
    cardType: 'summary_large_image'
  }
}

export default seoConfig;
