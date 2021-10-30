import {TechStack} from './technologies';
import {useInView} from 'react-intersection-observer';
import styled from '@emotion/styled';
import {useEffect, useState} from 'react';
import BorderedBox from '@app/components/BorderedBox';
import {ExcitedSmiley} from '@app/components/Icons';

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

const Link = styled.a<{
  transitionDelay: number;
}>`
  display: block;
  transition: opacity 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${({transitionDelay}) => transitionDelay + 's'}; 
  &:hover ${PillBackground} {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
    transform: translateY(-6px);
  }

  &:hover ${Pill} {
    transition-property: background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const AnimationContainer = styled.div<{
  viewed: boolean
}>`
  ${Link} {
    opacity: ${({viewed}) => viewed ? 1 : 0}
  }
`;


export default function Technologies() {
  const {ref, inView} = useInView();
  const [viewed, setViewed] = useState(false);

  useEffect(() => {
    if (inView) {
      setViewed(true);
    }
  }, [inView]);

  return (
    <>
      <div className="flex items-center justify-center">
        <BorderedBox>
          <p className="my-2 leading-7">
        &nbsp;&nbsp;&nbsp;&nbsp;
            <strong>
            A list of the technologies I have been excited about&nbsp;
              <ExcitedSmiley size={30} className="inline-block pb-1 text-icon-secondary" />
            &nbsp;and working with recently.
            </strong>
          &nbsp;&nbsp;Click on the links to go to the home page and learn more about a given technology.
          </p>
        </BorderedBox>
      </div>

      <AnimationContainer
        className="flex flex-wrap w-full h-full max-w-4xl"
        ref={ref}
        viewed={viewed}
      >
        {TechStack.map((tech, idx) => (
          <Link
            key={tech.name}
            href={tech.href}
            target="_blank"
            rel="noopener noreferrer"
            transitionDelay={0.07 * idx}
            className="p-2 text-primary text-sm"
          >
            <PillBackground>
              <Pill>
                <span className="text-icon-secondary">{tech.icon}</span>
                <span className="text-primary">{tech.name}</span>
              </Pill>
            </PillBackground>
          </Link>
        ))}
      </AnimationContainer>
    </>
  );
}
