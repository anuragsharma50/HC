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

  const updateUser = ( ) => {
    axios.get('http://localhost:5500/auth/getuser',
    {withCredentials:true},
    ).then((response) => {
        console.log(response)
        if(response.data){
          if(!response.data.error){
            setUser(response.data)
          }
        }
    }).catch((err) => {
      console.log("Error" ,err.response)
      setUser()
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
        <Header user={user} updateUser={updateUser} />
        <Component {...pageProps } user={user} updateUser={updateUser}  />
        {/* <MrModal /> */}
      </PopupProvider>
      <Footer />
    </>
  )
}

export default MyApp
