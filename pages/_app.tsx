import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { startupCheckForDarkMode } from '../lib/dark-mode';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    startupCheckForDarkMode();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
