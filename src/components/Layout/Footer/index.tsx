import styled from '@emotion/styled';

const Container = styled.footer`
  background-color: var(--color-app-primary);
  transition: background-color 0.25s ease-in-out;
  will-change: background-color;
`;

export default function Footer() {
  return (
    <Container className="w-full h-16"></Container>
  );
}