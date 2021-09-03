import styled from '@emotion/styled';

const Break = styled.hr`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-style: inset;
  border-width: 1px;
  border-color: var(--color-text-primary);
`;

export default function Hr() {
  return <Break  />
};