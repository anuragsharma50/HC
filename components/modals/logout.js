import Modal from 'react-modal';
import { useRouter } from "next/router";
import axios from 'axios'

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
        })
    }

    return (
        <Modal isOpen={modelState} overlayClassName={`${Styles.overlay} ReactModal__Overlay`} className={Styles.modal} ariaHideApp={false}>
            <h2 className={Styles.modalTitle}>Logout</h2>
            <div className={Styles.modalContent}>
                <p>Are you sure you want to logout?</p>
            </div>
            <div className={Styles.modalButtons}>
                <button className={`${Styles.secondry} ${Styles.btn}`} onClick={() => setModelState(false)}>No</button>
                <button className={Styles.btn} onClick={signOut} >Yes</button>
            </div>
        </Modal>
    )
}

export default LogoutModal
