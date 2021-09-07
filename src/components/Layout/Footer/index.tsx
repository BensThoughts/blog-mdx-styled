import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.footer`
  transition: background-color 0.25s ease-in-out;
  will-change: background-color;
`;

const IconContainer = styled.div`

`;

type FooterProps = {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <Container className={`bg-primary w-full flex flex-row justify-center items-center ${className}`}>
      <a href="https://github.com/bensthoughts" target="_blank" rel="noreferrer">
        <div className="rounded-xl shadow-xl mx-3 border-2 border-icon-primary border-opacity-50 border-solid bg-primary bg-opacity-50">
          <FontAwesomeIcon icon={['fab', 'github']} size="3x" className="mx-1 p-2 rounded-full text-icon-secondary" />
        </div>
      </a>
      <a href="https://twitter.com/bensthoughts" target="_blank" rel="noreferrer">
        <div className="rounded-xl shadow-xl mx-3 border-2 border-icon-primary border-opacity-50 border-solid bg-primary bg-opacity-50">
          <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" className="mx-1 p-2 rounded-full text-icon-secondary" />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/benjaminblumenfeldjones" target="_blank" rel="noreferrer">
        <div className="rounded-xl shadow-xl mx-3 border-2 border-icon-primary border-opacity-50 border-solid bg-primary bg-opacity-50">
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" className="mx-1 p-2 rounded-full text-icon-secondary" />
        </div>
      </a>
      <a href="https://www.facebook.com/benjamin.blumenfeldjones.9" target="_blank" rel="noreferrer">
        <div className="rounded-xl shadow-xl mx-3 border-2 border-icon-primary border-opacity-50 border-solid bg-primary bg-opacity-50">
          <FontAwesomeIcon icon={['fab', 'facebook']} size="3x" className="mx-1 p-2 rounded-full text-icon-secondary" />
        </div>
      </a>
    </Container>
  );
}