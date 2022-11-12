// import styled from '@emotion/styled';
// import AnimatedUnderline from '@app/components/AnimatedUnderline';

// const AnimationController = styled.a`
//   &:hover ${AnimatedUnderline}::after {
//     opacity: 1;
//     transform: scale(1);
//   }
// `;

type AnimatedLinkWithIconProps = {
  text: string,
  href: string,
  icon: React.ReactNode,
  iconPosition?: 'left' | 'right';
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function AnimatedLinkWithIcon({
  text,
  href,
  className,
  icon,
  iconPosition = 'right',
  ...rest
}: AnimatedLinkWithIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex gap-2 justify-center items-center text-primary ${className}`}
      {...rest}
    >
      {iconPosition === 'left' && <span className="inline-block">{icon}</span>}
      <span className="underline underline-offset-4 decoration-secondary">{text}</span>
      {iconPosition === 'right' && <span className="inline-block">{icon}</span>}
    </a>
  );
}
