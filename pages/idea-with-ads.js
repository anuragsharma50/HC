import Head from 'next/head'
import Image from 'next/image'
// import Script from 'next/script'
// import { useEffect } from 'react'
import GoogleAd from '../components/GoogleAd/GoogleAd'

import Styles from '../styles/pageStyles/idea.module.scss'
import Arrow from "../assets/images/arrow.png"

function ideaWithAds() {

    // useEffect(()=> {
    //     // if(typeof window !== 'undefined'){
    //     //     (window.adsbygoogle = window.adsbygoogle || []).push({})
    //     // }
    // }, [])

    return (
        <>
            <Head>
                <script data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE} async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <title>Ideas with Ads Page | Happie Celebrations</title>
                <meta name="description" content="View ideas" />
            </Head>

            <div className={`${Styles.container} container`}>
                <div className='sub-container'>
                    <div className="heading">
                        <h2>Idea one</h2>
                    </div>

                    <GoogleAd adSlot={"1394339153"} />

                    <span className="idea-description">
                        This is idea one
                    </span>

                    <div className="idea-buttons">

                        <button className="sec-btn btn">
                            <span>Next</span>
                            <div className="img">
                                <Image src={Arrow} alt="arrow" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ideaWithAds
