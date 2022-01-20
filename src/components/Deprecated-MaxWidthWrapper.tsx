/**
 * This component should only be used as a wrapper around an entire Next.js page
 */

export default function MaxWidthWrapper({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`relative w-full max-w-6xl px-4 mx-auto md:px-8 ${className}`} {...rest}>
      {children}
    </div>
  );
}
