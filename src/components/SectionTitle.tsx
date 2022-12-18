type SectionTitleProps = {
  reversed?: boolean;
} & React.HTMLAttributes<HTMLDivElement>

export default function SectionTitleHeader({
  reversed = false,
  className,
  children,
  ...rest
}: SectionTitleProps) {
  return (
    <div className={`flex items-center my-2 h-full ${className}`} {...rest}>
      <h2
        className="relative flex items-center h-full w-full -z-[1] text-secondary
                   whitespace-nowrap font-mono text-2xl md:text-4xl
                   before:content-[''] before:relative before:top-0 before:w-full before:h-[2px] before:mr-5 before:bg-secondary before:-z-[1]
                   after:content-[''] after:relative after:top-0 after:w-full after:h-[2px] after:ml-5 after:bg-secondary after:-z-[1]"

      >
        {children}
      </h2>
    </div>
  );
}
