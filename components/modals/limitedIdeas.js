import { useRouter } from "next/router";
import Modal from 'react-modal';
import axios from 'axios'

import Styles from './modal.module.scss'

function LimitedIdeas({modelState,setModelState,output}) {

    const router = useRouter()

    const goToIdeaPage = () => {
        if(output.set){
            output.setSet(output.set + 1)
            setModelState(false)
        }else{
            axios.get("http://localhost:5500/users/payment",{withCredentials:true}).then((res) => {
                console.log(res.data)
                router.push({pathname: '/idea',
                query: { ...output.values, from: output.from }})
            }).catch((e) => {
                router.push('/pricing')
                console.log(e.response)
                console.log(e)
                // if (e.response && e.response.data) {
                //     console.log(e.response)
                //     // setErrorMessage(e.response.data.message)
                // }
            })
        }
    }

    return (
        <Modal isOpen={modelState} overlayClassName={`${Styles.overlay} ReactModal__Overlay`} className={Styles.modal} ariaHideApp={false} >
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
        </Modal>
    )
}

export default LimitedIdeas
