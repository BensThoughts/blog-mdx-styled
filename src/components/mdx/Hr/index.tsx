import styled from '@emotion/styled';

const Break = styled.hr`
    border-width: 1px;
`;

export default function Hr() {
  return <Break className="border-secondary mx-auto w-full border-solid border-opacity-50" />;
};
