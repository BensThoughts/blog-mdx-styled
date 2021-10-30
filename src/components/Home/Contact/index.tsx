
import NetlifyForm from './NetlifyForm';

import {Package} from '@app/components/Icons';
import BorderedBox from '@app/components/BorderedBox';

type TechBoxProps = {
  className?: string;
}

export default function TechnologiesBox({className}: TechBoxProps) {
  return (
    <>
      <div className="flex justify-center items-center">
        <BorderedBox>
          <p className="my-2 leading-7">
        &nbsp;&nbsp;&nbsp;&nbsp;
            <strong>
            I would love to here from you.&nbsp;
            </strong>
          Suggestions for this website? A job opportunity? Just to connect and say hi?
          Go ahead! Fill out the form below and I will receive a neat little package
            <Package size={30} className="inline-block pb-1 text-icon-secondary" />
          to which I will respond promptly.
          </p>
        </BorderedBox>
      </div>
      <NetlifyForm />
    </>
  );
}
