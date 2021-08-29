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
      <div className="z-10 fixed top-0 w-screen">
        <Header />
      </div>
      <div className="z-0">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
export default MyApp;