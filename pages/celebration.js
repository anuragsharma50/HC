import Image from 'next/image'
import { useRouter } from "next/router"
import { useState } from 'react'
import IdeaForm from '../components/forms/ideaForm'
import { motion } from "framer-motion"
import menuItems from '../components/animations/raising'
import LimitedIdeas from '../components/modals/limitedIdeas'
import Styles from '../styles/pageStyles/form-page.module.scss'

import CelebrationImage from '../assets/images/Celebration.png'

function Celebration({user}) {

    const router = useRouter()
    const [disableState, setDisableState] = useState(false)
    const [modelState, setModelState] = useState(false)
    const [output, setOutput] = useState({
        count: 0,
        values: {}
    })

    return (
        <>
            <LimitedIdeas modelState={modelState} setModelState={setModelState} output={output} />
            <motion.div 
                className={`${Styles.container} container`}
                variants={menuItems}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="image">
                    <Image src={CelebrationImage} alt="girl celebrating" />
                </div>

                <div className="form">
                    <div className="info"><a onClick={() => router.push('/explain/celebrations')}>Click here</a> to understand how to choose budget</div>
                    <div className="heading">
                        <h2>Celebrate</h2>
                    </div>

                    <h3 className="form-title">Enter details</h3>
                    
                    <IdeaForm from={"celebration"} user={user} setDisableState={setDisableState} setModelState={setModelState} setOutput={setOutput} />

                    <div className="submit">
                        <button form="idea-form" type="submit" className="submit-btn" disabled={disableState}>Submit</button>
                    </div>

                </div>
            </motion.div>
        </>
    )
}

export default Celebration
