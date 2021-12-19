import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from "next/router"
import { useState } from 'react'
import { motion } from "framer-motion"
import menuItems from '../components/animations/raising'
import LimitedIdeas from '../components/modals/limitedIdeas'

import styles from '../styles/pageStyles/form-page.module.scss'

import WishImage from '../assets/images/Wish.png'
import IdeaForm from '../components/forms/ideaForm'

function Wish({user}) {

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
                <title>Find Wishes | Happie Celebrations</title>
                <meta name="description" content="Find birthday, new year wishes" />
            </Head>

            <LimitedIdeas modelState={modelState} setModelState={setModelState} output={output} />
            <motion.div 
                className={`${styles.container} container`}
                variants={menuItems}
                initial="hidden"
                animate="visible"
                exit="exit" 
            >
                <div 
                    className="image"   
                >
                    <Image src={WishImage} alt="girl showing laptop" />
                </div>

                <div className="form">
                    <div className="info"><a onClick={() => router.push('/details/budget')}>Click here</a> to understand how to choose budget</div>
                    <div className="heading">
                        <h2>Wish</h2>
                    </div>

                    <h3 className="form-title">Enter details of celebrant</h3>
                    
                    <IdeaForm from={"wish"} user={user} setDisableState={setDisableState} setModelState={setModelState} setOutput={setOutput} />

                    <div className="submit">
                        <button form="idea-form" type="submit" className="submit-btn" disabled={disableState}>Submit</button>
                    </div>

                </div>
            </motion.div>
        </>
    )
}

export default Wish
