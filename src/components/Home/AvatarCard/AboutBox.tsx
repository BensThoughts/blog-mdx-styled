import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type AboutBoxProps = {
  className?: string;
}

export default function AboutBox({className}: AboutBoxProps) {
  return (
    <div className={`bg-transparent w-full max-w-2xl z-10 rounded-lg border-2 border-solid border-opacity-30 border-secondary shadow-md ${className}`}>
      <div className="m-4">
        <p>Hi <FontAwesomeIcon icon={['fas', 'hand-sparkles']} />,<br /></p>
        <p className="my-2">
        &nbsp;&nbsp;&nbsp;&nbsp;My name is Ben.  I am a self-taught software developer with a passion for learning. My path in life has gifted
        me with a variety unique experiences and opportunities. I have done everything from starting and operating a vertically
        integrated essential oil company to creating my own cloud-based email organizing web application.
        </p>
        <p className="my-2">
        &nbsp;&nbsp;&nbsp;&nbsp;I have been interested in and passionate about software development for over 20 years. People who know me often
        ask why I do not program for a living. To which my response has been that life circumstances have presented me with other opportunities.
        As a self-taught developer there has been no clear path or straightforward opportunity brought to me. These are
        responses I no longer find satisfying.
        </p>
        <p>
        &nbsp;&nbsp;&nbsp;&nbsp;As someone with a deep passion for learning, self-growth, and the integration of groundbreaking technology in
        the everyday lives of people, the next logical step for me is to parlay my software development skills into a career.
        I&apos;m a dreamer that loves the idea of helping to create massively scalable, human-centric, applications that enhance people&apos;s lives.
        </p>
      </div>
    </div>
  );
}
