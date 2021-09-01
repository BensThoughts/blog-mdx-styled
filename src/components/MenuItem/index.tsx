import { MouseEventHandler, ReactNode } from 'react';
import Link from 'next/link';

interface MenuItemsProps {
  to: string,
  className?: string,
  onClick?: MouseEventHandler<HTMLParagraphElement>
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
    <h4 className={`mx-0 md:mx-4 block ${className}`}
      onClick={onClick}
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </h4>
  );
};

export default MenuItem;