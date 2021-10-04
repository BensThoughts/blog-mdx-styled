import {TechStack} from './technologies';
import {m, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';

export default function Technologies() {
  const {ref, inView} = useInView();
  const controls = useAnimation();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const pill = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    // if (!inView) {
    //   controls.start('hidden');
    // }
  });

  return (
    <m.div
      variants={container}
      initial="hidden"
      animate={controls}
      className="flex flex-wrap gap-4 w-full h-full max-w-4xl"
      ref={ref}
    >
      {TechStack.map((tech) => (
        <m.a
          key={tech.name}
          href={tech.href}
          target="_blank"
          rel="noopener noreferrer"
          variants={pill}
          className="flex gap-2 items-center justify-around rounded py-1 px-2 bg-primary bg-opacity-80 hover:bg-opacity-100 transform transition-transform duration-200 hover:-translate-y-1 text-primary text-sm"
        >
          <span className="text-icon-secondary">{tech.icon}</span>
          <span className="text-primary">{tech.name}</span>
        </m.a>
      ))}
    </m.div>
  );
}
