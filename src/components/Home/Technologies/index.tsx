import {TechStack} from './technologies';
import {m, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import styled from '@emotion/styled';

const Link = styled(m.a)`
  /* transition: transform 450ms; */
  &:hover .pill-float {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
    transform: translateY(-6px);
    /* --tw-bg-opacity: 1; */
  }

  &:hover .pill-background-change {
    transition-property: background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const PillBackground = styled.div`
  border-radius: 0.25rem;
  background-color: rgba(var(--color-app-primary), 1);
  transition-property: transform background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
`;

const Pill = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-around;
  border-radius: 0.25rem;
  padding-top: 0.25rem/* 4px */;
  padding-bottom: 0.25rem/* 4px */;
  padding-left: 0.5rem/* 8px */;
  padding-right: 0.5rem/* 8px */;
  background-color: rgba(255, 255, 255, 0.0);
  transition-property: transform background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
`;

export default function Technologies() {
  const {ref, inView} = useInView();
  const controls = useAnimation();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
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
      className="flex flex-wrap w-full h-full max-w-4xl"
      ref={ref}
    >
      {TechStack.map((tech) => (
        <Link
          key={tech.name}
          href={tech.href}
          target="_blank"
          rel="noopener noreferrer"
          variants={pill}
          className="p-2 text-primary text-sm"
        >
          <PillBackground className="pill-float">
            <Pill className="pill-background-change">
              <span className="text-icon-secondary">{tech.icon}</span>
              <span className="text-primary">{tech.name}</span>
            </Pill>
          </PillBackground>
        </Link>
      ))}
    </m.div>
  );
}
