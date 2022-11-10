
import Link from 'next/link';

import NetlifyForm from './NetlifyForm';
import {Clipboard} from '@app/components/Icons';
import BorderedBox from '@app/components/BorderedBox';
import AnimatedLink from '@app/components/AnimatedLink';

type TechBoxProps = {
  className?: string;
}

export default function TechnologiesBox({className}: TechBoxProps) {
  return (
    <>
      <div className="flex justify-center items-center">
        <BorderedBox>
          <p className="my-2 leading-7">
            <strong>
            I would love to here from you.&nbsp;
            </strong>

            Suggestions for this website? A job opportunity? Just to connect and say hi?
            Go ahead! Fill out the form

            <span>&nbsp;<Clipboard className="inline-block content-center text-icon-secondary" />&nbsp;</span>

            and I will respond promptly.

          </p>
        </BorderedBox>
      </div>
      <div className="flex justify-center items-center">
        <BorderedBox>
          <strong>
            If you have an interesting job opportunity, tell me all about it!
          </strong>
          {` `}I am currently working on my passion project,{` `}
          <AnimatedLink
            href='https://www.steamedapples.com'
            className="text-secondary"
          >
            Steamed Apples
          </AnimatedLink>
         .{` `}I love video games, creating websites, and working with the technologies listed in my{` `}
          <span className="inline-block">
            <Link
              href="/#skills"
              passHref
            >
              <AnimatedLink
                href="/#skills"
                className="text-secondary"
              >
                  Skills
              </AnimatedLink>
            </Link>
          </span>
          {` `}section.
        </BorderedBox>
      </div>
      <NetlifyForm />
    </>
  );
}
