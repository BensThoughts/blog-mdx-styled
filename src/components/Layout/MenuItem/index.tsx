import { MouseEventHandler, ReactNode } from 'react';
import Link from 'next/link';
import AnimatedLink from '@app/components/AnimatedLink';

type MenuItemsProps = {
  to: string,
  animatedLink?: boolean,
  className?: string,
  onClick?: MouseEventHandler<HTMLAnchorElement>
  children: ReactNode,
}

const MenuItem = ({
  to = '/',
  animatedLink = false,
  className = '',
  onClick,
  children,
  ...rest
}: MenuItemsProps) => {
  return (
    <Link href={to} {...rest} scroll={false} passHref>
      {animatedLink
        ? <AnimatedLink href={to} className={className}>
            {children}
          </AnimatedLink>
        : <a onClick={onClick} className={`text-primary ${className}`} href={to}>
            {children}
          </a>
      }
    </Link>
  );
};

export default MenuItem;