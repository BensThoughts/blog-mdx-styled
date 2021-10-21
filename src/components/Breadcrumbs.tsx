import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

import AnimatedLink from '@app/components/AnimatedLink';

const convertBreadcrumb = (crumb: string) => {
  return crumb.replace(/-/g, ' ').toUpperCase();
};

type BreadcrumbsType = { breadcrumb: string, href: string }[];

export default function Breadcrumbs() {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbsType>([{breadcrumb: 'home', href: '/'}]);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/')};
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  // if (!breadcrumbs) {
  //   return null;
  // }

  return (
    <div aria-label="breadcrumbs" className="flex">
      <div className="font-mono">
        <span className="text-secondary">$&gt;&nbsp;</span>
        <Link href="/" scroll={true} passHref>
          <AnimatedLink href="/">HOME</AnimatedLink>
        </Link>
        &nbsp;/&nbsp;
      </div>
      {breadcrumbs.map((breadcrumb, i) => {
        return (
          <div key={breadcrumb.href} className="font-mono">
            <Link href={breadcrumb.href} scroll={true} passHref>
              <AnimatedLink href={breadcrumb.href}>
                {convertBreadcrumb(breadcrumb.breadcrumb)}
              </AnimatedLink>
            </Link>
            &nbsp;{breadcrumb.breadcrumb === '' ? '' : '/'}&nbsp;
          </div>
        );
      })}
    </div>
  );
}
