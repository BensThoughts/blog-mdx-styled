import styled from '@emotion/styled';
import AnimatedUnderline from '@app/components/AnimatedUnderline';

const AnimationController = styled.a`
  &:hover ${AnimatedUnderline}::after {
    opacity: 1;
    transform: scale(1);
  }
`;

type AnimatedLinkWithIconProps = {
  text: string,
  href: string,
  icon: React.ReactNode,
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function AnimatedLinkWithIcon({text, href, className, icon, ...rest}: AnimatedLinkWithIconProps) {
  return (
    <AnimationController
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex gap-2 text-primary items-center justify-center ${className}`}
      {...rest}
    >
      <AnimatedUnderline
        className="animated-underline"
      >
        {text}
      </AnimatedUnderline>
      <span className="inline-block">
        {icon}
      </span>
    </AnimationController>
  );
}
