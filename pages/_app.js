// Import boostrap.css
import '@/styles/bootstrap.min.css'

import '@/styles/globals.css'

import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>

  <Component {...pageProps} />
  </>
  );
}