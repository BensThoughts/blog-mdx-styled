import '../styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import Header from '@app/components/Header';

const ThemeProvider = dynamic(() => import('@app/utils/colorMode'), {
  ssr: false
});

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

library.add(faCopy);  

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;