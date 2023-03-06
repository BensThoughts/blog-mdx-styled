import '../styles/globals.css';
import type {AppProps} from 'next/app';
import dynamic from 'next/dynamic';

const ThemeProvider = dynamic(() => import('@app/utils/context/colorMode'), {
  ssr: false,
});

// import ThemeProvider from '@app/utils/context/colorMode';

import {DefaultSeo} from 'next-seo';
import seoConfig from '@app/utils/seo.config';

import Navbar from '@app/components/Layout/Navbar';
import Footer from '@app/components/Layout/Footer';
import {ImageCacheProvider} from '@app/utils/hooks/useProgressiveImg';
import * as Fathom from 'fathom-client';
import {useRouter} from 'next/router';
import React, {useEffect, useRef} from 'react';
import {domAnimation, LazyMotion} from 'framer-motion';

function App({Component, pageProps}: AppProps) {
  const router = useRouter();
  const firstLoad = useRef(true);

  useEffect(() => {
    Fathom.load('MUTUGNOW', {
      url: 'https://descriptive-welcome.bensthoughts.dev/script.js',
    });

    function onRouteChangeComplete() {
      if (firstLoad.current) {
        firstLoad.current = false;
      } else {
        Fathom.trackPageview();
      }
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <DefaultSeo {...seoConfig} />
      <ImageCacheProvider>
        <ThemeProvider>
          <Navbar className="h-14" />
        </ThemeProvider>

        <LazyMotion features={domAnimation}>
          <div className="mt-0 grid grid-rows-[1fr,4rem]">
            <div className="row-start-1 row-end-2">
              <main className="z-0 max-h-full mt-8 mb-16 overflow-hidden">
                <Component {...pageProps} key={router.route} />
              </main>
            </div>
            <div className="row-start-2 row-end-3 place-items-center">
              <Footer className="h-16" />
            </div>
          </div>
        </LazyMotion>
      </ImageCacheProvider>
    </>
  );
}
export default App;
