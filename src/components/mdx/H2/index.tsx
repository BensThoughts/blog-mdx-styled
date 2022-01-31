export default function H2({children, className}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={`overflow-hidden relative px-1 py-1 mx-auto text-xl border-b-2 md:text-2xl text-secondary border-secondary ${className}`}>
      {children}
    </h2>
  );
};
