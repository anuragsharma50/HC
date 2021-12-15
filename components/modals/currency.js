import axios from 'axios'
import SelectSearch from 'react-select-search'
import { motion,AnimatePresence } from "framer-motion"
import { modal,backdrop } from '../animations/modals'

import Styles from './modal.module.scss'

function CurrencyModal({modelState,setModelState,user,updateUser,currency,setCurrency}) {

    const updateCurrency = () => {
        if(user){
            axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/currency`,{currency},{withCredentials:true}).then((res) => {
                // console.log(res.data)
                updateUser()
                setModelState(false)
            }).catch((e) => {
                if (e.response && e.response.data) {
                    // console.log(e.response)
                }
            })
        }
        else{
            setModelState(false)
        }
    }

    const handleChange = (...args) => {
        // console.log(args[0])
        setCurrency(args[0])
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
                        variants={modal}    
                    >
                        <h2 className={Styles.modalTitle}>Choose Currency to view price</h2>
                        <div className={Styles.modalContent}>
                            <SelectSearch  
                                className='select-search'
                                printOptions="on-focus"
                                options={[
                                    { value: 'INR', name: 'INR (Indian Rupee)' },
                                    { value: 'USD', name: 'USD (United States Dollar)' },
                                ]}
                                value={currency}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={Styles.modalButtons}>
                            <button className={Styles.btn} onClick={updateCurrency}>Save</button>
                        </div>
                    </motion.div>
                </motion.div>
                )}
        </AnimatePresence>
    )
}

export default CurrencyModal
