import NextDocument, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';
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
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />

          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" /> */}
          {/* <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" /> */}
          {/* <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" /> */}
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{__html: setInitialTheme}} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
