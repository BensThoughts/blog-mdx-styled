import '../styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';

const ThemeProvider = dynamic(() => import('@app/utils/context/colorMode'), {
  ssr: false
});

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import {
  faBars,
  faDesktop
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

library.add(faCopy);
library.add(faBars);
library.add(faDesktop);
library.add(faTwitter);
library.add(faFacebook);
library.add(faLinkedin);
library.add(faGithub);


import { Provider } from 'react-redux';
import { DefaultSeo } from 'next-seo';
import seoConfig from '@app/utils/seo.config';

import { store } from '@app/store/store';
import Navbar from '@app/components/Layout/Navbar';
import Footer from '@app/components/Layout/Footer';

const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: 3.5rem 1fr 3.5rem;
`;

const NavWrap = styled.div`
  grid-row: 1 / 2;
`;

const ContentWrap = styled.div`
  grid-row: 2 / 3;
`;

const FooterWrap = styled.div`
  grid-row: 3 / 4;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <Provider store={store}>
        <PageWrapper>
            <NavWrap>
              <ThemeProvider>
                <Navbar className="h-14" />
              </ThemeProvider>
            </NavWrap>
            <ContentWrap>
            <main className="z-0 my-8">
              <Component {...pageProps} />
            </main>
            </ContentWrap>
            <FooterWrap>
              <Footer className="h-16" />   
            </FooterWrap>
        </PageWrapper>
      </Provider>
    </>
  );
}
export default MyApp;