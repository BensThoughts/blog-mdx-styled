import { MouseEventHandler, ReactNode } from 'react';
import Link from 'next/link';

interface MenuItemsProps {
  to: string,
  className?: string,
  onClick?: MouseEventHandler<HTMLAnchorElement>
  children: ReactNode,
}

const MenuItem = ({
  to = '/',
  className = '',
  onClick,
  children,
  ...rest
}: MenuItemsProps) => {
  return (
    <Link href={to} {...rest} scroll={false}>
      <a onClick={onClick} className={className}>
        {children}
      </a>
    </Link>
  );
};

export default MenuItem;