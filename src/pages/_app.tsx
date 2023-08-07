import '@/styles/globals.scss';
import '@/styles/layout.scss';
import '@/styles/form.scss';
import '@/styles/header.scss';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
