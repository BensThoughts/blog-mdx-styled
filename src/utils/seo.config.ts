const seoConfig = {
  title: 'BensThoughts Blog',
  description: 'My personal developer blog.',
  openGraph: {
    url: 'https://bensthoughts.dev',
    title: 'BensThoughts Developer Blog',
    description: 'My (Benjamin Blumenfeld-Jones) personal dev blog.',
    images: [
      {
        url: 'https://res.cloudinary.com/bensthoughts/image/upload/q_auto/v1630560422/blog/og-image/og-header-image_l1kxju.png',
        width: 1200,
        height: 627,
        alt: 'Blog Header Image',
      },
    ],
    site_name: 'BensThoughts Blog',
  },
  twitter: {
    handle: '@bensthoughts',
    site: '@bensthoughts',
    cardType: 'summary_large_image',
  },
};

export default seoConfig;
