import { AppProps } from 'next/app';

import '../styles/main.css';
import '../styles/m.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
