import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@app/utils/colorMode';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}
export default MyApp
