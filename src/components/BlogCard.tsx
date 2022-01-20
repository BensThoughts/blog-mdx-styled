import styled from '@emotion/styled';
import {keyframes} from '@emotion/react';
import LinkCard from '@app/components/LinkCard';

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
  background-color: rgba(var(--color-app-secondary), 0.5);
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

const AnchorContainer = styled(LinkCard)`
  &:hover ${Pill},
  &:focus ${Pill} {
    animation-name: ${hop};
    animation-duration: 0.4s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

`;

type BlogCardProps = {
  slug: string
  date?: string
  title: string
  description?: string
  tags?: string[]
  className?: string
} & React.HTMLAttributes<HTMLAnchorElement>

export default function BlogCard({
  slug = '',
  title = '',
  date,
  description = '',
  tags = [],
  className,
  ...rest
}: BlogCardProps) {
  return (
    <AnchorContainer slug={slug} className={`shadow-md ${className}`} {...rest}>
      <div className="flex flex-col gap-4 justify-start px-2 py-4 h-full md:p-4">
        <div>
          {title && <div className="text-2xl">{title}</div>}
          {date && <div className="italic">{date}</div>}
        </div>
        {description && <div className="text-base">{description}</div>}
        {tags && <div className="flex flex-col justify-end h-full">
          <div className="flex flex-wrap gap-x-2 gap-y-4 justify-start">
            {tags.map((tag, idx) => (
              <Pill key={tag} delay={0.07 * idx}>
                <span className="text-secondary">#</span>
                {tag}
              </Pill>
            ))}
          </div>
        </div>}
      </div>
    </AnchorContainer>
  );
}
