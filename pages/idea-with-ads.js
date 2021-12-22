import Head from 'next/head'
import Image from 'next/image'

import Styles from '../styles/pageStyles/idea.module.scss'
import Arrow from "../assets/images/arrow.png"

function ideaWithAds() {
    return (
        <>
            <Head>
                <title>Ideas with Ads Page | Happie Celebrations</title>
                <meta name="description" content="View ideas" />
            </Head>

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
