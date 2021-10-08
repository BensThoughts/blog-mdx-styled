import Link from 'next/link';
import styled from '@emotion/styled';
import {m, useAnimation} from 'framer-motion';
import {useEffect, useState} from 'react';

const Container = styled(m.div)<{
  activated: boolean;
  focusedVisible: boolean;
}>`
  border-radius: 5px;
  border: 2px solid rgb(var(--color-app-secondary));
  background-color: rgba(var(--color-app-primary), 0.8);
  transition-property: background, color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  will-change: background, color;
  position: relative;
  /* z-index: 1; */
  outline: ${({focusedVisible}) => focusedVisible ? 'var(--app-outline)' : 'none'};
  outline-offset: var(--app-outline-offset);


  &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-color: ${({activated}) => activated ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0)'};
    transition: background-color 250ms;
  }
`;

const AnchorContainer = styled.a`
  &:focus {
    outline: var(--app-outline);
    outline-offset: var(--app-outline-offset);
    background-color: black;
    transform: translateX(200px);
  } 
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
  /* transition-property: transform background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms; */
`;

type CardProps = {
  id: string
  date: string
  title: string
  description: string
  tags: string[]
  className?: string
}

export default function BlogCard({
  id = '',
  title = '',
  date = '',
  description = '',
  tags = [],
  className,
  ...rest
}: CardProps) {
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [focusedVisible, setFocusedVisible] = useState(false);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    if (focused || hovered) {
      setActivated(true);
    } else {
      setActivated(false);
    }

    if (focused && !hovered) {
      setFocusedVisible(true);
    } else {
      setFocusedVisible(false);
    }
  }, [hovered, focused]);

  useEffect(() => {
    if (activated) {
      controls.start('activated');
    } else {
      controls.start('notActivated');
    }
  }, [activated, controls]);

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
    <Container
      activated={activated}
      focusedVisible={focusedVisible}
      initial="notActivated"
      animate={controls}
      variants={container}
      className="shadow-md"
      {...rest}
    >
      <Link href={`/blog/${id}`} scroll={false} passHref>
        <AnchorContainer
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <div className={`h-full px-2 py-4 md:p-4 flex flex-col justify-start gap-4 ${className}`}>
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
    </Container>
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

