import Script from 'next/script'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect,useState } from 'react'
import * as gtag from '../lib/gtag'
import CookieConsent from "react-cookie-consent"

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
        console.log(response)
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
        {/* <Html lang="en-us" /> */}
        <title>Happie Celebrations | Find Wish,Celebration and Gift Ideas</title>
        <meta name="description" content="Find Wish, Celebration and Gift Ideas for all occasions" />
        <link rel="icon" type="image/png" href="mini-logo.png" />
        {/* <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" /> */}
      </Head>

      <Header user={user} updateUser={updateUser} loading={loading} />
      <Component {...pageProps } user={user} updateUser={updateUser} loading={loading} />
      <Footer />

      <CookieConsent
        location="bottom"
        buttonText="ACCEPT"
        cookieName="cookieconsentvalue"
        style={{ background: "#2b373be3",fontSize: "12px" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        We use cookies to offer you a better experience, analyse site traffic. by continuing to use this website, you consent to our use of cookies in accordance with our <span className="cookie-link" onClick={() => router.push('/cookie-policy')} >cookie policy</span>.
        {/* <span style={{ fontSize: "10px" }}>We use cookies to offer you a better experience, analyse site traffic, and serve targeted advertisements. by continuing to use this website, you consent to our use of cookies in accordance with our cookie policy.</span> */}
      </CookieConsent>
    </>
  )
}

export default MyApp
