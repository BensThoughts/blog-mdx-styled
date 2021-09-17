import H1 from '@app/components/mdx/H1';

export default function TitleBox() {
  return (
    <div className="order-2 md:order-1 bg-transparent w-full max-w-2xl h-60 py-20 z-10 rounded-lg border-1 border-solid border-primary shadow-md">
      <div className="flex flex-col items-center justify-center w-full max-w-max mx-auto">
        <div className="flex flex-col items-center justify-center content-center md:flex-row mx-3">
          <H1 className="italic">Benjamin</H1>
          <H1 className="italic">&nbsp;Blumenfeld-Jones</H1>
        </div>
        <h2 className="italic self-start my-2 mx-3 text-center md:text-left text-lg">Self taught software developer with a passion for learning.</h2>
      </div>
    </div>
  );
}
