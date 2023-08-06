import '@/styles/globals.scss';
import '@/styles/layout.scss';
import '@/styles/form.scss';
import '@/styles/header.scss';
import '@/styles/info.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
