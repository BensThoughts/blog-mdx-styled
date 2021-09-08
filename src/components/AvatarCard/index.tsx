import H1 from '@app/components/mdx/H1';

export default function AvatarCard() {
  const bustImgSrc = "https://res.cloudinary.com/bensthoughts/image/upload/q_auto/v1631126786/blog/home/bust_clean_xugkq8.jpg";
  return (
    <>
      <img src={bustImgSrc} alt="Bust Image" className="object-cover w-48 h-48  md:w-96 md:h-96 rounded-full z-20 p-2 bg-app-bg shadow-sm"/>
      <div className="bg-primary w-full max-w-2xl h-60 -my-20 py-20 md:-my-36 md:py-40 z-10 rounded-lg shadow-xl">
        <div className="flex flex-col items-center justify-center w-full max-w-max mx-auto">
          <div className="flex flex-col items-center justify-center content-center md:flex-row mx-3">
            <H1 className="italic">Benjamin</H1>
            <H1 className="italic">&nbsp;Blumenfeld-Jones</H1>
          </div>
          <h2 className="italic self-start my-2 mx-3 text-center md:text-left text-lg">Self taught software developer with a passion for learning.</h2>
        </div>
      </div>
    </>
  );
}