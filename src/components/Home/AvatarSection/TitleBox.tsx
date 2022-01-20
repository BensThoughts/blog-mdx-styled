import H1 from '@app/components/mdx/H1';

export default function TitleBox() {
  return (
    <div className="z-10 order-2 w-full max-w-2xl py-20 bg-transparent border-solid rounded-lg shadow-md md:order-1 h-60 border-1 border-primary">
      <div className="flex flex-col items-center justify-center w-full mx-auto max-w-max">
        <div className="flex flex-col items-center content-center justify-center mx-3 md:flex-row">
          <H1 className="italic">Benjamin</H1>
          <H1 className="italic">&nbsp;Blumenfeld-Jones</H1>
        </div>
        <h2 className="self-start mx-3 my-2 text-lg italic text-center md:text-left">Self taught software developer with a passion for learning.</h2>
      </div>
    </div>
  );
}
