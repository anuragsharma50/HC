import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import Styles from '../styles/pageStyles/idea.module.scss'
import Arrow from "../assets/images/arrow.png"

function ideaWithAds() {
    return (
        <>
            <Head>
                {/* <script data-ad-client="ca-pub-4545307603353405" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
                <title>Ideas with Ads Page | Happie Celebrations</title>
                <meta name="description" content="View ideas" />
            </Head>

            {/* <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4545307603353405"
                crossorigin="anonymous">
            </Script> */}

            <div className={`${Styles.container} container`}>
                <div className='sub-container'>
                    <div className="heading">
                        <h2>Idea one</h2>
                    </div>

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
