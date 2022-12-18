export default function AnimatedUnderline({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span className={`link-underline link-underline-secondary ${className}`}>
      {children}
    </span>
  );
}
