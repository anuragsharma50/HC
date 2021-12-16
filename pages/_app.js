import Script from 'next/script'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect,useState } from 'react'
import * as gtag from '../lib/gtag'

import { PopupProvider } from "react-popup-manager";
import axios from 'axios'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import '../styles/globals.scss'
import '../components/header/header.scss'
import '../components/footer/footer.scss'
import '../components/phone-menu/menu.scss'
import '../styles/select-search/select-search.scss'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  const updateUser = ( ) => {
    setLoading(true)
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/getuser`,
    {withCredentials:true},
    ).then((response) => {
        // console.log(response)
        if(response.data){
          if(!response.data.error){
            setUser(response.data)
            setLoading(false)
          }
        }
    }).catch((err) => {
      // console.log("Error" ,err.response)
      setUser()
      setLoading(false)
    }) 
  }

  useEffect(() => {
    updateUser()
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
}, [router.events])

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Head>
        <title>Happie Celebrations</title>
        <meta name="description" content="Find Wish,Celebration and Gift Ideas for all ocassions" />
        <link rel="icon" href="/mini-logo.png" />
      </Head>

      <PopupProvider>
        <Header user={user} updateUser={updateUser} loading={loading} />
        <Component {...pageProps } user={user} updateUser={updateUser} loading={loading} />
      </PopupProvider>
      <Footer />
    </>
  )
}

export default MyApp
