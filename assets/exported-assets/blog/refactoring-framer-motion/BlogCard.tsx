import Link from 'next/link';
import styled from '@emotion/styled';
import {useEffect, useState} from 'react';
import {LazyMotion, domAnimation, m, useAnimation} from 'framer-motion';

const AnchorContainer = styled(m.a)`
  display: block;
  position: relative;
  height: 300px;
  width: 600px;
  border-radius: 5px;
  border: 2px solid rgb(var(--color-app-secondary));
  background-color: rgba(var(--color-app-primary), 0.8);
`;

const Pill = styled.div`
  display: flex;
  gap: 0.1rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  padding-top: 0.25rem/* 4px */;
  padding-bottom: 0.25rem/* 4px */;
  padding-left: 0.5rem/* 8px */;
  padding-right: 0.5rem/* 8px */;
  background-color: rgba(var(--color-app-secondary), 0.65);
`;

type CardProps = {
  slug: string
  date: string
  title: string
  description: string
  tags: string[]
} & React.HTMLAttributes<HTMLAnchorElement>

export default function BlogCard({
  slug = 'refactoring-framer-motion',
  title = 'Refactor Framer Motion For Smaller Bundles',
  date = '2021-10-10',
  description = 'How to refactor a component from using framer-motion to pure css',
  tags = ['framer-motion', 'refactor', 'css', 'React', 'styled-components', 'Typescript'],
  ...rest
}: CardProps) {
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (focused || hovered) {
      controls.start('activated');
    } else {
      controls.start('notActivated');
    }
  }, [hovered, focused]);

  const container = {
    notActivated: {
      y: 0,
    },
    activated: {
      y: -10,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0,
      },
    },
  };

  const pill = {
    notActivated: {
      y: 0,
    },
    activated: {
      y: [0, -10, 0],
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <Link href={`/blog/${slug}`} scroll={true} passHref legacyBehavior>
        <AnchorContainer
          initial="notActivated"
          animate={controls}
          variants={container}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="shadow-md"
        >
          <div className="h-full px-2 py-4 md:p-4 flex flex-col justify-start gap-4">
            <div>
              {title && <div className="text-2xl text-high-emphesis">{title}</div>}
              {date && <div className="italic">{date}</div>}
            </div>
            {description && <div className="text-base">{description}</div>}
            <div className="h-full flex flex-col justify-end">
              <div className="flex flex-wrap gap-x-2 gap-y-4 justify-start">
                {tags.map((tag) => (
                  <m.div variants={pill} key={tag}>
                    <Pill key={tag}>
                      <span className="text-secondary">#</span>
                      {tag}
                    </Pill>
                  </m.div>
                ))}
              </div>
            </div>
          </div>
        </AnchorContainer>
      </Link>
    </LazyMotion>
  );
}


// const Tab = styled.div`
//   position: relative;
//   display: block;
//   width: 10rem;
//   height: 2rem;
//   margin-left: 10px;
//   border-top: 4px solid rgb(var(--color-app-secondary));
//   border-top-left-radius: 0.3rem/* 6px */;
//   border-top-right-radius: 0.3rem/* 6px */;
//   /* background-color: rgb(var(--color-app-primary)); */
//   background: linear-gradient(to bottom, rgba(var(--color-app-primary), 1) 0%, rgba(var(--color-app-primary), 1) 50%);
//   /* box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(0, 0, 0, 0.5); */
//   &::before, &::after {
//     position: absolute;
//     bottom: -1px;
//     width:6px;
//     height: 6px;
//     content: " ";
//     border: 1px solid rgba(var(--color-app-primary), 1);
//   }

//   &::before {
//     left: -5px;
//     border-bottom-right-radius: 6px;
//     border-width: 0 1px 1px 0;
//     box-shadow: 2px 2px 0 rgba(var(--color-app-primary), 1);
//   }

//   &::after {
//     right: -5px;
//     border-bottom-left-radius: 6px;
//     border-width: 0 0 1px 1px;
//     box-shadow: -2px 2px 0 rgba(var(--color-app-primary), 1);
//   }
// `;

