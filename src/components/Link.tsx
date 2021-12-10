import NextLink, {LinkProps} from 'next/link';
import {FC, HTMLProps, useCallback} from 'react';
import {useRouter} from 'next/router';

interface FLinkProps extends Omit<HTMLProps<HTMLAnchorElement>, 'href' | 'as'>, LinkProps {}

const Link: FC<FLinkProps> = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  target,
  ...anchorProps
}) => {
  const router = useRouter();
  const handleClick = useCallback(
      (e) => {
        console.log(href);
        if ((href as string).startsWith('/#')) {
          e.preventDefault();

          // if (router.pathname === '/' || router.pathname.startsWith('/#')) {
          //   e.preventDefault();
          // }
          const scrollAbove = () => {
            const destination = document.querySelector(hrefStr.substr(1));
            if (destination) {
              console.log('IN_DESTINATION');
              const rect = destination.getBoundingClientRect();
              const yOffset = -75;
              const y = rect.top + window.scrollY + yOffset;
              window.scrollTo(0, y);
            }
          };

          const hrefStr = href as string;
          console.log('PATHNAME: ' + router.pathname);
          if (router.pathname != '/') {
            router.push(href, undefined, {
              scroll: true,
            });

            setTimeout(scrollAbove, 400);
          } else {
            scrollAbove();
          }
        }
      },
      [href, router]
  );
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
    >
      <a
        tabIndex={0}
        target={target}
        role="link"
        onClick={handleClick}
        // onKeyDown={handleClick}
        {...anchorProps}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
