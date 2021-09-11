import { m } from 'framer-motion';

type MainProps = {
  children: React.ReactNode;
  className?: string;
  key: string;
}

const variants = {
  hidden: { opacity: 1, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: '-120%' }
}

export default function MainContent({ className, children, key }: MainProps) {
  return (
    <m.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ }}
      className={className}
      key={key}
    >
      {children}
    </m.main>
  );
}