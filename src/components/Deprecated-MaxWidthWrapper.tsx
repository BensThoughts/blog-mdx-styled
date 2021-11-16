/**
 * This component should only be used as a wrapper around an entire Next.js page
 */

export default function MaxWidthWrapper({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`relative px-4 md:px-8 mx-auto w-full max-w-6xl ${className}`} {...rest}>
      {children}
    </div>
  );
}
