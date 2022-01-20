import H1 from '@app/components/mdx/H1';

export default function TitleBox() {
  return (
    <div className="z-10 order-2 py-20 w-full max-w-2xl h-60 bg-transparent rounded-lg border-solid shadow-md md:order-1 border-1 border-primary">
      <div className="flex flex-col justify-center items-center mx-auto w-full max-w-max">
        <div className="flex flex-col justify-center content-center items-center mx-3 md:flex-row">
          <H1 className="italic">Benjamin</H1>
          <H1 className="italic">&nbsp;Blumenfeld-Jones</H1>
        </div>
        <h2 className="self-start mx-3 my-2 text-lg italic text-center md:text-left">Self taught software developer with a passion for learning.</h2>
      </div>
    </div>
  );
}
