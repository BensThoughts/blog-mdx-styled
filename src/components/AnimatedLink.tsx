import {forwardRef, MouseEventHandler} from 'react';

type AProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const AnimatedLink = forwardRef<HTMLAnchorElement, AProps>(({
  children,
  className = '',
  onClick,
  ...rest
}, ref) => {
  return (
    <a
      ref={ref}
      onClick={onClick}
      className={`link-underline link-underline-secondary ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
});

AnimatedLink.displayName = 'AnimatedLink';

export default AnimatedLink;
