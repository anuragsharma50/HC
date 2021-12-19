import Image from 'next/image'
import { useRouter } from "next/router"
import Head from 'next/head'
import { useState } from 'react'
import IdeaForm from '../components/forms/ideaForm'
import { motion } from "framer-motion"
import menuItems from '../components/animations/raising'
import LimitedIdeas from '../components/modals/limitedIdeas'
import styles from '../styles/pageStyles/form-page.module.scss'

import SurpriseImage from '../assets/images/Surprise.png'

function Gift({user}) {

    const router = useRouter()
    const [disableState, setDisableState] = useState(false)
    const [modelState, setModelState] = useState(false)
    const [output, setOutput] = useState({
        count: 0,
        values: {}
    })

    return (
        <>
            <Head>
                <title>Find Gift Ideas | Happie Celebrations</title>
                <meta name="description" content="find gift ideas based on age and gender" />
            </Head>

            <LimitedIdeas modelState={modelState} setModelState={setModelState} output={output} />
            <motion.div 
                className={`${styles.container} container`}
                variants={menuItems}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="image">
                    <div className="img">
                        <Image src={SurpriseImage} alt="gift" />
                    </div>
                </div>

                <div className="form">
                    <div className="info"><a onClick={() => router.push('/details/budget')}>Click here</a> to understand how to choose budget</div>
                    <div className="heading">
                        <h2>Gift</h2>
                    </div>

                    <h3 className="form-title">Enter details</h3>
                    
                    <IdeaForm from={"gift"} user={user} setDisableState={setDisableState} setModelState={setModelState} setOutput={setOutput} />

                    <div className="submit">
                        <button form="idea-form" type="submit" className="submit-btn" disabled={disableState}>Submit</button>
                    </div>

                </div>
            </motion.div>
        </>
    )
}

export default Gift
