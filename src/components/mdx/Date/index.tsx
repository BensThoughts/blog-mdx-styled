import {parseISO, format} from 'date-fns';
import styled from '@emotion/styled';

interface DateProps {
  dateString: string
}

const Time = styled.time`
  font-style: italic;
  font-weight: 100;
`;

export default function Date(props: DateProps) {
  const date = parseISO(props.dateString);
  return (
    <Time dateTime={props.dateString}>{format(date, 'LLLL d, yyyy')}</Time>
  );
};
