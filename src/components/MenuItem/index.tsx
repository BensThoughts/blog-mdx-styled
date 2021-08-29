import { MouseEventHandler, ReactNode } from 'react';
import Link from 'next/link';

interface MenuItemsProps {
  children: ReactNode,
  to: string,
  onClick?: MouseEventHandler<HTMLParagraphElement>
}

const MenuItem = (props: MenuItemsProps) => {
  const {children, to = '/', onClick, ...rest } = props;
  return (
    <p className="mx-0 md:mx-4 block"
      onClick={onClick}
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </p>
  );
};

export default MenuItem;