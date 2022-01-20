type H1Props = {
  children: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

export default function H1({children, className}: H1Props) {
  return (
    <h1 className={`text-2xl font-bold md:text-4xl text-secondary ${className}`}>
      {children}
    </h1>
  );
};
