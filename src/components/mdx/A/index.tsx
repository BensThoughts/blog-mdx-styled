type AProps = {
  children: string;
  href: string;
}

export default function A({ href, children }: AProps) {
  return (
    <a href={href} className="underline text-secondary" target="_blank" rel="noreferrer">{children}</a>
  );
}