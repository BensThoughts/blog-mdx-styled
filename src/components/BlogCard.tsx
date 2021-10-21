import Link from 'next/link';
import styled from '@emotion/styled';
import {keyframes} from '@emotion/react';

const hop = keyframes`
  50% {
    transform: translateY(-10px);
  }
`;

const Pill = styled.div<{
  delay: number;
}>`
  /* @keyframes hop {
    50% {
      transform: translateY(-10px);
    }
  } */

  display: flex;
  background-color: rgb(var(--color-app-secondary));
  gap: 0.1rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  padding-top: 0.25rem/* 4px */;
  padding-bottom: 0.25rem/* 4px */;
  padding-left: 0.5rem/* 8px */;
  padding-right: 0.5rem/* 8px */;
  transform: translateY(0px);
  transition-property: transform;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
  will-change: transform;
  animation-delay: ${({delay}) => delay + 's'};
`;

const AnchorContainer = styled.a`
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: 2px solid rgb(var(--color-app-secondary));
  background-color: rgba(var(--color-app-primary), 0.8);
  transition-property: background, color, transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  will-change: background, color, transform;
  position: relative;
  transform: translateY(0px);

  &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-color: rgba(255, 255, 255, 0);
    transition: background-color 250ms;
  }

  &:hover::before,
  &:focus::before {
    background-color:  rgba(255, 255, 255, 0.1); 
  }

  &:hover,
  &:focus {
    transform: translateY(-10px);
  }

  &:hover ${Pill},
  &:focus ${Pill} {
    animation-name: ${hop};
    animation-duration: 0.4s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

`;

type BlogCardProps = {
  id: string
  date: string
  title: string
  description: string
  tags: string[]
  className?: string
} & React.HTMLAttributes<HTMLAnchorElement>

export default function BlogCard({
  id = '',
  title = '',
  date = '',
  description = '',
  tags = [],
  className,
  ...rest
}: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`} scroll={true} passHref>
      <AnchorContainer className={`shadow-md ${className}`} {...rest}>
        <div className="h-full px-2 py-4 md:p-4 flex flex-col justify-start gap-4">
          <div>
            {title && <div className="text-2xl text-high-emphesis">{title}</div>}
            {date && <div className="italic">{date}</div>}
          </div>
          {description && <div className="text-base">{description}</div>}
          <div className="h-full flex flex-col justify-end">
            <div className="flex flex-wrap gap-x-2 gap-y-4 justify-start">
              {tags.map((tag, idx) => (
                <Pill key={tag} delay={0.07 * idx}>
                  <span className="text-secondary">#</span>
                  {tag}
                </Pill>
              ))}
            </div>
          </div>
        </div>
      </AnchorContainer>
    </Link>
  );
}
