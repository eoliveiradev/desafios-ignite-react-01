import { AppProps } from 'next/app';
import '../styles/globals.scss';
import { PrismicProvider } from '@prismicio/react';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { getPrismicClient } from '../services/prismic';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const prismic = getPrismicClient({});

  return (
    <DefaultLayout>
      <PrismicProvider client={prismic}>
        <Component {...pageProps} />
      </PrismicProvider>
    </DefaultLayout>
  );
}

export default MyApp;
