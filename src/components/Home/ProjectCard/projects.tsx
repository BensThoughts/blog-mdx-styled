import {technologies, Technology} from '@app/utils/technologies';
import {
  NextJS,
  NPM,
  Typescript,
} from '@app/components/Icons/Brands';

interface Project {
  title: string;
  liveLink: string;
  githubLink?: string;
  cloudinaryImgPath: string;
  imgAlt: string;
  descriptionFirstSentence: string;
  description: string;
  technologies: (Technology | undefined)[];
}

const Spacetagram: Project = {
  title: 'Spacetagram',
  liveLink: 'https://shopify-nasa-challenge.netlify.app/?ref=bensthoughts.dev',
  githubLink: 'https://github.com/BensThoughts/shopify-nasa-challenge',
  cloudinaryImgPath: 'v1633402766/blog/projects/spacetagram/spacetegram-home-full-scaled_oev1uf.png',
  imgAlt: 'Spacetagram Home Page',
  descriptionFirstSentence: `Beautiful images from NASA infinitely scrolled. Spacetagram is an Instagram clone that uses the NASA APOD API to display the image of the day.`,
  description: `
    This is a react project that utilizes redux to download the images from the API to an infinite 
    virtual scroll component. Images can be liked and viewed in a gallery. There is also a calendar 
    component that can be used to jump to a specific date. A primary goal of the project was to focus 
    on accessibility and responsive design.
  `,
  technologies: [
    technologies.get('react'),
    technologies.get('redux'),
    technologies.get('typescript'),
    technologies.get('tailwindcss'),
    technologies.get('netlify'),
    technologies.get('github'),
    technologies.get('eslint'),
  ],
};

const ZeroInboxBackend: Project = {
  title: 'Zero Inbox Backend',
  liveLink: 'https://zeroinbox.app/story',
  githubLink: 'https://github.com/BensThoughts?tab=repositories',
  cloudinaryImgPath: 'v1633402742/blog/projects/zero-inbox/zeroinbox-services-full-scaled_uqnk9p.png',
  imgAlt: 'Zero Inbox Backend',
  descriptionFirstSentence: `The backend for Zero Inbox is composed of 4 micro-services that run in a GKE Kubernetes cluster.`,
  description: `
    The primary service is an API gateway that the front end communicates with. The services 
    internally communicate with each other using RabbitMQ and an npm package that I wrote 
    called Zero Rabbit (see packages section below). Data is stored in a MongoDB Atlas cluster. 
    O-Auth was implemented using google auth so that users can opt to authenticate to the app 
    and approve the needed permissions.
  `,
  technologies: [
    technologies.get('node'),
    {
      name: 'NPM',
      icon: <NPM size={20} />,
      href: 'https://www.npmjs.com/',
    },
    technologies.get('docker'),
    technologies.get('kubernetes'),
    technologies.get('googleCloud'),
    technologies.get('mongodb'),
    technologies.get('rabbitmq'),
    technologies.get('redis'),
    technologies.get('oauth'),
  ],

};

const ZeroInbox: Project = {
  title: 'Zero Inbox Frontend',
  liveLink: 'https://zeroinbox.app',
  githubLink: 'https://github.com/bensthoughts/zeroinbox-web',
  cloudinaryImgPath: 'v1633402740/blog/projects/zero-inbox/zeroinbox-home-full-scaled_nef8nu.png',
  imgAlt: 'Zero Inbox Home Page',
  descriptionFirstSentence: `Zero Inbox is a web app that lets users organize their inboxes easily on the go.`,
  description: `
    Users can view analytics about the state of their inbox as well as quickly organize it. 
    All subscriptions, the number of messages, or the size of messages in MB from a given sender 
    can be viewed in a table. The tables are paginated and searchable in real-time. Users can 
    quickly unsubscribe from, label, delete, or filter messages from a sender.  The app uses 
    Angular 12 as a framework.
  `,
  technologies: [
    technologies.get('angular'),
    technologies.get('redux'),
    technologies.get('rxjs'),
    technologies.get('fontawesome'),
    {
      name: 'Typescript',
      icon: <Typescript size={20} />,
      href: 'https://www.typescriptlang.org/',
    },
    technologies.get('googleAnalytics'),
    technologies.get('prettier'),
    technologies.get('tailwindcss'),
  ],
};

const SharableLoveForms: Project = {
  title: 'Shareable Love Forms',
  liveLink: 'https://www.shareloveforms.com/?ref=bensthoughts.dev',
  githubLink: 'https://github.com/BensThoughts/shareable-love-forms',
  cloudinaryImgPath: 'v1644862572/blog/projects/shareable-love-forms/shareable-love-forms-screenshot_qyqcvz.jpg',
  imgAlt: 'Shareable Love Forms Home Page',
  descriptionFirstSentence: `Complete quizzes and fill out forms about love and relationships. Download and print the results as a PDF.`,
  description: `
    The site currently hosts the non-escalator relationship form and can create a nice-looking PDF 
    with the form's results.  This is a form that is widely used by relationship coaches and therapists.
  `,
  technologies: [
    {
      name: 'NextJS',
      icon: <NextJS size={20} />,
      href: 'https://nextjs.org/',
    },
    technologies.get('react'),
    technologies.get('redux'),
    {
      name: 'Typescript',
      icon: <Typescript size={20} />,
      href: 'https://www.typescriptlang.org/',
    },
    technologies.get('tailwindcss'),
    technologies.get('netlify'),
    technologies.get('github'),
    technologies.get('eslint'),
  ],
};

const SteamedApples: Project = {
  title: 'Steamed Apples',
  liveLink: 'https://www.steamedapples.com/?ref=bensthoughts.dev',
  cloudinaryImgPath: 'v1664943160/apple-silicon-gaming-db/og-images/og-image-home_yxvlgi.png',
  imgAlt: 'Steamed Apples Homepage',
  descriptionFirstSentence: `Steamed Apples lets users read and write performance reviews about Steam games running on Apple.`,
  description: `
    Users can log in with their Steam credentials. Users can then post reports for 
    games that they own. Reports detail if the game ran for them, as well as how well it ran.
    The site is SSR using remix running on fly.io. Prisma is used as an ORM to access a Postgres DB 
    that runs on the fly.io edge network.  The site is incredibly fast and uses a minimal amount of 
    javascript on the client side.
  `,
  technologies: [
    technologies.get('remix'),
    technologies.get('prisma'),
    technologies.get('postgres'),
    {
      name: 'Typescript',
      icon: <Typescript size={20} />,
      href: 'https://www.typescriptlang.org/',
    },
    technologies.get('tailwindcss'),
    technologies.get('turborepo'),
    technologies.get('node'),
    technologies.get('fly'),
  ],
};

export const Projects: Project[] = [
  SteamedApples,
  Spacetagram,
  SharableLoveForms,
  ZeroInbox,
  ZeroInboxBackend,
];
