import styled from '@emotion/styled';

const Container = styled.div`
  border-radius: 5px;
  border: 3px solid rgb(var(--color-app-secondary));
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

const Tab = styled.div`
  position: relative;
  display: block;
  width: 10rem;
  height: 2rem;
  margin-left: 10px;
  border-top: 4px solid rgb(var(--color-app-secondary));
  border-top-left-radius: 0.3rem/* 6px */;
  border-top-right-radius: 0.3rem/* 6px */;
  /* background-color: rgb(var(--color-app-primary)); */
  background: linear-gradient(to bottom, rgba(var(--color-app-primary), 1) 0%, rgba(var(--color-app-primary), 1) 50%);
  /* box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(0, 0, 0, 0.5); */
  &::before, &::after {
    position: absolute;
    bottom: -1px;
    width:6px;
    height: 6px;
    content: " ";
    border: 1px solid rgba(var(--color-app-primary), 1);
  }

  &::before {
    left: -5px;
    border-bottom-right-radius: 6px;
    border-width: 0 1px 1px 0;
    box-shadow: 2px 2px 0 rgba(var(--color-app-primary), 1);
  }

  &::after {
    right: -5px;
    border-bottom-left-radius: 6px;
    border-width: 0 0 1px 1px;
    box-shadow: -2px 2px 0 rgba(var(--color-app-primary), 1);
  }
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
    <div className="h-full flex flex-col">
      <Tab></Tab>
      <Container className={`h-full relative bg-primary px-2 py-4 md:p-4 flex flex-col justify-start gap-4 shadow-md ${className}`}>
        <div>
          {title && <div className="text-2xl text-high-emphesis">{title}</div>}
          {subTitle && <div className="italic">{subTitle}</div>}
        </div>
        {description && <div className="text-base">{description}</div>}
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
    </div>
  );
}
