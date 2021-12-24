import { useRouter } from "next/router"
import Head from 'next/head'
import { useState } from 'react'
import { motion } from "framer-motion"
import menuItems from '../components/animations/raising'
import AdsIdeaForm from '../components/forms/adsIdeaForm'

import styles from '../styles/pageStyles/form-page.module.scss'

function formWithAds({user}) {

    const router = useRouter()
    const [disableState, setDisableState] = useState(false)

    return (
        <>
            <Head>
                <title>Find Idea with Ads | Happie Celebrations</title>
                <meta name="description" content="find idea for your friend and family" />
            </Head>

            <motion.div 
                className={`${styles.container} container`}
                variants={menuItems}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="image">
                    <div className="img">
                        {/* <Image src={SurpriseImage} alt="gift" /> */}
                    </div>
                </div>

                <div className="form">
                    <div className="info"><a onClick={() => router.push('/details/budget')}>Click here</a> to understand how to choose budget</div>
                    <div className="heading">
                        <h2>Ideas Form</h2>
                    </div>

                    <h3 className="form-title">Enter details</h3>
                    
                    <AdsIdeaForm user={user} setDisableState={setDisableState} />

                    <div className="submit">
                        <button form="ads-idea-form" type="submit" className="submit-btn" disabled={disableState}>Submit</button>
                    </div>

                </div>
            </motion.div>
        </>
    )
}

export default formWithAds
