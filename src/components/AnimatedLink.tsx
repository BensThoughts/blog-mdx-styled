import {forwardRef, MouseEventHandler} from 'react';
import AnimatedUnderline from '@app/components/AnimatedUnderline';

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
    <AnimatedUnderline>
      <a
        ref={ref}
        onClick={onClick}
        className={className}
        {...rest}
      >
        {children}
      </a>
    </AnimatedUnderline>

  );
});

AnimatedLink.displayName = 'AnimatedLink';

export default AnimatedLink;
