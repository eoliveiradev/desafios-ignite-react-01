import { AppProps } from 'next/app';
import '../styles/globals.scss';
import { DefaultLayout } from '../layouts/DefaultLayout';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <DefaultLayout>
      <Component {...pageProps} />;
    </DefaultLayout>
  );
}

export default MyApp;
