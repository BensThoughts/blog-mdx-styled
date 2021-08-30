import styled from '@emotion/styled';

const Container = styled.div`
  background-color: var(--color-app-primary);
  width: 35rem;
  height: 15rem;
`;

interface CardProps {
  title?: string;
  subTitle?: string;
  content?: string;
  footer?: string;
}

export default function Card(props: CardProps) {
  const { title, subTitle, content, footer } = props;
  let Title = <></>
  if (title) {
    Title = <span>{title}</span>
  }
  let SubTitle = <></>
  if (subTitle) {
    SubTitle = <span>{subTitle}</span>
  }
  
  return (
    <Container className="max-w-sm rounded-2xl md:max-w-full">
      <div className="pl-5 pt-5">
        <h1 className="text-xl">{title}</h1>
        <span className="italic text-sm">{subTitle}</span>

      </div>

    </Container>
  );
}