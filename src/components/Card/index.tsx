import styled from '@emotion/styled';

const Container = styled.div`
  border-radius: 10px;
  transition: background-color 0.25s ease-in-out;
`;

type CardProps = {
  header?: React.ReactChild
  footer?: React.ReactChild
  subTitle?: string
  title?: string
  description?: string
} & React.HTMLAttributes<HTMLDivElement>

export default function Card({
  header = undefined,
  footer = undefined,
  title = '',
  subTitle = '',
  description = '',
  children,
  className,
}: CardProps) {
  return (
    <Container className={`relative bg-primary ${className}`}>
      {header && <>{header}</>}

      <div className="px-2 py-4 sm:p-8">
        {title && <div className="text-2xl text-high-emphesis">{title}</div>}
        {subTitle && <div className="mb-4 italic">{subTitle}</div>}
        {description && <div className="text-base text-secondary">{description}</div>}
        {children}
      </div>

      {footer && <>{footer}</>}
    </Container>
  )
}