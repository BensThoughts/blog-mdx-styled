import styled from '@emotion/styled';

const Break = styled.hr`
    border-width: 1px;
`;

export default function Hr() {
  return <Break className="mx-auto w-full border-opacity-50 border-solid border-secondary" />;
};
