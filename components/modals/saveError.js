import React from 'react'
import { motion,AnimatePresence } from "framer-motion"
import { modal,backdrop } from '../animations/modals'

import Styles from './modal.module.scss'

function SaveError({modelState,setModelState,errorMessage,errorTitle}) {
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
                        variants={modal}    
                    >
                    <h2 className={Styles.modalTitle}>{errorTitle}</h2>
                    <div className={Styles.modalContent}> 
                        <p>{errorMessage}</p> 
                    </div>
                    <div className={Styles.modalButtons}>
                        <button className={Styles.btn} onClick={() => setModelState(false)}>Okay</button>
                    </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SaveError
