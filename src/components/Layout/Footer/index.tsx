import styled from '@emotion/styled';

const Container = styled.footer`
  background-color: var(--color-app-primary);
  transition: background-color 0.25s ease-in-out;
  will-change: background-color;
`;

type FooterProps = {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <Container className={`w-full flex flex-row justify-center items-center ${className}`}>Footer</Container>
  );
}