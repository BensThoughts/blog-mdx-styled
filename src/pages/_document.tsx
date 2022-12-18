import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

// import TagManager from 'react-gtm-module';
export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    const setInitialTheme = `
    (function() {
      function getInitialColorMode() {
        const persistedColorPreference = window.localStorage.getItem('color-mode');
        const hasPersistedPreference = typeof persistedColorPreference === 'string';

        if (hasPersistedPreference) {
          return persistedColorPreference;
        }

        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const hasMediaQueryPreference = typeof mql.matches === 'boolean';
        if (hasMediaQueryPreference) {
          return mql.matches ? 'dark' : 'light';
        }

        return 'light';
      }

      const colorMode = getInitialColorMode();
      document.body.dataset.theme = colorMode;
    })()`;

    // const gtmHead = `
    // (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    // })(window,document,'script','dataLayer','GTM-5BQBMWT');
    // `;
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
          {/* Font Options */}
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" /> */}
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,300;1,400&display=swap"
            rel="stylesheet"
          ></link> */}
          {/* <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" /> */}
          {/* <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" /> */}

          {/* <script dangerouslySetInnerHTML={{__html: gtmHead}} /> */}
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{__html: setInitialTheme}} />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5BQBMWT"
              height="0"
              width="0"
              style={{display: 'none', visibility: 'hidden'}}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
