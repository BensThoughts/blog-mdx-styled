import {technologies} from '@app/utils/technologies';
import {useInView} from 'react-intersection-observer';
import React, {useEffect} from 'react';
import BorderedBox from '@app/components/BorderedBox';
import {ExcitedSmiley} from '@app/components/Icons';
import {useAnimation, m} from 'framer-motion';

const PillBackground = ({children}:{children: React.ReactNode}) => (
  <div className="rounded bg-primary/100 transition-all ease-in-out duration-300
                  group-hover:-translate-y-[6px] group-hover:transition-transform
                  group-hover:duration-200">
    {children}
  </div>
);

const Pill = ({children}:{children: React.ReactNode}) => (
  <div className="flex gap-2 items-center justify-around rounded py-1 px-2 bg-white/0
                  duration-300 transition-all ease-in-out group-hover:bg-white/20">
    {children}
  </div>
);


export default function Technologies() {
  const {ref, inView} = useInView();
  // const [viewed, setViewed] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      // setViewed(true);
      controls.start('inView');
    }
  }, [inView, controls]);

  return (
    <>
      <div className="flex justify-center items-center">
        <BorderedBox>
          <p className="my-2 leading-7">
            <strong>
              A list of the technologies I have been excited about&nbsp;
              <ExcitedSmiley size={30} className="inline-block pb-1 text-icon-secondary" />
              &nbsp;and working with recently.
            </strong>
          &nbsp;&nbsp;Click on the links to go to the home page and learn more about a given technology.
          </p>
        </BorderedBox>
      </div>

      <m.div
        className="flex flex-wrap mx-auto w-full max-w-4xl h-full"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {

          },
          inView: {
            transition: {
              staggerChildren: 0.04,
              delayChildren: 0,
            },
          },
        }}
        // viewed={viewed}
      >
        {Array.from(technologies.values()).map((tech, idx) => (
          <m.a
            key={tech.name}
            href={tech.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-opacity ease-in-out p-2 text-sm text-primary group"
            variants={{
              hidden: {
                opacity: 0,
              },
              inView: {
                opacity: 1,
              },
            }}
          >
            <PillBackground>
              <Pill>
                <span className="text-icon-secondary">{tech.icon}</span>
                <span className="text-primary">{tech.name}</span>
              </Pill>
            </PillBackground>
          </m.a>
        ))}
      </m.div>
    </>
  );
}
