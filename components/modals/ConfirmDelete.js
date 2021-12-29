import { motion,AnimatePresence } from "framer-motion"
import { modal,backdrop } from '../animations/modals'

import Styles from './modal.module.scss'

function ConfirmDelete({modelState,setModelState,deleteIdea}) {

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
                        <h2 className={Styles.modalTitle}>Delete Idea</h2>
                        <div className={Styles.modalContent}> 
                            <p>Do you really want to delete this idea?</p> 
                            <br/ >
                            <p>This action can't be undone</p>
                        </div>
                        <div className={Styles.modalButtons}>
                            <button className={`${Styles.secondry} ${Styles.btn}`} onClick={() => setModelState(false)}>Cancel</button>
                            <button className={Styles.btn} onClick={deleteIdea}>Delete</button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ConfirmDelete
