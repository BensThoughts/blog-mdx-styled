import '../styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';


const Header = dynamic(() => import('@app/components/Header'), {
  ssr: false
});

// const ThemeProvider = dynamic(() => import('@app/utils/colorMode'), {
//   ssr: false
// });

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

library.add(faCopy);  

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;