type UnderlineLinkWithIconProps = {
  text: string,
  href: string,
  icon: React.ReactNode,
  iconPosition?: 'left' | 'right';
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function UnderlineLinkWithIcon({
  text,
  href,
  className,
  icon,
  iconPosition = 'right',
  ...rest
}: UnderlineLinkWithIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex gap-2 justify-center items-center text-primary group ${className}`}
      {...rest}
    >
      {iconPosition === 'left' && <span className="inline-block">{icon}</span>}
      <span className="underline underline-offset-4 decoration-secondary group-hover:text-secondary transition-colors duration-150 ease-linear">{text}</span>
      {iconPosition === 'right' && <span className="inline-block">{icon}</span>}
    </a>
  );
}
