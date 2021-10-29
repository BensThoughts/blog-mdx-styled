import styled from '@emotion/styled';

const Background = styled.div`
  transition-property: background, color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  will-change: background, color;
`;

type AboutBoxProps = {
  className?: string;
}

export default function AboutBox({className}: AboutBoxProps) {
  return (
    <Background className={`w-full max-w-2xl z-10 rounded-sm border-2 border-solid border-secondary p-4 shadow-md ${className}`}>
      <div className="leading-7">
        <p>Hi,<br /></p>
        <p className="my-4">
        &nbsp;&nbsp;&nbsp;&nbsp;<strong>My name is Ben. I am a self-taught software developer with a passion for learning.</strong> My path in life has given
        me a variety of unique experiences. I have done everything from starting and operating a vertically integrated essential oil company to
        creating my own cloud-based email organizing web application.
        </p>
        <p className="my-4">
        &nbsp;&nbsp;&nbsp;&nbsp;<strong>I currently spend 20-40 hours a week outside of my full time job studying computer science and learning to develop
        web applications</strong>. As someone that loves learning, programming, and helping people,
        the next logical step for me is to parlay my software development skills into a career. I&apos;m a dreamer that wants to work on massively scalable, human-centric, applications that enhance people&apos;s lives.
        </p>
      </div>
    </Background>
  );
}
