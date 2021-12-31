import { useRouter } from "next/router"
import { motion,AnimatePresence } from "framer-motion"
import { modal,backdrop } from '../animations/modals'

import Styles from './modal.module.scss'

function SignIn({modelState,setModelState}) {

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
                        variants={modal}    
                    >
                        <h2 className={Styles.modalTitle}>Sign In</h2>
                        <div className={Styles.modalContent}> 
                            <p>Signin to save ideas</p>
                        </div>
                        <div className={Styles.modalButtons}>
                            <button className={`${Styles.secondry} ${Styles.btn}`} onClick={() => setModelState(false)}>Cancel</button>
                            <button className={Styles.btn} onClick={() => router.push('/signin')}>Signin</button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SignIn
