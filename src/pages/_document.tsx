import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const setInitialTheme = `
    (function() {
      function getInitialColorMode() {
        const persistedColorPreference = window.localStorage.getItem('color-mode');
        const hasPersistedPreference = typeof persistedColorPreference === 'string';
        // If the user has explicitly chosen light or dark,
        // let's use it. Otherwise, this value will be null.
        if (hasPersistedPreference) {
          return persistedColorPreference;
        }
        // If they haven't been explicit, let's check the media
        // query
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const hasMediaQueryPreference = typeof mql.matches === 'boolean';
        if (hasMediaQueryPreference) {
          return mql.matches ? 'dark' : 'light';
        }
        // If they are using a browser/OS that doesn't support
        // color themes, let's default to 'light'.
        return 'light';
      }

      const colorMode = getInitialColorMode();
      document.body.dataset.theme = colorMode;
  })()`;
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}