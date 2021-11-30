import Modal from 'react-modal';
import axios from 'axios'
import SelectSearch from 'react-select-search';

import Styles from './modal.module.scss'

function CurrencyModal({modelState,setModelState,user,updateUser,currency,setCurrency}) {

    const updateCurrency = () => {
        if(user){
            console.log("running")
            axios.post('http://localhost:5500/users/currency',{currency},{withCredentials:true}).then((res) => {
                console.log("here")
                console.log(res.data)
                updateUser()
                setModelState(false)
            }).catch((e) => {
                if (e.response && e.response.data) {
                    console.log(e.response)
                }
            })
        }
        else{
            setModelState(false)
        }
    }

    const handleChange = (...args) => {
        console.log(args[0])
        setCurrency(args[0])
    }

    return (
        <Modal isOpen={modelState} className={Styles.modal} ariaHideApp={false}>
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
        </Modal>
    )
}

export default CurrencyModal
