import {Auth} from '@app/components/Icons';
import {
  Angular,
  AWS,
  Bash,
  Docker,
  EsLint,
  Express,
  Firebase,
  FlyIO,
  FontAwesome,
  FramerMotion,
  Gatsby,
  Git,
  Github,
  GoogleAnalytics,
  GoogleCloud,
  GoogleTagManager,
  Kubernetes,
  Linux,
  MongoDB,
  Netlify,
  NextJS,
  Node,
  NPM,
  Postgres,
  Prettier,
  Prisma,
  Python,
  RabbitMQ,
  ReactIcon,
  Redis,
  Redux,
  Remix,
  RXJS,
  StyledComponents,
  TailwindCSS,
  Turborepo,
  Typescript,
  Ubuntu,
  VSCode,
} from '@app/components/Icons/Brands';

export interface Technology {
  name: string;
  icon: React.ReactElement;
  href: string;
}

const size = 24;

export const technologies = new Map<string, Technology>([
  [
    'angular',
    {
      name: 'Angular',
      icon:
        <Angular
          size={size}
          // color="#DD0031"
        />,
      href: 'https://angular.io',
    },
  ],
  [
    'aws',
    {
      name: 'AWS',
      icon:
        <AWS
          size={size}
          // color="#232F3E"
        />,
      href: 'https://aws.amazon.com/',
    },
  ],
  [
    'bash',
    {
      name: 'Bash',
      icon:
        <Bash
          size={size}
          // color="#4EAA25"
        />,
      href: 'https://www.gnu.org/software/bash/',
    },
  ],
  [
    'docker',
    {
      name: 'Docker',
      icon:
        <Docker
          size={size}
          // color="#2496ED"
        />,
      href: 'https://www.docker.com/',
    },
  ],
  [
    'eslint',
    {
      name: 'ESLint',
      icon:
        <EsLint
          size={size}
          // color="#4B32C3"
        />,
      href: 'https://eslint.org/',
    },
  ],
  [
    'express',
    {
      name: 'Express',
      icon:
        <Express
          size={size}
          // color="#000000"
        />,
      href: 'https://expressjs.com/',
    },
  ],
  [
    'firebase',
    {
      name: 'Firebase',
      icon:
        <Firebase
          size={size}
          // color="#FFCA28"
        />,
      href: 'https://firebase.google.com/',
    },
  ],
  [
    'fly',
    {
      name: 'Fly.io',
      icon: <FlyIO size={size} />,
      href: 'https://fly.io',
    },
  ],
  [
    'fontawesome',
    {
      name: 'Fontawesome',
      icon:
        <FontAwesome
          size={size}
          // color="#339AF0"
        />,
      href: 'https://fontawesome.com/',
    },
  ],
  [
    'framerMotion',
    {
      name: 'Framer Motion',
      icon:
        <FramerMotion
          size={size}
          // color="#0055FF"
        />,
      href: 'https://www.framer.com/docs/',
    },
  ],
  [
    'gatsby',
    {
      name: 'Gatsby',
      icon:
        <Gatsby
          size={size}
          // color="#663399"
        />,
      href: 'https://www.gatsbyjs.com/',
    },
  ],
  [
    'git',
    {
      name: 'Git',
      icon:
        <Git
          size={size}
          // color="#F05032"
        />,
      href: 'https://git-scm.com/',
    },
  ],
  [
    'github',
    {
      name: 'Github',
      icon:
        <Github
          size={size}
          // color="#181717"
        />,
      href: 'https://github.com/',
    },
  ],
  [
    'googleAnalytics',
    {
      name: 'Google Analytics',
      icon:
        <GoogleAnalytics
          size={size}
          // color="#E37400"
        />,
      href: 'https://analytics.google.com/analytics/web/',
    },
  ],
  [
    'googleCloud',
    {
      name: 'Google Cloud',
      icon:
        <GoogleCloud
          size={size}
          // color="#4285F4"
        />,
      href: 'https://cloud.google.com/',
    },
  ],
  [
    'googleTagManager',
    {
      name: 'Google Tag Manager',
      icon:
        <GoogleTagManager
          size={size}
          // color="#246FDB"
        />,
      href: 'https://tagmanager.google.com/',
    },
  ],
  [
    'kubernetes',
    {
      name: 'Kubernetes',
      icon:
        <Kubernetes
          size={size}
          // color="#326CE5"
        />,
      href: 'https://kubernetes.io/',
    },
  ],
  [
    'linux',
    {
      name: 'Linux',
      icon:
        <Linux
          size={size}
          // color="#FCC624"
        />,
      href: 'https://www.linux.org/',
    },
  ],
  [
    'mongodb',
    {
      name: 'MongoDB',
      icon:
        <MongoDB
          size={size}
          // color="#47A248"
        />,
      href: 'https://www.mongodb.com/',
    },
  ],
  [
    'netlify',
    {
      name: 'Netlify',
      icon:
        <Netlify
          size={size}
          // color="#00C7B7"
        />,
      href: 'https://www.netlify.com/',
    },
  ],
  [
    'nextjs',
    {
      name: 'Next.JS',
      icon:
        <NextJS
          size={size}
          // color="#000000"
        />,
      href: 'https://nextjs.org/',
    },
  ],
  [
    'node',
    {
      name: 'Node',
      icon:
        <Node
          size={size}
          // color="#339933"
        />,
      href: 'https://nodejs.org/',
    },
  ],
  [
    'npm',
    {
      name: 'NPM',
      icon:
        <NPM
          size={size}
          // color="#CB3837"
        />,
      href: 'https://www.npmjs.com/',
    },
  ],
  [
    'oauth',
    {
      name: 'OAuth',
      icon:
        <Auth
          size={size}
          // color="#EB5424"
        />,
      href: 'https://oauth.net/',
    },
  ],
  [
    'postgres',
    {
      name: 'Postgres',
      icon: <Postgres size={size} />,
      href: 'https://www.postgresql.org',
    },
  ],
  [
    'prettier',
    {
      name: 'Prettier',
      icon:
        <Prettier
          size={size}
          // color="#F7B93E"
        />,
      href: 'https://prettier.io/',
    },
  ],
  [
    'prisma',
    {
      name: 'Prisma',
      icon: <Prisma size={size} />,
      href: 'https://prisma.io',
    },
  ],
  [
    'python',
    {
      name: 'Python',
      icon:
        <Python
          size={size}
          // color="#3776AB"
        />,
      href: 'https://www.python.org/',
    },
  ],
  [
    'rabbitmq',
    {
      name: 'RabbitMQ',
      icon:
        <RabbitMQ
          size={size}
          // color="#FF6600"
        />,
      href: 'https://www.rabbitmq.com/',
    },
  ],
  [
    'react',
    {
      name: 'React',
      icon:
        <ReactIcon
          size={size}
          // color="#61DAFB"
        />,
      href: 'https://reactjs.org/',
    },
  ],
  [
    'redis',
    {
      name: 'Redis',
      icon:
        <Redis
          size={size}
          // color="#DC382D"
        />,
      href: 'https://redis.io/',
    },
  ],
  [
    'redux',
    {
      name: 'Redux',
      icon:
        <Redux
          size={size}
          // color="#764ABC"
        />,
      href: 'https://react-redux.js.org/',
    },
  ],
  [
    'remix',
    {
      name: 'Remix',
      icon: <Remix />,
      href: 'https://remix.run/',
    },
  ],
  [
    'rxjs',
    {
      name: 'RXJS',
      icon:
        <RXJS
          size={size}
          // color="#B7178C"
        />,
      href: 'https://rxjs.dev/',
    },
  ],
  [
    'styledComponents',
    {
      name: 'Styled Components',
      icon:
        <StyledComponents
          size={size}
          // color="#DB7093"
        />,
      href: 'https://www.styled-components.com/',
    },
  ],
  [
    'tailwindcss',
    {
      name: 'TailwindCSS',
      icon:
        <TailwindCSS
          size={size}
          // color="#06B6D4"
        />,
      href: 'https://tailwindcss.com/',
    },
  ],
  [
    'turborepo',
    {
      name: 'Turborepo',
      icon: <Turborepo size={size} />,
      href: 'https://turborepo.org',
    },
  ],
  [
    'typescript',
    {
      name: 'Typescript',
      icon:
        <Typescript
          size={size}
          // color="#3178C6"
        />,
      href: 'https://www.typescriptlang.org/',
    },
  ],
  [
    'ubuntu',
    {
      name: 'Ubuntu',
      icon:
        <Ubuntu
          size={size}
          // color="#E95420"
        />,
      href: 'https://ubuntu.com/',
    },
  ],
  [
    'vscode',
    {
      name: 'VS Code',
      icon:
        <VSCode
          size={size}
          // color="#007ACC"
        />,
      href: 'https://code.visualstudio.com/',
    },
  ],

]);

