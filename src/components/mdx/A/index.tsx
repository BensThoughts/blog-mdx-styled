import {ExternalLink} from '@app/components/Icons';
import type {DetailedHTMLProps, AnchorHTMLAttributes} from 'react';

export default function A({href, children, ...rest}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="rounded link-underline-controller"
      {...rest}
    >
      <span className="text-secondary link-underline link-underline-secondary">
        {children}
      </span>
      <span className="ml-1 inline-block pb-1 align-middle text-icon-secondary link-underline-no-effect">
        <ExternalLink size={20} />
      </span>
    </a>

  );
}
