type ProjectTitleProps = {
  title: string,
}

export default function ProjectTitle({title}: ProjectTitleProps) {
  return (
    <div
      className="flex items-center relative -z-[1] mt-[10px] mx-0 mb-[40px]
                 w-full whitespace-nowrap text-[1.5rem] text-secondary
                 after:content-[''] after:block after:relative after:top-0
                 after:w-full after:h-[2px] after:ml-[20px] after:-z-[1]
                 after:bg-secondary"
    >
      {title}
    </div>
  );
}
