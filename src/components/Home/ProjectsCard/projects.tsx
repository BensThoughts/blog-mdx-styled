import {
  Angular,
  Bash,
  FontAwesome,
  Git,
  GoogleAnalytics,
  Prettier,
  TailwindCSS,
  Typescript,
} from '@app/components/Icons/Brands';

export const ZeroInbox = {
  liveLink: 'https://zeroinbox.app',
  githubLink: 'https://github.com/bensthoughts/zeroinbox-web',
  imgSrc: 'https://res.cloudinary.com/bensthoughts/image/upload/v1632793370/blog/projects/zero-inbox/zero-inbox-home-scaled_gxres2.png',
  imgAlt: 'Zero Inbox Home Page',
  description: `
    Zero Inbox is a web app that lets users organize their inbox easily on the go.
    It is a complex Angular 12 application.`,
  technologies: [
    {
      name: 'Angular',
      icon: <Angular />,
      href: 'https://angular.io',
    },
    {
      name: 'Git',
      icon: <Git />,
      href: 'https://git-scm.com/',
    },
    {
      name: 'Bash',
      icon: <Bash />,
      href: 'https://www.gnu.org/software/bash/',
    },
    {
      name: 'FontAwesome',
      icon: <FontAwesome size={20} />,
      href: 'https://fontawesome.com/',
    },
    {
      name: 'Typescript',
      icon: <Typescript size={20} />,
      href: 'https://www.typescriptlang.org/',
    },
    {
      name: 'Google Analytics',
      icon: <GoogleAnalytics />,
      href: 'https://analytics.google.com/',
    },
    {
      name: 'Prettier',
      icon: <Prettier size={20} />,
      href: 'https://prettier.io/',
    },
    {
      name: 'TailwindCSS',
      icon: <TailwindCSS />,
      href: 'https://tailwindcss.com/',
    },
  ],
}
;
