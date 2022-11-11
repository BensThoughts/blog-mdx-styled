import '../styles/globals.css';
import type {AppProps} from 'next/app';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
// import {LazyMotion, domAnimation} from 'framer-motion';

const ThemeProvider = dynamic(() => import('@app/utils/context/colorMode'), {
  ssr: false,
});

// import ThemeProvider from '@app/utils/context/colorMode';

import FeatureToggle from '@app/components/FeatureToggle/FeatureToggle';


// import {Provider} from 'react-redux';
import {DefaultSeo} from 'next-seo';
import seoConfig from '@app/utils/seo.config';

// import {store} from '@app/store/store';
import Navbar from '@app/components/Layout/Navbar';
import Footer from '@app/components/Layout/Footer';
import {ImageCacheProvider} from '@app/utils/hooks/useProgressiveImg';
import * as Fathom from 'fathom-client';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

const PageWrapper = styled.div`
  padding-top: 3.5rem;
  margin-top: 0rem;
  display: grid;
  grid-template-rows: 1fr 4rem;
`;

// const NavWrap = styled.div`
//   grid-row: 1 / 2;
// `;

const ContentWrap = styled.div`
  grid-row: 1 / 2;
`;

const FooterWrap = styled.div`
  place-items: center;
  grid-row: 2 / 3;
`;

function App({Component, pageProps}: AppProps) {
  const enabledFeatures = ['home', 'blog', 'projects'];

  const router = useRouter();

  useEffect(() => {
    Fathom.load('MUTUGNOW', {
      url: 'https://descriptive-welcome.bensthoughts.dev/script.js',
      includedDomains: ['bensthoughts.dev', 'www.bensthoughts.dev'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
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
      <FeatureToggle enabledFeatures={enabledFeatures}>
        {/* <Provider store={store}> */}
        <ImageCacheProvider>
          <ThemeProvider>
            <Navbar className="h-14" />
          </ThemeProvider>

          {/* <LazyMotion features={domAnimation}> */}
          <PageWrapper>
            <ContentWrap>
              <main className="z-0 max-h-full mt-8 mb-16 overflow-hidden">
                <Component {...pageProps} key={router.route} />
              </main>
            </ContentWrap>
            <FooterWrap>
              <Footer className="h-16" />
            </FooterWrap>
          </PageWrapper>
          {/* </LazyMotion> */}
        </ImageCacheProvider>
        {/* </Provider> */}
      </FeatureToggle>
    </>
  );
}
export default App;
