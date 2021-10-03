import {Auth} from '@app/components/Icons';
import {
  Angular,
  Bash,
  Docker,
  FontAwesome,
  Git,
  GoogleAnalytics,
  GoogleCloud,
  Kubernetes,
  MongoDB,
  Node,
  NPM,
  Prettier,
  RabbitMQ,
  Redis,
  TailwindCSS,
  Typescript,
} from '@app/components/Icons/Brands';

export const ZeroInboxBackend = {
  title: 'Zero Inbox Backend',
  liveLink: 'https://zeroinbox.app/story',
  githubLink: 'https://github.com/BensThoughts?tab=repositories',
  imgSrc: 'https://res.cloudinary.com/bensthoughts/image/upload/v1633239917/blog/projects/zero-inbox/services_tt655g.png',
  imgAlt: 'Zero Inbox Backend',
  description: `
    The backend for Zero Inbox is composed of 4 micro-services that run in a GKE Kubernetes
    cluster. The primary service is an API gateway that the frontend communicated with.
    The services internally communicate with each other using RabbitMQ and a specialized node.js library
    that I wrote to wrap the lower level amqplib. Data is stores in a MongoDB Atlas cluster.
    O-Auth was implemented using google auth so that users can opt to authenticate to the app
    and approve the needed permissions.
  `,
  technologies: [
    {
      name: 'Node',
      icon: <Node />,
      href: 'https://nodejs.org/en/',
    },
    {
      name: 'NPM',
      icon: <NPM size={20} />,
      href: 'https://www.npmjs.com/',
    },
    {
      name: 'Docker',
      icon: <Docker />,
      href: 'https://www.docker.com/',
    },
    {
      name: 'Kubernetes',
      icon: <Kubernetes />,
      href: 'https://kubernetes.io/',
    },
    {
      name: 'Google Cloud',
      icon: <GoogleCloud />,
      href: 'https://cloud.google.com/',
    },
    {
      name: 'MongoDB',
      icon: <MongoDB />,
      href: 'https://www.mongodb.com/',
    },
    {
      name: 'RabbitMQ',
      icon: <RabbitMQ size={20} />,
      href: 'https://www.rabbitmq.com/',
    },
    {
      name: 'Redis',
      icon: <Redis />,
      href: 'https://redis.io/',
    },
    {
      name: 'OAuth',
      icon: <Auth />,
      href: 'https://oauth.net/',
    },
  ],

};

export const ZeroInbox = {
  title: 'Zero Inbox',
  liveLink: 'https://zeroinbox.app',
  githubLink: 'https://github.com/bensthoughts/zeroinbox-web',
  imgSrc: 'https://res.cloudinary.com/bensthoughts/image/upload/v1632793370/blog/projects/zero-inbox/zero-inbox-home-scaled_gxres2.png',
  imgAlt: 'Zero Inbox Home Page',
  description: `
    Zero Inbox is a web app that lets users organize their inbox easily on the go.
    It is a complex Angular 12 application. NgRX is used as a redux store.`,
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
