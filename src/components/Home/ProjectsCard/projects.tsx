import {Auth} from '@app/components/Icons';
import {
  Angular,
  Docker,
  EsLint,
  FontAwesome,
  Github,
  GoogleAnalytics,
  GoogleCloud,
  Kubernetes,
  MongoDB,
  Node,
  NPM,
  Prettier,
  RabbitMQ,
  ReactIcon,
  Redis,
  Redux,
  RXJS,
  TailwindCSS,
  Typescript,
} from '@app/components/Icons/Brands';
import Netlify from '@app/components/Icons/Brands/Netlify';

export const Spacetagram = {
  title: 'Spacetagram',
  liveLink: 'https://shopify-nasa-challenge.netlify.app/',
  githubLink: 'https://github.com/BensThoughts/shopify-nasa-challenge',
  cloudinaryImgPath: 'v1633402766/blog/projects/spacetagram/spacetegram-home-full-scaled_oev1uf.png',
  imgAlt: 'Spacetagram Home Page',
  description: `
    Beautiful images from nasa infinitely scrolled. Spacetagram is an Instagram clone that uses the NASA APOD API to display the image of the day.
    This is a react project that utilizes redux to download the images from the API to an infinite virtual scroll component. Images can be liked and viewed
    in a gallery. There is also a calendar component that can be used to jump to a specific date. A primary goal of the project was to focus on accessibility
    and responsive design.
  `,
  technologies: [
    {
      name: 'React',
      icon: <ReactIcon />,
      href: 'https://reactjs.org/',
    },
    {
      name: 'Redux',
      icon: <Redux />,
      href: 'https://react-redux.js.org/',
    },
    {
      name: 'Typescript',
      icon: <Typescript size={20} />,
      href: 'https://www.typescriptlang.org/',
    },
    {
      name: 'TailwindCSS',
      icon: <TailwindCSS />,
      href: 'https://tailwindcss.com/',
    },
    {
      name: 'Netlify',
      icon: <Netlify />,
      href: 'https://www.netlify.com/',
    },
    {
      name: 'Github',
      icon: <Github />,
      href: 'https://github.com',
    },
    {
      name: 'ESLint',
      icon: <EsLint />,
      href: 'https://eslint.org/',
    },
  ],
};

export const ZeroInboxBackend = {
  title: 'Zero Inbox Backend',
  liveLink: 'https://zeroinbox.app/story',
  githubLink: 'https://github.com/BensThoughts?tab=repositories',
  cloudinaryImgPath: 'v1633402742/blog/projects/zero-inbox/zeroinbox-services-full-scaled_uqnk9p.png',
  imgAlt: 'Zero Inbox Backend',
  description: `
    The backend for Zero Inbox is composed of 4 micro-services that run in a GKE Kubernetes
    cluster. The primary service is an API gateway that the frontend communicates with.
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
  title: 'Zero Inbox Frontend',
  liveLink: 'https://zeroinbox.app',
  githubLink: 'https://github.com/bensthoughts/zeroinbox-web',
  cloudinaryImgPath: 'v1633402740/blog/projects/zero-inbox/zeroinbox-home-full-scaled_nef8nu.png',
  imgAlt: 'Zero Inbox Home Page',
  description: `
    Zero Inbox is a web app that lets users organize their inbox easily on the go.
    It is a complex Angular 12 application. Users can view analytics about the state of their
    inbox as well as quickly organize it. All subscriptions, the number of
    messages, or size of messages in MB from a given sender can be viewed in a table. The tables are paginated and searchable
    in real time. Users can quickly unsubscribe from, label, delete, or filter messages from a sender.`,
  technologies: [
    {
      name: 'Angular',
      icon: <Angular />,
      href: 'https://angular.io',
    },
    {
      name: 'Redux',
      icon: <Redux />,
      href: 'https://react-redux.js.org/',
    },
    {
      name: 'RXJS',
      icon: <RXJS />,
      href: 'https://rxjs.dev/',
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
};

export const Projects = [
  ZeroInbox,
  ZeroInboxBackend,
  Spacetagram,
];
