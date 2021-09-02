import '../styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ThemeProvider = dynamic(() => import('@app/utils/colorMode'), {
  ssr: false
});

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Layout from '@app/components/Layout';
import { DefaultSeo } from 'next-seo';
import seoConfig from '@app/utils/seo.config';

library.add(faCopy);
library.add(faBars);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
export default MyApp;