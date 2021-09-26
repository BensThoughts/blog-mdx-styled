import '../styles/globals.css';
import type {AppProps} from 'next/app';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
// import {LazyMotion, domAnimation} from 'framer-motion';

const ThemeProvider = dynamic(() => import('@app/utils/context/colorMode'), {
  ssr: false,
});

import FeatureToggle from '@app/components/FeatureToggle/FeatureToggle';

// import {library} from '@fortawesome/fontawesome-svg-core';
// import {faCopy} from '@fortawesome/free-regular-svg-icons';
// import {
//   faBars,
//   faDesktop,
//   faCloudMoon,
//   faHandSparkles,
//   faSun,
// } from '@fortawesome/free-solid-svg-icons';
// import {
//   faTwitter,
//   faFacebook,
//   faLinkedin,
//   faGithub
// } from '@fortawesome/free-brands-svg-icons';

// library.add(faCopy);
// library.add(faBars);
// library.add(faDesktop);
// library.add(faCloudMoon);
// library.add(faHandSparkles);
// library.add(faSun);
// library.add(faTwitter);
// library.add(faFacebook);
// library.add(faLinkedin);
// library.add(faGithub);


import {Provider} from 'react-redux';
import {DefaultSeo} from 'next-seo';
import seoConfig from '@app/utils/seo.config';

import {store} from '@app/store/store';
import Navbar from '@app/components/Layout/Navbar';
import Footer from '@app/components/Layout/Footer';

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

function MyApp({Component, pageProps, router}: AppProps) {
  const enabledFeatures = ['home', 'blog'];
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <FeatureToggle enabledFeatures={enabledFeatures}>
        <Provider store={store}>
          <ThemeProvider>
            <Navbar className="h-14" />
          </ThemeProvider>

          <PageWrapper>
            <ContentWrap>
              {/* <LazyMotion features={domAnimation}> */}
              <main className="z-0 my-8 max-h-full overflow-hidden">
                <Component {...pageProps} key={router.route} />
              </main>
              {/* </LazyMotion> */}
            </ContentWrap>
            <FooterWrap>
              <Footer className="h-16" />
            </FooterWrap>
          </PageWrapper>

        </Provider>
      </FeatureToggle>
    </>
  );
}
export default MyApp;
