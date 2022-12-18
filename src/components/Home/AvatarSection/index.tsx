import AvatarImg from './AvatarImg';
// import AboutBox from './AboutBox';

export default function AvatarCard({...rest}) {
  return (
    <div {...rest} className="w-full transition-all ease-in-out duration-300">
      <div className="pb-[40px] relative grid grid-cols-1 grid-rows-1
                      justify-items-center gap-y-8 md:grid-cols-[3fr,2fr]">
        <div className="col-start-1 col-span-1">
          <div className={`z-10 p-4 w-full max-w-2xl rounded-sm border-2 border-solid shadow-sm border-secondary`}>
            <p>Hi,<br /></p>
            <p className="my-4 leading-7">
        &nbsp;&nbsp;&nbsp;&nbsp;<strong>My name is Ben. I am a self-taught software developer with a passion for learning.</strong> My path in life has given
        me a variety of unique experiences. I have done everything from starting and operating a vertically integrated essential oil company to
        creating my own cloud-based email organizing web application.
            </p>
            <p className="my-4 leading-7">
        &nbsp;&nbsp;&nbsp;&nbsp;<strong>I currently spend 20-40 hours a week outside of my full time job studying computer science and learning to develop
        web applications</strong>. As someone that loves learning, programming, and helping people,
        the next logical step for me is to parlay my software development skills into a career. I&apos;m a dreamer that wants to work on massively scalable, human-centric, applications that enhance people&apos;s lives.
            </p>
          </div>
        </div>
        <div className="col-start-1 col-span-1 md:col-start-2">
          <AvatarImg />
        </div>
      </div>
    </div>
  );
}
