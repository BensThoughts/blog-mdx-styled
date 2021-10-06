import styled from '@emotion/styled';

const Container = styled.div`
  border-radius: 5px;
  height: 100%;
  transition-property: background, color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  will-change: background, color;
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
  subTitle?: string
  title?: string
  description?: string
  tags?: string[]
} & React.HTMLAttributes<HTMLDivElement>

export default function Card({
  title = '',
  subTitle = '',
  description = '',
  tags = [],
  children,
  className,
}: CardProps) {
  return (
    <Container className={`h-full relative bg-primary px-2 py-4 md:p-8 flex flex-col justify-start gap-2 shadow-md ${className}`}>
      {title && <div className="text-2xl text-high-emphesis">{title}</div>}
      {subTitle && <div className="italic">{subTitle}</div>}
      {description && <div className="text-base text-secondary">{description}</div>}
      <div>
        {children}
      </div>

      <div className="h-full flex flex-col justify-end">
        <div className="flex flex-wrap gap-2 justify-start">
          {tags.map((tag) => (
            <Pill key={tag}>
              <span className="text-secondary">#</span>
              {tag}
            </Pill>
          ))}
        </div>
      </div>
    </Container>
  );
}
