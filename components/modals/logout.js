import { useRouter } from "next/router";
import axios from 'axios'
import { motion,AnimatePresence } from "framer-motion"
import { modal,backdrop } from '../animations/modals'

import Styles from './modal.module.scss'


function LogoutModal({modelState,setModelState,updateUser}) {
    const router = useRouter()

    const signOut = () => {
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signout`,{withCredentials:true}).then((res) => {
            // console.log(res.data)
            updateUser()
            setModelState(false)
            router.push('/')
        }).catch((e) => {
            if (e.response && e.response.data) {
                // console.log(e.response)
            }
            updateUser()
            setModelState(false)
            router.push('/')
        })
    }

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
                        <h2 className={Styles.modalTitle}>Logout</h2>
                        <div className={Styles.modalContent}>
                            <p>Are you sure you want to logout?</p>
                        </div>
                        <div className={Styles.modalButtons}>
                            <button className={`${Styles.secondry} ${Styles.btn}`} onClick={() => setModelState(false)}>No</button>
                            <button className={Styles.btn} onClick={signOut} >Yes</button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default LogoutModal
