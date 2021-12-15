import { useEffect,useState } from 'react'
import Head from 'next/head'

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
}, [])

  return (
    <>
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
