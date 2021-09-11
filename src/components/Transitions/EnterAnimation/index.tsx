import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { m } from 'framer-motion';

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: 'spring', stiffness: 100 },
      default: { duration: 0.5, ease: 'easeIn' }
    }
  },
  hidden: {
    y: 100,
    opacity: 0
  }
}

type EnterAnimationProps = {
  className?: string;
  children: React.ReactNode;
}

export default function EnterAnimation({ className = '', children }: EnterAnimationProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3
  });


  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <m.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={className}
    >
      {children}
    </m.div>
  );
}