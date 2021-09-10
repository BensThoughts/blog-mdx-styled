import { motion } from 'framer-motion';

type MainProps = {
  children: React.ReactNode;
  className?: string;
  key: string;
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
}

export default function MainContent({ className, children, key }: MainProps) {
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      className={className}
      key={key}
    >
      {children}
    </motion.main>
  );
}