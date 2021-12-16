import { useRouter } from "next/router"
import axios from 'axios'
import { motion,AnimatePresence } from "framer-motion"
import { modal2,backdrop } from '../animations/modals'

import Styles from './modal.module.scss'

function LimitedIdeas({modelState,setModelState,output,user}) {

    const router = useRouter()

    const goToIdeaPage = () => {
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/payment`,{withCredentials:true}).then((res) => {
            // console.log(res.data)
            if(output.set){
                output.setSet(output.set + 1)
                setModelState(false)
            }else {
                router.push({pathname: '/idea',
                query: { ...output.values, from: output.from }})
            }
        }).catch((e) => {
            if(user.currency){
                window.open("/payment",'_blank')
            }else{
                window.open("/pricing",'_blank')
            }
            // router.push('/pricing')
            // if (e.response && e.response.data) {
            //     // console.log(e.response)
            //     // setErrorMessage(e.response.data.message)
            // }
        })
        // if(output.set){
        //     axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/payment`,{withCredentials:true}).then((res) => {
        //         // console.log(res.data)
        //         output.setSet(output.set + 1)
        //         setModelState(false)
        //     }).catch((e) => {
        //         router.push('/pricing')
        //         // if (e.response && e.response.data) {
        //         //     // console.log(e.response)
        //         //     // setErrorMessage(e.response.data.message)
        //         // }
        //     })
        // }else{
        //     axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/payment`,{withCredentials:true}).then((res) => {
        //         // console.log(res.data)
        //         router.push({pathname: '/idea',
        //         query: { ...output.values, from: output.from }})
        //     }).catch((e) => {
        //         router.push('/pricing')
        //         // if (e.response && e.response.data) {
        //         //     // console.log(e.response)
        //         //     // setErrorMessage(e.response.data.message)
        //         // }
        //     })
        // }
    }

    return (
        <AnimatePresence exitBeforeEnter>
            {modelState && 
                (<motion.div className="backdrop"
                    variants={backdrop}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                >
                    <motion.div
                        className={`${Styles.modal} modal`}
                        variants={modal2}    
                    >
                        {  output.count > 0 &&
                            <>
                                <h2 className={Styles.modalTitle}>Limited ideas avaliable</h2>
                                <div className={Styles.modalContent}> 
                                    <p>Only {output.count} ideas are avaliable in this catagory.
                                    if you proceed your money will not be refunded.</p> 
                                    <br/ >
                                    <p> Do you wish to continue ?</p>
                                </div>
                                <div className={Styles.modalButtons}>
                                    <button className={`${Styles.secondry} ${Styles.btn}`} onClick={() => setModelState(false)}>No</button>
                                    <button className={Styles.btn} onClick={goToIdeaPage}>Yes</button>
                                </div>
                            </>
                        }

                        {  output.count == 0 &&
                            <>
                                <h2 className={Styles.modalTitle}>Ideas not avaliable</h2>
                                <div className={Styles.modalContent}> 
                                    <p>No ideas avaliable in this catagory.
                                        please try to change some details if possible</p>
                                </div>
                                <div className={Styles.modalButtons}>
                                    <button className={Styles.btn} onClick={() => setModelState(false)}>Okay</button>
                                </div>
                            </>
                        }
                    </motion.div>
                </motion.div>
                )}
            </AnimatePresence>
    )
}

export default LimitedIdeas
