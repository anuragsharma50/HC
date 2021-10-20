import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import '../styles/globals.scss'
import '../components/header/header.scss'
import '../components/footer/footer.scss'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Happie Celebration</title>
        <meta name="description" content="Find Wish,Celebration and Gift Ideas for all ocassions" />
        <link rel="icon" href="/C.png" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
