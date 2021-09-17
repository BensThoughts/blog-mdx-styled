type H2Props = {
  children: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

export default function H1({children, className}: H2Props) {
  return (
    <h2 className={`text-xl md:text-2xl mx-auto my-3 text-secondary ${className}`}>
      {children}
    </h2>
  );
};
