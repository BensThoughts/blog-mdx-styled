import AnimatedLink from '@app/components/AnimatedLink';

type AProps = {
  children: string;
  href: string;
}

export default function A({href, children}: AProps) {
  return (
    <AnimatedLink href={href} className="text-secondary" target="_blank" rel="noreferrer noopener">{children}</AnimatedLink>
  );
}
