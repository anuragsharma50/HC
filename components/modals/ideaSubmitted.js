import { useRouter } from "next/router";
import { motion,AnimatePresence } from "framer-motion"
import { modal2,backdrop } from '../animations/modals'

import Styles from './modal.module.scss'

function IdeaSubmitted({modelState,setModelState}) {

    const router = useRouter()

    return (
        <AnimatePresence exitBeforeEnter>
            {modelState && (
                <motion.div className="backdrop"
                    variants={backdrop}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                >
                    <motion.div
                        className={`${Styles.modal} modal`}
                        variants={modal2}    
                    >
                        <h2 className={Styles.modalTitle}>Submitted Successfully</h2>
                        <div className={Styles.modalContent}> 
                            <p>Your idea is submitted successfully for manual checking, you will be notified by email when your 
                                idea will be accepted or rejected. </p> 
                            <br/ >
                            <p> Do you want to write more ideas?</p>
                        </div>
                        <div className={Styles.modalButtons}>
                            <button className={`${Styles.secondry} ${Styles.btn}`} onClick={() => router.push('/')}>No</button>
                            <button className={Styles.btn} onClick={() => setModelState(false)}>Yes</button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default IdeaSubmitted
